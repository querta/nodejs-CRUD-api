import http from 'http';
import 'dotenv/config';
// import { ICandidate, IUser } from './interfaces';
import userDB from './UsersDBclass';
import processGet from './processGet';
import processPost from './processPost';
import * as err from './errors';
// import User from './types';

// const routing = {

// }
export const users = userDB;
users.createUser({ name: 'Oleg', age: 12 });
users.createUser({ name: 'Vagan', age: 33, hobbies: ['read, swim'] });

const reqProcess = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    switch (req.method!) {
        case 'GET':
            await processGet(req, res);
            // res.end();
            break;
        case 'POST':
            await processPost(req, res);
            // res.end();
            break;
        default:
            err.method();
    }
    res.end();
};

const server = http.createServer(async (req, res) => {
    try {
        await reqProcess(req, res);
    } catch (error: any) {
        err.Handler(error, res);
    }
    // if (req.url!.match(/\/api\/users\/\w+/)) {
    //     console.log('1');
    // } else {
    //     console.log('2');
    // }
    // let urls = req.url?.split('/');
    // // console.log(urls);
    // // res.write(JSON.stringify(req.url));
    // // console.log(req.url);
    // if (urls && urls[1] === 'api' && urls[2] === 'users') {
    //     console.log('111');
    //     if (req.method === 'GET') {
    //         if (urls[3]) {
    //             res.writeHead(200, { 'Content-Type': 'application/json' });
    //             if (idValidate(urls[3])) throw new Error();
    //             res.write(JSON.stringify(users.getUserById));
    //             res.end();
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'application/json' });
    //             res.write(JSON.stringify(users));
    //             res.end();
    //         }
    //     }
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.write('Route not found');
    //     res.end();
    // }
});
const PORT = process.env.SERVER_PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
