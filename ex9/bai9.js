let number = +prompt("hay nhap vao mot so nguyen");
let check = true;
if (number < 2  ){
    console.log("khong phai so nguyen to");
} else {    
    for (let i = 2 ; i < number ; i++) {
        if(number % i === 0 ) {
            check = false
            break;
        }
    }
    if(check) {
        console.log("so nguyen to");
    }else{
        console.log("khong phai so nguyen to");
    }
}