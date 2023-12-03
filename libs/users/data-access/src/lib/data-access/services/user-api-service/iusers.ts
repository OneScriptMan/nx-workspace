export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUsersAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}

export interface IUsersAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUsersAddressGeo;
}

export interface IUsersAddressGeo {
  lat: string;
  lng: string;
}

export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
