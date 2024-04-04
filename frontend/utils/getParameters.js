const AWS = require('aws-sdk');

// Configure AWS SDK with your region
AWS.config.update({region: 'us-east-1'});

// Create an instance of the AWS SSM service
const ssm = new AWS.SSM();

// Function to fetch parameter value from Parameter Store
export default async function getParameter(parameterName) {
    const params = {
        Name: parameterName,
        WithDecryption: true // If the parameter is encrypted
    };

    try {
        const data = await ssm.getParameter(params).promise();
        return data.Parameter.Value;
    } catch (err) {
        console.error("Error fetching parameter:", err);
        throw err;
    }
}