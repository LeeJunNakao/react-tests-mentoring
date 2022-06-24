import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CryptoItem } from '../store/reducers/crypto';

type RowItem = {
  id: number | string;
  code: string;
  quantity: number;
  price?: number;
};

type Item = {
  code: string;
  quantity: number;
  price?: number;
};

const columns: GridColDef[] = [
  { field: 'code', headerName: 'Code', width: 80 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 80 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 130,
  },
];

export const CryptoList = () => {
  const items = useSelector((state: { crypto: CryptoItem[] }) => state.crypto);

  const rows: RowItem[] = items.map((item, index) => ({
    id: index,
    code: item.code,
    quantity: item.quantity,
    price: item.price,
  }));

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '20px',
        height: '400px',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
};

export default CryptoList;
