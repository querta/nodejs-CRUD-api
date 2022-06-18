import http from 'http';
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

export default getRequestData;
