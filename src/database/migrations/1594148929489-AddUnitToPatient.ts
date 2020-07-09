import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddUnitToPatient1594148929489
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'patients',
      new TableColumn({
        name: 'unit_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'patients',
      new TableForeignKey({
        name: 'PatientsUnit',
        columnNames: ['unit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'units',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('patients', 'PatientsUnit');
    await queryRunner.dropColumn('patients', 'unit_id');
  }
}
