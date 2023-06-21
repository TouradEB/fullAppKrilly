const dataUser = [
  {
    _id: "63701cc1f03239c72c00017f",
    name: "Konstantine",
    email: "kranstead0@narod.ru",
    password: "omMDCh",
    phoneNumber: "8346315874",
    role: "superadmin",
  },
  {
    _id: "63701cc1f03239c72c000180",
    name: "Marilyn",
    email: "mdonlon1@hostgator.com",
    password: "XRYBnKAfm",
    phoneNumber: "9981906117",
    role: "user",
  },
  {
    _id: "63701cc1f03239c72c000181",
    name: "Olly",
    email: "oveneur2@marketwatch.com",
    password: "WwDjOlH",
    phoneNumber: "3868813669",
    role: "admin",
  },
  {
    _id: "63701cc1f03239c72c000182",
    name: "Hale",
    email: "hpyrah3@bbc.co.uk",
    password: "vojl4bBDJ",
    phoneNumber: "8535391908",
    role: "superadmin",
  },
];

const dataImmobilier = [
  {
    owner: "63701cc1f03239c72c00017f",
    titre: "C6",
    adress: "34567890s",
    image: "img",
    category: "maission",
    avantage: "wifi",
    checkIn: 1,
    checkOut: 4,
    nomberchamber: 5,
  },
  {
    owner: "63701cc1f03239c72c000181",
    titre: "C6",
    adress: "34567890s",
    image: "img",
    category: "maission",
    avantage: "wifi",
    checkIn: 1,
    checkOut: 4,
    nomberchamber: 5,
    status: "accepte",
  },
];

const dataTransaction = [
  {
    userId: "6462b7203fed15fb1713142b",
    cost: "1254.25",
  },
  {
    userId: "646bf1a90d9594eea6bebf92",
    cost: "1254.25",
  },
];

const dataCategory = [
  {
    userId: "6462b7203fed15fb1713142b",
    name: "maison",
  },
  {
    userId: "6462b7203fed15fb1713142b",
    name: "appartement",
  },
  {
    userId: "6462b7203fed15fb1713142b",
    name: "vila",
  },
  {
    userId: "6462b7203fed15fb1713142b",
    name: "stoduio",
  },
];

module.exports = {
  dataUser,
  dataImmobilier,
  dataTransaction,
  dataCategory,
};
