import { Schema } from 'mongoose'

export const AccountSchema = new Schema(
  {
    bankName: {
      type: String,
      required: true,
    },
    agencyNumber: {
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
    accountNumber: {
      type: String,
      required: true,
    },
    accountDigit: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)
