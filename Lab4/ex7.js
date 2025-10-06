const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = (obj) => {
    personsAges = Object.keys(obj).reduce((acc, person) => {
        const age = persons[person].died - persons[person].born
        acc[person] = age
        return acc
    }, {})
    return personsAges

}
console.log(ages(persons))