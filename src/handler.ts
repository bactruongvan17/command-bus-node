import Command from "./command";

export default interface Handler {
    handle(command: Command): any;
}