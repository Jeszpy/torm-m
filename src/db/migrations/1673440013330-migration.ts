import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1673440013330 implements MigrationInterface {
    name = 'migration1673440013330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "newColumn" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "newColumn"`);
    }

}
