import AWS from 'aws-sdk';

// Configure AWS SDK with your region
AWS.config.update({region: 'us-east-1'});

// Create an instance of the AWS SSM service
const ssm = new AWS.SSM();

// Function to fetch parameter value from Parameter Store
export default function getParameter(parameterName) {
    const params = {
        Name: parameterName,
        WithDecryption: true // If the parameter is encrypted
    };

    let param = ssm.getParameters(params, (err, data) => {
        if (err) {
          console.error('Error fetching parameters:', err);
        } else {
          // Extract values from the response
          const parameters = {};
          data.Parameters.forEach(param => {
            parameters[param.Name] = param.Value;
          });
      
          console.log('Parameters from AWS Parameter Store:', parameters);
        }
      });

      return param[0].Value
    
}