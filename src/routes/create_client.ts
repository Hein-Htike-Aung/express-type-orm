import { Client } from './../entities/Client';
import express from 'express';

const router = express.Router();

router.post('/api/client', async (req, res) => {
	const { firstName, lastName, email, cardNumber, balance } = req.body;

	const client = Client.create({
		first_name: firstName,
		last_name: lastName,
		email,
		card_number: cardNumber,
		balance,
	});

    await client.save();

	return res.send(client);
});

export { router as createClientRounter };
