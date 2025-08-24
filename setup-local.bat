@echo off
echo Setting up OneLast AI local development environment...
echo.

REM Set npm to use a different cache location
set NPM_CONFIG_CACHE=%CD%\npm-cache
mkdir npm-cache 2>nul

REM Set npm registry to use different approach
npm config set registry https://registry.npmjs.org/

REM Clear any existing cache issues
rd /s /q node_modules 2>nul
del package-lock.json 2>nul

REM Install dependencies with alternative cache
npm install --cache %CD%\npm-cache --no-optional

REM Start development server
echo.
echo Starting development server...
npm run dev

pause
