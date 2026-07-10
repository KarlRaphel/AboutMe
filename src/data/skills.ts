export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: '多模态大模型与算法',
    items: [
      'PyTorch / 深度学习',
      'LLM SFT / PEFT / LoRA',
      '多模态 RAG / 跨模态对齐',
      '语音与时序信号处理',
      '少样本 / 鲁棒与泛化学习',
      'VLA 多模态大模型',
    ],
  },
  {
    category: 'Agent、具身智能与端侧部署',
    items: [
      '多 Agent 编排 / 工具调用',
      '多级记忆 / 混合规划',
      'ROS2 / 机器人控制',
      'SLAM 自主导航建图',
      'C++ 推理加速引擎',
      'OpenVINO / ONNX',
      '模型量化与稀疏化',
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
