import {MigrationInterface, QueryRunner} from "typeorm";

export class SubindoBanco1638575423666 implements MigrationInterface {
    name = 'SubindoBanco1638575423666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`viagem\` (\`id\` char(36) NOT NULL, \`pontoPartida\` varchar(255) NOT NULL, \`pontoDestino\` varchar(255) NOT NULL, \`dataViagem\` datetime NOT NULL, \`viacaoId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`viacao\` (\`id\` char(36) NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`nomeFantasia\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_19201f08e7d0ed57aaa7ec9a0c\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` char(36) NOT NULL, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, \`role\` enum ('admin', 'funcionario', 'passageiro') NOT NULL DEFAULT 'passageiro', \`viacaoId\` char(36) NULL, UNIQUE INDEX \`IDX_2863682842e688ca198eb25c12\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bilhete\` (\`id\` char(36) NOT NULL, \`dataCompra\` datetime NOT NULL, \`usuarioId\` char(36) NULL, \`viagemId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`assento\` (\`id\` char(36) NOT NULL, \`numeroAssento\` int NOT NULL, \`viagemId\` char(36) NULL, UNIQUE INDEX \`IDX_7b1257cb14937fee173a2c576d\` (\`numeroAssento\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`DROP INDEX \`IDX_7b1257cb14937fee173a2c576d\` ON \`assento\``);
        await queryRunner.query(`DROP TABLE \`assento\``);
        await queryRunner.query(`DROP TABLE \`bilhete\``);
        await queryRunner.query(`DROP INDEX \`IDX_2863682842e688ca198eb25c12\` ON \`usuario\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
        await queryRunner.query(`DROP INDEX \`IDX_19201f08e7d0ed57aaa7ec9a0c\` ON \`viacao\``);
        await queryRunner.query(`DROP TABLE \`viacao\``);
        await queryRunner.query(`DROP TABLE \`viagem\``);
    }

}
