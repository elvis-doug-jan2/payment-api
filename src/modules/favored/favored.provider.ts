import { Connection } from 'mongoose'
import { UserSchema } from './schemas/user.schema'
import { AccountSchema } from './schemas/account.schema'
import { FavoredSchema } from './schemas/favored.schema'

export const UserProvider = [
  {
    provide: 'USER',
    useFactory: (connection: Connection) => connection.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ACCOUNT',
    useFactory: (connection: Connection) => connection.model('accounts', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FAVORED',
    useFactory: (connection: Connection) => connection.model('favoreds', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]
