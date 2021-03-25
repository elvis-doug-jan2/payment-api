import * as dotenv from 'dotenv'

dotenv.config({ path: '.dev.env' })

const config = {
  port: process.env.PORT,
  auth: {
    secret: process.env.SECRET,
  },
  database: {
    url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_DATABASE}?authSource=admin`,
  },
  front_url: process.env.APP_FRONT_URL,
  encryption: {
    key: process.env.ENCRYPTION_KEY,
    iv: process.env.ENCRYPTION_IV,
  },
  prefix: process.env.GLOBAL_PREFIX,
}

export default config
