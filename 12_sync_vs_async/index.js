// Sync: đồng bộ
// Async: không đồng bộ (nhằm tiết kiệm thời gian chờ tác vụ)
var fs = require('fs');

// 1. Hàm Sync: Đợi thực hiện (đồng bộ)
// console.log('Start');
// var song1 = fs.readFileSync('song1.txt', {encoding: 'utf8'});
// console.log(song1);
// var song2 = fs.readFileSync('song2.txt', {encoding: 'utf8'});
// console.log(song2);
// console.log('End');

/**
 * Đồng bộ - tuần tự, từ dòng trên xuống dòng dưới.
 * Tình huống thực tế: Pha cafe --> mặc quần áo --> dọn giường. Nếu đợi tuần tự thì mất thời gian !
 * 2. Async: Dùng thêm callback
 * Start, Đọc file, End, thực hiện luôn không chờ đọc file xong mới End, lúc nào đọc file xong thì hiện kqua đọc file sau !
 */
 
console.log('Start');
fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, data) {
    console.log(data);
});
console.log('End');


/**
 * Trong JS nói chung: Các thao tác đọc viết file, network
 * Khi tải trang web về thì tốn tgian tải trang web về tốn tgian --> Dùng Async nhiều, không dùng Sync !
 */