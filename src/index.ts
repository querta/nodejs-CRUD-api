import http from 'http';
import 'dotenv/config';
import userDB from './UsersDBclass';
import getUser from './getUser';
import createUser from './createUser';
import updateUser from './updateUser';
import * as err from './errors';
import deleteUser from './deleteUser';

const users = userDB;
users.createUser({ name: 'Oleg', age: 12 });
users.createUser({ name: 'Vagan', age: 33, hobbies: ['read, swim'] });

const reqProcess = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    switch (req.method!) {
        case 'GET':
            await getUser(req, res);
            break;
        case 'POST':
            await createUser(req, res);
            break;
        case 'PUT':
            await updateUser(req, res);
            break;
        case 'DELETE':
            await deleteUser(req, res);
            break;
        default:
            err.method();
    }
    res.end();
};

const server = http.createServer(async (req, res) => {
    try {
        await reqProcess(req, res);
    } catch (error: any) {
        err.Handler(error, res);
    }
});
const PORT = process.env.SERVER_PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default users;
