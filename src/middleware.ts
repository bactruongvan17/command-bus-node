import Command from "./command";

export default interface Middleware {
    execute(command: Command): void;
}