<template>
  <div id="resume" class="modern-theme">
    <!-- 1. Hero Section -->
    <header class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content container">
        <div class="hero-text">
          <h1 class="name">{{ personalInfo.name }}</h1>
          <p class="status">{{ personalInfo.education_status }}</p>
          <div class="contact-grid">
            <a :href="'mailto:' + personalInfo.email" class="contact-item">
              <i class="icon icon-email"></i>
              <span>{{ personalInfo.email }}</span>
            </a>
            <span class="contact-item">
              <i class="icon icon-phone"></i>
              <span>{{ personalInfo.phone }}</span>
            </span>
            <span class="contact-item">
              <i class="icon icon-location"></i>
              <span>{{ personalInfo.location }}</span>
            </span>
          </div>
        </div>
        <div class="hero-avatar">
          <img :src="personalInfo.avatar" alt="Profile" />
        </div>
      </div>
    </header>

    <main class="container main-content">
      <!-- 2. About Me (Cyan Theme) -->
      <section class="section about-section theme-cyan">
        <div class="section-header">
          <div class="icon-box"><i class="icon icon-user"></i></div>
          <h2>个人优势</h2>
        </div>
        <div class="card glass-card">
          <p class="about-text">{{ aboutMe }}</p>
        </div>
      </section>

      <!-- 3. Skills (Violet Theme) -->
      <section class="section skills-section theme-violet">
        <div class="section-header">
          <div class="icon-box"><i class="icon icon-skills"></i></div>
          <h2>技术栈</h2>
        </div>
        <div class="skills-wrapper">
          <span v-for="skill in skills" :key="skill" class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- 4. Experience Timeline -->
      <div class="grid-layout">
        <!-- Education (Blue Theme) -->
        <section class="section education-section theme-blue">
          <div class="section-header">
            <div class="icon-box"><i class="icon icon-education"></i></div>
            <h2>教育背景</h2>
          </div>
          <div class="timeline">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content glass-card">
                <span class="date-badge">{{ edu.date }}</span>
                <h3 class="institution">{{ edu.university }}</h3>
                <div class="degree-info">
                  <span class="degree">{{ edu.degree }}</span>
                  <span class="separator">•</span>
                  <span class="major">{{ edu.major }}</span>
                </div>
                <p class="details">{{ edu.details }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Internships (Rose Theme) -->
        <section class="section internship-section theme-rose">
          <div class="section-header">
            <div class="icon-box"><i class="icon icon-briefcase"></i></div>
            <h2>实习经历</h2>
          </div>
          <div class="timeline">
            <div
              v-for="(internship, index) in internships"
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content glass-card">
                <span class="date-badge">{{ internship.date }}</span>
                <h3 class="institution">{{ internship.company }}</h3>
                <p class="role">{{ internship.role }}</p>
                <p class="description">{{ internship.description }}</p>
                
                <div v-if="internship.achievements?.length" class="achievements">
                  <h4>主要业绩</h4>
                  <ul>
                    <li v-for="(ach, i) in internship.achievements" :key="i">{{ ach }}</li>
                  </ul>
                </div>
                
                <div class="tags-row">
                  <span v-for="tag in internship.tags" :key="tag" class="mini-tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 5. Projects (Orange Theme) -->
      <section class="section projects-section theme-orange">
        <div class="section-header">
          <div class="icon-box"><i class="icon icon-projects"></i></div>
          <h2>项目经历</h2>
        </div>
        <div class="projects-grid">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-card glass-card"
          >
            <div class="project-top">
              <h3>{{ project.title }}</h3>
              <span class="role-badge">{{ project.role }}</span>
            </div>
            <span class="project-date">{{ project.date }}</span>
            <p class="project-desc">{{ project.description }}</p>
            
            <div v-if="project.achievements?.length" class="achievements">
               <h4>主要业绩</h4>
               <ul>
                 <li v-for="(ach, i) in project.achievements" :key="i">{{ ach }}</li>
               </ul>
            </div>

            <div class="tags-row">
              <span v-for="tag in project.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Publications (Emerald Theme) -->
      <section class="section publications-section theme-emerald">
        <div class="section-header">
          <div class="icon-box"><i class="icon icon-publications"></i></div>
          <h2>学术成果</h2>
        </div>
        <div class="publications-list glass-card">
          <div v-for="(pub, index) in publications" :key="index" class="pub-item">
            <div class="pub-index">{{ index + 1 }}</div>
            <div class="pub-content">
              <p class="pub-title">{{ pub.title }}</p>
              <p class="pub-meta">
                <span class="journal">{{ pub.journal }}</span>
                <span class="pub-tag">{{ pub.details }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. GitHub Repos (Slate/Dark Theme) -->
      <section class="section github-section theme-slate">
        <div class="section-header">
          <div class="icon-box"><i class="icon icon-github"></i></div>
          <h2>开源项目</h2>
        </div>
        <div class="repo-grid">
          <a 
            v-for="repo in repos" 
            :key="repo.repo" 
            :href="repo.url" 
            target="_blank" 
            class="repo-card glass-card"
          >
            <div class="repo-header">
              <span class="repo-icon">{{ repo.icon }}</span>
              <h3>{{ repo.repo }}</h3>
            </div>
            <p class="repo-desc">{{ repo.desc }}</p>
            <div class="repo-footer">
              <img :src="repo.lang" alt="Language" />
              <img :src="repo.shield" alt="Stars" />
            </div>
          </a>
        </div>
      </section>

      <!-- 8. Awards (Amber Theme) -->
      <section class="section awards-section theme-amber">
        <div class="section-header">
          <div class="icon-box"><i class="icon icon-awards"></i></div>
          <h2>荣誉奖项</h2>
        </div>
        <div class="awards-grid">
          <div v-for="award in awards" :key="award" class="award-item glass-card">
            <i class="icon icon-star"></i>
            <span>{{ award }}</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} {{ personalInfo.name }} • Built with Vue.js</p>
        <a href="https://github.com/KarlRaphel/AboutMe" target="_blank" class="source-link">
          View Source <i class="icon icon-github-small"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import avatarUrl from "./assets/avatar.jpg";

const personalInfo = ref({
  name: "彭浩天",
  education_status: "中科院在读博士生",
  location: "江苏南通",
  phone: "15295797613",
  email: "pht0613@163.com",
  avatar: avatarUrl,
});

const aboutMe = ref(
  "目前研究方向为深度学习和工业大模型, 在 AAAI（人工智能顶会）、EAAI、IEEE Trans等会议、期刊上发表多篇高水平论文。能熟练使用Python、JavaScript 等编程语言, 掌握 Pytorch 编写各类深度学习算法, 对于振动、音频、力信号的信息挖掘具有一定的经验。在项目方面, 能够使用 Electron、Vue、SQL、FastAPI 等现代化工具构建前后端应用框架, 完成具体目标的落地实施。"
);

const skills = ref([
  "Python", "PyTorch", "JavaScript", "Vue.js", "FastAPI", "SQL",
  "深度学习", "大语言模型 (LLM)", "信号处理", "Electron", "全栈开发", "多模态",
]);

const projects = ref([
  {
    title: "机械智能运维多模态工业大模型",
    role: "算法工程师",
    date: "2024.06 - 至今",
    description:
      "该项目通过在设备上安装加速度传感器采集振动信号，利用设备故障的先验知识在频域上构建统一表示，并设计了投影层将频域特征与语义嵌入对齐。结合微调的大模型与基于知识库的检索增强生成，实现了多种不同健康管理任务的统一自然语言输出。",
    achievements: [
      "解决了普通用户在使用健康管理系统时的专业性障碍，可广泛适用于多种工作条件。",
      "为多模态大模型在工业场景的推广应用提供了新思路。",
    ],
    tags: ["大语言模型", "多模态", "PyTorch", "信号处理", "RAG", "PEFT"],
  },
  {
    title: "某型号航空发动机健康管理系统",
    role: "全栈工程师",
    date: "2023.09 - 至今",
    description:
      "该项目通过在设备上布置传感器，收集设备工作相关数据进行管理，并设计相关算法对设备潜在故障模式进行初步分析。",
    achievements: [
      "参与传感器选型、安装，负责传感器通信、数据库管理、诊断算法开发。",
      "负责消息通知等 SDK 集成、前端设计及开发、前后端通信等工作。",
    ],
    tags: ["Vue", "FastAPI", "SQL", "PyTorch", "传感器", "全栈"],
  },
  {
    title: "某医疗可穿戴设备",
    role: "算法工程师及软件开发",
    date: "2023.09 - 2024.12",
    description:
      "该项目通过设备采集用户相关生化数据，并通过小程序进行数据交互。并基于 Electron 开发医生客户端，实现基于人工智能的初步诊断结果查看以及进一步的数据交互。",
    achievements: [
      "负责核心算法的研发与优化，显著提升了设备的监测准确率。",
      "主导软件开发工作，确保系统稳定性和用户界面的友好性。",
      "通过有效的技术成果转化，助力项目实现商业价值，直接贡献于3000万元以上的盈利。",
    ],
    tags: ["深度学习", "Electron", "微信小程序", "全栈", "医疗AI"],
  },
]);

const internships = ref([
  {
    company: "华为技术有限公司",
    role: "AI算法工程师实习生",
    date: "2025.08 - 2025.11",
    description: "主导个性化语音降噪（PNR）算法研发与工程落地，实现基于声纹的干扰人声抑制；完成从PyTorch模型到C++端侧部署的全链路集成。同时探索说话人分割前沿技术，复现并评测Streaming Sortformer、PyAnnote等模型在真实场景下的性能。",
    achievements: [
      "实现低延迟流式降噪系统（<2ms/帧），集成至华为会议软终端，效果优于腾讯会议、华为云会议等主流产品。",
      "攻克 OpenVINO 跨平台编译兼容性难题，完成算法C++工程化部署，支撑实时音频处理链路稳定运行。",
      "构建仿真与实测混合评测体系，覆盖混响、噪声、多设备等复杂场景，为团队提供标准化评估方案。"
    ],
    tags: ["语音降噪", "声纹识别", "流式推理", "C++", "信号处理", "端侧部署"]
  }
]);

const targetRepos = ref([
  {
    user: "SIA-IDE",
    repo: "BearLLM",
    icon: "🛜",
    desc: "该项目设计了一个编码器，将机械设备的振动信号编码为状态标签的语义向量，并利用一个高效指令微调的多模态大模型，实现多种机械设备健康管理任务的统一自然语言问答。相关工作发表在 AAAI-2025 ，开源的数据集月下载量达到 3k+。",
  },
  {
    user: "KarlRaphel",
    repo: "elsevier-tracker-web",
    icon: "📄",
    desc: "该项目使用Vue编写了一个前端网页，用于查看投稿在 Elsevier 旗下期刊的论文审稿进度，通过响应式布局实现在各类设备屏幕上的直观显示。该项目的总使用人次已达到 33k+ 次，用户数量已达到 4k+（通过Clarity统计）。",
  },
  {
    user: "KarlRaphel",
    repo: "bearing-dataset-collection",
    icon: "🛠️",
    desc: "该项目前端使用 Vue 进行振动信号时域和频谱的筛选、显示和比较，后端使用 Python 编写，通过 FastAPI 与前端通信，numpy 进行数据处理，sqlite3 进行数据读写。其扩展版本（包括用户认证、数据采集、数据传输、数据保存、智能诊断、警报管理等功能）已成功应用于企业部署，创造超过 200万元的价值。",
  },
]);

const repos = ref([]);
onMounted(() => {
  repos.value = targetRepos.value.map((repo) => {
    return {
      ...repo,
      lang: `https://img.shields.io/github/languages/top/${repo.user}/${repo.repo}`,
      url: `https://github.com/${repo.user}/${repo.repo}`,
      shield: `https://img.shields.io/github/stars/${repo.user}/${repo.repo}?style=social`,
    };
  });
});

const publications = ref([
  {
    title: "BearLLM: A Prior Knowledge-Enhanced Bearing Health Management Framework with Unified Vibration Signal Representation",
    journal: "Proceedings of the AAAI Conference on Artificial Intelligence",
    details: "(CCF-A, 人工智能顶会, 一作)",
  },
  {
    title: "A Unified Rotating Machinery Health Management Framework Leveraging Large Language Models for Diverse Components, Conditions, and Tasks",
    journal: "Engineering Applications of Artificial Intelligence",
    details: "(中科院一区，IF=8.0, CCF-C, 人工智能顶刊, 一作)",
  },
  {
    title: "A Lightweight Triple-Stream Network with Multi-Sensor Fusion for Enhanced Few-Shot Learning Fault Diagnosis",
    journal: "IEEE Transactions on Reliability",
    details: "(JCR Q1, IF=5.7, 一作)",
  },
  {
    title: "Adversarial Training of Multi-Scale Channel Attention Network for Enhanced Robustness in Bearing Fault Diagnosis",
    journal: "Measurement Science and Technology",
    details: "(JCR Q1, IF=3.4, 一作)",
  },
  {
    title: "A Spectral Interpretable Bearing Fault Diagnosis Framework Powered by Large Language Models",
    journal: "Sensors",
    details: "(JCR Q2, IF=3.5, 通讯)",
  },
]);

const awards = ref([
  "中国科学院优秀党员", "本科生国家奖学金", "江苏省优秀学生干部",
  "江苏省优秀毕业设计", "河海大学优秀毕业生", "河海大学百佳学生",
  "挑战杯一等奖", "机械设计竞赛", "数学建模美赛",
]);

const education = ref([
  {
    university: "中国科学院大学",
    degree: "博士 (直博)",
    department: "沈阳自动化研究所",
    major: "检测技术与自动化装置",
    date: "2022 - 2027",
    details: "绩点 3.84/4。研究方向：医疗、工业、航空航天领域的智能检测技术。担任党支部书记，曾获优秀党员、三好学生等荣誉。",
  },
  {
    university: "河海大学",
    degree: "本科",
    department: "机电工程学院",
    major: "机械工程",
    date: "2018 - 2022",
    details: "优秀毕业生。绩点 4.7/5。曾任校社团联合会主席。获国家奖学金、全国智能机器人竞赛一等奖等。",
  },
]);
</script>

<style>
/* --- Design System --- */
:root {
  /* Base Colors */
  --bg-color: #f8fafc;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --text-light: #94a3b8;
  
  --card-bg: rgba(255, 255, 255, 0.85);
  --card-border: rgba(255, 255, 255, 0.6);
  --glass-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  --hover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
  
  --radius-lg: 1rem;
  --radius-md: 0.75rem;
  --radius-sm: 0.5rem;

  /* Theme Colors */
  --color-blue: #3b82f6;
  --color-cyan: #06b6d4;
  --color-violet: #8b5cf6;
  --color-rose: #f43f5e;
  --color-orange: #f97316;
  --color-emerald: #10b981;
  --color-amber: #f59e0b;
  --color-slate: #475569;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  margin: 0;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

a {
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

/* --- Components --- */
.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--glass-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--hover-shadow);
}

.section {
  margin-bottom: 3rem;
  opacity: 0;
  animation: slideUp 0.6s ease forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

/* --- Theme System --- */
.theme-cyan { --theme-color: var(--color-cyan); }
.theme-violet { --theme-color: var(--color-violet); }
.theme-blue { --theme-color: var(--color-blue); }
.theme-rose { --theme-color: var(--color-rose); }
.theme-orange { --theme-color: var(--color-orange); }
.theme-emerald { --theme-color: var(--color-emerald); }
.theme-amber { --theme-color: var(--color-amber); }
.theme-slate { --theme-color: var(--color-slate); }

.icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  
  /* Dynamic Theme Styling */
  background-color: color-mix(in srgb, var(--theme-color) 10%, transparent);
  color: var(--theme-color);
}

/* --- Hero Section --- */
.hero {
  position: relative;
  padding: 6rem 0 4rem;
  margin-bottom: 2rem;
  background: white;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  /* Multi-color mesh gradient */
  background: 
    radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.1), transparent 40%),
    radial-gradient(circle at 90% 10%, rgba(139, 92, 246, 0.1), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.1), transparent 40%),
    radial-gradient(circle at 20% 90%, rgba(59, 130, 246, 0.1), transparent 40%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.hero-text .name {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
  /* Gradient Text */
  background: linear-gradient(to right, var(--color-blue), var(--color-violet), var(--color-rose));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text .status {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin: 0 0 2rem;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: all 0.2s;
}

.contact-item:hover {
  border-color: var(--color-blue);
  color: var(--color-blue);
  background-color: #f8fafc;
}

.hero-avatar img {
  width: 160px;
  height: 160px;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: rotate(-3deg);
  transition: transform 0.3s;
}

.hero-avatar img:hover {
  transform: rotate(0) scale(1.05);
}

/* --- About & Skills --- */
.about-text {
  padding: 1.5rem;
  margin: 0;
  color: var(--text-main);
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  background: white;
  padding: 8px 16px;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-main);
  border: 1px solid #e2e8f0;
  transition: all 0.2s;
}

.skill-pill:hover {
  background: var(--theme-color);
  color: white;
  border-color: var(--theme-color);
  transform: translateY(-2px);
}

/* --- Timeline (Education & Internships) --- */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr 1fr;
  }
}

.timeline {
  position: relative;
  padding-left: 1rem;
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item:last-child .timeline-marker {
  height: 20px;
}

.timeline-marker::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--theme-color);
  border: 2px solid white;
  box-shadow: 0 0 0 2px var(--theme-color);
}

.timeline-content {
  padding: 1.5rem;
}

.date-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--theme-color);
  background: color-mix(in srgb, var(--theme-color) 10%, transparent);
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.institution {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.degree-info {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.separator {
  margin: 0 6px;
}

.details, .description {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0.5rem 0 0;
}

/* --- Projects --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.project-top h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.role-badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  background: #f1f5f9;
  border-radius: 12px;
  color: var(--text-muted);
}

.project-date {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.achievements h4 {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: var(--text-main);
}

.achievements ul {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 1rem;
}

.mini-tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  background: #f1f5f9;
  color: var(--text-muted);
  border-radius: 4px;
}

/* --- Publications --- */
.publications-list {
  padding: 1rem;
}

.pub-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
}

.pub-item:last-child {
  border-bottom: none;
}

.pub-index {
  font-weight: 700;
  color: var(--theme-color);
  font-size: 1.1rem;
  min-width: 24px;
}

.pub-title {
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.pub-meta {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.pub-tag {
  color: var(--theme-color);
  font-weight: 600;
  margin-left: 8px;
}

/* --- Repos --- */
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.repo-card {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.repo-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.75rem;
}

.repo-icon {
  font-size: 1.5rem;
}

.repo-header h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--theme-color);
}

.repo-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0 0 1rem;
  flex-grow: 1;
}

.repo-footer {
  display: flex;
  gap: 12px;
}

.repo-footer img {
  height: 20px;
}

/* --- Awards --- */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.award-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text-main);
}

.award-item .icon {
  color: var(--theme-color);
}

/* --- Footer --- */
.footer {
  margin-top: 4rem;
  padding: 2rem 0;
  text-align: center;
  color: var(--text-muted);
  border-top: 1px solid #e2e8f0;
}

.source-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.source-link:hover {
  color: var(--color-blue);
}

/* --- Icons --- */
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* Using mask-image to allow coloring via background-color/color property */
.icon-email, .icon-phone, .icon-location, .icon-user, .icon-skills, 
.icon-education, .icon-briefcase, .icon-projects, .icon-publications, 
.icon-awards, .icon-star {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.icon-email { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'); }
.icon-phone { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.63 21 3 13.37 3 4.51c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.63 21 3 13.37 3 4.51c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>'); }
.icon-location { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'); }
.icon-user { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'); }
.icon-skills { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>'); }
.icon-education { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>'); }
.icon-briefcase { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'); }
.icon-projects { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>'); }
.icon-publications { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>'); }
.icon-awards { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'); }
.icon-star { -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'); mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'); }

.icon-github { background-image: url("./assets/github.svg"); }
.icon-github-small { background-image: url("./assets/github.svg"); width: 14px; height: 14px; opacity: 0.6; }

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
    text-align: center;
  }
  
  .hero-content {
    flex-direction: column-reverse;
  }
  
  .contact-grid {
    justify-content: center;
  }
  
  .hero-text .name {
    font-size: 2.5rem;
  }
  
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style>
