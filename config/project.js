let projectList = [{
    project: "stu-caries-application",
    name: "龋齿筛查",
    port: 6501,
    applicationId: 3,
  },
  {
    project: "stu-physical-application",
    name: "体检筛查",
    port: 6502,
    applicationId: 4,
  },
  {
    project: "stu-sickleave-application",
    name: "请假因病缺课",
    port: 6503,
    applicationId: 8,
  },
  {
    project: "stu-illnesreport-application",
    name: "病情报备",
    port: 6504,
    applicationId: 9,
  },
  {
    project: "stu-diseasewarn-application",
    name: "疾病预警",
    port: 6505,
    applicationId: 10,
  },
  {
    project: "stu-morningexam-application",
    name: "晨检",
    port: 6506,
    applicationId: 11,
  },
  {
    project: "stu-health-admin",
    name: "学生健康平台运维",
    port: 8889,
    applicationId: "",
  },
  {
    project: "student-health-platform",
    name: "学生健康平台业务",
    port: 8888,
    applicationId: "",
  },
];

//添加常用方案 以端口号作为唯一id
const semsPort = [6501,6502,8888,8889];
projectList = projectList.filter((i) => {
  return semsPort.length ? semsPort.includes(i.port) : true;
});

exports.project = projectList;