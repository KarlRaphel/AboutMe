<script setup lang="ts">
import { repos } from '../data/repos'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToProject(id: string | null) {
  if (id) router.push(`/project/${id}`)
}
</script>

<template>
  <section id="opensource" class="section">
    <div class="container">
      <h2 class="section__title">开源贡献</h2>
      <p class="section__subtitle">Open Source</p>

      <div class="repo-grid stagger-children">
        <div v-for="repo in repos" :key="repo.id" class="repo-card card">
          <div class="repo-card__header">
            <svg class="repo-card__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <h3 class="repo-card__name">{{ repo.name }}</h3>
            <a :href="repo.url" target="_blank" class="repo-card__link" @click.stop>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="repo-card__stats">
            <span class="repo-card__stars">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              {{ repo.stars }}
            </span>
            <span v-for="stat in repo.stats" :key="stat.label" class="repo-card__stat">
              {{ stat.label }}: <strong>{{ stat.value }}</strong>
            </span>
          </div>

          <p class="repo-card__desc">{{ repo.description }}</p>
          <p class="repo-card__highlight">{{ repo.highlight }}</p>

          <div class="repo-card__tags">
            <span v-for="tag in repo.tags" :key="tag" class="tag tag--purple">{{ tag }}</span>
          </div>

          <button
            v-if="repo.relatedProject"
            class="repo-card__project-btn"
            @click="goToProject(repo.relatedProject)"
          >
            查看关联项目 →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: var(--space-6);
}

.repo-card {
  display: flex;
  flex-direction: column;
}

.repo-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.repo-card__icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.repo-card__name {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  flex: 1;
}

.repo-card__link {
  color: var(--color-text-tertiary);
  padding: var(--space-2);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.repo-card__link:hover {
  color: var(--color-accent-primary);
  background: var(--color-accent-light);
}

.repo-card__stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.repo-card__stars {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: #f59e0b;
}

.repo-card__stat {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.repo-card__stat strong {
  color: var(--color-text-primary);
}

.repo-card__desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-3);
}

.repo-card__highlight {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  padding: var(--space-3);
  background: var(--color-accent-gradient-soft);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-accent-primary);
}

.repo-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.repo-card__project-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent-primary);
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
  margin-top: auto;
  transition: gap var(--transition-fast);
}

.repo-card__project-btn:hover {
  gap: var(--space-2);
}

@media (max-width: 480px) {
  .repo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
