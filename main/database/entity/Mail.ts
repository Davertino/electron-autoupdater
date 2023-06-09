import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Mail extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column("text")
	sender: string;

	@Column("text")
	recievers: string;

	@Column("text", { nullable: true })
	subject: string;

	@Column("text")
	body: string;

	@Column("text", { nullable: true })
	attachment: string;

	@Column("boolean")
	sent: boolean;

	@Column("date")
	sentDate: Date;
}
