import http from 'http';
import * as err from './errors';
import users from './index';
import { IUser } from './interfaces';
import checkId from './checkId';

const deleteUser = async (req: http.IncomingMessage, res: http.ServerResponse): Promise<void> => {
    const uid = await checkId(req);
    const user: IUser = await users.getUserById(uid);
    if (!user) { err.userNF(); }
    await users.deleteUser(uid);
    res.writeHead(204, { 'Content-Type': 'application/json' });
};

export default deleteUser;
