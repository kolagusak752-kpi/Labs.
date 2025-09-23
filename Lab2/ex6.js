const phoneBook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Socrates", phone: "+380501112233" },
  { name: "Plato", phone: "+380671234567" },
  { name: "Aristotle", phone: "+380931234567" }
];
const findPhoneByName = (name) => {
    for (const i of phoneBook) {
        if (i.name === name) {
            return i.phone
            }
        }return "Not found"
}
console.log(findPhoneByName("Plato"))
console.log(findPhoneByName("Kolya"))