import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePatients1594147752130 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'patients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: false,
          },
          {
            name: 'birthday',
            type: 'date',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'contact_number',
            type: 'varchar',
          },
          {
            name: 'is_health_area',
            type: 'boolean',
          },
          {
            name: 'is_security_area',
            type: 'boolean',
          },
          {
            name: 'date_test',
            type: 'date',
          },
          {
            name: 'symptom_start',
            type: 'date',
          },
          {
            name: 'three_days_without_symptom',
            type: 'boolean',
          },
          {
            name: 'isolation_period',
            type: 'varchar',
          },
          {
            name: 'result',
            type: 'boolean',
          },
          {
            name: 'test_mark',
            type: 'varchar',
          },
          {
            name: 'is_notificated',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patients');
  }
}
