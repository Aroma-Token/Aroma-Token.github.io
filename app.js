function GetPassword() {
    const chars =
        "0123456789";
    let passwordlenght = 4
    let password = '';
    for (let i = 0; i < passwordlenght; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;
}