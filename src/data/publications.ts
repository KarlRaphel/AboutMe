export interface Paper {
  id: string
  title: string
  venue: string
  venueTag: string
  role: string
  year?: number
  relatedProject: string
  url: string
}

export const publishedPapers: Paper[] = [
  {
    id: 'paper-bearllm',
    title: 'BearLLM: A Prior Knowledge-Enhanced Bearing Health Management Framework with Unified Vibration Signal Representation',
    venue: 'AAAI 2025',
    venueTag: 'CCF-A | 人工智能顶会',
    role: '第一作者',
    year: 2025,
    relatedProject: 'bearllm',
    url: 'https://ojs.aaai.org/index.php/AAAI/article/view/34188',
  },
  {
    id: 'paper-eaai',
    title: 'A unified rotating machinery health management framework leveraging large language models for diverse components, conditions, and tasks',
    venue: 'Engineering Applications of Artificial Intelligence (EAAI)',
    venueTag: '中科院一区 TOP | CCF-C | IF=8.0',
    role: '第一作者',
    year: 2024,
    relatedProject: 'bearllm',
    url: 'https://www.sciencedirect.com/science/article/pii/S0952197625025758',
  },
  {
    id: 'paper-ieee-tr',
    title: 'A Lightweight Triple-Stream Network with Multi-sensor Fusion for Enhanced Few-Shot Learning Fault Diagnosis',
    venue: 'IEEE Transactions on Reliability',
    venueTag: 'JCR Q1 | IF=5.7',
    role: '第一作者',
    year: 2024,
    relatedProject: 'aeroengine',
    url: 'https://ieeexplore.ieee.org/document/10908717',
  },
  {
    id: 'paper-aeroengine',
    title: 'A Domain-Generalizable Framework for Online Aero-Engine Rub-Impact Detection Using Adversarial Learning and Multi-Source Label Aggregation',
    venue: 'IEEE Sensors Journal',
    venueTag: 'JCR Q1 | IF=4.5',
    role: '第一作者',
    year: 2024,
    relatedProject: 'aeroengine',
    url: '',
  },
  {
    id: 'paper-mst',
    title: 'Adversarial training of multi-scale channel attention network for enhanced robustness in bearing fault diagnosis',
    venue: 'Measurement Science and Technology',
    venueTag: 'JCR Q1 | IF=3.4',
    role: '第一作者',
    year: 2024,
    relatedProject: 'aeroengine',
    url: 'https://iopscience.iop.org/article/10.1088/1361-6501/ad2828/pdf',
  },
  {
    id: 'paper-sensors',
    title: 'A Spectral Interpretable Bearing Fault Diagnosis Framework Powered by Large Language Models',
    venue: 'Sensors',
    venueTag: 'JCR Q2 | IF=3.5',
    role: '通讯作者',
    year: 2024,
    relatedProject: 'bearllm',
    url: 'https://www.mdpi.com/1424-8220/25/12/3822',
  },
]

export const underReviewPapers: Paper[] = [
  {
    id: 'paper-itaslp',
    title: 'Intelligibility-Driven Real-Time Personalized Speech Enhancement for the Super-Aged via Dual-Objective Decoupling and Progressive Sparsification',
    venue: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing',
    venueTag: 'CCF-B | 语音顶刊',
    role: '第一作者',
    relatedProject: 'idpse',
    url: '',
  },
  {
    id: 'paper-aei',
    title: 'Physics-Informed Multi-Scale Network with Loss-Guided Curriculum Learning for Robust Fault Diagnosis',
    venue: 'Advanced Engineering Informatics',
    venueTag: '中科院一区 TOP | IF=8.0',
    role: '通讯作者',
    relatedProject: 'aeroengine',
    url: '',
  },
  {
    id: 'paper-eswa',
    title: 'Attention-Mask Guided Optimal Transport for Few-Shot Fault Diagnosis Under Strong Noise and Variable Conditions',
    venue: 'Expert Systems with Applications',
    venueTag: '中科院一区 TOP | IF=7.5',
    role: '通讯作者',
    relatedProject: 'aeroengine',
    url: '',
  },
]

export const allPapers = [...publishedPapers, ...underReviewPapers]

export function getPaperById(id: string): Paper | undefined {
  return allPapers.find(p => p.id === id)
}

export interface Patent {
  id: string
  title: string
  type: string
  relatedProject?: string
}

export const patents: Patent[] = [
  {
    id: 'patent-1',
    title: '一种基于渐进式模型蒸馏的实时构音障碍语音修复方法',
    type: '发明专利',
    relatedProject: 'idpse'
  },
  {
    id: 'patent-2',
    title: '一种基于大语言模型的旋转机械统一健康管理方法',
    type: '发明专利',
    relatedProject: 'bearllm'
  },
  {
    id: 'patent-3',
    title: '一种面向少样本学习的多传感器系统故障诊断方法',
    type: '发明专利',
    relatedProject: 'aeroengine'
  },
  {
    id: 'patent-4',
    title: '一种基于振动信号统一编码的设备健康管理方法',
    type: '发明专利',
    relatedProject: 'bearllm'
  },
  {
    id: 'patent-5',
    title: '一种口周肌力律动式训练评估装置及方法',
    type: '发明专利',
    relatedProject: 'medical'
  },
  {
    id: 'patent-6',
    title: '一种基于颏下电刺激联合上气道肌群训练的效果评估方法',
    type: '发明专利',
    relatedProject: 'medical'
  }
]

