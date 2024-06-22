import { appDataSource } from '../data-source';
import { CurrencyModel } from '../models/currency.model';

const currencyRepository = appDataSource.getRepository(CurrencyModel);

export default currencyRepository;