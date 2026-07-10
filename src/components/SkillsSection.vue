<script setup lang="ts">
import { skills } from '../data/skills'

const categoryIcons: Record<string, string> = {
  '多模态大模型与算法': '🧠',
  'Agent、具身智能与端侧部署': '🤖',
  '全栈架构与系统工程': '💻',
}
</script>

<template>
  <section id="skills" class="section" style="background: var(--color-bg-secondary);">
    <div class="container">
      <h2 class="section__title">技能清单</h2>
      <p class="section__subtitle">Skills</p>

      <div class="skills-grid stagger-children">
        <div v-for="group in skills" :key="group.category" class="skill-group card">
          <h3 class="skill-group__title">
            <span class="skill-group__icon">{{ categoryIcons[group.category] || '📌' }}</span>
            {{ group.category }}
          </h3>
          <div class="skill-group__items">
            <span v-for="item in group.items" :key="item" class="skill-item">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
}

.skill-group__title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.skill-group__icon {
  font-size: var(--text-xl);
}

.skill-group__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skill-item {
  display: inline-block;
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.skill-item:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
  background: var(--color-accent-light);
  transform: translateY(-1px);
}
</style>
