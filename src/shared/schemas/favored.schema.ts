import { Schema } from 'mongoose'

export const FavoredSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    accountId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)
