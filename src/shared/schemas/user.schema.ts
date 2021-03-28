import { Schema } from 'mongoose'
import { encrypt, decrypt } from '../utils/criptPass.util'
import { IUser } from '../interfaces/user.interface'

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    accountsId: {
      type: [Schema.Types.ObjectId],
      required: false,
      default: null,
    },
  },
  { timestamps: true },
)

// UserSchema.post<IUser>('findOne', function (user) {
//   if (user) user.email = decrypt(user.email)
// })

// UserSchema.post<IUser>('findById', function (user) {
//   if (user) user.email = decrypt(user.email)
// })

UserSchema.pre<IUser>('save', function (next) {
  this.cpf = this.cpf.replace(/[-.]/g, '')
  next()
})

// UserSchema.pre('updateOne', function (next) {
//   let user = this.getUpdate()

//   if (user.password) user.password = encrypt(user.password)
//   if (user.email) user.email = encrypt(user.email)

//   if (user['$set'].password) user['$set'].password = encrypt(user['$set'].password)

//   next()
// })
