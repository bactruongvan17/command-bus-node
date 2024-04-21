import Command from "./command";

export default abstract class Handler {
    abstract handle(command: Command): any;
}