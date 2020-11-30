const {
  project
} = require('./project.js')
const projectList = project.map(i => {
  return i.project
})


const fs = require("fs");
const path = require("path");
const sub_app_ath = path.resolve();
const sub_apps = fs
  .readdirSync(sub_app_ath)
  .filter((i) => {
    return projectList.includes(i)
  });

const sub_apps_name = project.map(i => {
  return i.name
})



//上传到服务器目录以及本地目录
// 

 
 
const {exec} = require('child_process');
const compressing = require('compressing');
const Client = require('ssh2').Client;
 
// 服务器文件地址
const server_url="/data/wwwroot/";
 
//服务器列表
const serverList=[
    {
        nm:"健康平台服务器",//服务器名称（自定义）
        sv:{
            host: '183.249.1.200', // 服务器地址
            port: '60202', // 端口号
            username: 'web', // 用户名
            password: 'web2020' // 密码
        },
    }
]
let server_key=0;
 


//遍历循环上传,每次上传建立连接池,因为一个连接池太卡,导致程序崩溃
function handlerForEach(){
    sub_apps.forEach(async i => {
        setTimeout(()=>{
            conn(i)
        },1000)
    });
  }
  
  handlerForEach()
  
 
function conn(i) {   // 连接服务器
    var connect = new Client()
    var name=serverList[server_key].nm
    let {name:projectName}=project.find(item=>item.project==i)  
    connect.on('ready', () => {
        console.log('========连接'+name+'成功========')
        console.log(`正在上传【${projectName}】至服务器请稍后`)
        upload(i,connect)
    }).on('error', (err) => {
        //链接出错尝试再次连接
        setTimeout(() => {
            console.error(`链接出错，正在尝试重新链接【${projectName}】至服务器请稍后`)
            conn(i)
        }, 2000);
    }).on('end', () => {
        console.log('========连接'+ name +'关闭========')
        if(serverList[server_key+1]&&name){
            server_key++;
            conn()
        }
    }).on('close', (err) => {
        if (err) {
            console.log('========连接'+name+'出错========')
        }
    }).connect(serverList[server_key].sv)
}
 
//链接
// conn()


function upload(i,connect) { // 上传
    let {name,localName,severName,port}=project.find(item=>item.project==i)  //应用名称//本地文件夹名称 //网络服务名称
    let allPath=path.join(sub_app_ath,'allTest',localName)
    console.log(`************************************************************************`)
    console.log(`应用:${name}【${localName}.zip】准备上传至${severName}文件夹中`)
    console.log(`本地上传目录:${allPath}.zip`)
    console.log(`服务器上传目录:${server_url}${severName}/${localName}.zip`)
    console.log(`************************************************************************`)
    connect.sftp((err, sftp) => {
        // if (err) throw err
        // 第一个参数为要上传的文件名, 第二个参数为服务器目录
        sftp.fastPut(`${allPath}.zip`, `${server_url}${severName}/${localName}.zip`, (err, res) => { 
            if (err) {
                console.log(err)
                console.error('========'+name+'上传失败========')
                connect.end()
                return
            }
            unzipShell({name,severName,localName,port},connect)
        })
    })
}
 
function unzipShell({name,severName,localName,port},connect) {    // 服务器解压命令
    connect.shell((err, stream) => {
        // if (err) throw err
        let buf = "";
        stream.on('close', err => {
            connect.end()
            if (err) {
                console.error(err)
                return
            }
        }).on('data', data => {
             buf += data
        })
        stream.write(`cd ${server_url}${severName} \nnext\n`)
        stream.write(`unzip -o ${localName}.zip \nnext\n`)
        stream.write(`rm -r -f ${localName}.zip \nexit\n`)
        console.log(`******************${port}${name}上传成功***********************************`)
    })
}
