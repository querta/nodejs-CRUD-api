import { users } from "./index";
import idValidate from './uidvalidate';
import http from 'http';

const processPost = async (req: http.IncomingMessage, res: http.ServerResponse) => {
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
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify('User id is invalid'));
        }

    }
};

export default processPost;