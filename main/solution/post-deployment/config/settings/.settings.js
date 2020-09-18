module.exports.merged = require('@aws-ee/base-serverless-settings-helper').mergeSettings(
  __dirname,
  [
    '../../../../config/settings/.defaults.yml',
    './.defaults.yml',
    '../../../../config/settings/${stage}.yml',
    './${stage}.yml',
  ],
  {
    crossRegionCloudFormation: {
      edgeLambdaStackName: [
        {
          settingName: 'securityEdgeLambdaArn',
          outputKey: 'SecurityEdgeLambdaArn',
        },
        {
          settingName: 'redirectsEdgeLambdaArn',
          outputKey: 'RedirectsEdgeLambdaArn',
        },
      ],
    },
  },
);
