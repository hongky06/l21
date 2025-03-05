for(let i = 100 ; i < 999 ; i++ ) {
    let hangtram = Math.floor( i / 100 )
    let hangchuc = Math.floor( ( i / 10 ) % 10 )
    let hangdonvi = Math.floor( i % 10 )
    let total = Math.pow(hangtram , 3 ) + Math.pow(hangchuc , 3 ) + Math.pow(hangdonvi , 3 ) 
if(total === i ) {
    console.log(i);
}
}