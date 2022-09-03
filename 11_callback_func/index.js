// Truyền hàm như 1 tham số của hàm khác
 var coffeeMachine = {
    makeCoffee: function(onFinish) {
        console.log("Making coffee ..."); // 1
        onFinish();
    }
 };

// TH1: Muốn làm việc x sau khi xong việc 1
 coffeeMachine.makeCoffee(() => {
    console.log("Tít tít");
 });

 // TH2: Muốn làm việc y sau khi xong việc 1
 coffeeMachine.makeCoffee(() => {
    console.log("Đi lấy đồ");
 })