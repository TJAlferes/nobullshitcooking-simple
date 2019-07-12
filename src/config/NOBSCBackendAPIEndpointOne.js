export const NOBSCBackendAPIEndpointOne = (process.env.NODE_ENV === "production")
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';