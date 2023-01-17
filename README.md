
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Kakampink API</h3>

  <p align="center">
    Kakampink Mobile Application API.
    <br />
    <a href="https://gitlab.com/fdespineda/api-kkp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

### Built With

* [NestJs](https://nestjs.com/)
* [Serverless Framework](https://serverless.com/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* install npm dependencies
  ```
  $ npm install
  ```
* serverless framework
  ```
  $ npm install -g serverless
  ```
* local dynamodb
  ```
  $ sls dynamodb install
  ```

### Run Locally

```
$ npm run local
```

### Deployment
his example is made to work with the Serverless Framework dashboard, which includes advanced features such as CI/CD, monitoring, metrics, etc.

In order to deploy with dashboard, you need to first login with:

```
$ serverless login
```

and then perform deployment with:

```
$ npm run deploy:{stage}
```

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-express-dynamodb-api.zip file to S3 (718.53 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
....................................
Serverless: Stack update finished...
Service Information
service: aws-node-express-dynamodb-api
stage: dev
region: us-east-1
stack: aws-node-express-dynamodb-api-dev
resources: 13
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
functions:
  api: aws-node-express-dynamodb-api-dev-api
layers:
  None
```

### Roadmap

- [ ] Registration
- [ ] Login with Username and Password
- [ ] Home Page
  - [ ] News
  - [ ] Events
- [ ] Profile
  - [ ] Members
- [ ] Invite a Member
  - [ ] SMS
  - [ ] Social
  - [ ] Email
