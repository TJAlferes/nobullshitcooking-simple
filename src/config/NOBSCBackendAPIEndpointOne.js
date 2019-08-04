export const NOBSCBackendAPIEndpointOne = (process.env.NODE_ENV === "production")
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://192.168.99.100:3003';