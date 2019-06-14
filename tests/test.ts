import request from 'request';
import { Server }  from '../testserver';

describe('Server', ()=> {
    let server = null;

    beforeAll(()=> {
        server = new Server().server;
    });

    afterAll(()=>{
        if (server)
           server.close();
    });
/*
    describe('dummy', ()=> {
            it('test', ()=> {
                expect(4).toBe(5);
            })
        
    })
*/
    describe('Get /', ()=> {
        let data = { status: null, body: null};

        beforeAll((done) => {
                request.get('http://localhost:3000/', (err, res, body) => {
                    data.status = res.statusCode;
                    data.body = body;
                    done();
                });
            });

                it('status 200', ()=> {
                    expect(data.status).toBe(200);
                })

                it('body', ()=> {
                    expect(data.body).toBe('hello world');
                })

        
    })

})