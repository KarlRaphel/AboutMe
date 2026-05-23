<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { label: '关于', hash: '#about' },
  { label: '教育', hash: '#education' },
  { label: '实习', hash: '#experience' },
  { label: '项目', hash: '#projects' },
  { label: '论文', hash: '#publications' },
  { label: '开源', hash: '#opensource' },
  { label: '技能', hash: '#skills' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function navigateTo(hash: string) {
  mobileMenuOpen.value = false
  if (route.path !== '/') {
    router.push('/' + hash)
  } else {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

function goHome() {
  mobileMenuOpen.value = false
  router.push('/')
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__inner container">
      <a class="navbar__brand" @click.prevent="goHome" href="/">
        <span class="navbar__brand-icon">P</span>
        <span class="navbar__brand-text">Haotian Peng</span>
      </a>

      <button class="navbar__toggle" @click="mobileMenuOpen = !mobileMenuOpen" :aria-expanded="mobileMenuOpen">
        <span class="navbar__toggle-bar" :class="{ active: mobileMenuOpen }"></span>
      </button>

      <ul class="navbar__links" :class="{ 'navbar__links--open': mobileMenuOpen }">
        <li v-for="item in navItems" :key="item.hash">
          <a class="navbar__link" @click.prevent="navigateTo(item.hash)" :href="item.hash">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  transition: all var(--transition-base);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 0 var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  cursor: pointer;
}

.navbar__brand-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: var(--color-accent-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--text-sm);
}

.navbar__brand-text {
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-base);
  color: var(--color-text-primary);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.navbar__link {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  text-decoration: none;
  cursor: pointer;
}

.navbar__link:hover {
  color: var(--color-accent-primary);
  background: var(--color-accent-light);
}

.navbar__toggle {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
}

.navbar__toggle-bar,
.navbar__toggle-bar::before,
.navbar__toggle-bar::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
  position: relative;
}

.navbar__toggle-bar::before,
.navbar__toggle-bar::after {
  content: '';
  position: absolute;
  left: 0;
}

.navbar__toggle-bar::before { top: -6px; }
.navbar__toggle-bar::after { top: 6px; }

.navbar__toggle-bar.active {
  background: transparent;
}

.navbar__toggle-bar.active::before {
  top: 0;
  transform: rotate(45deg);
  background: var(--color-text-primary);
}

.navbar__toggle-bar.active::after {
  top: 0;
  transform: rotate(-45deg);
  background: var(--color-text-primary);
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    padding: var(--space-4);
    gap: var(--space-1);
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }

  .navbar__links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__link {
    width: 100%;
    padding: var(--space-3) var(--space-4);
  }
}
</style>
