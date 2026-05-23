export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: '大模型与核心算法',
    items: [
      'PyTorch / 深度学习',
      'LLM 微调 / RAG',
      'VLA 多模态大模型',
      '音视频流式处理',
      '物理信号智能诊断',
      '少样本与泛化学习',
    ],
  },
  {
    category: '具身智能与端侧部署',
    items: [
      'ROS2 / 机器人控制',
      'SLAM 自主导航建图',
      'C++ 推理加速引擎',
      'OpenVINO / ONNX',
      '模型量化与稀疏化',
      '传感器与 IoT 通信',
    ],
  },
  {
    category: '全栈架构与系统工程',
    items: [
      'Vue3 / 前端可视化',
      'FastAPI / RESTful',
      'Electron 桌面端',
      '微信小程序开发',
      '分布式时序数据库',
      'Linux / Docker生态',
    ],
  },
]
