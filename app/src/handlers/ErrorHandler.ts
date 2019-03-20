import { HandlerInput } from "ask-sdk-core";
import { CustomSkillErrorHandler } from "ask-sdk-core/dist/dispatcher/error/handler/CustomSkillErrorHandler";

export const ErrorHandler: CustomSkillErrorHandler = {
    canHandle(input: HandlerInput, error: Error) {
        return true;
    },
    handle(input: HandlerInput, error: Error) {
        console.log(error);
        return input.responseBuilder
            .speak("エラーが発生しました。")
            .withShouldEndSession(false)
            .getResponse();
    }
};