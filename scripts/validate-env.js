#!/usr/bin/env node

// Environment Validation Script
// Run with: npm run env:validate

const fs = require('fs');
const path = require('path');

const requiredEnvVars = [
  'VITE_APP_NAME',
  'VITE_APP_VERSION',
  'VITE_APP_ENVIRONMENT',
  'VITE_JWT_SECRET'
];

const productionRequiredVars = [
  'VITE_OPENAI_API_KEY',
  'VITE_MONGODB_URI',
  'VITE_SENDGRID_API_KEY',
  'VITE_STRIPE_PUBLISHABLE_KEY'
];

const optionalVars = [
  'VITE_GOOGLE_API_KEY',
  'VITE_ANTHROPIC_API_KEY',
  'VITE_ELEVENLABS_API_KEY',
  'VITE_AZURE_SPEECH_KEY',
  'VITE_AWS_ACCESS_KEY_ID',
  'VITE_TWILIO_ACCOUNT_SID'
];

function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env');
  
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env file not found');
    console.log('📋 Run: cp .env.example .env');
    return null;
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      envVars[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  });

  return envVars;
}

function validateEnvironment() {
  console.log('🔍 Validating OneLast AI Environment Configuration\n');

  const envVars = loadEnvFile();
  if (!envVars) return false;

  let isValid = true;
  const environment = envVars.VITE_APP_ENVIRONMENT || 'development';

  console.log(`📦 Environment: ${environment}\n`);

  // Check required variables
  console.log('🔧 Required Configuration:');
  for (const varName of requiredEnvVars) {
    if (!envVars[varName] || envVars[varName].includes('your-') || envVars[varName] === '') {
      console.log(`❌ ${varName} - Missing or placeholder value`);
      isValid = false;
    } else {
      console.log(`✅ ${varName} - Configured`);
    }
  }

  // Check production requirements
  if (environment === 'production') {
    console.log('\n🏭 Production Requirements:');
    for (const varName of productionRequiredVars) {
      if (!envVars[varName] || envVars[varName].includes('your-') || envVars[varName] === '') {
        console.log(`❌ ${varName} - Required for production`);
        isValid = false;
      } else {
        console.log(`✅ ${varName} - Configured`);
      }
    }
  }

  // Check optional services
  console.log('\n🔌 Optional Services:');
  const configuredOptional = [];
  const missingOptional = [];
  
  for (const varName of optionalVars) {
    if (envVars[varName] && !envVars[varName].includes('your-') && envVars[varName] !== '') {
      configuredOptional.push(varName);
      console.log(`✅ ${varName} - Available`);
    } else {
      missingOptional.push(varName);
      console.log(`⚪ ${varName} - Not configured`);
    }
  }

  // Service compatibility check
  console.log('\n🤖 Agent Service Compatibility:');
  
  const agents = {
    'NeoChat': ['VITE_OPENAI_API_KEY', 'VITE_GOOGLE_API_KEY', 'VITE_ANTHROPIC_API_KEY'],
    'EmotiSense': ['VITE_AZURE_COGNITIVE_KEY'],
    'CineGen': ['VITE_OPENAI_API_KEY', 'VITE_STABILITY_API_KEY'],
    'VocaMind': ['VITE_ELEVENLABS_API_KEY', 'VITE_AZURE_SPEECH_KEY'],
    'NetScope': [], // Always available
    'Memora': ['VITE_OPENAI_API_KEY', 'VITE_MONGODB_URI'],
    'ContentCrafter': ['VITE_OPENAI_API_KEY'],
    'TaskMaster': ['VITE_MONGODB_URI']
  };

  for (const [agent, requirements] of Object.entries(agents)) {
    if (requirements.length === 0) {
      console.log(`✅ ${agent} - Always ready`);
    } else {
      const hasRequirement = requirements.some(req => 
        envVars[req] && !envVars[req].includes('your-') && envVars[req] !== ''
      );
      
      if (hasRequirement) {
        const availableServices = requirements.filter(req => 
          envVars[req] && !envVars[req].includes('your-') && envVars[req] !== ''
        );
        console.log(`✅ ${agent} - Ready (${availableServices.length}/${requirements.length} services)`);
      } else {
        console.log(`❌ ${agent} - No services configured`);
      }
    }
  }

  // Summary
  console.log('\n📊 Summary:');
  console.log(`✅ Configured Services: ${configuredOptional.length}`);
  console.log(`⚪ Available Services: ${missingOptional.length}`);
  
  if (isValid) {
    console.log('\n🎉 Environment configuration is valid!');
    if (environment === 'development' && configuredOptional.length < 3) {
      console.log('💡 Consider adding more service APIs for full functionality');
    }
  } else {
    console.log('\n⚠️  Environment configuration has issues');
    console.log('📖 See ENVIRONMENT_SETUP.md for setup instructions');
  }

  return isValid;
}

// Run validation
const isValid = validateEnvironment();
process.exit(isValid ? 0 : 1);