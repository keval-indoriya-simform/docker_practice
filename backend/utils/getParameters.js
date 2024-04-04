import AWS from 'aws-sdk';

// Configure AWS SDK with your region
AWS.config.update({region: 'us-east-1'});

// Create an instance of the AWS SSM service
const ssm = new AWS.SSM();

// Function to fetch parameter value from Parameter Store
export default async function getParameter(parameterName) {
  const params = {
      Name: "arn:aws:ssm:us-east-1:654654485151:parameter/" + parameterName,
      WithDecryption: true // If the parameter is encrypted
  };
  try {
    const data = await ssm.getParameter(params).promise();
    return data.Parameter.Value;
  } catch (err) {
    console.error("Error retrieving parameter:", err);
    throw err; // Rethrow the error to handle it elsewhere if needed
  }
}