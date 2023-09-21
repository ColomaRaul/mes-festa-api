import { v4 as uuid } from 'uuid';

interface SeedTransaction {
  id: string;
  userId: string;
  userCreatorId: string;
  organizationId: string;
  typeTransaction: string;
  typeFinancial: string;
  amount: number;
  date: string;
  description: string;
}

export const SEED_TRANSACTION: SeedTransaction[] = [
  {
    id: uuid.v4,
    userId: null,
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'EXPENSE',
    typeFinancial: 'Efectiu',
    amount: 50000,
    date: '2023-07-12',
    description: 'Carroça entrada',
  },
  {
    id: uuid.v4,
    userId: null,
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'EXPENSE',
    typeFinancial: 'Tarjeta',
    amount: 8799,
    date: '2023-07-12',
    description: 'Compra Mercadona',
  },
  {
    id: uuid.v4,
    userId: 'b49d0840-ff97-4745-b96f-22c094cf3949',
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'PROFIT',
    typeFinancial: 'Efectiu',
    amount: 20000,
    date: '2023-04-30',
    description: 'Ingreso',
  },
  {
    id: uuid.v4,
    userId: '952e179f-676f-4fa5-8ee2-94c48e8d674f',
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'PROFIT',
    typeFinancial: 'Transferencia bancaria',
    amount: 100000,
    date: '2023-01-12',
    description: 'Ingreso',
  },
  {
    id: uuid.v4,
    userId: null,
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'PROFIT',
    typeFinancial: 'Transferencia bancaria',
    amount: 100,
    date: '2023-01-12',
    description: 'Donació de la Junta de festes',
  },
  {
    id: uuid.v4,
    userId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'PROFIT',
    typeFinancial: 'Transferencia bancaria',
    amount: 15000,
    date: '2022-12-12',
    description: 'Ingres ralla',
  },
  {
    id: uuid.v4,
    userId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    userCreatorId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    typeTransaction: 'PROFIT',
    typeFinancial: 'Transferencia bancaria',
    amount: 15000,
    date: '2023-01-12',
    description: 'Ingres ralla',
  },
];
