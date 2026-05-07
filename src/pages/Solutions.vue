<template>
  <div>
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">{{ t({ zh: '解决方案', en: 'Solutions' }) }}</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,60px)">
          {{ t({ zh: '五大 AI 产品线，覆盖企业全场景', en: 'Five AI Product Lines for Every Enterprise Need' }) }}
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">
          {{ t({ zh: '从制造业 AI 到主权基础设施，一个可信赖的合作伙伴', en: 'From manufacturing AI to sovereign infrastructure — one trusted partner.' }) }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;flex-direction:column;gap:40px">
          <div v-for="prod in products" :key="prod.name.zh" class="card product-row" :class="{ 'product-row--featured': prod.featured }">
            <div class="product-row__info">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
                <span style="font-size:36px">{{ prod.icon }}</span>
                <div>
                  <div v-if="prod.featured" class="badge badge-amber" style="margin-bottom:4px">{{ t({ zh: '★ 旗舰产品', en: '★ Flagship' }) }}</div>
                  <h2 style="font-size:22px;font-weight:800;color:var(--color-indigo)">{{ prod.name.en }}</h2>
                  <div style="font-size:13px;color:var(--color-text-muted)">{{ t(prod.subtitle) }}</div>
                </div>
              </div>
              <p style="font-size:15px;color:var(--color-text-secondary);line-height:1.8;margin-bottom:20px">{{ t(prod.desc) }}</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">
                <span v-for="tag in prod.tags" :key="tag" class="badge badge-indigo">{{ tag }}</span>
              </div>
            </div>
            <div class="product-row__cta">
              <div style="font-size:20px;font-weight:800;color:var(--color-amber);margin-bottom:4px">{{ t(prod.price) }}</div>
              <div style="font-size:12px;color:var(--color-text-muted);margin-bottom:16px">{{ t({ zh: '起步定价', en: 'Starting from' }) }}</div>
              <RouterLink :to="prod.link" class="btn btn-primary" style="width:100%;justify-content:center">
                {{ t({ zh: '了解详情 →', en: 'Explore →' }) }}
              </RouterLink>
              <RouterLink to="/contact" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px">
                {{ t({ zh: '申请演示', en: 'Request Demo' }) }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const products = [
  {
    icon: '🏭', featured: true,
    name: { zh: 'ZH·FactoryMind', en: 'ZH·FactoryMind' },
    subtitle: { zh: 'EEC 制造业 AI 解决方案', en: 'AI for Smart Manufacturing — EEC Edition' },
    desc: {
      zh: '专为 EEC 在泰中资及本地制造工厂设计的 AI 质检、设备预维护与生产运营平台。YOLO v10 视觉质检 ≥98%，支持中/泰/英三语，PDPA 合规私有化部署。BYD 供应链渠道直达。',
      en: 'Purpose-built for EEC manufacturing — Chinese-owned and Thai local factories alike. YOLO v10 vision QC ≥98% accuracy. Trilingual (TH/CN/EN) AI copilot. PDPA-compliant private deployment. Direct BYD supply chain channel access.'
    },
    tags: ['Vision QC', 'Predictive Maintenance', 'LINE Integration', 'EEC Exclusive', 'PDPA Compliant'],
    price: { zh: '$15,000', en: '$15,000' },
    link: '/solutions/factorymind',
  },
  {
    icon: '🤖', featured: false,
    name: { zh: 'ZH·AgentOS', en: 'ZH·AgentOS' },
    subtitle: { zh: '企业 AI 智能体编排平台', en: 'Enterprise AI Agent Orchestration Platform' },
    desc: {
      zh: '基于 MCP 标准拖拽式构建 AI 智能体工作流，内置 LINE Thailand 集成，三语 RAG 知识库，ETDA 合规审计追踪。让业务流程从人工执行升级为 AI 自动运行。',
      en: 'MCP-native drag-and-drop AI workflow builder. Built-in LINE Thailand integration (54M MAU). Trilingual RAG engine. ETDA-compliant full audit trail. Upgrade your business processes from manual to AI-automated — in days, not months.'
    },
    tags: ['MCP Standard', 'LINE Integration', 'Trilingual RAG', 'No-Code', 'ETDA Compliant'],
    price: { zh: '$500/mo', en: '$500/mo' },
    link: '/solutions/agentos',
  },
  {
    icon: '🔐', featured: false,
    name: { zh: 'ZH·CloudCore', en: 'ZH·CloudCore' },
    subtitle: { zh: 'AI 私有化基础设施平台', en: 'Sovereign AI Infrastructure Platform' },
    desc: {
      zh: '为泰国企业和政府提供合规、可控的 AI 算力基础设施。30 天上线，ThaiLLM/Typhoon-2 泰语模型支持，数据永远在您控制之下。',
      en: 'Compliant, controllable AI compute infrastructure for Thai enterprises and government. GPU cluster live in 30 days. ThaiLLM/Typhoon-2 native Thai model support. Your data stays under your control — always.'
    },
    tags: ['Private Deployment', 'GPU Cluster', 'ThaiLLM', 'PDPA Storage', '30-Day Live'],
    price: { zh: '$80,000/yr', en: '$80,000/yr' },
    link: '/solutions/cloudcore',
  },
  {
    icon: '🎓', featured: false,
    name: { zh: 'ZH·EduAI', en: 'ZH·EduAI' },
    subtitle: { zh: '高校与职业教育 AI 平台', en: 'AI for Higher Education & Vocational Training' },
    desc: {
      zh: '帮助泰国高校在 90 天内落地符合 MHESI 政策的 AI 通识课程与校园 AI 服务平台。交钥匙方案：算力+课程+教师培训一体化。',
      en: 'Helps Thai universities deploy MHESI-compliant AI curriculum and campus AI services in 90 days. True turnkey: GPU compute + 16-week courseware + on-site faculty training, all in one package.'
    },
    tags: ['MHESI Compliant', '90-Day Delivery', '16-Week Curriculum', 'Thai UI', 'Faculty Training'],
    price: { zh: '$120,000/yr', en: '$120,000/yr' },
    link: '/solutions/eduai',
  },
  {
    icon: '🛡️', featured: false,
    name: { zh: 'ZH·SecureAI', en: 'ZH·SecureAI' },
    subtitle: { zh: 'AI 安全与合规平台', en: 'AI Security, Governance & Compliance' },
    desc: {
      zh: '11 年网络安全 DNA 赋能的 AI 安全平台。PDPA/ETDA 双合规设计，Prompt Injection 防护，数据泄露 72 小时通报辅助，Red Team as a Service。',
      en: 'AI security powered by 11 years of cybersecurity DNA. PDPA/ETDA dual compliance by design. Prompt injection defense. 72-hour breach notification support. Red Team as a Service.'
    },
    tags: ['PDPA + ETDA', 'Prompt Defense', '72h Breach Support', 'Red Team', '11-yr Security'],
    price: { zh: '咨询定价', en: 'Custom Pricing' },
    link: '/solutions/secureai',
  },
]
</script>

<style scoped>
.page-hero { padding-top: 120px; }
.product-row { display: grid; grid-template-columns: 1fr 240px; gap: 40px; align-items: start; }
.product-row--featured { border-color: var(--color-amber); background: rgba(212,135,10,0.03); }
@media (max-width: 768px) { .product-row { grid-template-columns: 1fr; } }
.product-row__cta { display: flex; flex-direction: column; }
</style>
