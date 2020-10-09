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
let exceData = 'npm run build:prod'
if (preview == 'preview') {
  exceData = 'npm run build:preview'
}else if(preview == 'test'){
  exceData = 'npm run build:test'
}
console.log(exceData)

console.log(`即将进入所有模块并打包项目：${JSON.stringify(sub_apps_name)}`)

const exec = util.promisify(require('child_process').exec);

function build() {

  sub_apps.forEach(async i => {
    console.log(`${i} 开始打包,耗时较久请耐心等待...`)
    const {
      stdout,
      stderr
    } = await exec(exceData, {
      cwd: path.resolve(i)
    });

    console.log(path.resolve(i))
    console.log(i, '成功', stdout)
    // console.error(i, '失败', stderr)
  });
};
build();

process.on('unhandledRejection', (reason, p) => {
  console.log('失败', p, 'reason:', reason);
});