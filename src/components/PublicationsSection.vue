<script setup lang="ts">
import { publishedPapers, underReviewPapers, patents } from '../data/publications'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToProject(projectId: string) {
  router.push(`/project/${projectId}`)
}
</script>

<template>
  <section id="publications" class="section" style="background: var(--color-bg-secondary);">
    <div class="container">
      <h2 class="section__title">学术成果</h2>
      <p class="section__subtitle">Publications</p>

      <div class="pub-group">
        <h3 class="pub-group__title">
          已发表论文
          <span class="pub-group__count">{{ publishedPapers.length }}</span>
        </h3>
        <div class="pub-list stagger-children">
          <div v-for="(paper, i) in publishedPapers" :key="paper.id" class="pub-item">
            <span class="pub-item__index">[{{ i + 1 }}]</span>
            <div class="pub-item__content">
              <a v-if="paper.url" :href="paper.url" target="_blank" rel="noopener" class="pub-item__title pub-item__title--link">
                {{ paper.title }}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="pub-item__external-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <p v-else class="pub-item__title">{{ paper.title }}</p>
              <div class="pub-item__meta">
                <span class="pub-item__venue">{{ paper.venue }}</span>
                <span class="pub-item__venue-tag">{{ paper.venueTag }}</span>
                <span class="pub-item__role" :class="{ 'pub-item__role--first': paper.role === '第一作者' }">
                  {{ paper.role }}
                </span>
              </div>
              <div class="pub-item__actions">
                <button
                  v-if="paper.relatedProject"
                  class="pub-item__project-link"
                  @click.stop="goToProject(paper.relatedProject)"
                >
                  查看关联项目 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pub-group">
        <h3 class="pub-group__title">
          在审论文
          <span class="pub-group__count">{{ underReviewPapers.length }}</span>
        </h3>
        <div class="pub-list stagger-children">
          <div v-for="(paper, i) in underReviewPapers" :key="paper.id" class="pub-item pub-item--review">
            <span class="pub-item__index">[{{ i + 1 }}]</span>
            <div class="pub-item__content">
              <p class="pub-item__title">{{ paper.title }}</p>
              <div class="pub-item__meta">
                <span class="pub-item__venue">{{ paper.venue }}</span>
                <span class="pub-item__role" :class="{ 'pub-item__role--first': paper.role === '第一作者' }">
                  {{ paper.role }}
                </span>
                <span class="pub-item__status">Under Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pub-group">
        <h3 class="pub-group__title">
          发明专利
          <span class="pub-group__count">{{ patents.length }}</span>
        </h3>
        <div class="patent-grid stagger-children">
          <div v-for="patent in patents" :key="patent.id" class="patent-card card card--interactive" @click="patent.relatedProject && goToProject(patent.relatedProject)">
            <div class="patent-card__header">
              <span class="patent-card__type">{{ patent.type }}</span>
            </div>
            <p class="patent-card__title">{{ patent.title }}</p>
            <div class="patent-card__actions" v-if="patent.relatedProject">
              <span class="patent-card__project-link">
                查看关联项目 →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pub-group {
  margin-bottom: var(--space-10);
}

.pub-group:last-child {
  margin-bottom: 0;
}

.pub-group__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.pub-group__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: var(--color-accent-gradient);
  color: white;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
}

.pub-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pub-item {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast);
}

.pub-item:hover {
  border-color: var(--color-border-accent);
}

.pub-item__index {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent-primary);
  flex-shrink: 0;
  line-height: 1.75;
}

.pub-item__content {
  flex: 1;
}

.pub-item__title {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-2);
  font-style: italic;
}

.pub-item__title--link {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
  text-decoration: none;
  transition: color var(--transition-fast);
  cursor: pointer;
}

.pub-item__title--link:hover {
  color: var(--color-accent-primary);
}

.pub-item__external-icon {
  flex-shrink: 0;
  opacity: 0.4;
  transition: opacity var(--transition-fast);
  position: relative;
  top: 1px;
}

.pub-item__title--link:hover .pub-item__external-icon {
  opacity: 1;
}

.pub-item__actions {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.pub-item__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.pub-item__venue {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.pub-item__venue-tag {
  font-size: var(--text-xs);
  color: var(--color-accent-primary);
  background: var(--color-accent-light);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
}

.pub-item__role {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  padding: 2px var(--space-2);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
}

.pub-item__role--first {
  color: var(--tag-medical-text);
  background: var(--tag-medical);
}

.pub-item__status {
  font-size: var(--text-xs);
  color: var(--tag-speech-text);
  background: var(--tag-speech);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

.pub-item__project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-2);
  font-size: var(--text-xs);
  color: var(--color-accent-primary);
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
  transition: gap var(--transition-fast);
}

.pub-item__project-link:hover {
  gap: var(--space-2);
}

@media (max-width: 480px) {
  .pub-item__actions {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Patent Grid Styles */
.patent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-4);
}

.patent-card {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.patent-card__header {
  margin-bottom: var(--space-2);
}

.patent-card__type {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  background: var(--color-bg-tertiary);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  display: inline-block;
}

.patent-card__title {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
  flex: 1;
}

.patent-card__actions {
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-3);
}

.patent-card__project-link {
  font-size: var(--text-xs);
  color: var(--color-accent-primary);
  font-weight: var(--font-weight-medium);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  transition: gap var(--transition-fast);
}

.patent-card:hover .patent-card__project-link {
  gap: var(--space-2);
}
</style>
