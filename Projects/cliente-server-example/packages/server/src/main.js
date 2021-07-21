import express, { response } from 'express';
import cors from 'cors';


const server = express();

// recebe midors que é um pattern
server.get('/status', (__, response) => {
    response.send({
        status:'Okay',
    });
});

// criando constante cors pra uso global
const enableCors = cors({ origin: 'http://localhost:3000' });
// passando enableCors em options para resolver problema de cors
server
    .options('/authenticate', enableCors)
    .post('/authenticate', enableCors, express.json(), (request, response) => {
            console.log('E-Mail', resquest.body.email,'Senha', request.body.password);
            response.send({
                Okay: true,
            });
        });


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () =>{
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});