const program = require('commander');

program.parse(process.argv); //开始解析用户输入的命令
let args = program.args;
if (args.length) {
  require('./commands/' + args[0] + '.js')({PageName: args[1]}); // 根据不同的命令转到不同的命令处理文件
} else {
  console.error(`only the following commands supported: initpage PageName`)
}

