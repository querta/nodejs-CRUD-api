import http from 'http';
import * as err from './errors';
import users from './index';
import { ICandidate } from './interfaces';
import getRequestData from './getRequestData';

const createUser = async (req: http.IncomingMessage, res: http.ServerResponse): Promise<void> => {
    if (req.url === '/api/users') {
        const data: ICandidate = await getRequestData(req);
        if (!data.name || !data.age) { err.body(); }
        const newUser = await users.createUser(data);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
    } else { err.route(); }
};

export default createUser;
