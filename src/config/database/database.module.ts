import { Module } from '@nestjs/common'
import { DatabaseConnectionProvider, DatabaseSchemasProvider } from './database.provider'

@Module({
  providers: [DatabaseConnectionProvider, ...DatabaseSchemasProvider],
  exports: [DatabaseConnectionProvider, ...DatabaseSchemasProvider],
})
export class DatabaseModule {}
