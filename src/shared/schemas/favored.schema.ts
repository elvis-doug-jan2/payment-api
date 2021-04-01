import { Schema } from 'mongoose'

export const FavoredSchema = new Schema(
  {
    clientData: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'clients',
    },
    accountData: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'accounts',
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)
