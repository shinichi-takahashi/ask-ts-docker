import { RequestHandler, HandlerInput } from "ask-sdk-core";

export const HelpIntentHandler: RequestHandler = {
    canHandle(input: HandlerInput) {
        const request = input.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(input: HandlerInput) {
        return input.responseBuilder
            .speak("このスキルはこういうスキルです。")
            .withShouldEndSession(false)
            .getResponse();
    }
};