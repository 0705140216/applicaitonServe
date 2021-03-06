let projectList = [{
  project: "stu-caries-application",
  name: "龋齿筛查",
  port: 6501,
  applicationId: 3,
  localName: 'caries_test',
  distName: 'caries_dist',
  severName: 'health-test.qdsgvision.com_caries'
},
{
  project: "stu-physical-application",
  name: "体检筛查",
  port: 6502,
  applicationId: 4,
  localName: 'physical_test',
  distName: 'physical_dist',
  severName: 'health-test.qdsgvision.com_physical'
},
{
  project: "stu-sickleave-application",
  name: "请假因病缺课",
  port: 6503,
  applicationId: 8,
  localName: 'sickleave_test',
  distName: 'sickleave_dist',
  severName: 'health-test.qdsgvision.com_sickleave'
},
{
  project: "stu-illnesreport-application",
  name: "病情报备",
  port: 6504,
  applicationId: 9,
  localName: 'illnesreport_test',
  distName: 'illnesreport_dist',
  severName: 'health-test.qdsgvision.com_illnesreport'
},
{
  project: "stu-diseasewarn-application",
  name: "传染病预警",
  port: 6505,
  applicationId: 10,
  localName: 'diseasewarn_test',
  distName: 'diseasewarn_dist',
  severName: 'health-test.qdsgvision.com_diseasewarn'
},
{
  project: "stu-morningexam-application",
  name: "晨午(晚)检",
  port: 6506,
  applicationId: 11,
  localName: 'morningexam_test',
  distName: 'morningexam_dist',
  severName: 'health-test.qdsgvision.com_morningexam'
},
{
  project: "stu-classroom-application",
  name: "教室管理",
  port: 6507,
  applicationId: 12,
  localName: 'classroom_test',
  distName: 'classroom_dist',
  severName: 'health-test.qdsgvision.com_classroom'
},
{
  project: "stu-faculty-application",
  name: "教职工管理",
  port: 6508,
  applicationId: 13,
  localName: 'faculty_test',
  distName: 'faculty_dist',
  severName: 'health-test.qdsgvision.com_faculty'
},
{
  project: "stu-clinic-application",
  name: "医务室管理",
  port: 6509,
  applicationId: 14,
  localName: 'clinic_test',
  distName: 'clinic_dist',
  severName: 'health-test.qdsgvision.com_clinic'
},
{
  project: "stu-dormitory-application",
  name: "宿舍管理",
  port: 6510,
  applicationId: 15,
  localName: 'dormitory_test',
  distName: 'dormitory_dist',
  severName: 'health-test.qdsgvision.com_dormitory'
},
{
  project: "stu-campushealth-application",
  name: "校园卫生管理",
  port: 6511,
  applicationId: 16,
  localName: 'campushealth_test',
  distName: 'campushealth_dist',
  severName: 'health-test.qdsgvision.com_campushealth'
},
{
  project: "stu-diagnose-application",
  name: "诊疗管理",
  port: 6512,
  applicationId: 17,
  localName: 'diagnose_test',
  distName: 'diagnose_dist',
  severName: 'health-test.qdsgvision.com_diagnose'
},
{
  project: "stu-diagnose-application",
  name: "诊疗管理",
  port: 6512,
  applicationId: 17,
  localName: 'diagnose_test',
  distName: 'diagnose_dist',
  severName: 'health-test.qdsgvision.com_diagnose'
},
{
  project: "stu-eyescreen-application",
  name: "视力筛查",
  port: 6513,
  applicationId: 2,
  localName: 'eyescreen_test',
  distName: 'eyescreen_dist',
  severName: 'health-test.qdsgvision.com_eyescreen'
},
{
  project: "stu-dieasescreen-application",
  name: "常见病筛查",
  port: 6514,
  applicationId: 18,
  localName: 'dieasescreen_test',
  distName: 'dieasescreen_dist',
  severName: 'health-test.qdsgvision.com_dieasescreen'
},
{
  project: "stu-schoolenv-application",
  name: "教学环境监测",
  port: 6515,
  applicationId: 19,
  localName: 'schoolenv_test',
  distName: 'schoolenv_dist',
  severName: 'health-test.qdsgvision.com_schoolenv'
},
{
  project: "stu-questionnaire-application",
  name: "问卷管理",
  port: 6516,
  applicationId: 20,
  localName: 'questionnaire_test',
  distName: 'questionnaire_dist',
  severName: 'health-test.qdsgvision.com_questionnaire'
},
{
  project: "stu-constitution-application",
  name: "体质筛查",
  port: 6517,
  applicationId: 21,
  localName: 'constitution_test',
  distName: 'constitution_dist',
  severName: 'health-test.qdsgvision.com_constitution'
},
{
  project: "stu-bianalysis-application",
  name: "BI数据分析",
  port: 6518,
  applicationId: 22,
  localName: 'bianalysis_test',
  distName: 'bianalysis_dist',
  severName: 'health-test.qdsgvision.com_bianalysis'
},
{
  project: "stu-health-admin",
  name: "学生健康平台运维",
  port: 8889,
  applicationId: "",
  localName: 'console_test',
  distName: 'console_dist',
  severName: 'health-console-test.qdsgvision.com'
},
{
  project: "student-health-platform",
  name: "学生健康平台业务",
  port: 8888,
  applicationId: "",
  localName: 'health_main_test',
  distName: 'health_main_dist',
  severName: 'health-test.qdsgvision.com'
},
];

//添加常用方案 以端口号作为唯一id
const semsPort = [];

projectList = projectList.filter((i) => {
  return semsPort.length ? semsPort.includes(i.port) : true;
});

exports.project = projectList;