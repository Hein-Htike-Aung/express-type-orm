import { Banker } from './Banker';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity()
export class Client extends Person {
	@Column({ type: 'numeric' })
	balance: number;

	@Column({ default: true, name: 'active' })
	is_active: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additioanalInfo: {
		age: number;
		hair_color: string;
	};

	@Column({
		type: 'simple-array',
		default: [],
	})
	family_members: string[];

	@OneToMany(() => Transaction, (transaction) => transaction.client)
	transactions: Transaction[];

	@ManyToMany(() => Banker, {
		cascade: true,
	})
	bankers: Banker[];
}
