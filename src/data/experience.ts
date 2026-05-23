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
    summary: '参与流式个性化语音降噪（PNR）算法研发，端侧单帧延迟 <2ms，落地华为会议软终端。',
    tags: ['语音降噪', 'C++ 端侧部署', '模型量化与裁剪', 'PyTorch', '流式音频处理'],
    sections: [
      {
        title: '核心算法突破与业务落地',
        paragraphs: [
          '我参与了<strong>流式个性化语音降噪（PNR）算法的核心研发</strong>，实现了强干扰下基于声纹的目标人声精准提取。针对业务实时性要求，我对模型进行深度优化，在保持精度的前提下将单帧处理延迟控制在 <2ms。核心算法成功集成至华为会议软终端，在真实场景下的降噪指标<strong>显著优于腾讯会议等头部竞品</strong>。',
        ],
      },
      {
        title: '端侧部署与工程化',
        paragraphs: [
          '我打通了从 PyTorch 算法预研到 C++ 端侧落地的完整工程链路。主导解决了跨平台编译及异构设备的兼容性难题，提升了流式音频链路的推理效率与稳定性，保障了业务平稳运行。',
        ],
      },
      {
        title: '评测体系构建',
        paragraphs: [
          '我从 0 到 1 搭建了涵盖复杂混响、多环境噪声及跨终端设备的仿真与实测混合评测流水线，并被采纳为团队标准化评测方案。同步推进前沿探索，完成了模型的复现与复杂声学场景下的性能测试。',
        ],
      },
    ],
  },
]

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(e => e.id === id)
}
