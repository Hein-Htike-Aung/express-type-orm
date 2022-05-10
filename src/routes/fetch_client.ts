import { Client } from './../entities/Client';
import express from 'express';
import { Between, LessThan, MoreThan } from 'typeorm';

const router = express.Router();

router.get('/api/clients', async (req, res) => {
	const clients = await Client.find({
		// where: { balance: MoreThan(2001)},
		where: { balance: Between(2000, 39999) },
		relations: ['transactions'],
	});

	return res.json(clients);
});

export { router as fetchClientrounter };
