/**
 * Hai loại vòng lặp: for loop & while loop
 */

// Vòng for cơ bản
for (let i=0; i<10; i++) {
    console.log(i);
}

// For .. of ..: Lặp qua các phần tử trong mảng
var employees = [
    {name: "Minh Hieu", age: 22},
    {name: "Hoang", age: 20},
    {name: "Xuan Hung", age: 24}
]
for (let e of employees) {
    console.log(typeof(e));
    console.log(`Nhan vien ${e.name}, ${e.age} tuoi`);
}

// For .. in .. : Lặp qua các key trong object
for (let e of employees) {
    for (let k in e) {
        console.log(e[k]);
    }
}