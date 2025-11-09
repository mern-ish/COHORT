//String and method


let str = "Manish"
console.log(str);
//methods

// console.log(str.length);
// console.log(str.slice(-2));
// console.log(str.substring(2,5))
// console.log(str.substr(2,4));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

let str1 = "    Kumar";
//concat()
;
console.log(str.concat(str1));

//trim()
console.log(str1)
console.log(str1.trim())

let text = "ay name is Manish Kumar Singh  . manish is best in sport.Manish is best in All"

console.log(text.lastIndexOf("Kumar"))
console.log(text.includes("Kumar"))
console.log(text.endsWith("My"))

//replace()
console.log(text.replace("Manish","Wisdom"))
console.log(text.replaceAll("Manish","Wisdom"))

//split()

let arr = text.split(" ");

console.log(arr)


// charAt()

console.log(text.charAt(1));
//charCodeAt()
console.log(text.charCodeAt(4))