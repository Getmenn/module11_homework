export function triangle (a,b,c){
    let total = '';
    if (a ** 2 + b ** 2 === c ** 2) {
        total= 'Это прямоугольный треугольник!';
    } else {
        total= 'Это не прямоугольный треугольник!';
    }
    return total;
}