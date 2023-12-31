interface SeedUser {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  isActive: boolean;
  roles: string[];
  address: string;
  birthday: string;
  phone: string;
  dni: string;
}

export const SEED_USER: SeedUser[] = [
  {
    id: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    email: 'rau17cb@gmail.com',
    password: 'Abc123',
    name: 'Raúl',
    surname: 'Coloma Bonifacio',
    isActive: true,
    roles: ['admin', 'super-admin', 'user'],
    address: 'Carrer Doctor Fleming, 38-40, 1A, 03560, El Campello, Alacant',
    birthday: '1990-01-18',
    phone: '617179758',
    dni: '21686964B',
  },
  {
    id: 'b49d0840-ff97-4745-b96f-22c094cf3949',
    email: 'test1@gmail.com',
    password: 'Abc123',
    name: 'Jose Maria',
    surname: 'Pérez Gabriel',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1990-02-22',
    phone: '',
    dni: '',
  },
  {
    id: '952e179f-676f-4fa5-8ee2-94c48e8d674f',
    email: 'test2@gmail.com',
    password: 'Abc123',
    name: 'Carlos',
    surname: 'Rodrigo Gol',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1975-02-22',
    phone: '',
    dni: '',
  },
  {
    id: 'd839281c-e043-4219-9792-fc5811343968',
    email: 'test3@gmail.com',
    password: 'Abc123',
    name: 'Verónica',
    surname: 'Messi Ronaldo',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1979-02-22',
    phone: '',
    dni: '',
  },
  {
    id: 'c935a52f-92b8-4663-9efb-22c9e05a0c56',
    email: 'test4@gmail.com',
    password: 'Abc123',
    name: 'Sergio',
    surname: 'Busquets Almadraba',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1979-12-22',
    phone: '',
    dni: '',
  },
  {
    id: '059d22f9-b2f6-4cb3-88c2-8f1ba5959eac',
    email: 'test5@gmail.com',
    password: 'Abc123',
    name: 'Rafael',
    surname: 'Girona Osasuna',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '2001-12-01',
    phone: '',
    dni: '',
  },
  {
    id: '0d0ef495-08a1-4b38-8194-cc1aea2aa23b',
    email: 'test6@gmail.com',
    password: 'Abc123',
    name: 'Gemma',
    surname: 'Grau Ballesteros',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '2000-12-01',
    phone: '',
    dni: '',
  },
  {
    id: '258e1b47-c6aa-4767-9c95-cbc8c0d4e093',
    email: 'test7@gmail.com',
    password: 'Abc123',
    name: 'Valentina',
    surname: 'Olcina Sellés',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1995-05-01',
    phone: '',
    dni: '',
  },
  {
    id: 'e96c49f4-06d8-4f87-9bb0-5178c0b629c0',
    email: 'test8@gmail.com',
    password: 'Abc123',
    name: 'Ona',
    surname: 'Vidal Perez',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1995-06-11',
    phone: '',
    dni: '',
  },
  {
    id: '4f557937-0128-4780-906a-a1743bed58c1',
    email: 'test9@gmail.com',
    password: 'Abc123',
    name: 'Ernesto',
    surname: 'Coloma García',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1995-06-30',
    phone: '',
    dni: '',
  },
  {
    id: '05d0cbf3-3573-47cd-8c04-ee3af33fc06d',
    email: 'test10@gmail.com',
    password: 'Abc123',
    name: 'Wenceslaw',
    surname: 'Caturla Garcia',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1995-09-30',
    phone: '',
    dni: '',
  },
  {
    id: '997eb41b-c900-4e1f-ab6f-4306dac07e9b',
    email: 'test11@gmail.com',
    password: 'Abc123',
    name: 'rick',
    surname: 'Moltó Climent',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-09-30',
    phone: '',
    dni: '',
  },
  {
    id: 'd8ac84b1-9604-41ea-9397-7c9f42eced45',
    email: 'test12@gmail.com',
    password: 'Abc123',
    name: 'Estada',
    surname: 'Route Resolver',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1991-09-30',
    phone: '',
    dni: '',
  },
  {
    id: '8256e3f9-bb52-438e-8685-1d8790bc6967',
    email: 'test13@gmail.com',
    password: 'Abc123',
    name: 'Arte',
    surname: 'Hernandez Hernandez',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1985-10-30',
    phone: '',
    dni: '',
  },
  {
    id: 'c5db759c-5717-49fd-bb1f-e696704d34d3',
    email: 'test14@gmail.com',
    password: 'Abc123',
    name: 'Paz',
    surname: 'Borruix Pa',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1985-01-30',
    phone: '',
    dni: '',
  },
  {
    id: '7ce1e263-4336-4462-b0e0-9f7849ba7ecb',
    email: 'test15@gmail.com',
    password: 'Abc123',
    name: 'Conchi',
    surname: 'Alcaraz Djokovic',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1989-01-01',
    phone: '',
    dni: '',
  },
  {
    id: '55eae35c-cd04-48bd-a379-6721458f3ee1',
    email: 'test16@gmail.com',
    password: 'Abc123',
    name: 'Ramirez',
    surname: 'LeBron Gallardo',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1989-11-11',
    phone: '',
    dni: '',
  },
  {
    id: 'b5655991-54ad-4993-af19-a782f7bfc733',
    email: 'test17@gmail.com',
    password: 'Abc123',
    name: 'Ramon',
    surname: 'Fulanito y Bengamino',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '2020-11-11',
    phone: '',
    dni: '',
  },
  {
    id: '3ebd96f6-440d-463e-be27-30f8f8fc682b',
    email: 'test18@gmail.com',
    password: 'Abc123',
    name: 'Pedro',
    surname: 'De la Rosa Castellano',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '2010-11-11',
    phone: '',
    dni: '',
  },
  {
    id: '216a0d6c-ece6-474e-8745-bb732b467ac7',
    email: 'test19@gmail.com',
    password: 'Abc123',
    name: 'Jonny',
    surname: 'No Me Lavo',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '2014-11-11',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631450',
    email: 'test20@gmail.com',
    password: 'Abc123',
    name: 'Emmanuel',
    surname: 'Del Cerro Grande',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631451',
    email: 'pepito.molto@gmail.com',
    password: 'Abc123',
    name: 'Jose Enrique',
    surname: 'Moltó Llorens',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631452',
    email: 'borja.molto@gmail.com',
    password: 'Abc123',
    name: 'Borja',
    surname: 'Moltó Tortajada',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631453',
    email: 'javier.vidal@gmail.com',
    password: 'Abc123',
    name: 'Javi',
    surname: 'Vidal Amat',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631454',
    email: 'enrique.alcaraz@gmail.com',
    password: 'Abc123',
    name: 'Enrique',
    surname: 'Alcaraz Javaloyes',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631455',
    email: 'jorge.luna@gmail.com',
    password: 'Abc123',
    name: 'Jorge',
    surname: 'Luna',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631456',
    email: 'luis.orta@gmail.com',
    password: 'Abc123',
    name: 'Luis',
    surname: 'Orta Canales',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631457',
    email: 'pablo.marti@gmail.com',
    password: 'Abc123',
    name: 'Pablo',
    surname: 'Martí Gisbert',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631458',
    email: 'pau.olcina@gmail.com',
    password: 'Abc123',
    name: 'Pau',
    surname: 'Olcina i Andrés',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631459',
    email: 'pau.anduix@gmail.com',
    password: 'Abc123',
    name: 'Pau',
    surname: 'Anduix Fuentes',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631460',
    email: 'angel.amat@gmail.com',
    password: 'Abc123',
    name: 'Angel',
    surname: 'Amat Valiente',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631461',
    email: 'pau.botella@gmail.com',
    password: 'Abc123',
    name: 'Pau',
    surname: 'Botella',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631462',
    email: 'sergio.barrachina@gmail.com',
    password: 'Abc123',
    name: 'Sergio',
    surname: 'Barrachina',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631463',
    email: 'josevicente.amat@gmail.com',
    password: 'Abc123',
    name: 'Jose Vicente',
    surname: 'Amat',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631464',
    email: 'josepmaria.olcina@gmail.com',
    password: 'Abc123',
    name: 'Josep Maria',
    surname: 'Olcina',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631465',
    email: 'juanantonio.valverde@gmail.com',
    password: 'Abc123',
    name: 'Juan Antonio',
    surname: 'Valverde Picazo',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
  {
    id: '34ea0220-9ad4-4b49-8248-45f77c631466',
    email: 'juanandres.mono@gmail.com',
    password: 'Abc123',
    name: 'Juan Andrés',
    surname: 'Mono',
    isActive: true,
    roles: ['user'],
    address: '',
    birthday: '1999-01-18',
    phone: '',
    dni: '',
  },
];
