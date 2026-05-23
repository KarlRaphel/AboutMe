<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

const activeFilter = ref<string>('全部')

const allTags = computed(() => {
  const tagSet = new Set<string>()
  projects.forEach(p => p.tags.forEach(t => tagSet.add(t)))
  return ['全部', ...Array.from(tagSet)]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === '全部') return projects
  return projects.filter(p => p.tags.includes(activeFilter.value))
})
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section__title">核心项目</h2>
      <p class="section__subtitle">Projects</p>

      <div class="filter-bar">
        <button
          v-for="tag in allTags"
          :key="tag"
          class="filter-btn"
          :class="{ 'filter-btn--active': activeFilter === tag }"
          @click="activeFilter = tag"
        >
          {{ tag }}
        </button>
      </div>

      <div class="projects-grid">
        <TransitionGroup name="card">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            v-bind="project"
          />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.filter-btn {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
}

.filter-btn--active {
  background: var(--color-accent-primary);
  border-color: var(--color-accent-primary);
  color: white;
}

.filter-btn--active:hover {
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: var(--space-6);
}

/* Transition animations */
.card-enter-active {
  transition: all 0.4s ease;
}
.card-leave-active {
  transition: all 0.3s ease;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.card-move {
  transition: transform 0.4s ease;
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
