/**
 * Trong lập trình, 2 thành phần quan trọng nhất để cấu tạo nên chương trình: Biến + Hàm (Function)
 * Function: Sẽ thực hiện một login, tác vụ nào đấy.
 */

// Hàm tính tổng hai số:
function getSum2Number(a, b) {
    return a + b;
}

// Hàm gấp đôi số đầu vào:
var doubleX = function(x) {
    return x * 2;
}

console.log(`Tổng 5 + 8 = ${getSum2Number(5, 8)}`);
console.log(`Gấp đôi số 5 được số ${doubleX(5)}`);