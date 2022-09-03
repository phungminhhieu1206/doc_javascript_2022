// array old methods: push, pop, shift, unshift
// array.map(): Ánh xạ tập hợp các tập hợp phần tử trong mảng đấy thành các phần tử mới theo một quy tắc nào đấy được định nghĩa bởi một function (cụ thể: callback function)
// map đưa ra mảng cùng cỡ !

var number = [1, 2, 3, 4];

// TH1: Bình phương các số trong mảng
var square_number = number.map(function(x) {
    return x*x;
});

console.log(square_number);

// TH2: Lập phương các số trong mảng
var cube_number = number.map(function(x) {
    return x*x*x < 30;
});

console.log(cube_number);