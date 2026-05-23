<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getExperienceById } from '../data/experience'

const route = useRoute()
const router = useRouter()

const exp = computed(() => getExperienceById(route.params.id as string))

function goBack() {
  router.push('/#experience')
}

function goToRelatedProject() {
  router.push('/project/idpse')
}
</script>

<template>
  <div class="detail-page" v-if="exp">
    <div class="detail-topbar">
      <div class="container detail-topbar__inner">
        <button class="detail-topbar__back" @click="goBack">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          返回
        </button>
      </div>
    </div>

    <header class="detail-header">
      <div class="container container--narrow">
        <div class="exp-detail__logo animate-fade-in-up">
          <img v-if="exp.logo" :src="exp.logo" :alt="exp.company" class="exp-detail__logo-img" />
          <span v-else>{{ exp.company[0] }}</span>
        </div>
        <h1 class="detail-header__title animate-fade-in-up" style="animation-delay: 0.05s">
          {{ exp.company }}
        </h1>
        <p class="detail-header__role animate-fade-in-up" style="animation-delay: 0.1s">
          {{ exp.role }} · {{ exp.period }}
        </p>
        <div class="detail-header__tech animate-fade-in-up" style="animation-delay: 0.15s">
          <span v-for="tag in exp.tags" :key="tag" class="detail-header__tech-item">
            {{ tag }}
          </span>
        </div>
      </div>
    </header>

    <article class="detail-body">
      <div class="container container--narrow">
        <div v-for="(section, i) in exp.sections" :key="i" class="detail-section animate-fade-in-up" :style="{ animationDelay: `${0.2 + i * 0.05}s` }">
          <h2 class="detail-section__title">{{ section.title }}</h2>
          <div class="detail-section__content">
            <p
              v-for="(para, j) in section.paragraphs"
              :key="j"
              class="detail-section__paragraph"
              v-html="para"
            ></p>
          </div>
        </div>

        <div class="detail-related animate-fade-in-up" style="animation-delay: 0.4s">
          <h2 class="detail-section__title">关联项目</h2>
          <button class="related-project-link" @click="goToRelatedProject">
            <span>面向超高龄人群的实时个性化语音增强（ID-PSE）</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <p class="related-project-desc">
            实习期间主导研发的核心 PWS 技术后续被迁移至适老化医疗场景，进一步孵化出完整的 ID-PSE 框架。
          </p>
        </div>
      </div>
    </article>
  </div>

  <div v-else class="container" style="text-align: center; padding: 160px 24px;">
    <h1>经历未找到</h1>
    <button @click="goBack" style="margin-top: 24px; padding: 10px 24px; background: var(--color-accent-primary); color: white; border-radius: 8px; font-weight: 600;">
      返回首页
    </button>
  </div>
</template>

<style scoped>
.detail-page {
  padding-top: var(--nav-height);
}

.detail-topbar {
  position: sticky;
  top: var(--nav-height);
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border-light);
  padding: var(--space-3) 0;
}

.detail-topbar__inner {
  display: flex;
  align-items: center;
}

.detail-topbar__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.detail-topbar__back:hover {
  color: var(--color-accent-primary);
  background: var(--color-accent-light);
}

.detail-header {
  padding: var(--space-12) 0 var(--space-10);
  background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.04), transparent);
  border-bottom: 1px solid var(--color-border-light);
}

.detail-header__title {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-3);
}

.detail-header__role {
  font-size: var(--text-base);
  color: var(--color-accent-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-6);
}

.detail-header__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.detail-header__tech-item {
  font-size: var(--text-xs);
  padding: var(--space-1) var(--space-3);
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}

.exp-detail__logo {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--color-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--text-2xl);
  color: var(--color-accent-primary);
  margin-bottom: var(--space-4);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.exp-detail__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
}

.detail-body {
  padding: var(--space-12) 0 var(--space-20);
}

.detail-section {
  margin-bottom: var(--space-10);
}

.detail-section__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-6);
  padding-left: var(--space-4);
  border-left: 3px solid var(--color-accent-primary);
}

.detail-section__paragraph {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  text-align: justify;
}

.detail-section__paragraph :deep(strong) {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}

.detail-related {
  margin-top: var(--space-12);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.related-project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent-primary);
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
  margin-bottom: var(--space-3);
  transition: gap var(--transition-fast);
}

.related-project-link:hover {
  gap: var(--space-3);
}

.related-project-desc {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  line-height: var(--leading-relaxed);
}
</style>
