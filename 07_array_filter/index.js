// Lọc qua các phần tử được chỉ định (map là lần lượt)
// Chẳng hạn: 4 phần tử qua (filter function) --> 2 phần tử được lọc ra

var number = [1, 2, 3, 4];

// Đưa vào 1 callback function, trả về true/false, nếu true thì lấy ra phần tử tại index đó
even_number = number.filter((item) => {
    return item % 2 == 0;
})

console.log(even_number);