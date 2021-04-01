import * as mongoose from 'mongoose'
import config from '../envs.config'
import { Connection } from 'mongoose'
import { ClientSchema } from 'src/shared/schemas/client.schema'
import { AccountSchema } from 'src/shared/schemas/account.schema'
import { FavoredSchema } from 'src/shared/schemas/favored.schema'

export const DatabaseConnectionProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> => {
    console.log('URL DO MONGO', config.database.url)
    return mongoose.connect(config.database.url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
  },
}

export const DatabaseSchemasProvider = [
  {
    provide: 'CLIENT',
    useFactory: (connection: Connection) => connection.model('clients', ClientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ACCOUNT',
    useFactory: (connection: Connection) => connection.model('accounts', AccountSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FAVORED',
    useFactory: (connection: Connection) => connection.model('favoreds', FavoredSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]
