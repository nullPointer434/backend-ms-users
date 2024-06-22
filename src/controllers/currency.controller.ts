import { Request, Response } from 'express';
import * as currencyService from '../services/currency.service';

export const getCurrencies = async (req: Request, res: Response) => {
  try {
    const currencies = await currencyService.getCurrencies();

    if (!currencies) {
      res.status(404).json({ message: 'users were not found' });;
    } else {
      res.status(200).send(currencies);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}