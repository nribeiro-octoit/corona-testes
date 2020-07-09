import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCityToUnit1594155334945 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'units',
      new TableColumn({
        name: 'city',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('units', 'city');
  }
}
