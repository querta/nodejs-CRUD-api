import http from 'http';
import idValidate from './uidvalidate';
import * as err from './errors';

const checkId = async (req: http.IncomingMessage): Promise<string> => {
    if (!req.url!.match(/\/api\/users\/\w+/)) { err.route(); }
    const uid = req.url!.split('/')[3];
    if (!idValidate(uid)) { err.id(); }
    return uid;
};

export default checkId;
