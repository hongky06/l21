let monnygoc = +prompt("so tien gui ban dau ");
let laixuat = +prompt ("nhap lai xuat hang thang");
let thang = +prompt("so thang gui cua ban");
let total = 0;
if(!isNaN(monnygoc) && !isNaN(laixuat) && !isNaN(thang) && thang > 0 && thang < 12) {
   total = total + monnygoc * Math.pow(1+ (laixuat / 100) , thang);
}else{
   console.log("moi nhap lai")
}
let lai = total - monnygoc
console.log(` tien nhan duoc : ${total.toFixed(3)}`);
console.log(`tien lai: ${lai.toFixed(3)} `)