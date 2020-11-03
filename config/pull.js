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


console.log(`拉取所有模块代码：${JSON.stringify(sub_apps_name)}`)

const exec = util.promisify(require('child_process').exec);
const maxBufferLength = 2000 * 1024;

function start() {
  sub_apps.forEach(async i => {
  	let name=project.find(item=>item.project==i).name
    console.log(`${i} - ${name} 开始从git仓库下载`)

    const {
      stdout,
      stderr
    } = await exec("git pull", {
      cwd: path.resolve(i),
    });
    console.log(i,name, "成功", stdout);
  });

};

start();

process.on('unhandledRejection', (reason, p) => {
  console.log('错误提示', p, 'reason:', reason);
});