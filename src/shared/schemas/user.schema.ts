import { Schema } from 'mongoose'

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
