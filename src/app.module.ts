import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "postgres",
      autoLoadEntities: true,
      migrations: ["./src/db/migrations"]
      // entities: [],
      // synchronize: true,
    }),
    TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor() {
    console.log(__dirname + '/entities/*.entity.*');
  }
}
