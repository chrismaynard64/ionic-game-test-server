import { Room, Client } from "colyseus";
export declare class AuthRoom extends Room {
    onInit(options: any): void;
    onAuth(options: any): Promise<any>;
    onJoin(client: Client): void;
    onLeave(client: Client): void;
    onMessage(client: Client, data: any): void;
    onDispose(): void;
}
