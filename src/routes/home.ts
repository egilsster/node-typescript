'use strict';

import * as express from 'express';
import * as request from 'request';

const api = express();

api.get('/', (req, res) => {
    res.render('raw', { body: 'Raw page' });
});

export default api;
