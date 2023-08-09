const invitedGuests = [
  {
    name:'Haley',
    isFamily: true,
    isWeddingParty: true,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Teresa',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Ralph',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Hunter',
    isFamily: true,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Hailey',
    isFamily: true,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Erwin',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Sharon',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Alex',
    isFamily: false,
    isWeddingParty: true,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Randy',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Garrison',
    isFamily: true,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Anne',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Gary',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Barb',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Barbara',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Danny',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Daniel',
    isFamily: true,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Katelyn',
    isFamily: true,
    isWeddingParty: true,
    isDriving: false,
    isFlying: false,
  },
  {
    name:'Meggie',
    isFamily: true,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Meaghan',
    isFamily: true,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Justin',
    isFamily: false,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Mallory',
    isFamily: false,
    isWeddingParty: true,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Monic',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Joel',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Katy',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Jamie',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Kevin',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Courtney',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Cory',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Lydia',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Emma',
    isFamily: false,
    isWeddingParty: false,
    isDriving: false,
    isFlying: true,
  },
  {
    name:'Israel',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Sandra',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
  },
  {
    name:'Garrett',
    isFamily: false,
    isWeddingParty: false,
    isDriving: false,
    isFlying: true,
  },
  {
    name:'Susanna',
    isFamily: false,
    isWeddingParty: false,
    isDriving: false,
    isFlying: true,
  },
  {
    name:'Nicole',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
  {
    name:'Leif',
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: false,
  },
];

export function findInvitedGuest(name) {
  return invitedGuests.find((guest) => guest.name.toLowerCase() === name.toLowerCase());
}

export function storeUser(name) {
  const user = findInvitedGuest(name) || {
    name,
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
    isUnrecognisedUser: true,
  };
  localStorage.setItem('user', user.name);
  return user;
}

export default function useUser() {
  const username = localStorage.getItem('user');
  if (!username) {
    return null;
  }
  const user = findInvitedGuest(username);
  return user || {
    name: username,
    isFamily: false,
    isWeddingParty: false,
    isDriving: true,
    isFlying: true,
    isUnrecognisedUser: true,
  };
};