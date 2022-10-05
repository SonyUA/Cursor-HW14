/*Завдання 1:

Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:

const idGenerator = createIdGenerator();

idGenerator.next().value -> 1

idGenerator.next().value -> 2

idGenerator.next().value -> 3

... */

function getNumber(a) {
    return (a += 1);
}

let idGenerator = createIdGenerator();

function* createIdGenerator() {
    let num = 0;
    while (true) {
        num = getNumber(num);
        yield num;
    }
}

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
