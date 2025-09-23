function fn() {
const person = {name: "Kolya"}
let person2 = {Name: "Andrey"}

person.name = "Vasya"// спроба змінити значення об'єкта , працює
person2.Name = "Petya"// спроба змінити значення об'єкта , працює

// спроба змінити посилання на об'єкт
//person = {name: "Vova"} // помилка , бо не можна змінювати посилання на об'єкт з const
person2 = {name: "Sasha"} // працює
}

