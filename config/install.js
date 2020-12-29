/**
 *  读取文件夹并运行下载依赖
 */
const {
  project
} = require('./project.js')
const projectList = project.map(i => {
  return i.project
})


const fs = require("fs");
const path = require("path");
const util = require("util");
const sub_app_ath = path.resolve();
const sub_apps = fs
  .readdirSync(sub_app_ath)
  .filter((i) => {
    return projectList.includes(i)
  });

const sub_apps_name = project.map(i => {
  return i.name
})

console.log(
  `即将进入所有模块并下载依赖：${JSON.stringify(
    sub_apps_name
  )} ing... 批量下载所有项目依赖推荐使用 npm run cinit 或 npm run yarn`
);

const exec = util.promisify(require("child_process").exec);
// npm 源
const registry = process.argv[2];

let registry_script =
  registry === "cnpm" ?
  "cnpm install" :
  registry === "yarn" ?
  "yarn install" :
  "npm install";



function install() {
  sub_apps.forEach(async (i) => {
    if (!fs.existsSync(`${i}/package.json`)) {
      console.log(`${i} 应用缺少package.json文件，将跳过此应用`);
      return false;
    }
    // if (fs.existsSync(`${i}/node_modules`)) {
    //   console.log(`${i} 应用已检测到node_modules目录，将跳过此应用`);
    //   return false;
    // }
    console.log(`${i} 开始下载，耗时较久请耐心等待...`);
    const {
      stdout,
      stderr
    } = await exec(registry_script, {
      cwd: path.resolve(i),
    });
    console.log(i, "成功", stdout);
    console.error(i, "失败", stderr);
  });
}
// install();

process.on("unhandledRejection", (reason, p) => {
  console.log("执行失败", p, "reason:", reason);
});