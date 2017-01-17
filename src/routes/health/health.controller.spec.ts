import * as chai from 'chai';
import { expect } from 'chai';
import app from '../../main';
const chaiHttpRequest: Chai.ChaiHttpRequest = require('chai-http');

chai.use(chaiHttpRequest);

// Add promise support if this does not exist natively.
if (!global.Promise) {
	const q = require('q');
	chai.request.addPromises(q.Promise);
}

describe('GET /v1/health', function () {
	it('returns a status code 200', async function () {
		const res = await chai.request(app).get('/health');
		expect(res).to.have.status(200);
	});
});
