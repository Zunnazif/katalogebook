let arr = [
  { no: 1, nama: "faiz" },
  {
    no: 2,
    nama: "ibnu",
  },
  {
    no: 3,
    nama: "siapa",
  },
];

let sorting = arr.sort((a, b) => b.no - a.no);
console.log(sorting);
