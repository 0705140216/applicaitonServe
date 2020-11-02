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
    name: "传染病预警",
    port: 6505,
    applicationId: 10,
  },
  {
    project: "stu-morningexam-application",
    name: "晨午(晚)检",
    port: 6506,
    applicationId: 11,
  },
    {
    project: "stu-classroom-application",
    name: "教室管理",
    port: 6507,
    applicationId: 12,
  },
    {
    project: "stu-faculty-application",
    name: "教职工管理",
    port: 6508,
    applicationId: 13,
  },
    {
    project: "stu-clinic-application",
    name: "医务室管理",
    port: 6509,
    applicationId: 14,
  },
    {
    project: "stu-dormitory-application",
    name: "宿舍管理",
    port: 6510,
    applicationId: 15,
  },
    {
    project: "stu-campushealth-application",
    name: "校园卫生管理",
    port: 6511,
    applicationId: 16,
  },
    {
    project: "stu-diagnose-application",
    name: "诊疗管理",
    port: 6512,
    applicationId: 17,
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
const semsPort = [];
projectList = projectList.filter((i) => {
  return semsPort.length ? semsPort.includes(i.port) : true;
});

exports.project = projectList;