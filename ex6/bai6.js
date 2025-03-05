let input = +prompt("moi ban nhap mot so");
if (isNaN(input) || Number.isInteger(input)) {
    console.log(`uoc chung cua ${input}  `)
    for (let i = 0; i < input; i++) {
        if (input % i === 0) {
            console.log(i);
        }
    }
}    