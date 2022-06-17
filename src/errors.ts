import http from 'http';

class HttpError extends Error {
    code?: number = 500;

    constructor(message: string, code?: number) {
        super(message);
        this.name = 'HttpError';
        this.code = code;
    }
}

export const route = () => {
    throw new HttpError('Route not found', 404);
};

export const userNF = () => {
    throw new HttpError('Ueser not found', 404);
};

export const id = () => {
    throw new HttpError('User id is invalid', 400);
};

export const method = () => {
    throw new HttpError('Invalid request method. Allowed: GET, POST, PUT, DELETE', 400);
};

export const body = () => {
    throw new HttpError('Username and age are required', 400);
};

export const Handler = (error: any, res: http.ServerResponse) => {
    // if (error instanceof HttpError) {
        res.writeHead(error.code || 500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error.message));
    // }

};
