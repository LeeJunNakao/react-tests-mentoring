export type CryptoItem = {
  code: string;
  quantity: number;
  price?: number;
  total?: number;
};

const INITIAL_STATE: CryptoItem[] = [];

const CryptoReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
  case 'ADD_ITEM':
    return [...state, action.item];
  case 'REMOVE_ITEM':
    return state.filter((_item, idx) => idx !== action.index);
  default:
    return state;
  }
};

export default CryptoReducer;
