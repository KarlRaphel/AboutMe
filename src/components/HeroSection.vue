<script setup lang="ts">
</script>

<template>
  <section id="about" class="hero">
    <div class="container hero__content">
      <div class="hero__text">
        <div class="hero__greeting animate-fade-in-up">Hello, I'm</div>
        <h1 class="hero__name animate-fade-in-up" style="animation-delay: 0.1s">彭浩天</h1>
        <p class="hero__title animate-fade-in-up" style="animation-delay: 0.15s">
          算法工程师 (大模型应用 / 具身智能 / 端侧部署)
        </p>
        <p class="hero__affiliation animate-fade-in-up" style="animation-delay: 0.2s">
          中国科学院大学 博士在读（沈阳自动化研究所）<br />
          辽宁省智能检测与装备重点实验室
        </p>
        <p class="hero__bio animate-fade-in-up" style="animation-delay: 0.22s">
          专注探索多模态大模型与具身智能的前沿交叉，致力于将先进 AI 算法向真实物理世界与端侧硬件落地。拥有在工业健康感知、智能医疗康复等复杂场景下的全链路研发与商业化落地经验。
        </p>

        <div class="hero__contact animate-fade-in-up" style="animation-delay: 0.25s">
          <a href="mailto:pht0613@163.com" class="hero__contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            pht0613@163.com
          </a>
          <a href="tel:15295797613" class="hero__contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            152-9579-7613 <span class="hero__contact-note">（微信同号）</span>
          </a>
          <a href="https://github.com/KarlRaphel" target="_blank" class="hero__contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            KarlRaphel
          </a>
          <a href="#resume" class="hero__contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            简历下载
          </a>
        </div>

        <div class="hero__tags animate-fade-in-up" style="animation-delay: 0.3s">
          <span class="tag tag--blue">深度学习 (Python/PyTorch)</span>
          <span class="tag tag--blue">大模型与多模态 (LLM/VLM/RAG)</span>
          <span class="tag tag--indigo">具身智能与机器人控制 (ROS2)</span>
          <span class="tag tag--green">端侧部署与推理加速 (C++/OpenVINO/ONNX)</span>
          <span class="tag tag--pink">AI 医疗与智能康复</span>
          <span class="tag tag--yellow">工业智能硬件与健康管理</span>
          <span class="tag tag--teal">高并发全栈系统架构 (Vue/FastAPI)</span>
          <span class="tag tag--blue">语音与物理信号处理</span>
        </div>
      </div>

      <div class="hero__avatar-wrapper animate-fade-in-up" style="animation-delay: 0.2s">
        <div class="hero__avatar-glow"></div>
        <img src="/assets/avatar.jpg" alt="彭浩天" class="hero__avatar" />
      </div>
    </div>

    <div class="hero__scroll-hint animate-fade-in" style="animation-delay: 1s">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(var(--nav-height) + var(--space-12)) var(--space-6) var(--space-12);
  position: relative;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.05), transparent),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(124, 58, 237, 0.04), transparent);
}

.hero__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-16);
}

.hero__text {
  flex: 1;
  max-width: 640px;
}

.hero__greeting {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent-primary);
  margin-bottom: var(--space-2);
}

.hero__name {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  background: var(--color-accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

.hero__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.hero__affiliation {
  font-size: var(--text-base);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-4);
  line-height: var(--leading-relaxed);
}

.hero__bio {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  line-height: var(--leading-relaxed);
  padding: var(--space-4);
  background: rgba(37, 99, 235, 0.04);
  border-left: 3px solid var(--color-accent-primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.hero__contact {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.hero__contact-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.hero__contact-item:hover {
  color: var(--color-accent-primary);
}

.hero__contact-item--static {
  cursor: default;
}

.hero__contact-note {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  margin-left: 2px;
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.hero__avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.hero__avatar-glow {
  position: absolute;
  inset: -8px;
  border-radius: var(--radius-xl);
  background: var(--color-accent-gradient);
  opacity: 0.12;
  filter: blur(16px);
}

.hero__avatar {
  width: 240px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  border: 3px solid var(--color-border);
  position: relative;
  z-index: 1;
}

.hero__scroll-hint {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-tertiary);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 768px) {
  .hero__content {
    flex-direction: column-reverse;
    text-align: center;
    gap: var(--space-8);
  }

  .hero__avatar {
    width: 160px;
    height: 200px;
  }

  .hero__contact {
    justify-content: center;
  }

  .hero__tags {
    justify-content: center;
  }
}
</style>
