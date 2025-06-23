<template>
  <div id="resume">
    <!-- 1. 头部个人信息 -->
    <header class="header">
      <div class="header-content">
        <div class="info">
          <h1>{{ personalInfo.name }}</h1>
          <p class="subtitle">
            {{ personalInfo.education_status }}
          </p>
          <div class="contact">
            <span
              ><i class="icon icon-location"></i
              >{{ personalInfo.location }}</span
            >
            <span><i class="icon icon-phone"></i>{{ personalInfo.phone }}</span>
            <span
              ><a :href="'mailto:' + personalInfo.email"
                ><i class="icon icon-email"></i>{{ personalInfo.email }}</a
              ></span
            >
          </div>
        </div>
        <img :src="personalInfo.avatar" alt="个人照片" class="avatar" />
      </div>
    </header>

    <main class="container">
      <!-- 2. 个人优势 -->
      <section class="section">
        <h2><i class="icon icon-user"></i>个人优势</h2>
        <p>{{ aboutMe }}</p>
      </section>

      <!-- 3. 技术栈 -->
      <section class="section">
        <h2><i class="icon icon-skills"></i>技术栈</h2>
        <div class="skills-container">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{
            skill
          }}</span>
        </div>
      </section>

      <!-- 4. 教育背景 -->
      <section class="section">
        <h2><i class="icon icon-education"></i>教育背景</h2>
        <div class="education-list">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="card education-card"
          >
            <h3>{{ edu.university }}</h3>
            <p class="education-degree">
              {{ edu.degree }}, {{ edu.department }}, {{ edu.major }}
            </p>
            <p class="education-date">{{ edu.date }}</p>
            <p class="education-details">{{ edu.details }}</p>
          </div>
        </div>
      </section>

      <!-- 5. 项目经历 -->
      <section class="section">
        <h2><i class="icon icon-projects"></i>项目经历</h2>
        <div class="project-list">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="card project-card"
          >
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <span class="project-role">{{ project.role }}</span>
            </div>
            <p class="project-date">{{ project.date }}</p>
            <p class="project-description">{{ project.description }}</p>
            <div v-if="project.achievements && project.achievements.length > 0">
              <h4>主要业绩:</h4>
              <ul>
                <li v-for="(achievement, i) in project.achievements" :key="i">
                  {{ achievement }}
                </li>
              </ul>
            </div>
            <div class="tags-container">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. 学术成果 -->
      <section class="section">
        <h2><i class="icon icon-publications"></i>学术成果</h2>
        <ul class="publication-list">
          <li v-for="(pub, index) in publications" :key="index">
            <p>
              <strong>{{ pub.title }}</strong>
            </p>
            <p class="pub-details">
              {{ pub.journal }} <span class="highlight">{{ pub.details }}</span>
            </p>
          </li>
        </ul>
      </section>

      <!-- 7. GitHub 开源项目 -->
      <section class="section">
        <h2><i class="icon icon-github"></i>GitHub 开源项目</h2>
        <div class="project-list">
          <div v-for="repo in repos" class="card repo-card">
            <a :href="repo.url" target="_blank" rel="noopener noreferrer">
              <h3>{{ repo.icon }} {{ repo.repo }}</h3>
            </a>
            <p class="repo-description">{{ repo.desc }}</p>
            <div class="repo-stats">
              <img :src="repo.lang" alt="Langs" />
              <img :src="repo.shield" alt="Stars" />
            </div>
          </div>
        </div>
      </section>

      <!-- 8. 荣誉奖项 -->
      <section class="section">
        <h2><i class="icon icon-awards"></i>荣誉奖项</h2>
        <ul class="awards-list">
          <li v-for="award in awards" :key="award">{{ award }}</li>
        </ul>
      </section>
    </main>

    <footer class="footer">
      <p>
        © {{ new Date().getFullYear() }} {{ personalInfo.name }}. 使用 Vue.js
        构建.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import avatarUrl from "./assets/avatar.png";

const personalInfo = ref({
  name: "彭浩天",
  education_status: "中科院在读博士生",
  location: "南通",
  phone: "15295797613",
  email: "pht0613@163.com",
  avatar: avatarUrl,
});

const aboutMe = ref(
  "目前研究方向为深度学习和工业大模型, 在 AAAI（人工智能顶会）、IEEE Trans等会议、期刊上发表多篇高水平论文。能熟练使用Python、JavaScript 等编程语言, 掌握 Pytorch 编写各类深度学习算法, 对于振动、音频、力信号的信息挖掘具有一定的经验。在项目方面, 能够使用 Electron、Vue、SQL、FastAPI 等现代化工具构建前后端应用框架, 完成具体目标的落地实施。"
);

const skills = ref([
  "Python",
  "PyTorch",
  "JavaScript",
  "Vue.js",
  "FastAPI",
  "SQL",
  "深度学习",
  "大语言模型 (LLM)",
  "信号处理",
  "Electron",
  "全栈开发",
  "多模态",
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
      "通过有效的技术成果转化，助力项目实现商业价值，直接贡献于1000万元以上的盈利。",
    ],
    tags: ["深度学习", "Electron", "微信小程序", "全栈", "医疗AI"],
  },
]);

// GitHub 项目列表
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
    title:
      "BearLLM: A Prior Knowledge-Enhanced Bearing Health Management Framework with Unified Vibration Signal Representation.",
    journal: "Proceedings of the AAAI Conference on Artificial Intelligence",
    details: "(CCF-A, 人工智能顶会, 一作)",
  },
  {
    title:
      "A Lightweight Triple-Stream Network with Multi-Sensor Fusion for Enhanced Few-Shot Learning Fault Diagnosis.",
    journal: "IEEE Transactions on Reliability",
    details: "(JCR Q1, IF=5.7, 一作)",
  },
  {
    title:
      "Adversarial Training of Multi-Scale Channel Attention Network for Enhanced Robustness in Bearing Fault Diagnosis.",
    journal: "Measurement Science and Technology",
    details: "(JCR Q1, IF=3.4, 一作)",
  },
  {
    title:
      "A Spectral Interpretable Bearing Fault Diagnosis Framework Powered by Large Language Models.",
    journal: "Sensors",
    details: "(JCR Q2, IF=3.5, 通讯)",
  },
]);

const awards = ref([
  "本科生国家奖学金",
  "江苏省优秀学生干部",
  "江苏省优秀毕业设计",
  "河海大学优秀毕业生",
  "挑战杯",
  "机械设计竞赛",
  "数学建模美赛",
]);

const education = ref([
  {
    university: "中国科学院大学",
    degree: "博士 (直博)",
    department: "沈阳自动化研究所",
    major: "检测技术与自动化装置",
    date: "2022 - 2027",
    details:
      "绩点 3.84/4。研究方向：医疗、工业、航空航天领域的智能检测技术。担任党支部书记，曾获优秀党员、三好学生等荣誉。",
  },
  {
    university: "河海大学",
    degree: "本科",
    department: "机电工程学院",
    major: "机械工程",
    date: "2018 - 2022",
    details:
      "优秀毕业生。绩点 4.7/5。曾任校社团联合会主席。获国家奖学金、全国智能机器人竞赛一等奖等。",
  },
]);
</script>

<style>
/* --- 全局样式和变量 --- */
:root {
  --primary-color: #007bff;
  --secondary-color: #43a047;
  --dark-color: #333;
  --light-color: #f8f9fa;
  --grey-color: #6c757d;
  --border-color: #e9ecef;
  --card-bg: #ffffff;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  margin: 0;
  background-color: var(--light-color);
  color: var(--dark-color);
  line-height: 1.7;
}

#resume {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

h1,
h2,
h3,
h4 {
  color: var(--dark-color);
  font-weight: 600;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
h2 {
  margin-top: 0.5rem;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
  display: flex;
  align-items: center;
  gap: 10px;
}
h3 {
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}
h4 {
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  color: #0056b3;
}

ul {
  padding-left: 20px;
  margin-top: 0;
}
li {
  margin-bottom: 0.5rem;
}

/* --- 图标 SVG (内联) --- */
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  background-repeat: no-repeat;
  background-size: contain;
}
.icon-location {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>');
}
.icon-phone {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.63 21 3 13.37 3 4.51c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>');
}
.icon-email {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>');
}
.icon-user {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>');
}
.icon-skills {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>');
}
.icon-projects {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>');
}
.icon-github {
  background-image: url("./assets/github.svg");
}
.icon-publications {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>');
}
.icon-awards {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>');
}
.icon-education {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>');
}
.icon-code {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>');
}
.icon-star {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>');
}
.icon-fork {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 0 .75.75h.01a.75.75 0 0 0 .74-.75v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 0 .75.75h.01a.75.75 0 0 0 .74-.75v-.878a2.25 2.25 0 1 0-1.5 0zM3.5 3.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0zM11.75 12h-2.5a.75.75 0 0 0 0 1.5h2.5a2.25 2.25 0 1 1-2.25 2.25v-1.5a.75.75 0 0 0-1.5 0v1.5A3.75 3.75 0 1 0 11.75 12z"/></svg>');
}

/* --- 各个模块样式 --- */
.header {
  background: var(--card-bg);
  padding: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow);
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.header .info {
  flex: 1;
}
.header .subtitle {
  font-size: 1.2rem;
  color: var(--grey-color);
}
.header .contact {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 1rem;
}
.header .contact span,
.header .contact a {
  color: var(--grey-color);
  display: flex;
  align-items: center;
  gap: 8px;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 25%;
  object-fit: cover;
  border: 4px solid var(--grey-color);
  margin-left: 20px;
}

.section {
  background: var(--card-bg);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.project-list,
.education-list {
  display: grid;
  gap: 10px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
}
.project-role {
  font-style: italic;
  color: var(--grey-color);
  font-size: 0.9rem;
}
.project-date {
  color: var(--grey-color);
  font-size: 0.9rem;
  margin-top: -0.2rem;
  margin-bottom: 1rem;
}
.project-description {
  margin-bottom: 1rem;
}

.skills-container,
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.skill-tag {
  background-color: rgba(0, 123, 255, 0.1);
  color: var(--primary-color);
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
}
.tag {
  background-color: var(--border-color);
  color: var(--grey-color);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.repo-card h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0;
}
.repo-card .repo-description {
  color: var(--grey-color);
  font-size: 0.9rem;
  min-height: 40px;
}
.repo-stats {
  display: flex;
  gap: 15px;
  margin-top: 1rem;
  color: var(--grey-color);
  font-size: 0.9rem;
}
.repo-stats span {
  display: flex;
  align-items: center;
  gap: 5px;
}
.repo-stats .language {
  color: var(--secondary-color);
  font-weight: 500;
}
.loading {
  text-align: center;
  padding: 20px;
  color: var(--grey-color);
}

.publication-list li {
  margin-bottom: 1.5rem;
  list-style-type: decimal;
}
.publication-list .pub-details {
  color: var(--grey-color);
  font-size: 0.9rem;
}
.publication-list .highlight {
  color: var(--secondary-color);
  font-weight: bold;
}

.awards-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  list-style-type: none;
  padding-left: 0;
}
.awards-list li {
  background-color: var(--light-color);
  padding: 10px 15px;
  border-radius: 5px;
  border-left: 3px solid var(--secondary-color);
}

.education-card h3 {
  color: var(--dark-color);
}
.education-degree,
.education-date {
  color: var(--grey-color);
}
.education-date {
  font-size: 0.9rem;
}

.footer {
  text-align: center;
  padding: 30px;
  color: var(--grey-color);
  font-size: 0.9rem;
}

/* --- 响应式设计 --- */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }

  .header-content {
    flex-direction: column-reverse;
    text-align: center;
  }
  .avatar {
    margin-left: 0;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
  }
  .header .contact {
    justify-content: center;
    gap: 15px;
  }
}
</style>
