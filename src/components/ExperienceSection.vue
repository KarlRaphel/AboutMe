<script setup lang="ts">
import { experiences } from '../data/experience'
import { useRouter } from 'vue-router'

const router = useRouter()

function openDetail(id: string) {
  router.push(`/experience/${id}`)
}
</script>

<template>
  <section id="experience" class="section" style="background: var(--color-bg-secondary);">
    <div class="container">
      <h2 class="section__title">实习经历</h2>
      <p class="section__subtitle">Experience</p>

      <div class="exp-grid stagger-children">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="card card--interactive exp-card"
          @click="openDetail(exp.id)"
        >
          <div class="exp-card__header">
            <div class="exp-card__logo">
              <img v-if="exp.logo" :src="exp.logo" :alt="exp.company" class="exp-card__logo-img" />
              <span v-else>{{ exp.company[0] }}</span>
            </div>
            <div class="exp-card__info">
              <h3 class="exp-card__company">{{ exp.company }}</h3>
              <p class="exp-card__role">{{ exp.role }}</p>
              <span class="exp-card__period">{{ exp.period }}</span>
            </div>
            <svg class="exp-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <p class="exp-card__summary">{{ exp.summary }}</p>
          <div class="exp-card__tags">
            <span v-for="tag in exp.tags" :key="tag" class="tag tag--yellow">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-grid {
  display: grid;
  gap: var(--space-6);
}

.exp-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.exp-card__logo {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-accent-gradient-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--text-xl);
  color: var(--color-accent-primary);
  flex-shrink: 0;
  overflow: hidden;
}

.exp-card__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.exp-card__info {
  flex: 1;
}

.exp-card__company {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
}

.exp-card__role {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.exp-card__period {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

.exp-card__arrow {
  color: var(--color-text-tertiary);
  transition: transform var(--transition-fast);
  flex-shrink: 0;
}

.exp-card:hover .exp-card__arrow {
  transform: translateX(4px);
  color: var(--color-accent-primary);
}

.exp-card__summary {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  line-height: var(--leading-relaxed);
}

.exp-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
</style>
