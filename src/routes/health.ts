import * as express from 'express';
import * as request from 'request';

const api = express();

api.get('/', async (req: express.Request, res: express.Response) => {
	res.send({ status: 200 });
});

export default api;
