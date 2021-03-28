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
      default: null,
    },
    accountsId: {
      type: [Schema.Types.ObjectId],
      default: null,
    },
  },
  { timestamps: true },
)

UserSchema.post<IUser>('findOne', function (user) {
  if (user) user.email = decrypt(user.email)
})

UserSchema.post<IUser>('findById', function (user) {
  if (user) user.email = decrypt(user.email)
})

UserSchema.pre<IUser>('save', function (next) {
  if (!this.isModified('password') || !this.isModified('email')) return next()

  // if (this.isModified('password')) this.password = encrypt(this.password)
  if (this.isModified('email')) this.email = encrypt(this.email)

  next()
})

UserSchema.pre('updateOne', function (next) {
  let user = this.getUpdate()

  if (user.password) user.password = encrypt(user.password)
  if (user.email) user.email = encrypt(user.email)

  if (user['$set'].password) user['$set'].password = encrypt(user['$set'].password)

  next()
})
