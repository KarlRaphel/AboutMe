export interface Repo {
  id: string
  name: string
  url: string
  stars: number
  description: string
  highlight: string
  tags: string[]
  relatedProject: string | null
  stats?: { label: string; value: string }[]
}

export const repos: Repo[] = [
  {
    id: 'repo-bearllm',
    name: 'BearLLM',
    url: 'https://github.com/SIA-IDE/BearLLM',
    stars: 119,
    description: 'AAAI 2025 顶会配套开源框架，基于指令微调（PEFT/LoRA）的工业设备维保自然语言问答交互框架。',
    highlight: '独立开源 AAAI-2025 顶会论文配套代码，因其优秀的架构清晰度与拓展性获开源社区广泛认可。衍生扩展商业系统已在相关企业落地应用，创造出超 200 万元的直接经济价值。',
    tags: ['LLM', 'PEFT / LoRA', '工业智能', '振动信号'],
    relatedProject: 'bearllm',
    stats: [
      { label: '月下载量', value: '3,000+' },
    ],
  },
  {
    id: 'repo-elsevier-tracker',
    name: 'Elsevier Tracker Web',
    url: 'https://github.com/KarlRaphel/elsevier-tracker-web',
    stars: 121,
    description: '独立开发并长期维护的 Elsevier 期刊审稿进度追踪工具。Vue 框架全平台响应式 Web 应用，直击全球科研工作者痛点。',
    highlight: '实际部署的 Web 版本独立访问用户超 12,000，总计使用量突破 96,000 人次，展现了优秀的独立产品开发、部署与运维闭环能力。',
    tags: ['Vue', '全栈', '工具产品', '独立开发'],
    relatedProject: null,
    stats: [
      { label: '独立用户', value: '12,000+' },
      { label: '总使用量', value: '96,000+' },
    ],
  },
]

export function getRepoById(id: string): Repo | undefined {
  return repos.find(r => r.id === id)
}
