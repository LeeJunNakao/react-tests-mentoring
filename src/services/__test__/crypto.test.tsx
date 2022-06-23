import { searchPrice } from '../crypto';
import axios from 'axios';

describe('', () => {

  it('should test service', async () => {
    const currentData = {
      btc: {
        data: {
          date: '13/06/2022',
          closePrice: 10,
          currency: 'BRL',
        },
        error: null,
      },
    }
    jest.spyOn(axios, 'get').mockResolvedValue({data: currentData});
    const response = await searchPrice('btc', '13/06/2022');
    expect(response).toEqual(currentData.btc);
  });
});
