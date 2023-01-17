

# I CHOOSE NESTJS BECAUSE I'M COMFORTABLE WITH ANGULAR SO THAT CODEBASE IS SIMILAR WHEN I DO FULLSTACK
https://nestjs.com/

# CREATED AN ACCOUNT ON SERVERLESS AND OPENWEATHERAPI WAS ABLE TO SETUP KEYS AND CREATED PROJECT

# I CREATED THE SERVICE TO PROXY OPENWEATHERAPI WHICH THROWS RELEVANT ERROR CODES
file: openweather.service.ts
controller: openweather.service.ts
postcode regex was sourced from https://rgxdb.com/r/2Z7DWG3I

# TO SETUP AND DEPLOY
serverless --org=[orgname] --param="openweather_key=[key]" --param="api_private_key=[key]"

# FOR SOME REASON PARAMS ARE NOT SET TO DASHBOARD AFTER ADDING APP AND DEPLOYING SO I ADDED IT MANUALLY
went to apps > api-weather > stage:develop > parameters
  openweather_key
  api_private_key

# RUN LOCALLY
npm run local

# DEPLOY
npm run deploy:[stage] e.g: npm run deploy:develop

# I ADDED THESE LINES IN YML TO MAKE LOCAL ROOT ROUTE WORK
<!-- https://github.com/dougmoscrop/serverless-http/issues/86#issuecomment-680184253 -->
custom:
  serverless-offline:
    noPrependStageInUrl: true

# IMPLEMENTED HEADER BASED API KEY AUTHENTICATION
key: nPM;WJk6ZP{WZIx
header property: X-API-KEY

# SUBMISSION URLS
github: https://github.com/coreradix/aws-serverless-test 
api:
  GET: https://bg4bm1kp59.execute-api.ap-southeast-1.amazonaws.com/develop/openweather/2000
  Header: X-API-KEY nPM;WJk6ZP{WZIx

# IF I HAVE MORE TIME
1.) test cases
2.) integrate other aws services
