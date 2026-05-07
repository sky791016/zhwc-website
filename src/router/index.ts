import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/about', component: () => import('@/pages/About.vue') },
  { path: '/solutions', component: () => import('@/pages/Solutions.vue') },
  { path: '/solutions/cloudcore', component: () => import('@/pages/products/CloudCore.vue') },
  { path: '/solutions/agentos', component: () => import('@/pages/products/AgentOS.vue') },
  { path: '/solutions/factorymind', component: () => import('@/pages/products/FactoryMind.vue') },
  { path: '/solutions/eduai', component: () => import('@/pages/products/EduAI.vue') },
  { path: '/solutions/secureai', component: () => import('@/pages/products/SecureAI.vue') },
  { path: '/solutions/manufacturing', component: () => import('@/pages/solutions/Manufacturing.vue') },
  { path: '/thailand', component: () => import('@/pages/Thailand.vue') },
  { path: '/cases', component: () => import('@/pages/Cases.vue') },
  { path: '/partners', component: () => import('@/pages/Partners.vue') },
  { path: '/contact', component: () => import('@/pages/Contact.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
