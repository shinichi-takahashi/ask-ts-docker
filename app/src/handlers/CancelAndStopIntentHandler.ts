import { RequestHandler, HandlerInput } from "ask-sdk-core";

export const CancelAndStopIntentHandler: RequestHandler = {
    canHandle(input: HandlerInput) {
        const request = input.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.CancelIntent' || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(input: HandlerInput) {

        return input.responseBuilder
            .speak("とめました")
            .withShouldEndSession(true)
            .getResponse();
    }
};