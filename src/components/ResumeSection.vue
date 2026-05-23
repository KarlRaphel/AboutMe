<script setup lang="ts">
</script>

<template>
  <section id="resume" class="section resume">
    <div class="container container--narrow resume__inner">
      <h2 class="section__title">获取简历</h2>
      <p class="resume__text">
        如果您对我的经历感兴趣，或者希望进一步交流，欢迎下载我的完整版 PDF 简历。
      </p>
      <a href="https://portfolio-assets.888421.xyz/%E5%BD%AD%E6%B5%A9%E5%A4%A9%20-%20%E7%AE%80%E5%8E%86.pdf" target="_blank" class="btn btn--primary resume__btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        下载简历 (PDF)
      </a>
    </div>
  </section>
</template>

<style scoped>
.resume {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  text-align: center;
  padding: var(--space-16) 0;
}

.resume__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.resume__text {
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
}

.resume__btn {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}
</style>
