import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { DataSource } from "typeorm";



export const pgConnectionOptions: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "postgres",
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ["src/db/migrations/**"],
  synchronize: false,
  logging: false
};

export default new DataSource(pgConnectionOptions)