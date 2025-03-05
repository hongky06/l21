let number1 = +prompt("so thu nhat");
let number2 = +prompt("so thu hai");
let number3 = +prompt("so thu ba");
if( number1 === 0 ) {
    console.log("vì a bằng 0 nên phương trình bậc 1 ")
}else{
    let denta = parseFloat(Math.sqrt(Math.pow(number2, 2) - (4 * number1 * number3)));
    //float : chuyển thành dạng số thập phân 
    //Math.pow ( ten bien , số mũ )
    if (denta == 0) {
        console.log(` Denta = ${denta.toFixed(1)} = 0 : phương trinh có nghiệm kép`);
        let x1 = parseFloat((-number2) / (2 * (number1)))
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x1}`);
    } else if (denta > 0) {
        console.log(` Denta = ${denta.toFixed(1)} > 0 : phương trinh có hai nghiệm phân biệt`);
        let x3 = parseFloat (  ((-number2) + (Math.sqrt(denta)) )  / (2 * (number1)) )  ; 
        let x4 = parseFloat (  ((-number2) - (Math.sqrt(denta)) )  / (2 * (number1)) )  ;
        console.log(`x1 = ${x3.toFixed(2)}`);
        console.log(`x2 = ${x4.toFixed(2)}`);
    }else {
        console.log(` Denta = ${denta.toFixed(1)} < 0 : phương trinh vô nghiệm`);
    }
    
}




