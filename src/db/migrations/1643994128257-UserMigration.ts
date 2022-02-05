import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1643994128257 implements MigrationInterface {
    name = 'UserMigration1643994128257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`test\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`test\` varchar(255) NOT NULL`);
    }

}
