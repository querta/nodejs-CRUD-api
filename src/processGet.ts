import http from 'http';
import { users } from './index';
import idValidate from './uidvalidate';
import * as err from './errors';

const processGet = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else if (req.url!.match(/\/api\/users\/\w+/)) {
        const uid = req.url!.split('/')[3];
        if (idValidate(uid)) {
            const user = await users.getUserById(uid);
            if (!user) { err.userNF(); }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        } else { err.id(); }
    } else { err.route(); }
};

export default processGet;
