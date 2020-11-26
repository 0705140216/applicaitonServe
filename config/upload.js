const Client = require('ssh2').Client;

const server = {
    host : '183.249.1.200',
    prot : 60202,   //默认的不用该如果没有修改过的话
    username : 'web',
    password : 'web2020' 
}
const connect = new Client()
