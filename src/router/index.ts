import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/project/:id',
      name: 'ProjectDetail',
      component: () => import('../views/ProjectDetail.vue'),
    },
    {
      path: '/experience/:id',
      name: 'ExperienceDetail',
      component: () => import('../views/ExperienceDetail.vue'),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        let frames = 0

        const waitForTarget = () => {
          if (document.querySelector(to.hash)) {
            resolve({ el: to.hash, behavior: 'smooth' })
            return
          }

          // The home route is lazy-loaded and wrapped in an out-in transition,
          // so its anchor may not exist when scrollBehavior first runs.
          if (frames < 60) {
            frames += 1
            requestAnimationFrame(waitForTarget)
            return
          }

          resolve({ top: 0 })
        }

        requestAnimationFrame(waitForTarget)
      })
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
