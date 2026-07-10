<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectById } from '../data/projects'
import { getPaperById, getPatentsByProject } from '../data/publications'
import { getRepoById } from '../data/repos'

const route = useRoute()
const router = useRouter()

const project = computed(() => getProjectById(route.params.id as string))

const relatedPapersData = computed(() => {
  if (!project.value) return []
  return project.value.relatedPapers
    .map(id => getPaperById(id))
    .filter(Boolean)
})

const relatedReposData = computed(() => {
  if (!project.value) return []
  return project.value.relatedRepos
    .map(id => getRepoById(id))
    .filter(Boolean)
})

const relatedPatentsData = computed(() => {
  if (!project.value) return []
  return getPatentsByProject(project.value.id)
})

function goBack() {
  router.push('/#projects')
}
</script>

<template>
  <div class="detail-page" v-if="project">
    <!-- Top bar -->
    <div class="detail-topbar">
      <div class="container detail-topbar__inner">
        <button class="detail-topbar__back" @click="goBack">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          返回项目列表
        </button>
      </div>
    </div>

    <!-- Header -->
    <header class="detail-header">
      <div class="container container--narrow">
        <div class="detail-header__tags animate-fade-in-up">
          <span v-for="tag in project.tags" :key="tag" class="tag tag--blue">{{ tag }}</span>
        </div>
        <h1 class="detail-header__title animate-fade-in-up" style="animation-delay: 0.05s">
          {{ project.title }}
        </h1>
        <p class="detail-header__role animate-fade-in-up" style="animation-delay: 0.1s">
          {{ project.role }}
        </p>
        <div class="detail-header__tech animate-fade-in-up" style="animation-delay: 0.15s">
          <span v-for="tech in project.techStack" :key="tech" class="detail-header__tech-item">
            {{ tech }}
          </span>
        </div>
      </div>
    </header>

    <!-- Content sections -->
    <article class="detail-body">
      <div class="container container--narrow">
        <div v-for="(section, i) in project.sections" :key="i" class="detail-section animate-fade-in-up" :style="{ animationDelay: `${0.2 + i * 0.05}s` }">
          <h2 class="detail-section__title">{{ section.title }}</h2>
          <div class="detail-section__content">
            <p
              v-for="(para, j) in section.paragraphs"
              :key="j"
              class="detail-section__paragraph"
              v-html="para"
            ></p>
          </div>
          <div v-if="section.media && section.media.length > 0" class="detail-section__media">
            <figure v-for="(m, k) in section.media" :key="k" class="detail-figure">
              <img
                v-if="m.type === 'image'"
                :src="m.src"
                :alt="m.caption"
                class="detail-figure__img"
                loading="lazy"
              />
              <video
                v-else-if="m.type === 'video'"
                :src="m.src"
                controls
                preload="metadata"
                class="detail-figure__video"
              ></video>
              <figcaption class="detail-figure__caption">{{ m.caption }}</figcaption>
            </figure>
          </div>
        </div>

        <!-- Related outputs -->
        <div v-if="relatedPapersData.length > 0 || relatedPatentsData.length > 0 || relatedReposData.length > 0 || project.commercial" class="detail-related animate-fade-in-up">
          <h2 class="detail-section__title">关联成果</h2>

          <div v-if="project.commercial" class="detail-related__commercial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>{{ project.commercial }}</span>
          </div>

          <div v-if="relatedPapersData.length > 0" class="detail-related__group">
            <h3 class="detail-related__group-title">📄 关联论文</h3>
            <div v-for="paper in relatedPapersData" :key="paper!.id" class="detail-related__paper">
              <p class="detail-related__paper-title">{{ paper!.title }}</p>
              <div class="detail-related__paper-meta">
                <span>{{ paper!.venue }}</span>
                <span class="detail-related__paper-role">{{ paper!.role }}</span>
              </div>
            </div>
          </div>

          <div v-if="relatedPatentsData.length > 0" class="detail-related__group">
            <h3 class="detail-related__group-title">💡 关联专利</h3>
            <div v-for="patent in relatedPatentsData" :key="patent.id" class="detail-related__patent">
              <p class="detail-related__patent-title">{{ patent.title }}</p>
              <span class="detail-related__patent-type">{{ patent.type }}</span>
            </div>
          </div>

          <div v-if="relatedReposData.length > 0" class="detail-related__group">
            <h3 class="detail-related__group-title">🔗 开源仓库</h3>
            <a
              v-for="repo in relatedReposData"
              :key="repo!.id"
              :href="repo!.url"
              target="_blank"
              class="detail-related__repo"
            >
              <span class="detail-related__repo-name">{{ repo!.name }}</span>
              <span class="detail-related__repo-stars">⭐ {{ repo!.stars }}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>

  <!-- 404 -->
  <div v-else class="detail-notfound">
    <div class="container" style="text-align: center; padding: 120px 24px;">
      <h1>项目未找到</h1>
      <p style="margin-top: 16px; color: var(--color-text-tertiary);">请返回首页查看所有项目</p>
      <button @click="goBack" style="margin-top: 24px; padding: 10px 24px; background: var(--color-accent-primary); color: white; border-radius: 8px; font-weight: 600;">
        返回首页
      </button>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  padding-top: var(--nav-height);
}

/* Top bar */
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

/* Header */
.detail-header {
  padding: var(--space-12) 0 var(--space-10);
  background:
    radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.04), transparent);
  border-bottom: 1px solid var(--color-border-light);
}

.detail-header__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.detail-header__title {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
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

/* Body */
.detail-body {
  padding: var(--space-12) 0 var(--space-20);
}

.detail-section {
  margin-bottom: var(--space-12);
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-section__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-6);
  padding-left: var(--space-4);
  border-left: 3px solid var(--color-accent-primary);
}

.detail-section__content {
  margin-bottom: var(--space-6);
}

.detail-section__paragraph {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  text-align: justify;
}

.detail-section__paragraph:last-child {
  margin-bottom: 0;
}

.detail-section__paragraph :deep(strong) {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}

/* Figures */
.detail-section__media {
  margin-top: var(--space-6);
}

.detail-figure {
  margin-bottom: var(--space-6);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}

.detail-figure:last-child {
  margin-bottom: 0;
}

.detail-figure__img {
  width: 100%;
  display: block;
  background: white;
  padding: var(--space-4);
}

.detail-figure__video {
  width: 100%;
  display: block;
}

.detail-figure__caption {
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  text-align: center;
  border-top: 1px solid var(--color-border-light);
  font-style: italic;
}

/* Related */
.detail-related {
  margin-top: var(--space-16);
  padding-top: var(--space-10);
  border-top: 1px solid var(--color-border);
}

.detail-related__commercial {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(239, 68, 68, 0.06));
  border-radius: var(--radius-md);
  border: 1px solid rgba(245, 158, 11, 0.2);
  color: #92400e;
  font-weight: var(--font-weight-medium);
  font-size: var(--text-sm);
  margin-bottom: var(--space-6);
}

.detail-related__group {
  margin-bottom: var(--space-6);
}

.detail-related__group:last-child {
  margin-bottom: 0;
}

.detail-related__group-title {
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-4);
}

.detail-related__paper {
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-3);
}

.detail-related__paper:last-child {
  margin-bottom: 0;
}

.detail-related__patent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-3);
}

.detail-related__patent:last-child {
  margin-bottom: 0;
}

.detail-related__patent-title {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: var(--leading-relaxed);
}

.detail-related__patent-type {
  flex-shrink: 0;
  padding: 2px var(--space-2);
  background: var(--color-accent-light);
  color: var(--color-accent-primary);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
}

.detail-related__paper-title {
  font-size: var(--text-sm);
  font-style: italic;
  color: var(--color-text-primary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-2);
}

.detail-related__paper-meta {
  display: flex;
  gap: var(--space-3);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

.detail-related__paper-role {
  padding: 1px var(--space-2);
  background: var(--tag-medical);
  color: var(--tag-medical-text);
  border-radius: var(--radius-sm);
}

.detail-related__repo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: border-color var(--transition-fast);
}

.detail-related__repo:hover {
  border-color: var(--color-accent-primary);
}

.detail-related__repo-name {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent-primary);
}

.detail-related__repo-stars {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

@media (max-width: 480px) {
  .detail-related__patent {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
