import { Transaction } from './entities/Transaction';
import { Banker } from './entities/Banker';
import { DataSource } from 'typeorm';
import { Client } from './entities/Client';
import express from 'express';
import { createClientRounter } from './routes/create_client';
import { createBankerRounter } from './routes/create_banker';
import { createTransactionRouter } from './routes/create_transaction';
import { connectBankerToClient } from './routes/connect_banker_to_client';
import { deleteClientRouter } from './routes/delete_client';
import { fetchClientrounter } from './routes/fetch_client';
import { fetchBankerRounter } from './routes/fetch_banker';

const app = express();

const main = async () => {
	try {
		const connection = await new DataSource({
			type: 'postgres',
			host: 'localhost',
			port: 5433,
			username: 'postgres',
			password: 'password',
			database: 'typeorm',
			entities: [Client, Banker, Transaction],
			synchronize: true,
		}).initialize();
		console.log('Connected to Postgres');

		app.use(express.json());
		app.use(createClientRounter);
		app.use(createBankerRounter);
		app.use(createTransactionRouter);
		app.use(connectBankerToClient);
		app.use(deleteClientRouter);
		app.use(fetchClientrounter);
		app.use(fetchBankerRounter);


		app.listen(8080, () => {
			console.log('Running on port 8080');
		});
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};

main();
