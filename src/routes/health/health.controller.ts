import * as express from 'express';

export async function health(req: express.Request, res: express.Response) {
	res.status(200).send({
		'statusCode': 200,
		'responsePhrase': 'OK'
	});
}
