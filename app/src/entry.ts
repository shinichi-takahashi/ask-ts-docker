import { SkillBuilders } from "ask-sdk";
import { CancelAndStopIntentHandler } from "./handlers/CancelAndStopIntentHandler";
import { ErrorHandler } from "./handlers/ErrorHandler";
import { LaunchRequestHandler } from "./handlers/LaunchRequestHandler";
import { HelpIntentHandler } from "./handlers/HelpIntentHandler";

exports.handler = SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CancelAndStopIntentHandler,
        HelpIntentHandler,
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
