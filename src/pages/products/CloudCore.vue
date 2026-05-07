<template>
  <div class="product-page">
    <section class="product-hero section--dark section">
      <div class="container">
        <div class="product-hero__inner">
          <div>
            <div class="product-hero__brand">ZH·CloudCore</div>
            <h1 class="product-hero__title">{{ t({ zh: 'AI 私有化基础设施平台', en: 'AI Private Infrastructure Platform' }) }}<br><span style="color:var(--color-amber)">Sovereign AI Infrastructure</span></h1>
            <p class="product-hero__desc">
              {{ t({ zh: 'GPU 集群 30 天内上线，ETDA 合规设计。为泰国企业和政府提供合规、可控、开箱即用的 AI 计算基础设施——您的数据永远在您的控制之下。', en: 'GPU cluster deployment to production in 30 days, ETDA-compliant by design. Providing Thai enterprises and government with compliant, controllable, ready-to-use AI compute infrastructure — your data always under your control.' }) }}
            </p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
              <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '预约基础设施评估', en: 'Book Infrastructure Assessment' }) }}</RouterLink>
              <RouterLink to="/contact" class="btn btn-secondary">{{ t({ zh: '查看定价方案', en: 'View Pricing Plans' }) }}</RouterLink>
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
          <span class="section-label">{{ t({ zh: '三层架构', en: 'Three-Layer Architecture' }) }}</span>
          <h2 class="section-title">{{ t({ zh: 'ZH·CloudCore 三层主权 AI 架构', en: 'ZH·CloudCore Three-Layer Sovereign AI Architecture' }) }}</h2>
        </div>
        <div class="grid-3">
          <div v-for="layer in layers" :key="layer.name.zh" class="card" style="border-top:3px solid var(--color-amber)">
            <div style="font-size:36px;margin-bottom:12px">{{ layer.icon }}</div>
            <h3 style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:6px">{{ layer.name.zh === 'ZH·GPU Fabric' ? layer.name.zh : t(layer.name) }}</h3>
            <div style="font-size:13px;color:var(--color-text-muted);margin-bottom:14px">{{ t(layer.en) }}</div>
            <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.7;margin-bottom:16px">{{ t(layer.desc) }}</p>
            <div style="display:flex;flex-direction:column;gap:6px">
              <span v-for="f in layer.features" :key="f.zh" style="font-size:13px;color:var(--color-text-secondary)">✓ {{ t(f) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '定价', en: 'Pricing' }) }}</span>
          <h2 class="section-title" style="color:#fff">{{ t({ zh: '从入门到企业级', en: 'From Entry to Enterprise' }) }}</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
          <div v-for="tier in pricing" :key="tier.name" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-md);padding:32px">
            <h3 style="font-size:18px;font-weight:700;color:rgba(255,255,255,0.9);margin-bottom:8px">{{ tier.name }}</h3>
            <div style="font-size:28px;font-weight:900;color:var(--color-amber);margin-bottom:6px">{{ tier.price }}</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:20px">{{ t(tier.config) }}</div>
            <RouterLink to="/contact" class="btn btn-secondary" style="width:100%;justify-content:center">{{ t({ zh: '咨询方案', en: 'Inquire' }) }}</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <h2 class="section-title">{{ t({ zh: '30 天落地，数据永远在您控制之下', en: '30-Day Deployment — Your Data Always Under Your Control' }) }}</h2>
        <RouterLink to="/contact" class="btn btn-primary" style="font-size:16px;padding:16px 40px;margin-top:32px">{{ t({ zh: '预约基础设施评估 →', en: 'Book Infrastructure Assessment →' }) }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const heroMetrics = [
  { val: '30 Days', label: { zh: '从签约到上线', en: 'Contract to Go-Live' } },
  { val: 'PDPA', label: { zh: '合规私有化部署', en: 'Compliant Private Deployment' } },
  { val: 'ThaiLLM', label: { zh: '泰语本土模型支持', en: 'Thai Local Model Support' } },
  { val: '99.9%', label: { zh: 'SLA 承诺', en: 'SLA Commitment' } },
]

const layers = [
  {
    icon: '⚡',
    name: { zh: 'ZH·GPU Fabric', en: 'ZH·GPU Fabric' },
    en: { zh: '算力编排层', en: 'Compute Orchestration Layer' },
    desc: { zh: 'NVIDIA H100/A100 混合集群，vLLM/TGI 多后端统一接入，泰语可视化仪表盘，按需弹性扩展。', en: 'NVIDIA H100/A100 hybrid cluster with unified vLLM/TGI multi-backend access, Thai-language visual dashboard, and on-demand elastic scaling.' },
    features: [
      { zh: 'H100/A100 混合集群', en: 'H100/A100 hybrid cluster' },
      { zh: 'vLLM/TGI 多后端', en: 'vLLM/TGI multi-backend' },
      { zh: '泰语仪表盘', en: 'Thai-language dashboard' },
      { zh: '弹性扩展', en: 'Elastic scaling' },
    ],
  },
  {
    icon: '🗄️',
    name: { zh: 'ZH·ModelVault', en: 'ZH·ModelVault' },
    en: { zh: '模型仓库', en: 'Model Repository' },
    desc: { zh: '支持 ThaiLLM/Typhoon-2/Pathumma 泰语本土模型，LoRA/QLoRA 低成本微调，模型版本管理。', en: 'Supports ThaiLLM/Typhoon-2/Pathumma Thai local models, LoRA/QLoRA low-cost fine-tuning, and model version management.' },
    features: [
      { zh: 'ThaiLLM/Typhoon-2', en: 'ThaiLLM / Typhoon-2' },
      { zh: 'LoRA/QLoRA 微调', en: 'LoRA / QLoRA fine-tuning' },
      { zh: '模型版本管理', en: 'Model version management' },
      { zh: '泰语 Embedding', en: 'Thai Embedding models' },
    ],
  },
  {
    icon: '🔒',
    name: { zh: 'ZH·DataFort', en: 'ZH·DataFort' },
    en: { zh: '数据主权层', en: 'Data Sovereignty Layer' },
    desc: { zh: 'PDPA 合规数据落地，AES-256 加密，与 ZHWC 安全运营平台集成，数据永远不离开您的环境。', en: 'PDPA-compliant data landing, AES-256 encryption, integrated with ZHWC security operations platform — data never leaves your environment.' },
    features: [
      { zh: 'AES-256 加密', en: 'AES-256 encryption' },
      { zh: 'PDPA 合规存储', en: 'PDPA-compliant storage' },
      { zh: '零信任网络架构', en: 'Zero-trust network architecture' },
      { zh: '审计日志完整链', en: 'Complete audit log chain' },
    ],
  },
]

const pricing = [
  { name: 'Entry', price: '$80,000/yr', config: { zh: '2×A100，5TB 存储，基础 NOC', en: '2×A100, 5TB storage, basic NOC' } },
  { name: 'Mid', price: '$380,000/yr', config: { zh: '8×H100，50TB，7×24 NOC 支持', en: '8×H100, 50TB, 24/7 NOC support' } },
  { name: 'Enterprise', price: 'Custom', config: { zh: '定制集群+专属机柜+99.9% SLA', en: 'Custom cluster + dedicated rack + 99.9% SLA' } },
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
