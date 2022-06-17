import http from 'http';
import { users } from "./index";
import idValidate from './uidvalidate';
// import default from "./errors";
import * as err from './errors'; 

const processGet = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(users));
        // res.end();
    } else if (req.url!.match(/\/api\/users\/\w+/)) {
        const uid = req.url!.split('/')[3];
        if (idValidate(uid)) {
            const user = await users.getUserById(uid);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
            // if (user) { res.write(JSON.stringify(user)); }
            // else {
            //     res.writeHead(404, { 'Content-Type': 'application/json' });
            //     res.write(JSON.stringify('User not found'));
            //  }
            // console.log('true');
        } else {
            err.id();
        }
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.write(JSON.stringify('users'));
        // res.end();
    } else { err.route(); }
};

export default processGet;