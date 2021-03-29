import { Schema } from 'mongoose'

export const FavoredSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
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
