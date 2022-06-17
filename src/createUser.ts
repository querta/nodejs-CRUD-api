import http from 'http';
import * as err from './errors';
import users from './index';
import { ICandidate } from './interfaces';

const getRequestData = (req: http.IncomingMessage): Promise<ICandidate> =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve, reject) => {
        try {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                resolve(JSON.parse(body));
            });
        } catch (error) {
            reject(error);
        }
});

const createUser = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === '/api/users') {
            const data: ICandidate = await getRequestData(req);
            if (!data.name || !data.age) { err.body(); }
            res.writeHead(201, { 'Content-Type': 'application/json' });
            const newUser = await users.createUser(data);
            res.end(JSON.stringify(newUser));
    } else { err.route(); }
};

export default createUser;
