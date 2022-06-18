import http from 'http';
import * as err from './errors';
import users from './index';
import { ICandidate, IUser } from './interfaces';
import giveResponse from './giveresponse';
import getRequestData from './getRequestData';
import checkId from './checkId';

const updateUser = async (req: http.IncomingMessage, res: http.ServerResponse): Promise<void> => {
    const uid = await checkId(req);
    let user: IUser = await users.getUserById(uid);
    if (!user) { err.userNF(); }
    const data: ICandidate = await getRequestData(req);
    user = await users.updateUser(uid, data);
    giveResponse(res, user);
};

export default updateUser;
