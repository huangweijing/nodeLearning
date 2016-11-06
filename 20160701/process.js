console.log(process.argv);

process.stdout.write("hello world\n");

process.stdin.on('data', function (data){
    process.stdout.write('read from console: ' + data.toString());
});

