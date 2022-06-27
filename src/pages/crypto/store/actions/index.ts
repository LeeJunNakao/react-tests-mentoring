import { CryptoItem } from '../reducers/crypto';

export const addCrypto = (item: CryptoItem) => ({ item, type: 'ADD_ITEM' });

export const removeCrypto = (item: CryptoItem, items: CryptoItem[]) => {
  const index = items.findIndex((i) => i.code === item.code);

  return { index, type: 'REMOVE_ITEM' };
};
