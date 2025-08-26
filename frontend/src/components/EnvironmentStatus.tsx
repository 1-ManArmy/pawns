import React, { useEffect, useState } from 'react';
// import { Warning, CheckCircle, XCircle, Info } from '@phosphor-icons/react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { validateEnvironment, isServiceConfigured, config } from '@/lib/config';
import { checkServiceHealth } from '@/lib/api-services';

interface EnvironmentStatusProps {
  showDetails?: boolean;
  onClose?: () => void;
}

export function EnvironmentStatus({ showDetails = false, onClose }: EnvironmentStatusProps) {
  const [validation, setValidation] = useState({ isValid: true, errors: [] });
  const [serviceHealth, setServiceHealth] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkEnvironment = async () => {
      setIsLoading(true);
      
      // Validate environment configuration
      const envValidation = validateEnvironment();
      setValidation(envValidation);
      
      // Check service health
      try {
        const health = await checkServiceHealth();
        setServiceHealth(health);
      } catch (error) {
        console.error('Failed to check service health:', error);
      }
      
      setIsLoading(false);
    };

    checkEnvironment();
  }, []);

  if (isLoading) {
    return (
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>Checking environment configuration...</AlertDescription>
      </Alert>
    );
  }

  if (validation.isValid && !showDetails) {
    return null;
  }

  const configuredServices = Object.entries(serviceHealth).filter(([, configured]) => configured);
  const missingServices = Object.entries(serviceHealth).filter(([, configured]) => !configured);

  return (
    <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            {validation.isValid ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <Warning className="h-5 w-5 text-amber-600" />
            )}
            Environment Configuration
          </CardTitle>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <XCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
        <CardDescription className="text-amber-700 dark:text-amber-300">
          {validation.isValid
            ? 'Your environment is properly configured for production.'
            : 'Some configuration issues need attention before going live.'}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Validation Errors */}
        {validation.errors.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-red-800 dark:text-red-200">Configuration Issues:</h4>
            {validation.errors.map((error, index) => (
              <Alert key={index} variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* Configured Services */}
        {configuredServices.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-green-800 dark:text-green-200">
              Configured Services ({configuredServices.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {configuredServices.map(([service]) => (
                <Badge key={service} variant="default" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {service.toUpperCase()}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Missing Services */}
        {missingServices.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-amber-800 dark:text-amber-200">
              Available Services ({missingServices.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {missingServices.map(([service]) => (
                <Badge key={service} variant="outline" className="border-amber-300 text-amber-700">
                  <Info className="h-3 w-3 mr-1" />
                  {service.toUpperCase()}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              These services are available but not configured. Add API keys to enable them.
            </p>
          </div>
        )}

        {/* Agent Compatibility */}
        <div className="space-y-2">
          <h4 className="font-medium text-blue-800 dark:text-blue-200">Agent Compatibility</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <AgentStatus name="NeoChat" services={['openai', 'google', 'anthropic']} health={serviceHealth} />
            <AgentStatus name="EmotiSense" services={['azure']} health={serviceHealth} />
            <AgentStatus name="CineGen" services={['openai']} health={serviceHealth} />
            <AgentStatus name="VocaMind" services={['elevenlabs', 'azure']} health={serviceHealth} />
            <AgentStatus name="NetScope" services={[]} health={serviceHealth} alwaysReady />
            <AgentStatus name="Memora" services={['openai', 'mongodb']} health={serviceHealth} />
            <AgentStatus name="DataVision" services={['mongodb']} health={serviceHealth} />
            <AgentStatus name="TaskMaster" services={['mongodb']} health={serviceHealth} />
          </div>
        </div>

        {/* Quick Setup Guide */}
        {!validation.isValid && (
          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Quick Setup Guide</h4>
            <ol className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li>1. Copy <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">.env.example</code> to <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">.env</code></li>
              <li>2. Add your API keys for required services</li>
              <li>3. Restart the development server</li>
              <li>4. Check this status panel again</li>
            </ol>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
              See <code>ENVIRONMENT_SETUP.md</code> for detailed instructions.
            </p>
          </div>
        )}

        {/* Current Environment Info */}
        <div className="text-xs text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            <span>Environment: <strong>{config.app.environment}</strong></span>
            <span>Version: <strong>{config.app.version}</strong></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface AgentStatusProps {
  name: string;
  services: string[];
  health: Record<string, boolean>;
  alwaysReady?: boolean;
}

function AgentStatus({ name, services, health, alwaysReady }: AgentStatusProps) {
  const isReady = alwaysReady || services.some(service => health[service]);
  const readyServices = services.filter(service => health[service]);

  return (
    <div className={`p-2 rounded border ${
      isReady 
        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20' 
        : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50'
    }`}>
      <div className="flex items-center gap-1 mb-1">
        {isReady ? (
          <CheckCircle className="h-3 w-3 text-green-600" />
        ) : (
          <XCircle className="h-3 w-3 text-gray-400" />
        )}
        <span className={`font-medium ${isReady ? 'text-green-800 dark:text-green-200' : 'text-gray-600 dark:text-gray-400'}`}>
          {name}
        </span>
      </div>
      {!alwaysReady && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {readyServices.length > 0 
            ? `${readyServices.join(', ')} ready`
            : 'No services configured'
          }
        </div>
      )}
      {alwaysReady && (
        <div className="text-xs text-green-600 dark:text-green-400">
          Always ready
        </div>
      )}
    </div>
  );
}

export default EnvironmentStatus;
