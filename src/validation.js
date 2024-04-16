export function isValidLengthFirstName(text2) {
    if (text2.length > 15) {
        console.log("Длина превышает 15 символов")
    } else if (text2.length < 2) {
        console.log("Длина меньше 2 символов")
    }
}
export function isValidFirstName(text) {
    // Проверка имени регулярным выражением
    let result = true;
    if (Boolean(text) !== false) {
        const pattern = /^[а-яёА-ЯЁ]+$/;
        result = pattern.test(text);
    }
    if (result === false) {
        console.log("Допустимы только символы кириллицы")
    }
}
