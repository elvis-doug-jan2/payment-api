import { Schema } from 'mongoose'

export const FavoredSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'clients',
    },
    accountId: {
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
