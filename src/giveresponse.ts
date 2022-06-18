import http from 'http';

const giveResponse = async (res: http.ServerResponse, data: any) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

export default giveResponse;
