import { Banker } from './../entities/Banker';
import { Client } from './../entities/Client';
import express from 'express';

const router = express.Router();

router.get('/api/bankers', async (req, res) => {
	const bankers = await Banker.find({ relations: ['clients'] });

	return res.json(bankers);
});

export { router as fetchBankerRounter };
