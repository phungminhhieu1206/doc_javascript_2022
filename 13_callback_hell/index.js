// Thực hiện dùng Async nhưng vẫn đọc file tuần tự ! --> Xử lý bất đồng bộ
var fs = require('fs');

/**
 * Hiện tượng dưới đây gọi là: callback-hell
 * Giải quyết được việc xử lý bất đồng bộ nhưng không ổn !
 * Code đây rất bẩn --> Khi đọc 10 file chẳng hạn !
 * => Xem bài 10: Promise
 */

fs.readFile('song1.txt', {encoding: 'utf8'}, function(err1, song1) {
    console.log(song1);
    fs.readFile('song2.txt', {encoding: 'utf8'}, function(err2, song2){
        console.log(song2);
        fs.readFile('song3.txt', {encoding: 'utf8'}, function(err3, song3){
            console.log(song3);
        })
    });
});

