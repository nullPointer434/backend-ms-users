import currencyRepository from "../repositories/currency.repository"

export const getCurrencies = async () => {
  const currencyModelList = await currencyRepository.find();
  return currencyModelList ? currencyModelList : [];
}