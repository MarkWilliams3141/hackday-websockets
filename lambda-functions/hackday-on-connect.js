const AWS = require("aws-sdk");

const ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: "eu-west-1"
});

exports.handler = async event => {
  const putParams = {
    TableName: "WilliamsHackdayChatApp",
    Item: {
      connectionId: event.requestContext.connectionId
    }
  };

  try {
    await ddb.put(putParams).promise();
  } catch (err) {
    return {
      statusCode: 500,
      body: "Failed to connect: " + JSON.stringify(err)
    };
  }

  return { statusCode: 200, body: "Connected." };
};
