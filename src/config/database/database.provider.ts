import * as mongoose from 'mongoose'
import config from '../envs.config'

export const DatabaseProvider = {
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
