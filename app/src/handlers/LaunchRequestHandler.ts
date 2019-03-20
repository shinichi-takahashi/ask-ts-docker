import { RequestHandler, HandlerInput } from "ask-sdk-core";
import { DynamoDbPersistenceAdapter } from "ask-sdk-dynamodb-persistence-adapter";

export const LaunchRequestHandler: RequestHandler = {
    canHandle(input: HandlerInput) {
        return input.requestEnvelope.request.type === 'LaunchRequest';
    },
    async handle(input: HandlerInput) {
        const request = input.requestEnvelope;

        const dynamo = new DynamoDbPersistenceAdapter({
            tableName: process.env.DYNAMODB_TABLE_NAME!,
            createTable: true
        });

        const attributes = await dynamo.getAttributes(request);

        /** リピーター判定 */
        if (!attributes.repeater) {
            attributes.repeater = true;
            await dynamo.saveAttributes(request, attributes);
        }

        return input.responseBuilder
            .speak("こんにちは。")
            .reprompt("リプロンプトメッセージです")
            .withShouldEndSession(false)
            .getResponse();
    }
};