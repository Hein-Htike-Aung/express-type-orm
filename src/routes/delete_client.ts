import { Client } from './../entities/Client';
import express from 'express';

const router = express.Router();

router.delete('/api/client/:clientId', async (req, res) => {
	const { clientId } = req.params;

	const response = await Client.delete(parseInt(clientId));

	return res.json(response);
});

export { router as deleteClientRouter };