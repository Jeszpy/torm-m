import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1673439437473 implements MigrationInterface {
    name = 'migration1673439437473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "isActive" TO "isUserActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "isUserActive" TO "isActive"`);
    }

}
