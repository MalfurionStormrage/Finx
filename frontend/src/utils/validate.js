export const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
    if (emailRegex.test(email)) return email
    else return false
}

export const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if (passwordRegex.test(password)) return password
    else return false
}

export const validateUsername = (username) => {
    //Alphanumeric string that may include _ and – having a length of 3 to 25 characters –
    const usernameRegex = /^[a-zA-z ]{3,25}$/
    if (usernameRegex.test(username)) return username
    else return false
}

export const validateProducto = (Producto) => {
    //Alphanumeric string that may include _ and – having a length of 3 to 25 characters –
    const ProductoRegex = /^[a-zA-z0-9 ]{3,25}$/
    if (ProductoRegex.test(Producto)) return Producto
    else return false
}

export const validatePhone = (Phone) => {
    //Alphanumeric string that may include _ and – having a length of 3 to 16 characters –
    const PhoneRegex = /^[0-9]{10,10}$/
    if (PhoneRegex.test(Phone)) return Phone
    else return false
}

export const validateNumber = (number) => {
    const PhoneRegex = /^[0-9]{1,8}$/
    if (PhoneRegex.test(number)) return number
    else return false
}

export const validateTextarea = (Textarea) => {
    //Alphanumeric string that may include _ and – having a length of 3 to 25 characters –
    const usernameRegex = /^[a-zA-z0-9 ]{3,150}$/
    if (usernameRegex.test(Textarea)) return Textarea
    else return false
}

export const handleValidlength = (value) => {
    if (value.length >= 6) return value
    else return false
}

export const handleVerificarPassword = (value, password) => {
    if (value === password) return value
    else return false
}