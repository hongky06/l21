let numbers = [];
let total = 0 
for (let i = 0 ; i < 5 ; i++) {
    let number = prompt(`moi ban nhap so thu ${i}` )
    numbers.push(number)
}

for (let i = 0; i < 5 ; i++) {
if(numbers[i] % 2 !== 0  ) {
    total++
}
}
console.log(`"Tổng các số lẻ là:" ${total}`);
