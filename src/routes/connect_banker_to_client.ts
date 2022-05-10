import { Banker } from './../entities/Banker';
import { Transaction, TransactionTypes } from './../entities/Transaction';
import { Client } from './../entities/Client';
import express from 'express';

const router = express.Router();

router.put('/api/client/:clientId/banker/:bankerId', async (req, res) => {
	const { clientId, bankerId } = req.params;

	const client = await Client.findOne({ where: { id: parseInt(clientId) } });

	const banker = await Banker.findOne({ where: { id: parseInt(bankerId) } });

	if (!client || !banker) {
		return res.json({
			msg: 'Banker or client not found',
		});
	}

	banker.clients = [client];

	await banker.save();

	return res.json({
		msg: 'Banker connected to client',
	});
});

export { router as connectBankerToClient };
