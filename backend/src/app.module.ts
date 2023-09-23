import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot()
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ModulesModule,
  ],
})
export class AppModule {}
