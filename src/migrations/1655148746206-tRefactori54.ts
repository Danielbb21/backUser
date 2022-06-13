import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class tRefactori541655148746206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'teste'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teste')
    }

}
