import { CryptoItem } from '../reducers/crypto';
import { searchPrice } from 'services/crypto';
import { addCrypto as addCryptoAction } from '../actions';
import { dateToString } from 'utils/parser';

export const addCrypto =
  (
    item: CryptoItem,
    setOpenError: (v: boolean) => void,
    setLoading: (v: boolean) => void,
    clearForm: () => void,
  ) =>
    async (dispatch: any, getState: any) => {
      try {
        setLoading(true);
        const price = await searchPrice(
        item.code as string,
        dateToString(new Date()),
        );
        if (price.error) {
          setOpenError(true);
        } else {
          dispatch(addCryptoAction({ ...item, price: price.data?.closePrice }));
        }

        clearForm();
      } finally {
        setLoading(false);
      }
    };
