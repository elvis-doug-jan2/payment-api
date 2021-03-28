import { Connection } from 'mongoose'
import { AccountSchema } from 'src/shared/schemas/account.schema'
import { FavoredSchema } from 'src/shared/schemas/favored.schema'
import { UserSchema } from 'src/shared/schemas/user.schema'

export const PopulateDBProvider = [
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