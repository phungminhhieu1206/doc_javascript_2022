// Khác filter là lọc theo tính chất x:
// array find lọc theo tính chất x, lấy ra phần tử đầu tiên thỏa mãn và dừng filter

var number = [1, 2, 3, 4];

// Đưa vào 1 callback function, duyệt lần lượt từng phần tử theo thứ tự, tại index nào cho giá trị true thì return phần tử đó !
var first_even_number = number.find((item) => {
    return item % 2 == 0;
})

console.log(first_even_number);