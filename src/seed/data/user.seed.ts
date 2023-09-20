interface SeedUser {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  isActive: boolean;
  roles: ValidRoles;
  address: string;
  birthday: string;
  phone: string;
  dni: string;
}

type ValidRoles = 'user' | 'admin' | 'super-admin';

export const SEED_USER: SeedUser[] = [
  {
    id: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    email: '',
    password: '',
    name: '',
    surname: '',
    isActive: true,
    roles: 'admin',
    address: '',
    birthday: new Date().toDateString(),
    phone: '',
    dni: '',
  },
];
