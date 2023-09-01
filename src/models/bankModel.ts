import mongoose from "mongoose";


const bankSchema = new mongoose.Schema(
    {
    accountNumber: {
      type: String,
      required: true,
    },
    holderName: {
        type : String ,
        required :true,
    set: (value: string) => value.toLowerCase(),

    },
    dob: {
        type: Date,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
    set: (value: string) => value.toLowerCase(),

    },
    initialBalance: {
        type: Number,
        required: true,
    },
},
)
export const BankModel = mongoose.model('bank',  bankSchema)                                                                         
