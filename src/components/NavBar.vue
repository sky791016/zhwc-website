<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }]">
    <div class="navbar__inner container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar__logo">
        <!-- Gear icon extracted from logo palette -->
        <svg class="navbar__logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- green segments -->
          <path d="M24 4 A20 20 0 0 1 40.7 14" stroke="#7CB93E" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M43 26 A20 20 0 0 1 35 40.7" stroke="#7CB93E" stroke-width="7" stroke-linecap="round" fill="none"/>
          <!-- blue segments -->
          <path d="M40.7 14 A20 20 0 0 1 43 26" stroke="#0070C0" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M35 40.7 A20 20 0 0 1 13 40.7" stroke="#0070C0" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M13 40.7 A20 20 0 0 1 4 24" stroke="#0070C0" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M4 24 A20 20 0 0 1 24 4" stroke="#0070C0" stroke-width="7" stroke-linecap="round" fill="none"/>
          <!-- center circles -->
          <circle cx="24" cy="24" r="8" fill="#1A3A5C"/>
          <circle cx="24" cy="24" r="4" fill="#0070C0"/>
        </svg>
        <span class="navbar__logo-text">工赋</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="navbar__nav">
        <div v-for="item in navItems" :key="item.path" class="navbar__item">
          <RouterLink :to="item.path" class="navbar__link" :class="{ 'navbar__link--active': isActive(item.path) }">
            {{ lang === 'zh' ? item.zh : item.en }}
            <span v-if="item.children" class="navbar__caret">▾</span>
          </RouterLink>
          <div v-if="item.children" class="navbar__dropdown">
            <RouterLink
              v-for="child in item.children"
              :key="child.path"
              :to="child.path"
              class="navbar__dropdown-item"
            >
              <span class="navbar__dropdown-zh">{{ child.zh }}</span>
              <span class="navbar__dropdown-en">{{ child.en }}</span>
            </RouterLink>
          </div>
        </div>
      </nav>

      <!-- Actions -->
      <div class="navbar__actions">
        <button class="navbar__lang-toggle" @click="toggleLang">
          {{ lang === 'zh' ? 'EN' : '中文' }}
        </button>
        <RouterLink to="/contact" class="btn btn-primary navbar__cta">
          {{ lang === 'zh' ? '立即咨询' : 'Get Started' }}
        </RouterLink>
        <button class="navbar__burger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <div class="navbar__mobile-inner">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="navbar__mobile-link"
          @click="menuOpen = false"
        >
          {{ lang === 'zh' ? item.zh : item.en }}
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-primary" @click="menuOpen = false">
          {{ lang === 'zh' ? '立即咨询' : 'Get Started' }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)
const { lang, toggleLang } = useLang()

const navItems = [
  {
    zh: '关于我们', en: 'About', path: '/about',
    children: [
      { zh: '公司简介', en: 'Company Profile', path: '/about#profile' },
      { zh: '发展历程', en: 'Our Journey', path: '/about#journey' },
      { zh: '核心团队', en: 'Leadership', path: '/about#team' },
    ]
  },
  {
    zh: '解决方案', en: 'Solutions', path: '/solutions',
    children: [
      { zh: 'ZH·FactoryMind 制造业 AI', en: 'ZH·FactoryMind', path: '/solutions/factorymind' },
      { zh: 'ZH·AgentOS 企业智能体', en: 'ZH·AgentOS', path: '/solutions/agentos' },
      { zh: 'ZH·CloudCore 私有化基础设施', en: 'ZH·CloudCore', path: '/solutions/cloudcore' },
      { zh: 'ZH·EduAI 高校教育 AI', en: 'ZH·EduAI', path: '/solutions/eduai' },
      { zh: 'ZH·SecureAI 安全合规', en: 'ZH·SecureAI', path: '/solutions/secureai' },
      { zh: '精益 AI 制造方法论', en: 'Lean AI Manufacturing', path: '/solutions/manufacturing' },
    ]
  },
  { zh: '泰国专区', en: 'Thailand Hub', path: '/thailand' },
  { zh: '案例与洞察', en: 'Cases & Insights', path: '/cases' },
  { zh: '生态合作', en: 'Partnerships', path: '/partners' },
  { zh: '资质认证', en: 'Qualifications', path: '/qualifications' },
  { zh: '联系我们', en: 'Contact', path: '/contact' },
]

const isActive = (path: string) => route.path === path || route.path.startsWith(path + '/')

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;
  background: transparent;
}

.navbar--scrolled {
  background: rgba(13, 34, 54, 0.97);
  backdrop-filter: blur(12px);
  padding: 12px 0;
  box-shadow: 0 2px 24px rgba(0,0,0,0.2);
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: 40px;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  text-decoration: none;
}

.navbar__logo-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.navbar__logo-text {
  font-size: 22px;
  font-weight: 900;
  color: #fff;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 0.04em;
  line-height: 1;
}

/* Nav items */
.navbar__nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.navbar__item {
  position: relative;
}

.navbar__item:hover .navbar__dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.navbar__link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  border-radius: 6px;
  transition: all 0.2s;
  white-space: nowrap;
}

.navbar__link:hover,
.navbar__link--active {
  color: #fff;
  background: rgba(255,255,255,0.1);
}

.navbar__link--active {
  color: var(--color-amber);
}

.navbar__caret {
  font-size: 10px;
  opacity: 0.6;
}

/* Dropdown */
.navbar__dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: #fff;
  border-radius: 12px;
  padding: 8px;
  min-width: 240px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.2s ease;
  border: 1px solid var(--color-border);
}

.navbar__dropdown-item {
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  border-radius: 8px;
  transition: background 0.15s;
}

.navbar__dropdown-item:hover {
  background: var(--color-surface-alt);
}

.navbar__dropdown-zh {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-indigo);
}

.navbar__dropdown-en {
  font-size: 12px;
  color: var(--color-text-muted);
}

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  flex-shrink: 0;
}

.navbar__lang-toggle {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.8);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.navbar__lang-toggle:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.navbar__cta {
  padding: 10px 20px;
  font-size: 14px;
}

/* Burger */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.2s;
}

/* Mobile */
.navbar__mobile {
  display: none;
  background: var(--color-indigo-dark);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.navbar__mobile--open {
  max-height: 500px;
}

.navbar__mobile-inner {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.navbar__mobile-link {
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  border-radius: 8px;
  transition: background 0.15s;
}

.navbar__mobile-link:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

@media (max-width: 1023px) {
  .navbar__nav { display: none; }
  .navbar__cta { display: none; }
  .navbar__lang-toggle { display: none; }
  .navbar__burger { display: flex; }
  .navbar__mobile { display: block; }
}
</style>
