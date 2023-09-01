import { Request, Response } from "express";
import {BankModel} from "../models/bankModel";

function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000);
}


export const createAccount = async (req: Request, res: Response) => {
try {
  const { holderName, dob, accountType, initialBalance } = req.body;

  if (!holderName || !dob || !accountType || !initialBalance) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const accountNumber = generateAccountNumber()
  const newAccount = new BankModel({
    accountNumber,
    holderName,
    dob,
    accountType,
    initialBalance,
  });

  await newAccount.save();

  const newAccountResponse = {
    accountNumber,
    holderName,
    dob,
    accountType,
    initialBalance,
  };

  res.status(201).json(newAccountResponse);
} catch (error) {
  console.error('An error occurred:', error);
  res.status(500).json({ error: 'An error occurred while processing the request.' });
}
}



  export const resolveAccount = async (req: Request, res: Response) => {
    try {
      const { accountNumber } = req.params;
  
      const accountDetails = await BankModel.findOne({ accountNumber });
  
      if (!accountDetails) {
        return res.status(404).json({ error: 'Account not found.' });
      }
  
      res.status(200).json(accountDetails);
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  };

  export const getAllAccount = async (req: Request, res: Response) => {
    try {
      const accounts = await BankModel.find();
  
      res.status(200).json(accounts);
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  };