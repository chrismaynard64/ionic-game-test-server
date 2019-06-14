import { Room } from "colyseus";
import { Schema, type, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
    @type("number")
    x = Math.floor(Math.random() * 400);

    @type("number")
    y = Math.floor(Math.random() * 400);


    @type("number")
    prevx = this.x;

    @type("number")
    prevy = this.y;


    @type("number")
    hitPoints = 20;

    @type("string")
    colour = '#FF00FF';

        constructor(colour: string = '#FF00FF') {
            super();

            this.colour = colour;
        }

}

export class State extends Schema {
    @type({ map: Player })
    players = new MapSchema<Player>();

    colors = ['#FF0000', '#008000', '#FFFF00', '#0000FF', '#00FFFF', '#800080'];

    colorCount = 0;

    something = "This attribute won't be sent to the client-side";

    createPlayer (id: string) {
        this.players[ id ] = new Player( this.colors[this.colorCount]);
        this.colorCount++;
        if (this.colorCount > this.colors.length) {
            this.colorCount = 0;
        }
    }

    removePlayer (id: string) {
        delete this.players[ id ];
    }

    movePlayer (id: string, movement: any) {
        console.log('x:' + movement.x + ' y:' + movement.y);
        if (movement.x) {
            this.players[ id ].prevx = this.players[ id ].x;
            this.players[ id ].prevy = this.players[ id ].y;
           this.players[ id ].x += movement.x * 10;

        } else if (movement.y) {
            this.players[ id ].prevx = this.players[ id ].x;
            this.players[ id ].prevy = this.players[ id ].y;
           this.players[ id ].y += movement.y * 10;
        }
    }
}

export class GameState extends Schema {
    @type({ map: Player })
    players = new MapSchema<Player>();

    something = "This attribute won't be sent to the client-side";

    createPlayer (id: string) {
        this.players[ id ] = new Player();
    }

    removePlayer (id: string) {
        delete this.players[ id ];
    }

    movePlayer (id: string, movement: any) {
        if (movement.x) {
            this.players[ id ].prevx = this.players[ id ].x;
            this.players[ id ].prevy = this.players[ id ].y;
            this.players[ id ].x += movement.x * 10;

        } else if (movement.y) {
            this.players[ id ].prevx = this.players[ id ].x;
            this.players[ id ].prevy = this.players[ id ].y;
            this.players[ id ].y += movement.y * 10;
        }
    }
}



export class StateHandlerRoom extends Room<State> {
    onInit (options) {
        console.log("StateHandlerRoom created!", options);

        this.setState(new State());
    }

    onJoin (client) {
        this.state.createPlayer(client.sessionId);
    }

    onLeave (client) {
        this.state.removePlayer(client.sessionId);
    }

    onMessage (client, data) {
        console.log("StateHandlerRoom received message from", client.sessionId, ":", data);
        this.state.movePlayer(client.sessionId, data);
    }

    onDispose () {
        console.log("Dispose StateHandlerRoom");
    }

}

export class GameRoom extends Room<GameState> {
    onInit (options) {
        console.log("GameRoom created!", options);

        this.setState(new State());
    }

    onJoin (client) {
        this.state.createPlayer(client.sessionId);
    }

    onLeave (client) {
        this.state.removePlayer(client.sessionId);
    }

    onMessage (client, data) {
        console.log("GameRoom received message from", client.sessionId, ":", data);
        this.state.movePlayer(client.sessionId, data);
    }

    onDispose () {
        console.log("Dispose GameRoom");
    }

}