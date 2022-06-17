import http from 'http';
// import { users } from './index';
// import idValidate from './uidvalidate';
// import * as err from './errors';

const giveResponse = async (res: http.ServerResponse, data: any) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

export default giveResponse;
