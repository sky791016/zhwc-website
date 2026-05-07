<template>
  <div class="product-page">
    <section class="product-hero section--dark section">
      <div class="container">
        <div class="product-hero__inner">
          <div>
            <div class="product-hero__brand">ZH·EduAI</div>
            <h1 class="product-hero__title">{{ t({ zh: '高校与职业教育 AI 平台', en: 'Higher Education & Vocational AI Platform' }) }}<br><span style="color:var(--color-amber)">MHESI-Compliant · {{ t({ zh: '90天落地', en: '90-Day Deployment' }) }}</span></h1>
            <p class="product-hero__desc">
              {{ t({ zh: 'MHESI 合规 AI 教育平台 — 从课程到校园 AI 助手，专为泰国高校打造。帮助泰国高校在 90 天内落地符合 MHESI 政策的 AI 通识课程与校内 AI 服务平台。', en: 'MHESI-compliant AI education platform — from curriculum to campus AI assistant, built for Thai universities. Helps Thai universities deploy MHESI-compliant AI general education courses and campus AI service platforms within 90 days.' }) }}
            </p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
              <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '预约高校方案演示', en: 'Book University Demo' }) }}</RouterLink>
              <RouterLink to="/thailand" class="btn btn-secondary">{{ t({ zh: '泰国高校政策解读', en: 'Thailand University Policy Overview' }) }}</RouterLink>
            </div>
          </div>
          <div class="product-hero__metrics">
            <div v-for="m in heroMetrics" :key="m.val" class="product-hero__metric">
              <div class="product-hero__metric-val">{{ m.val }}</div>
              <div class="product-hero__metric-label">{{ t(m.label) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: 'MHESI 政策背景', en: 'MHESI Policy Background' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '泰国高教 AI 强制令\n志合创伟是最快的合规路径', en: 'Thailand Higher Education AI Mandate\nZHWC is the Fastest Compliance Path' }) }}</h2>
        </div>
        <div class="grid-2" style="gap:60px;align-items:start">
          <div class="policy-card card">
            <h3 style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:20px">🏛️ MHESI "AI❤︎U" {{ t({ zh: '政策', en: 'Policy' }) }}</h3>
            <div v-for="p in policy" :key="p.label.zh" style="margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--color-border)">
              <div style="font-size:12px;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">{{ t(p.label) }}</div>
              <div style="font-size:15px;font-weight:600;color:var(--color-indigo)">{{ t(p.val) }}</div>
            </div>
          </div>
          <div>
            <h3 style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:20px">{{ t({ zh: 'ZH·EduAI 交付范围', en: 'ZH·EduAI Delivery Scope' }) }}</h3>
            <div class="grid-2" style="gap:16px">
              <div v-for="mod in modules" :key="mod.name.zh" class="card" style="padding:24px">
                <div style="font-size:28px;margin-bottom:10px">{{ mod.icon }}</div>
                <h4 style="font-size:15px;font-weight:700;color:var(--color-indigo);margin-bottom:6px">{{ t(mod.name) }}</h4>
                <p style="font-size:13px;color:var(--color-text-secondary);line-height:1.6">{{ t(mod.desc) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="grid-2" style="gap:60px;align-items:center">
          <div>
            <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '定价', en: 'Pricing' }) }}</span>
            <h2 class="section-title" style="color:#fff">{{ t({ zh: '从 5000 人高校到全国联盟', en: 'From 5,000-Student University to National Alliance' }) }}</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:16px">
            <div v-for="tier in pricing" :key="tier.name.zh" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-md);padding:24px;display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-weight:700;color:rgba(255,255,255,0.9)">{{ t(tier.name) }}</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">{{ t(tier.desc) }}</div>
              </div>
              <div style="font-size:20px;font-weight:800;color:var(--color-amber)">{{ tier.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <h2 class="section-title">{{ t({ zh: '90 天内让您的大学满足 MHESI 要求', en: 'Make Your University MHESI-Compliant Within 90 Days' }) }}</h2>
        <RouterLink to="/contact" class="btn btn-primary" style="font-size:16px;padding:16px 40px;margin-top:32px">{{ t({ zh: '预约高校合规方案 →', en: 'Book University Compliance Plan →' }) }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const heroMetrics = [
  { val: '90 Days', label: { zh: '从签约到课程上线', en: 'Contract to Course Launch' } },
  { val: '180+', label: { zh: '泰国高校待服务', en: 'Thai Universities Awaiting' } },
  { val: 'MHESI', label: { zh: '政策合规认证对齐', en: 'Policy Compliance Aligned' } },
  { val: '16 Wks', label: { zh: '标准 AI 通识课程包', en: 'Standard AI General Education Kit' } },
]

const policy = [
  {
    label: { zh: '强制截止日期', en: 'Mandatory Deadline' },
    val: { zh: '2026 年，泰国 180+ 高校须上线 AI 课程', en: '2026: Thailand\'s 180+ universities must launch AI courses' },
  },
  {
    label: { zh: '合规要求', en: 'Compliance Requirements' },
    val: { zh: '符合 MHESI AI 课程标准 + ETDA 内容准则', en: 'Must meet MHESI AI curriculum standards + ETDA content guidelines' },
  },
  {
    label: { zh: '当前缺口', en: 'Current Gap' },
    val: { zh: '90% 高校无 AI 实验室、无教材、无 AI 师资', en: '90% of universities lack AI labs, curriculum, and AI-qualified faculty' },
  },
  {
    label: { zh: 'ZHWC 优势', en: 'ZHWC Advantage' },
    val: { zh: '唯一已提交 MHESI 提案的中国 AI 服务商', en: 'The only Chinese AI provider to have submitted an MHESI proposal' },
  },
]

const modules = [
  {
    icon: '🖥️',
    name: { zh: 'ZH·CampusAI', en: 'ZH·CampusAI' },
    desc: { zh: '学生/教师统一 AI 助手，泰语界面，接入 Moodle/Canvas，MHESI 内容准则合规', en: 'Unified AI assistant for students and faculty, Thai-language interface, Moodle/Canvas integration, MHESI content guideline compliant' },
  },
  {
    icon: '📚',
    name: { zh: 'ZH·CourseKit', en: 'ZH·CourseKit' },
    desc: { zh: '16 周 AI 通识课程（双语），专为 MHESI 双 AI 课程强制令设计，教师驻场 2 周培训', en: '16-week bilingual AI general education curriculum, designed for MHESI\'s dual AI course mandate, with 2-week on-site teacher training' },
  },
  {
    icon: '🔬',
    name: { zh: 'ZH·ResearchHub', en: 'ZH·ResearchHub' },
    desc: { zh: '接入 Semantic Scholar、TCI 泰国数据库，与 NRCT 研究基金申报系统集成', en: 'Connected to Semantic Scholar and TCI Thailand database, integrated with NRCT research grant application system' },
  },
  {
    icon: '🔐',
    name: { zh: 'PDPA 合规层', en: 'PDPA Compliance Layer' },
    desc: { zh: '学生数据本地化存储，符合 PDPA 教育数据处理规定，零信任访问控制', en: 'Student data localized storage, compliant with PDPA educational data processing rules, zero-trust access control' },
  },
]

const pricing = [
  {
    name: { zh: 'CampusAI 基础版', en: 'CampusAI Basic' },
    price: '$15/student/yr',
    desc: { zh: '起步 $75,000/年（5000 人高校）', en: 'Starting from $75,000/yr (5,000-student university)' },
  },
  {
    name: { zh: 'CourseKit 课程包', en: 'CourseKit Package' },
    price: 'From $30,000',
    desc: { zh: '一次性授权 + 年度内容更新', en: 'One-time license + annual content updates' },
  },
  {
    name: { zh: '全套打包（5000人高校）', en: 'Full Bundle (5,000-student university)' },
    price: '$120,000/yr',
    desc: { zh: 'CampusAI + CourseKit + 教师培训一体化', en: 'CampusAI + CourseKit + teacher training integrated' },
  },
]
</script>

<style scoped>
.product-hero { padding-top: 120px; }
.product-hero__inner { display: grid; grid-template-columns: 1fr 340px; gap: 64px; align-items: center; }
@media (max-width: 1023px) { .product-hero__inner { grid-template-columns: 1fr; } }
.product-hero__brand { font-size: 13px; font-weight: 700; color: var(--color-amber); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; }
.product-hero__title { font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 16px; }
.product-hero__desc { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.8; }
.product-hero__metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.product-hero__metric { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 24px; text-align: center; }
.product-hero__metric-val { font-size: 28px; font-weight: 900; color: var(--color-amber); }
.product-hero__metric-label { font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 6px; }
</style>
