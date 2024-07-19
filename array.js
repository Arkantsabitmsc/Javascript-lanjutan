
const colors = ["black", "red", "blue", "yellow", "green"];
const indexOne = colors[0];
console.log(indexOne);
// output: black

// [1] untuk menganti red menjadi purple
const colors = ["black", "red", "blue", "yellow", "green"];
colors[1] = "purple";
console.log(colors);
// [“black”, “purple”, “blue”, “yellow”, "green"]

//push untuk memasukan item
const fruits = ["banana", "grape", "watermellon", "dragon fruit", "apple"]
fruits.push = "lemon"
console.log(fruits);

// pop untuk mengeluarkan item yg terakhir
const fruits = ["banana", "grape", "watermellon", "dragon fruit", "apple"]
fruits.pop()
console.log(fruits);

// shift untuk mengeluarkan item yg terakhir
const fruits = ["banana", "grape", "watermellon", "dragon fruit", "apple"]
fruits.shift()
console.log(fruits);

// unshift menambahkan item di index pertama
const fruits = ["banana", "grape", "watermellon", "dragon fruit", "apple"]
fruits.unshift("es teler")
console.log(fruits);


//filter = menampilkan nilai yg lebih tinggi
 


const numbers = [1, 2, 3, 4, 5]
const mutatedItems =numbers.map(function(i)
{ return i * 2
})
console.log(mutatedItems);
// output: [2, 4, 6, 8, 10]