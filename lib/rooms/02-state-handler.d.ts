import { Room } from "colyseus";
import { Schema, MapSchema } from "@colyseus/schema";
export declare class Player extends Schema {
    x: number;
    y: number;
    prevx: number;
    prevy: number;
    hitPoints: number;
    colour: string;
    constructor(colour?: string);
}
export declare class State extends Schema {
    players: MapSchema<Player>;
    colors: string[];
    colorCount: number;
    something: string;
    createPlayer(id: string): void;
    removePlayer(id: string): void;
    movePlayer(id: string, movement: any): void;
}
export declare class GameState extends Schema {
    players: MapSchema<Player>;
    something: string;
    createPlayer(id: string): void;
    removePlayer(id: string): void;
    movePlayer(id: string, movement: any): void;
}
export declare class StateHandlerRoom extends Room<State> {
    onInit(options: any): void;
    onJoin(client: any): void;
    onLeave(client: any): void;
    onMessage(client: any, data: any): void;
    onDispose(): void;
}
export declare class GameRoom extends Room<GameState> {
    onInit(options: any): void;
    onJoin(client: any): void;
    onLeave(client: any): void;
    onMessage(client: any, data: any): void;
    onDispose(): void;
}
