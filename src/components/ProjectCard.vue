<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
  title: string
  role: string
  tags: string[]
  cover: string
  summary: string
}>()

const router = useRouter()

const tagColorMap: Record<string, string> = {
  '大模型': 'tag--blue',
  '多模态': 'tag--blue',
  '工业智能': 'tag--green',
  '开源': 'tag--purple',
  '具身智能': 'tag--indigo',
  '机器人': 'tag--indigo',
  '多设备协同': 'tag--indigo',
  '医疗 AI': 'tag--pink',
  '全栈开发': 'tag--teal',
  '智能硬件': 'tag--green',
  '商业落地': 'tag--yellow',
  '语音处理': 'tag--yellow',
  '端侧部署': 'tag--green',
  '模型压缩': 'tag--blue',
}

function getTagColor(tag: string): string {
  return tagColorMap[tag] || 'tag--blue'
}

function navigate() {
  router.push(`/project/${props.id}`)
}
</script>

<template>
  <div class="project-card card card--interactive" @click="navigate">
    <div class="project-card__cover-wrapper">
      <img :src="cover" :alt="title" class="project-card__cover" loading="lazy" />
      <div class="project-card__cover-overlay"></div>
    </div>
    <div class="project-card__body">
      <div class="project-card__tags">
        <span v-for="tag in tags" :key="tag" class="tag" :class="getTagColor(tag)">{{ tag }}</span>
      </div>
      <h3 class="project-card__title">{{ title }}</h3>
      <p class="project-card__role">{{ role }}</p>
      <p class="project-card__summary">{{ summary }}</p>
      <div class="project-card__cta">
        <span>查看详情</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card__cover-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--color-bg-tertiary);
}

.project-card__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-card__cover {
  transform: scale(1.05);
}

.project-card__cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.03), transparent);
}

.project-card__body {
  padding: var(--space-5);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-bottom: var(--space-3);
}

.project-card__title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
  line-height: var(--leading-tight);
}

.project-card__role {
  font-size: var(--text-xs);
  color: var(--color-accent-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-3);
}

.project-card__summary {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__cta {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent-primary);
  transition: gap var(--transition-fast);
}

.project-card:hover .project-card__cta {
  gap: var(--space-2);
}
</style>
