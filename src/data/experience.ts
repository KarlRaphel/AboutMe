export interface Experience {
  id: string
  company: string
  role: string
  period: string
  logo: string
  summary: string
  tags: string[]
  sections: {
    title: string
    paragraphs: string[]
  }[]
}

export const experiences: Experience[] = [
  {
    id: 'huawei',
    company: '华为技术有限公司',
    role: 'AI 算法工程师实习生',
    period: '2025.08 — 2025.11',
    logo: '/assets/logos/huawei.png',
    summary: '参与流式个性化语音降噪算法研发，提出 PWS 渐进式权重稀疏化技术，覆盖 COSMOS 仿真、数据集构建、网络设计与训练、模型流式化、C++ 部署及测评流水线建设。',
    tags: ['个性化语音增强', 'PWS 渐进式权重稀疏化', 'COSMOS 仿真', '模型流式化', 'C++ 端侧部署'],
    sections: [
      {
        title: '仿真、数据与模型研发',
        paragraphs: [
          '面向复杂会议声学场景，参与 <strong>COSMOS 仿真</strong>、训练数据集构建以及个性化语音降噪网络的设计与训练，完善从场景模拟、数据生产到模型迭代的数据与算法闭环。',
        ],
      },
      {
        title: 'PWS 与模型流式化',
        paragraphs: [
          '提出<strong>渐进式权重稀疏化（PWS）</strong>技术，在训练中分阶段抑制并裁剪依赖未来信息的权重，将非因果模型逐步演进为支持严格因果推理的模型；同时参与网络结构与推理链路的流式化改进，在保留降噪性能的同时满足实时处理要求。',
        ],
      },
      {
        title: 'C++ 部署与测评流水线',
        paragraphs: [
          '打通从 PyTorch 训练模型到 C++ 推理部署的工程链路，将端侧单帧延迟控制在 <2ms。参与完善覆盖数据生成、离线效果、流式性能与端侧稳定性验证的完整测评机制和自动化流水线，相关技术最终集成至华为会议软终端。',
        ],
      },
    ],
  },
]

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(e => e.id === id)
}
