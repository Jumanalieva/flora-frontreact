// src/config/amplifyConfig.ts
const awsConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_kLFnnumnx', // Replace with your User Pool ID
    userPoolWebClientId: '34c35f008296vu02bfmvqd1p94', // Replace with your App Client ID
    oauth: {
      domain: 'https://floral-culture.auth.us-east-1.amazoncognito.com', // Cognito domain
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'https://floral-culture.com/', // Updated to production domain
      redirectSignOut: 'https://floral-culture.com/', // Updated to production domain
      responseType: 'code',
    },
  },
};

export default awsConfig;






