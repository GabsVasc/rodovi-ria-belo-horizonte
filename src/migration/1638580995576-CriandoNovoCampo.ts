import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoNovoCampo1638580995576 implements MigrationInterface {
    name = 'CriandoNovoCampo1638580995576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assento\` ADD \`reservado\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`viagem\` DROP FOREIGN KEY \`FK_fff8f28b66469a7542898d4bf2e\``);
        await queryRunner.query(`ALTER TABLE \`viagem\` CHANGE \`viacaoId\` \`viacaoId\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP FOREIGN KEY \`FK_c0bfc314bcebb3b1a4dcc04a0c9\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` CHANGE \`viacaoId\` \`viacaoId\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` DROP FOREIGN KEY \`FK_4d06ce6e73c2b5fd896d26c3b7b\``);
        await queryRunner.query(`ALTER TABLE \`bilhete\` DROP FOREIGN KEY \`FK_fab48b94d9bffa29bb3a3888c9a\``);
        await queryRunner.query(`ALTER TABLE \`bilhete\` CHANGE \`usuarioId\` \`usuarioId\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` CHANGE \`viagemId\` \`viagemId\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`assento\` DROP FOREIGN KEY \`FK_714b94b16f7441e19024c1afd8c\``);
        await queryRunner.query(`ALTER TABLE \`assento\` CHANGE \`viagemId\` \`viagemId\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`viagem\` ADD CONSTRAINT \`FK_fff8f28b66469a7542898d4bf2e\` FOREIGN KEY (\`viacaoId\`) REFERENCES \`viacao\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD CONSTRAINT \`FK_c0bfc314bcebb3b1a4dcc04a0c9\` FOREIGN KEY (\`viacaoId\`) REFERENCES \`viacao\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` ADD CONSTRAINT \`FK_4d06ce6e73c2b5fd896d26c3b7b\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` ADD CONSTRAINT \`FK_fab48b94d9bffa29bb3a3888c9a\` FOREIGN KEY (\`viagemId\`) REFERENCES \`viagem\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`assento\` ADD CONSTRAINT \`FK_714b94b16f7441e19024c1afd8c\` FOREIGN KEY (\`viagemId\`) REFERENCES \`viagem\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`assento\` DROP FOREIGN KEY \`FK_714b94b16f7441e19024c1afd8c\``);
        await queryRunner.query(`ALTER TABLE \`bilhete\` DROP FOREIGN KEY \`FK_fab48b94d9bffa29bb3a3888c9a\``);
        await queryRunner.query(`ALTER TABLE \`bilhete\` DROP FOREIGN KEY \`FK_4d06ce6e73c2b5fd896d26c3b7b\``);
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP FOREIGN KEY \`FK_c0bfc314bcebb3b1a4dcc04a0c9\``);
        await queryRunner.query(`ALTER TABLE \`viagem\` DROP FOREIGN KEY \`FK_fff8f28b66469a7542898d4bf2e\``);
        await queryRunner.query(`ALTER TABLE \`assento\` CHANGE \`viagemId\` \`viagemId\` char(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`assento\` ADD CONSTRAINT \`FK_714b94b16f7441e19024c1afd8c\` FOREIGN KEY (\`viagemId\`) REFERENCES \`viagem\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` CHANGE \`viagemId\` \`viagemId\` char(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` CHANGE \`usuarioId\` \`usuarioId\` char(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` ADD CONSTRAINT \`FK_fab48b94d9bffa29bb3a3888c9a\` FOREIGN KEY (\`viagemId\`) REFERENCES \`viagem\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bilhete\` ADD CONSTRAINT \`FK_4d06ce6e73c2b5fd896d26c3b7b\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuario\` CHANGE \`viacaoId\` \`viacaoId\` char(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD CONSTRAINT \`FK_c0bfc314bcebb3b1a4dcc04a0c9\` FOREIGN KEY (\`viacaoId\`) REFERENCES \`viacao\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`viagem\` CHANGE \`viacaoId\` \`viacaoId\` char(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`viagem\` ADD CONSTRAINT \`FK_fff8f28b66469a7542898d4bf2e\` FOREIGN KEY (\`viacaoId\`) REFERENCES \`viacao\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`assento\` DROP COLUMN \`reservado\``);
    }

}
