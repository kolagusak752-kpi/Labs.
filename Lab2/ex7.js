const phoneBook = {
  "Marcus Aurelius": "+380445554433",
  "Socrates": "+380501112233",
  "Plato": "+380671234567",
  "Aristotle": "+380931234567"
};
const findPhoneByName = (name) => {
    return phoneBook[name] || "Not found"
}
console.log(findPhoneByName("Plato"))
console.log(findPhoneByName("Kolya"))