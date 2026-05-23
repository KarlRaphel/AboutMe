export interface Education {
  id: string
  school: string
  major: string
  degree: string
  period: string
  gpa: string
  summary: string
  highlights: string[]
  honors: string[]
}

export const educations: Education[] = [
  {
    id: 'edu-phd',
    school: '中国科学院大学（沈阳自动化研究所）',
    major: '检测技术与自动化装置',
    degree: '博士（直博）',
    period: '2022.09 — 至今',
    gpa: '3.84 / 4.0（前 3%）',
    summary: '在读期间以第一作者身份在 AAAI、EAAI、IEEE Transactions 等顶会期刊发表 6 篇论文，主导研发 3 个落地项目并推动商业变现超 3000 万元。担任党支部书记，获中国科学院优秀党员等荣誉。',
    highlights: [
      '大模型与多模态 LLM/VLM 应用',
      '具身智能与 VLA 控制',
      '工业智能感知与故障诊断',
      'AI 医疗与语音信号处理',
      '端侧推理部署 (C++/OpenVINO)',
    ],
    honors: ['中国科学院优秀党员', '三好学生', '党支部书记'],
  },
  {
    id: 'edu-undergrad',
    school: '河海大学（211）',
    major: '机械工程',
    degree: '本科',
    period: '2018.09 — 2022.06',
    gpa: '4.71 / 5.0（前 5%）',
    summary: '拥有扎实的数理与编程基础，英语能力优秀，以全校前 5%的专业成绩获得推免资格并攻读博士学位。担任校区社团联合会主席，具备优异的组织与沟通能力；在校期间曾获全国智能机器人大赛一等奖、国家奖学金等奖项和荣誉。',
    highlights: [
      '高等数学 & 线性代数',
      '概率论与数理统计',
      '信号与系统',
      '自动控制原理',
      'Python & C++ 编程',
      '机器人结构与运动学',
    ],
    honors: [
      '本科生国家奖学金',
      '数学建模美赛二等奖',
      '全国智能机器人大赛一等奖',
      '江苏省优秀学生干部',
      '江苏省优秀毕业设计',
      '河海大学优秀毕业生',
      '校区社团联合会主席',
    ],
  },
]
