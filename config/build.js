/**
 *  auth: weilan
 *  读取文件夹并打包项目
 */
const {
  project
} = require('./project.js')

const projectList = project.map(i => {
  return i.project
})

// 压缩工具
const compressing = require('compressing')


const fs = require('fs');
const path = require('path');
const util = require('util');
const sub_app_ath = path.resolve();
const sub_apps = fs
  .readdirSync(sub_app_ath)
  .filter((i) =>
    projectList.includes(i)
  );
const sub_apps_name = project.map(i => {
  return i.name
})

const preview = process.argv[2];
let exceData = 'yarn run build'
if (preview == 'preview') {
  exceData = 'yarn run build:preview'
}else if(preview == 'test'){
  exceData = 'yarn run build:test'
}
console.log(exceData)

console.log(`即将进入所有模块并打包项目：${JSON.stringify(sub_apps_name)}`)

const exec = util.promisify(require('child_process').exec);

function build() {

  sub_apps.forEach(async i => {
    let name=project.find(item=>item.project==i).name
    let localName=project.find(item=>item.project==i).localName
    console.log(`${i} ${name}开始打包`)
    const {
      stdout,
      stderr
    } = await exec(exceData, {
      cwd: path.resolve(i)
    });
    //并启动压缩方法
    compress(i,name,localName);
    console.log(i, '成功', stdout)
    // console.error(i, '失败', stderr)
  });
};

build();

process.on('unhandledRejection', (reason, p) => {
  console.log('失败', p, 'reason:', reason);
});


function compress (i,name,localName) {
  console.log(`*******${name}压缩中*******`);

  let localPath=path.join(sub_app_ath,i,localName)
  let allPath=path.join(sub_app_ath,'allTest',localName)
  fs.exists( `${allPath}.zip`,function(exists){
    if(exists){
      fs.unlink(`${allPath}.zip`, function(err){
     if(err){
          throw err;
     }
         //使用导入的compressing插件压缩我们需要的文件
    //第一个参数是要压缩的文件夹，第二个参数是压缩过后的压缩包名称
    zipFile(localPath,allPath,function(err)
    {
      console.log(`*******${name}压缩成功*******`);
    },true)
})
    }
    else{
    //使用导入的compressing插件压缩我们需要的文件
    //第一个参数是要压缩的文件夹，第二个参数是压缩过后的压缩包名称
    zipFile(localPath,allPath,function(err)
      {
        console.log(`*******${allPath}.zip${name}压缩成功*******`);
      },true)
    }
});

    
}

function zipFile(files,zip_name,callback,isIgnoreBase)
{
  compressing.zip.compressDir(files,zip_name+'.zip',{ignoreBase:isIgnoreBase})
  .then(() => {
    callback(null,'ok')
   })
   .catch(err => {
    console.error(err);
    callback(err)
  })
}