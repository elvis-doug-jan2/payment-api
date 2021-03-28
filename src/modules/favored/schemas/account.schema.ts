import { Schema } from 'mongoose'

export const AccountSchema = new Schema(
  {
    bank: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    agencyDigit: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    accountDigit: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
)
