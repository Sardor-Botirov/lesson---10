// Задача 1

// Функция сама понимает тип параметров и возвращает нужную минимальную цифру

function min(p1, p2) {
    if (typeof (p1, p2) === 'number') {
        console.log(Math.min(p1, p2));
    }
    if (typeof (p1 || p2) === 'object') {
        console.log(Math.min(p1[0], p1[1]));
    }
    if (typeof (p1 || p2) === 'object') {
        console.log(Math.min(p1.a, p1.b));
    }
}

min(1, 2)
min([1, 2])
min({ a: 1, b: 2 })



// Задача 2

// такие же условия как и на первой 
function min2(p1, p2) {
    if (typeof (p1 || p2) === 'object') {
        console.log(Math.min(p1.a, p1.b));
    }
    if (typeof (p1 || p2) === 'object') {
        console.log(Math.min(p1.a, p1.b, p1.c, p1.d));
    }
}
min2({ a: 1, b: 2 }) // 1
min2({ a: -1, b: 5, c: 10, d: 7 }) // -1

// Задача 3

// Создать функцию которая делает пропорции не в зависимости от каких либо цифр

function prop(p1, p2) {
    if (typeof (p1) === 'number') {
        p1 = p1 - ((p1 * p2) / 100)
        console.log(p1);
    }
    if (typeof (p1) === 'object') {
        console.log(p1 = p1[1] - ((p1[1] * p1[2]) / 100));
    }
    if (typeof (p1) === 'object') {
        console.log(p1[0] = p1[0].a - ((p1[0].a * p1[0].b) / 100))
    }
}

prop([{ a: 10000, b: 20 }])