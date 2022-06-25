import http from 'http';
import users from './index';
import idValidate from './uidvalidate';
import * as err from './errors';
import giveResponse from './giveresponse';

const getUser = async (req: http.IncomingMessage, res: http.ServerResponse): Promise<void> => {
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
