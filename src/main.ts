import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import Config from './config';
import health from './routes/health';

const app = express();

app.use(morgan('dev'));

app.use('/health', health);

app.listen(Config.PORT, () => {
	// Template literal
	console.log(`server listening on port ${Config.PORT}`);
});

export default app;
