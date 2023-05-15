import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column("varchar", { length: 255 })
	email: string;

	@Column("varchar", { length: 255 })
	username: string;

	@Column("varchar", { length: 255, nullable: true })
	password: string;

	@Column("varchar", { length: 255 })
	accountType: string;

	@Column("varchar", { length: 255 })
	incomingServer: string;

	@Column("varchar", { length: 255 })
	outgoingServer: string;
}
