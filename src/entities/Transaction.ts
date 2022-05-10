import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionTypes {
	DEPOSIT = 'DEPOSIT',
	WITHDRAW = 'WITHDRAW',
}

@Entity()
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'enum', enum: TransactionTypes })
	type: TransactionTypes;

	@Column({
		type: 'numeric',
	})
	amount: number;

	@ManyToOne(() => Client, (client) => client.transactions, {
		onDelete: 'CASCADE', // if client is deleted, all transactions related to this client will be deleted too
	})
	@JoinColumn({ name: 'client_id' }) // becuase many side has foregin key
	client: Client;
}
