import { Schema } from 'mongoose'

export const ClientSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    document: {
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
