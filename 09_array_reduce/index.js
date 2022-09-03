var number = [1, 2, 3, 4];

// CÔNG THỨC 1:
var result = number.reduce(function(a, b) {
    return a+b;
});

console.log(result);

// CÔNG THỨC 2: thêm tham số thứ 2 cho hàm reduce
// THỰC TẾ
var orders = [
    { name: "A", quantity: 2, unitPrice: 100},
    { name: "B", quantity: 1, unitPrice: 400},
    { name: "C", quantity: 5, unitPrice: 15},
]

// Tính tổng đơn hàng sau mỗi lần thêm giỏ:
totalMonney = orders.reduce((currentTotal, item) => {
    return currentTotal + item.quantity * item.unitPrice;


}, 0);

console.log(totalMonney);