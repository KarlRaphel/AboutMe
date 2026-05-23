<script setup lang="ts">
import { educations } from '../data/education'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <h2 class="section__title">教育背景</h2>
      <p class="section__subtitle">Education</p>

      <div class="timeline">
        <div v-for="edu in educations" :key="edu.id" class="timeline__item">
          <div class="timeline__dot"></div>
          <div class="timeline__card card">
            <div class="timeline__header">
              <div>
                <h3 class="timeline__school">{{ edu.school }}</h3>
                <p class="timeline__major">{{ edu.major }} · {{ edu.degree }}</p>
              </div>
              <span class="timeline__period">{{ edu.period }}</span>
            </div>
            <div class="timeline__gpa">
              <span class="timeline__gpa-badge">GPA {{ edu.gpa }}</span>
            </div>
            <p class="timeline__summary">{{ edu.summary }}</p>
            <div v-if="edu.highlights.length > 0" class="timeline__highlights">
              <p class="timeline__highlights-label">核心方向</p>
              <div class="timeline__highlights-tags">
                <span v-for="h in edu.highlights" :key="h" class="tag tag--blue">{{ h }}</span>
              </div>
            </div>
            <div class="timeline__honors">
              <div class="timeline__honors-list">
                <span v-for="honor in edu.honors" :key="honor" class="timeline__honor">{{ honor }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: var(--space-8);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--color-border);
}

.timeline__item {
  position: relative;
  margin-bottom: var(--space-8);
}

.timeline__item:last-child {
  margin-bottom: 0;
}

.timeline__dot {
  position: absolute;
  left: calc(-1 * var(--space-8) + 4px);
  top: var(--space-6);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent-gradient);
  border: 3px solid var(--color-bg-primary);
  box-shadow: 0 0 0 2px var(--color-accent-primary);
  z-index: 1;
}

.timeline__card {
  padding: var(--space-6);
}

.timeline__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
}

.timeline__school {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
}

.timeline__major {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.timeline__period {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  padding: var(--space-1) var(--space-3);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
}

.timeline__gpa {
  margin-bottom: var(--space-3);
}

.timeline__gpa-badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-accent-gradient-soft);
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-full);
}

.timeline__summary {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.timeline__highlights {
  margin-bottom: var(--space-4);
}

.timeline__highlights-label {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-2);
}

.timeline__highlights-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.timeline__honors-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.timeline__honor {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
}

@media (max-width: 768px) {
  .timeline__header {
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
