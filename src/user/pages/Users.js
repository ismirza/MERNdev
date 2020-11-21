import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ibrokhim',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQHRiy3cu7tx3g/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=V9WyxbAfX1alNpaq5mo5MoBREMctLpLEWtYaELjtdHo',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
