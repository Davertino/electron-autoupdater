import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mail {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	sender: string;

	@Column()
	recievers: string;

	@Column()
	subject: string;

	@Column()
	body: string;

	@Column()
	attachment: string;

	@Column()
	sent: boolean;

	@Column()
	sentDate: Date;
}
