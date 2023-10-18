const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, //stadardinput
    output: process.stdout //모니터에 나오는 거
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){  //입력 종료 close
    str = input[0];
    console.log(str);
});

