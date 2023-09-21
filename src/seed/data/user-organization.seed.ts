import { v4 as uuid } from 'uuid';
import { Characteristic } from '../../user/interfaces';

interface SeedUserOrganization {
  id: string;
  userId: string;
  organizationId: string;
  memberSince: string;
  isActive: boolean;
  characteristics: Characteristic[];
  isAdmin: boolean;
}

export const SEED_USER_ORGANIZATION: SeedUserOrganization[] = [
  {
    id: uuid.v4,
    userId: '0bb9d441-5426-4c73-b754-57c6a52000b4',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Carnet Avancarga',
        value: '21-08-2020 fins 21-08-2025',
      },
      {
        key: 'Compte bancari',
        value: 'ES31312312313123123123',
      },
      {
        key: 'Càrrec',
        value: 'Fiança',
      },
    ],
    isAdmin: true,
  },
  {
    id: uuid.v4,
    userId: '952e179f-676f-4fa5-8ee2-94c48e8d674f',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Carnet Avancarga',
        value: '21-08-2020 fins 21-08-2025',
      },
      {
        key: 'Compte bancari',
        value: 'ES31312312313123123123',
      },
      {
        key: 'Càrrec',
        value: 'membre',
      },
    ],
    isAdmin: false,
  },
  {
    id: uuid.v4,
    userId: 'd839281c-e043-4219-9792-fc5811343968',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Carnet Avancarga',
        value: '21-08-2020 fins 21-08-2025',
      },
    ],
    isAdmin: false,
  },
  {
    id: uuid.v4,
    userId: 'c935a52f-92b8-4663-9efb-22c9e05a0c56',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Compte bancari',
        value: 'ES31312312313123123123',
      },
    ],
    isAdmin: false,
  },
  {
    id: uuid.v4,
    userId: '059d22f9-b2f6-4cb3-88c2-8f1ba5959eac',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Càrrec',
        value: 'Membre',
      },
    ],
    isAdmin: false,
  },
  {
    id: uuid.v4,
    userId: '0d0ef495-08a1-4b38-8194-cc1aea2aa23b',
    organizationId: 'f0e3df76-c09e-4505-9d3d-cf112b6cca2e',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Càrrec',
        value: 'El President',
      },
    ],
    isAdmin: false,
  },
  {
    id: uuid.v4,
    userId: 'e96c49f4-06d8-4f87-9bb0-5178c0b629c0',
    organizationId: '668dab12-709a-4de3-9696-badea7fc09da',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Carnet Avancarga',
        value: '21-08-2020 fins 21-08-2025',
      },
      {
        key: 'Compte bancari',
        value: 'ES31312312313123123123',
      },
      {
        key: 'Càrrec',
        value: 'VOCAL 1',
      },
    ],
    isAdmin: false,
  },
  {
    id: uuid.v4,
    userId: 'b49d0840-ff97-4745-b96f-22c094cf3949',
    organizationId: '668dab12-709a-4de3-9696-badea7fc09da',
    memberSince: '2022-01-20',
    isActive: true,
    characteristics: [
      {
        key: 'Carnet Avancarga',
        value: '21-08-2020 fins 21-08-2025',
      },
      {
        key: 'Compte bancari',
        value: 'ES31312312313123123123',
      },
      {
        key: 'Càrrec',
        value: 'Fiança',
      },
    ],
    isAdmin: true,
  },
];
