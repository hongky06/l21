let tk = "abc@gmail.com"
let mk = "123456"





while (true) {

    let username = prompt("moi ban nhap tai khoan")
    let password = prompt("moi ban nhap ma khau")


    if (username === tk && mk === password) {
        console.log("chao mung ban ")
        alert("Chào mừng bạn!");
        break;
    } else {
        console.log("xin kiem tra lai tai khoan hoac mat khau")
        alert("Sai tài khoản hoặc mật khẩu. Vui lòng nhập lại!")
    }
}