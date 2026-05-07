<template>
  <div class="product-page">
    <section class="product-hero section--dark section">
      <div class="container">
        <div class="product-hero__inner">
          <div>
            <div class="product-hero__brand">ZH·SecureAI</div>
            <h1 class="product-hero__title">{{ t({ zh: 'AI 安全与合规平台', en: 'AI Security & Compliance Platform' }) }}<br><span style="color:var(--color-amber)">PDPA/ETDA Built-In, Not Bolted-On</span></h1>
            <p class="product-hero__desc">
              {{ t({ zh: 'AI 守护您的业务，安全设计为先 — 11 年网络安全专业积淀，现驱动泰国 AI 时代企业级安全。', en: 'AI that secures your business, secured by design — 11 years of cybersecurity expertise now powering AI-era enterprise security for Thailand.' }) }}
            </p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
              <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '预约安全评估', en: 'Book Security Assessment' }) }}</RouterLink>
              <RouterLink to="/contact" class="btn btn-secondary">Red Team as a Service</RouterLink>
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
          <span class="section-label">{{ t({ zh: '三大安全模块', en: 'Core Security Modules' }) }}</span>
          <h2 class="section-title">{{ t({ zh: 'ZH·SecureAI 三大模块', en: 'ZH·SecureAI Three Core Modules' }) }}</h2>
        </div>
        <div class="grid-3">
          <div v-for="mod in modules" :key="mod.name" class="card" style="border-top:3px solid var(--color-amber)">
            <div style="font-size:36px;margin-bottom:12px">{{ mod.icon }}</div>
            <h3 style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:6px">{{ mod.name }}</h3>
            <div style="font-size:13px;color:var(--color-text-muted);margin-bottom:14px">{{ t(mod.en) }}</div>
            <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.7;margin-bottom:16px">{{ t(mod.desc) }}</p>
            <div style="display:flex;flex-direction:column;gap:6px">
              <span v-for="f in mod.features" :key="f.zh" style="font-size:13px;color:var(--color-text-secondary)">🛡️ {{ t(f) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container text-center">
        <span class="section-label">{{ t({ zh: '11年网络安全根基', en: '11 Years of Cybersecurity Foundation' }) }}</span>
        <h2 class="section-title">{{ t({ zh: '安全是我们的原生 DNA\n不是附加功能', en: 'Security Is Our Native DNA\nNot a Feature' }) }}</h2>
        <p class="section-subtitle" style="margin:0 auto 32px">{{ t({ zh: '安全是我们的 DNA — 不是功能', en: 'Security is Our DNA — Not a Feature' }) }}</p>
        <RouterLink to="/contact" class="btn btn-primary" style="font-size:16px;padding:16px 40px">{{ t({ zh: '预约安全评估 →', en: 'Book Security Assessment →' }) }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const heroMetrics = [
  { val: '11 Yrs', label: { zh: '网络安全运营经验', en: 'Cybersecurity Operations Experience' } },
  { val: 'PDPA', label: { zh: '+ETDA 双合规设计', en: '+ETDA Dual-Compliance Design' } },
  { val: '72h', label: { zh: '数据泄露通报辅助', en: 'Breach Notification Support' } },
  { val: 'RTaaS', label: { zh: 'Red Team as a Service', en: 'Red Team as a Service' } },
]

const modules = [
  {
    icon: '🔭',
    name: 'ZH·SecOps AI',
    en: { zh: 'AI 驱动安全运营', en: 'AI-Driven Security Operations' },
    desc: { zh: 'ZHWC 网络安全运营平台泰国版，LLM 驱动告警分析，集成 ThaiCERT 威胁情报，支持 NCSOC 报告格式。', en: 'ZHWC cybersecurity operations platform for Thailand, LLM-driven alert analysis, ThaiCERT threat intelligence integration, NCSOC report format support.' },
    features: [
      { zh: 'ThaiCERT 情报集成', en: 'ThaiCERT threat intelligence integration' },
      { zh: 'LLM 告警分析', en: 'LLM-driven alert analysis' },
      { zh: 'NCSOC 报告', en: 'NCSOC report format' },
      { zh: '7×24 SOC 服务', en: '24/7 SOC service' },
    ],
  },
  {
    icon: '🧱',
    name: 'ZH·AIGuard',
    en: { zh: 'AI 系统安全防护', en: 'AI System Security Protection' },
    desc: { zh: 'Prompt Injection 防护，模型水印溯源，PDPA + 计算机犯罪法双合规输出过滤，Red Team as a Service。', en: 'Prompt injection protection, model watermark tracing, PDPA + Computer Crime Act dual-compliant output filtering, Red Team as a Service.' },
    features: [
      { zh: 'Prompt Injection 防护', en: 'Prompt injection protection' },
      { zh: '模型水印溯源', en: 'Model watermark tracing' },
      { zh: 'Red Team as a Service', en: 'Red Team as a Service' },
      { zh: '输出合规过滤', en: 'Output compliance filtering' },
    ],
  },
  {
    icon: '📋',
    name: 'ZH·ComplianceBot',
    en: { zh: 'PDPA 合规自动化', en: 'PDPA Compliance Automation' },
    desc: { zh: 'PDPA 合规自动化机器人，数据泄露 72 小时通报辅助，ETDA 云服务合规自检，AI 系统审计报告自动生成。', en: 'PDPA compliance automation bot, 72-hour breach notification support, ETDA cloud service compliance self-check, automatic AI system audit report generation.' },
    features: [
      { zh: 'PDPA 自动化合规', en: 'Automated PDPA compliance' },
      { zh: '72h 泄露通报辅助', en: '72h breach notification support' },
      { zh: 'ETDA 自检报告', en: 'ETDA self-check report' },
      { zh: 'AI 审计报告生成', en: 'AI audit report generation' },
    ],
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
