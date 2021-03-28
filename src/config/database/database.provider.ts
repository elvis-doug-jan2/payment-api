import * as mongoose from 'mongoose'
import config from '../envs.config'
import { Connection } from 'mongoose'
import { UserSchema } from 'src/shared/schemas/user.schema'
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
    })
  },
}

export const DatabaseSchemasProvider = [
  {
    provide: 'USER',
    useFactory: (connection: Connection) => connection.model('users', UserSchema),
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
