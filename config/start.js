const {
  project
} = require('./project.js')
const projectList = project.map(i => {
  return i.project
})

const fs = require('fs');
const path = require('path');
const util = require('util');
const sub_app_ath = path.resolve();
const sub_apps = fs
  .readdirSync(sub_app_ath)
  .filter((i) => {
    return projectList.includes(i)
  });

const sub_apps_name = project.map(i => {
  return i.name
})


console.log(`即将进入所有模块并启动服务：${JSON.stringify(sub_apps_name)}`)

const exec = util.promisify(require('child_process').exec);
const maxBufferLength = 2000 * 1024;

function start() {
  sub_apps.forEach(async i => {
    if (!fs.existsSync(`${i}/package.json`)) {
      console.log(`${i} 应用缺少package.json文件，将跳过此应用`)
      return false;
    }
    if (!fs.existsSync(`${i}/node_modules`)) {
      console.log(`${i} 应用未检测到node_modules目录，将跳过此应用`)
      return;
    }

    let port = project.find(item => item.project == i).port || '暂无端口'
    console.log(`${i} 开始启动... 端口：localhost:${port} 全部启动需要时间，请稍加等候，或刷新浏览器即可`)

    await exec('yarn run serve', {
      cwd: path.resolve(i),
      maxBuffer: maxBufferLength
    });
  });

};

start();

process.on('unhandledRejection', (reason, p) => {
  console.log('错误提示', p, 'reason:', reason);
});