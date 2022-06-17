import http from 'http';
import { users } from './index';
import idValidate from './uidvalidate';
import * as err from './errors';

const giveResponse = async (res: http.ServerResponse, data: any) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

const getUser = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === '/api/users') {
       giveResponse(res, users);
    } else if (req.url!.match(/\/api\/users\/\w+/)) {
        const uid = req.url!.split('/')[3];
        if (idValidate(uid)) {
            const user = await users.getUserById(uid);
            if (!user) { err.userNF(); }
            giveResponse(res, users);
        } else { err.id(); }
    } else { err.route(); }
};

export default getUser;
