import Command from "./command";
import Handler from "./handler";
import Middleware from "./middleware";

export default class CommandBus {
    private _handlerList: Handler[] = [];

    constructor() {}

    subscribe(command: Command, handler: Handler): void {
        this._handlerList.push(handler);
    }

    async dispatch(command: Command, middlewares: Middleware[] = []): Promise<any> {
        // run middlewares
        while (middlewares.length > 0) {
            const middleware = middlewares.shift();
            if (!middleware) {
                break;
            }

            middleware.execute(command)
        }

        // run command
        if (this._handlerList.length) {
            const handler = this._handlerList.pop();

            if (handler) {
                return await handler.handle(command);
            } 
        }

        return null;
    }
}