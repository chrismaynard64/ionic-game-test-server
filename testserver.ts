import express from 'express';


export class Server {

    server = null;

     app = express();

     constructor() {
        this.app.get('/', (req, res) => {
            res.status(200).send('hello world');
        })
    
        this.app.get('/test', (req, res) => {
            res.status(500).send({ message: 'An error occured'});
        })
    
        let server = this.app.listen(3000, ()=>  {
            console.log('listening on port 3000...')
        });
    
     }

}
