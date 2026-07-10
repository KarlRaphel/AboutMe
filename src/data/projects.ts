export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  caption: string
}

export interface ProjectSection {
  title: string
  paragraphs: string[]
  media?: ProjectMedia[]
}

export interface Project {
  id: string
  title: string
  role: string
  tags: string[]
  cover: string
  summary: string
  techStack: string[]
  sections: ProjectSection[]
  relatedPapers: string[]
  relatedRepos: string[]
  commercial?: string
}

export const projects: Project[] = [
  {
    id: 'bearllm',
    title: '多模态工业设备运维大模型（BearLLM / RotLLM）',
    role: '核心架构设计 & 算法负责人',
    tags: ['大模型', '工业智能', '开源贡献', '商业落地'],
    cover: '/assets/projects/bearllm/framework.svg',
    summary: '构建振动-指令微调语料库与跨模态对齐机制，以三阶段训练和 RAG 支撑统一设备运维；论文获 AAAI 2025 录用，开源项目 125 Stars，数据集月下载量超 3,000 次。',
    techStack: [
      'LLM 指令微调（PEFT / LoRA）',
      '检索增强生成（RAG）',
      '振动信号频域特征工程',
      '多模态跨模态投影层设计',
      'PyTorch / HuggingFace',
    ],
    sections: [
      {
        title: '项目背景与动机',
        paragraphs: [
          '在当今工业界，针对旋转机械（如轴承、齿轮等关键易损件）的健康管理一直是一项极具挑战性的任务。传统的深度学习方法往往局限于单一的设备或特定的工作条件，在面对复杂多变的实际工业环境时，极易出现性能的大幅衰退。为了解决这一行业痛点，我开创性地提出了一种<strong>基于多模态大语言模型（MLLM）的统一健康管理框架——RotLLM</strong>。',
          '作为一种端到端的统一解决方案，RotLLM 不仅能够在复杂的工业噪声环境中高精度地完成设备故障分类，更能打破传统工业软件复杂的操作壁垒，允许现场工程师通过最直接的自然语言交互来获取异常检测分析与设备维护建议。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/bearllm/framework.svg', caption: 'RotLLM 系统整体架构' },
        ],
      },
      {
        title: '大规模多模态工业数据集构建',
        paragraphs: [
          '为了支撑起这样一个强大的多模态系统，拥有丰富且高质量的数据是重中之重。然而，工业领域长期缺乏能够用于大语言模型微调的高质量多模态数据。为此，我构建并开源了<strong>首个大规模多模态工业数据集（LMR）</strong>。该数据集规模庞大，整合了超过 23.7 万条真实设备的振动信号，全面覆盖了 568 种不同的复杂运行工况以及 15 种设备的故障模式。',
          '在语料构建上，我首创了"大语言模型初步生成 + 领域专家多轮交叉验证打磨"的范式，构建了高质量的多任务指令微调语料库，有效填补了行业空白。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/bearllm/corpus.svg', caption: 'LMR 数据集构建流程' },
        ],
      },
      {
        title: '跨模态特征对齐机制',
        paragraphs: [
          '系统的另一项核心挑战在于如何让擅长处理文本的大语言模型"听懂"机器的振动信号。为此，我设计了一套<strong>创新的跨模态特征对齐机制</strong>。首先，通过专门设计的频谱折叠网络（Spectrum Folding Network, SFN）对底层物理特征进行有效提取。紧接着，我创新性地引入了特征投影层（Projection Layer），并巧妙地利用设备健康状态的文本标签来初始化投影层权重。这一关键步骤如同建立了一座语言的桥梁，成功且无损地将振动信号精准映射到了大语言模型的高维文本语义空间中，实现了"机器信号"与"人类自然语言"的深度对齐。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/bearllm/projection.svg', caption: '特征对齐与投影机制' },
        ],
      },
      {
        title: '三阶段高效训练与 RAG 增强',
        paragraphs: [
          '面对庞大且复杂的多模态数据，我设计了<strong>三阶段高效训练与多任务微调策略</strong>，使得模型能够以极小的算力开销快速胜任多种工业诊断任务。这三个阶段层层递进：首先进行特征编码器的预训练以学习底层物理规律；随后通过投影层进行语义初始化，完成模态对齐；最后利用 LoRA 技术对大模型进行参数高效微调，完成多任务的最终适配。',
          '此外，为了确保工业应用中最核心的"严谨性"，我还深度集成了检索增强生成（RAG）技术。通过引入设备专业论文和操作维修手册作为外部知识库，有效消除了大语言模型在生成工业诊断报告时的"幻觉"现象。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/bearllm/train_strategy.svg', caption: '三阶段训练与微调策略' },
        ],
      },
      {
        title: '项目成果与业务落地',
        paragraphs: [
          '综合以上技术突破，RotLLM 在业务落地上展现出了巨大的价值。<strong>性能指标达到业界领先（SOTA）</strong>：在未见过的全新复杂工况和高强度噪声干扰下，模型依然展现出极强的鲁棒性，故障诊断准确率全面超越了传统的深度学习预测算法。',
          '更重要的是<strong>显著的降本增效效应</strong>：传统工业 AI 方案往往需要算法团队针对不同设备和工况"定制化"地开发数十个模型，而 RotLLM 真正做到了"一套模型打天下"，大幅度降低了模型的开发、部署和后期维护成本。配合自然语言交互体验，现场工程师可快速获取诊断结论和排故步骤。目前，该项目的核心数据集与源代码均已向社区开源，核心算法论文被<strong>人工智能顶会 AAAI 2025 录用（第一作者）</strong>，开源代码获得 <strong>GitHub 125 Stars，配套数据集月下载量超 3,000 次</strong>，并进一步形成面向企业设备运维场景的商业系统。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/bearllm/llm_output.svg', caption: 'LLM 自然语言交互输出示例' },
          { type: 'image', src: '/assets/projects/bearllm/tsne.svg', caption: '特征空间 t-SNE 可视化' },
        ],
      },
    ],
    relatedPapers: ['paper-bearllm', 'paper-eaai', 'paper-sensors'],
    relatedRepos: ['repo-bearllm'],
    commercial: '衍生商业系统已落地，直接创造超 200 万元经济价值',
  },
  {
    id: 'idpse',
    title: '面向超高龄人群的实时个性化语音增强（ID-PSE）',
    role: '核心算法研发 & 端侧工程化',
    tags: ['音视频技术', '端侧部署', '医疗 AI'],
    cover: '/assets/projects/idpse/framework.svg',
    summary: '华为实习期间提出 PWS 并参与流式语音降噪研发与端侧部署；回到研究所后面向适老化医疗场景进一步提出 FiLM 个性化自适应与双目标解耦训练，形成完整 ID-PSE 框架。',
    techStack: [
      '因果/非因果语音增强模型',
      'FiLM 说话人自适应',
      'PWS 渐进式权重稀疏化',
      'C++ 端侧部署',
      'PyTorch / ONNXRuntime',
    ],
    sections: [
      {
        title: '项目背景与演进',
        paragraphs: [
          '本项目的底层核心技术最初孵化于我在<strong>华为技术有限公司的 AI 算法工程师实习</strong>阶段。当时主要面临的是会议场景下的实时语音降噪挑战：设备算力受限且对算法"零延迟"要求极高。为此，我主导开发了核心的 <strong>PWS（渐进式权重稀疏化）</strong>技术，成功打破了因果模型与非因果模型之间的性能壁垒。',
          '实习结束后回到研究所，我将这一高效的底层架构迁移到了更具社会价值、声学挑战也更大的<strong>"适老化"医疗看护场景</strong>中。针对超高龄人群语音伴随的生理性衰退现象（发声震颤、气声等），我进一步创新性地引入了 <strong>FiLM 个性化自适应机制</strong>与<strong>双目标解耦策略</strong>，最终孵化出了完整的 ID-PSE 框架。',
        ],
      },
      {
        title: '解耦的双目标训练策略',
        paragraphs: [
          '针对超高龄语音"真实标签缺失"的两难困境——原始录音可懂度低，而传统生成式修复模型容易导致严重吞音——我首创了<strong>解耦的双目标训练策略（Decoupled Dual-Objective Training）</strong>。该策略将优化过程巧妙地分为感知与音素两个独立分支：在感知维度，利用生成式先验模型（VoiceFixer）严格指导频谱包络和高频谐波的重建；在音素维度，则引入预训练的自监督模型（HuBERT）实施潜在空间特征约束，死死锚定音素的完整性，有效避免了关键语义的丢失。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/idpse/framework.svg', caption: 'ID-PSE 系统整体架构' },
          { type: 'image', src: '/assets/projects/idpse/motivation.svg', caption: '传统方法过度抑制问题与音素保护动机' },
        ],
      },
      {
        title: 'FiLM 说话人自适应机制',
        paragraphs: [
          '为了在多说话人干扰下精准提取目标老人的声音，我引入了<strong>基于 FiLM（Feature-wise Linear Modulation）的深度说话人自适应机制</strong>。不同于简单的特征拼接，我利用预先注册的老人声纹向量生成动态仿射参数，对卷积循环网络（CRN）进行逐层特征调制。这使得模型仿佛拥有了"定向听觉"，能够在微弱的语音信号中精准锁定目标说话人。',
        ],
      },
      {
        title: '渐进式权重稀疏化（PWS）',
        paragraphs: [
          '医疗看护设备通常算力受限，且对算法的实时性有着严苛的"零延迟"要求，但传统因果模型往往由于缺乏未来上下文而性能大幅缩水。为此，我提出了<strong>渐进式权重稀疏化（Progressive Weights Sparsification, PWS）</strong>技术。有别于容易产生能力错配的常规知识蒸馏，PWS 通过结构化演进，在训练中分三个阶段逐步惩罚并物理裁剪掉依赖未来信息的网络权重。这成功将一个具备全部上下文感知能力的高性能非因果"教师"模型，无损"进化"为了支持严格因果推理的"学生"模型。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/idpse/training_process.svg', caption: '渐进式权重稀疏化训练策略' },
        ],
      },
      {
        title: '项目成果',
        paragraphs: [
          '<strong>性能指标达到业界领先（SOTA）</strong>：在真实老年人语音数据集上，模型在家庭护理和医院病房等多种真实场景下均展现出极强的鲁棒性，在语音质量（PESQ）、可懂度（STOI）及字错率（CER）等各项核心指标上全面超越了现有主流算法。',
          '<strong>极高的边缘端部署可行性</strong>：得益于 PWS 技术，最终部署的因果学生模型不仅保证了严格的实时性，且参数量和算力需求大幅降低（在普通设备上 RTF 仅为 0.28），同时几乎完美保留了非因果模型的优异性能。在华为实习期间，PWS 及相关流式降噪技术成功集成至华为会议软终端，在真实场景下的降噪指标<strong>显著优于腾讯会议等头部竞品</strong>。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/idpse/result.svg', caption: '在严重生理性衰退下的语音频谱恢复对比' },
        ],
      },
    ],
    relatedPapers: ['paper-itaslp'],
    relatedRepos: [],
  },
  {
    id: 'embodied',
    title: '老年康养具身智能照护系统',
    role: '具身智能系统架构设计 & 多智能体协同负责人',
    tags: ['具身智能', '大模型', '多设备协同', '全栈开发'],
    cover: '/assets/projects/embodied/framework.png',
    summary: '独立设计“感知认知—混合规划—安全执行”三级架构，以多级记忆、原子技能与多 Agent 编排协同机器人、机械臂和 AIoT 设备，形成可追踪、可重试的物理执行闭环。',
    techStack: [
      '多 Agent 编排 / 原子技能',
      'MiniCPM-o 4.5 / Qwen3.5',
      '多级记忆 / SOP 与动态规划',
      'FastAPI / ROS2 / Nav2',
      'Cartographer SLAM / VLA',
      '机器人与 AIoT 异构设备协同',
    ],
    sections: [
      {
        title: '项目定位与职责',
        paragraphs: [
          '项目面向养老院与居家照护场景，构建从自然语音交互、任务理解与规划，到机器人移动、物理操作和环境联动的闭环系统。我<strong>独立完成分布式系统架构、物理层网络通信和接口设计</strong>，负责语音交互、任务调度与安全执行闭环的核心开发，并深度参与机器人自主导航与 VLA 具身操作模块的实车部署和调优。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/embodied/framework.png', caption: '系统整体框架图' },
        ],
      },
      {
        title: '分层多智能体架构',
        paragraphs: [
          '针对单体大模型难以可靠完成跨设备长链路任务的问题，我将系统设计为<strong>“L1 感知与认知中枢—L2 混合规划与执行引擎—L3 闭环反馈与执行护栏”</strong>三级架构。高算力模型与调度服务运行于本地工作站，机器人端承担环境感知、移动与具身操作，智能床等设备以 AIoT 节点接入；FastAPI 中央网关统一管理服务发现、状态回传和指令下发。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/embodied/dashboard.png', caption: '系统交互与状态看板' },
        ],
      },
      {
        title: '全双工交互、记忆与意图路由',
        paragraphs: [
          'L1 中枢以 <strong>MiniCPM-o 4.5</strong> 支持边看、边听、边想、边说的在线全双工多模态对话，并以 Paraformer + Qwen3.5-2B 完成语音识别、复杂口语意图识别和工具调用。我设计长、中、短时记忆机制，自动沉淀用户偏好、历史事件与当前任务上下文，再将自然语言诉求转换为可追踪的结构化任务与原子技能序列。',
        ],
      },
      {
        title: '混合规划与异构设备协同',
        paragraphs: [
          'L2 采用“快慢系统”混合机制：高危、高频任务匹配经过验证的 SOP 原子技能序列，长尾需求则由大模型根据实时状态动态编排，再交由安全层逐步验证。执行端协同 SLAM、VLA 与 IoT 智能体，覆盖导航避障、柔顺操作、机器人姿态切换、语音播报、图像与点云获取，以及智能床升降与变形等能力。',
          '我参与基于 Cartographer 与 ROS2 Nav2 的现场建图和导航调优，并参与 VLA 模型在实车上的部署与调试，使机器人能结合实时视觉与上层指令完成多自由度机械臂控制。',
        ],
      },
      {
        title: '物理安全护栏与自愈重规划',
        paragraphs: [
          'L3 在每个原子技能执行前检查任务锁、设备连通性、机器人关节与底盘状态、目标位姿、视觉目标锁定及前置节点结果。异常发生后，系统可根据状态进行参数重试、路径重规划、替代方案生成或任务降级，避免将大模型的不确定性直接传递到物理世界。',
          '系统已从单链路原型升级为具备<strong>多智能体协同、长期记忆、混合规划、原子技能编排和物理安全护栏</strong>的闭环照护系统，为具身智能在高安全要求场景中的工程化落地提供可控路径。',
        ],
        media: [
          { type: 'video', src: 'https://portfolio-assets.888421.xyz/demo_r2.mp4', caption: '系统实际运行演示' },
        ],
      },
    ],
    relatedPapers: [],
    relatedRepos: [],
  },
  {
    id: 'medical',
    title: 'AI 驱动的多模态智能医疗康复与评估体系',
    role: 'AI 应用架构负责人 & 全栈技术负责人',
    tags: ['医疗 AI', '全栈开发', '端侧部署', '商业落地'],
    cover: '/assets/projects/medical/algorithm.jpg',
    summary: '覆盖口周肌力评估、颏舌肌电刺激与适老化认知干预，打通传感器、边缘设备、个人终端与云端服务链路，完成产品及专利转化并形成千万元级产业价值。',
    techStack: [
      '生化 & 物理信号处理算法',
      '微信小程序（患者端）',
      'Electron 桌面端（医生端）',
      '云函数 & 数据库',
      'Python / Pygame',
      '嵌入式蓝牙通信',
      'LLM / RAG / TTS / ASR',
    ],
    sections: [
      {
        title: '项目背景',
        paragraphs: [
          '在现代医疗康复领域，针对不同病症（如特定肌群功能减退、老年人群认知衰退等），传统方案普遍面临数据难以量化、缺乏个性化指导以及患者依从性差等痛点。为了解决这些临床与居家康复中的实际挑战，我聚焦于"AI + 智慧医疗"，主导研发了三款相对独立但技术底座共享的智能化康复系统，实现了从底层感知硬件、前端交互体验到云端 AI 算法评估的全栈式业务落地。',
        ],
      },
      {
        title: '口周肌力智能训练评估系统',
        paragraphs: [
          '口周肌力不足是儿童常见的口腔功能障碍，会导致惯性口呼吸并影响面部发育。传统康复中，医生难以获得客观的量化指标，患者居家训练也缺乏有效监督。我从底层感知切入，主导设计了一款搭载薄片力传感器的蓝牙嵌入式设备，能够高精度地捕获患者在闭唇动作中的力学微小变化，为后续的量化分析提供数据支撑。',
          '为了让儿童患者能够自主完成居家训练，我同步开发了配套的微信小程序。小程序通过低延迟蓝牙通信与设备连接，实时采集力学数据，并通过生动的 UI 界面引导患者进行"闭合-张开"交互训练闭环。目前已与医院合作累计数百名患者，采集到数万份真实临床时序数据。',
          '基于这批大规模数据，我设计并落地了多套 AI 评价算法体系。在<strong>单次评价层</strong>，我设计了基于时序信号特征提取的算法，能够自动分析每次闭合动作的峰值力度、持续时长与发力曲线形态；在<strong>组训练评价层</strong>，我引入序列模型从一组多次训练的时序演变中捕捉疲劳度与发力模式衰减规律；在<strong>长期预测层</strong>，结合患者历史训练记录构建回归模型，可以客观地预测未来康复走势，为医生动态制定个性化训练方案。此外，我还开发了基于 Electron 的医生端数据分析后台，支持实时查看患者训练趋势并主动介入干预。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/medical/device.jpg', caption: '嵌入式设备开发' },
          { type: 'image', src: '/assets/projects/medical/miniapp.jpg', caption: '基于微信小程序的用户交互系统' },
          { type: 'image', src: '/assets/projects/medical/algorithm.jpg', caption: 'AI 评价算法设计' },
          { type: 'image', src: '/assets/projects/medical/doctor_panel.jpg', caption: '医生端数据分析后台' },
        ],
      },
      {
        title: '颏舌肌力一体式电刺激训练系统',
        paragraphs: [
          '颏舌肌肥大无力是中老年人群的常见症状，可导致严重的打鼾乃至睡眠呼吸暂停。然而，该人群对单调枯燥的舌部背强化训练依从性极低。为此我构建了一套基于树莓派的主控一体化硬件闭环，集成力传感器以高频测量舌部发力，并通过串口通信实时驱动电极片，在患者主动发力的瞬间同步施加电刺激，形成"主动发力 + 被动电刺激辅助"的高效康复模式。',
          '同时，我将"游戏化交互"引入康复过程。利用 Python 与 Pygame 框架，我开发了交互式康复小游戏，患者可以通过舌部发力的大小与持续时间直接控制屏幕上角色的动作，将原本枯燥的医疗级训练转化为趣味性的闯关体验，显著提升了中老年患者的参与度与康复完成率。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/medical/raspberry.jpg', caption: '基于树莓派的一体式训练系统' },
          { type: 'image', src: '/assets/projects/medical/game.jpg', caption: '利用小游戏进行交互式训练' },
        ],
      },
      {
        title: '基于大模型的适老化认知康复干预系统',
        paragraphs: [
          '在面对超高龄人群的数字陪伴时，传统的大模型往往表现出"记忆衰退"与"缺乏同理心"。为了构建有温度的数字陪护，我深度优化了流式语音识别（ASR）与流式语音合成（TTS）管线，实现了极低延迟的全语音交互。此外，系统创新性地引入了零样本音色克隆技术，允许使用医生或患者家属的声音合成对话，显著消除了老年人对机器的距离感。',
          '针对大模型在长期陪护中容易遗忘的问题，我设计了长短时记忆机制。系统每天自动生成并抽取对话摘要，让数字看护能够不断累积病史与偏好。不仅如此，我还接入了轻量级 Embedding 模型与 FAISS 向量数据库（多模态 RAG）。通过实时解析对话上下文，系统能够精准检索相关的怀旧照片或认知训练卡片，实现"声图并茂"的多模态认知刺激。',
          '在评估环节，该系统在云端记录多轮对话语音，不仅从文本维度进行意图转译与情感分析，更深入地提取声学层面的生理异常特征（如病理性的语音震颤、结巴）。通过多维度的特征融合，系统能够自动生成结构化的认知能力与情绪状态报告，规模化地帮助医疗团队及时发现老年人早期衰退迹象。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/medical/cognitive.jpg', caption: '认知康复训练系统' },
        ],
      },
      {
        title: '商业价值',
        paragraphs: [
          '以上三套系统打通了从底层数据采集、云端监测到 AI 辅助诊断的完整软硬件技术链路，完成产品与相关专利转化，并形成<strong>千万元级产业价值</strong>。',
        ],
      },
    ],
    relatedPapers: [],
    relatedRepos: [],
    commercial: '完成产品与相关专利转化，形成千万元级产业价值',
  },
  {
    id: 'aeroengine',
    title: '工业装备全栈式智能健康管理系统',
    role: '鲁棒诊断算法负责人 & 边缘部署工程师',
    tags: ['工业智能', '端侧部署', '全栈开发', '商业落地'],
    cover: '/assets/projects/aeroengine/tfsdfn.svg',
    summary: '工业级航空发动机实时健康管理平台，打通传感器选型到全栈前端可视化的完整链路，具备高并发、高稳定性的海量时序数据实时监测能力。',
    techStack: [
      '故障诊断深度学习算法',
      'OpenVINO / ONNXRuntime 边缘部署',
      'Vue 前端管理面板',
      'SQL 分布式时序数据库',
      'MQTT 数据传输协议',
      '第三方报警 SDK 集成',
    ],
    sections: [
      {
        title: '项目背景',
        paragraphs: [
          '在高端工业制造与航空航天领域，装备的可靠性直接关系到生产安全与经济效益。由于真实的工业现场环境极其复杂，现有的故障诊断方案往往受限于传感器异步、强背景噪声以及罕见故障样本稀缺等挑战，难以直接部署落地。为了解决这些痛点，本项目致力于打造一套工业级的<strong>全栈式智能装备健康管理系统（PHM）</strong>，融合多模态数据接入、前沿深度学习诊断算法以及从底层数据采集到前端可视化预警的完整业务链路，并成功在真实的工厂与航空工业装备上实现了规模化应用。',
        ],
      },
      {
        title: '跨传感器时间戳同步策略',
        paragraphs: [
          '高端装备通常依赖多种不同的传感器（如高频振动、低频温度、压力与转速等）进行多模态在线监测。然而，受限于不同的采样系统硬件，多源数据之间往往存在严重的时间戳漂移现象。为了实现精准的数据融合，我创新性地提出并设计了<strong>基于物理先验的跨传感器时间戳同步策略</strong>。该策略利用自适应滤波以及信号频谱质心相关性进行引导，精准估算出时间戳偏移量，成功对齐了异步的复杂物理信号，为后续的高效特征提取奠定了坚实的数据基础。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/aeroengine/timestamp_sync.svg', caption: '跨采样系统时间戳同步' },
        ],
      },
      {
        title: '轻量级时频统计域融合网络',
        paragraphs: [
          '传统的二维时频变换运算开销过于庞大，难以在算力受限的边缘终端运行。为此，我设计了自主创新的<strong>轻量级时频统计域融合网络（TFSDFN）</strong>。该模型构建了三个并行的超轻量数据流，分别独立分析时域、频域和统计域特征，并引入多尺度通道注意力机制进行加权融合。该架构不仅彻底打破了庞大算力的桎梏，其故障诊断的敏感性与准确率也得到了显著提升。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/aeroengine/tfsdfn.svg', caption: '时频统计多域融合网络' },
        ],
      },
      {
        title: '少样本优化采样与自适应对抗训练',
        paragraphs: [
          '为了应对实际工业现场"正常数据海量，故障样本极度稀缺"的数据不平衡问题，我深度设计了<strong>少样本优化采样算法</strong>。通过精准计算最优采样策略，显著降低了信号样本内部的随机差异，大幅优化了原始信号在深度网络特征空间中的分布状态。即使在极度缺乏故障样本的极端少样本条件下，模型依然能够保持行业领先的诊断精度。',
          '同时，针对重工业车间内无法避免的强背景噪音和多变电磁干扰，我引入了一套创新的<strong>自适应噪声对抗训练框架</strong>。该框架能够动态向输入数据中注入对抗性噪声，迫使模型越过浅层噪音学习设备本质的物理机械特征。该策略作为一种"模型无关"的插件结构，在实际推理时<strong>不增加任何额外的算力负担</strong>，却能使模型在 -3dB 极低信噪比等极端测试下依然表现出强悍的抗干扰鲁棒性。',
        ],
        media: [
          { type: 'image', src: '/assets/projects/aeroengine/sampling.svg', caption: '计算最优采样策略' },
          { type: 'image', src: '/assets/projects/aeroengine/feature_space.svg', caption: '优化特征空间分布' },
          { type: 'image', src: '/assets/projects/aeroengine/adversarial.svg', caption: '自适应对抗训练框架' },
        ],
      },
      {
        title: '全栈工程化落地',
        paragraphs: [
          '在完成了核心算法的技术攻坚后，我深度主导了这套算法的工程化落地与平台级部署。借助 OpenVINO 和 ONNXRuntime 引擎，我将复杂的模型高效压缩并成功部署到低功耗嵌入式硬件上。同时，我独立完成了从底层传感器 MQTT 协议通信、后端 SQL 分布式时序数据库架构，到前端高度可定制化的大屏分析与报警功能的完整生态开发。最终形成了一个涵盖故障诊断、预测与报警闭环的健康管理平台，已在复杂的航空发动机与重型工厂电机管理中发挥了实际价值。',
        ],
        media: [
          { type: 'video', src: 'https://portfolio-assets.888421.xyz/engine_system.mp4', caption: '发动机管理系统' },
          { type: 'image', src: '/assets/projects/aeroengine/motor_system.jpg', caption: '电机监测系统' },
          { type: 'video', src: 'https://portfolio-assets.888421.xyz/signal_analysis.mp4', caption: '信号分析功能' },
        ],
      },
    ],
    relatedPapers: ['paper-aeroengine', 'paper-ieee-tr', 'paper-mst', 'paper-ijphm'],
    relatedRepos: [],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}
