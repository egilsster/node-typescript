'use strict';

import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import PORT from './config';

import home from './routes/home';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/public', express.static('public'));
app.use(morgan('dev'));

app.use('/', home);

app.listen(PORT, () => {
    // Template literal
    console.log(`server listening on port ${PORT}`);
});
