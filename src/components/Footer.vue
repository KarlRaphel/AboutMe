<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__text">
        © {{ new Date().getFullYear() }} 彭浩天 · Haotian Peng
      </p>
      <p class="footer__sub">Built with Vue 3 + Vite</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--space-8) 0;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-primary);
}

.footer__inner {
  text-align: center;
}

.footer__text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-1);
}

.footer__sub {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}
</style>
