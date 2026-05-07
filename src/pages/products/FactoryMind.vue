<template>
  <div class="product-page">
    <!-- Hero -->
    <section class="product-hero section--dark section">
      <div class="container">
        <div class="product-hero__inner">
          <div>
            <div class="product-hero__badge">
              <span class="badge badge-amber">★ {{ t({ zh: '旗舰产品 Hero Product · EEC Edition', en: 'Hero Product · EEC Edition' }) }}</span>
            </div>
            <div class="product-hero__brand">ZH·FactoryMind</div>
            <h1 class="product-hero__title">
              {{ t({ zh: '制造业 AI 解决方案', en: 'Manufacturing AI Solution' }) }}<br>
              <span style="color:var(--color-amber)">{{ t({ zh: '专为 EEC 中资与本地工厂', en: 'Built for EEC Chinese-Owned & Local Factories' }) }}</span>
            </h1>
            <p class="product-hero__en">
              {{ t({ zh: 'AI 智能制造（EEC 专属）— 通过三语 AI 助手连接中国标准 MES 与泰国运营团队。', en: 'AI for Smart Manufacturing (EEC-Focused) — connects Chinese-standard MES with Thai operations teams via bilingual AI copilot.' }) }}
            </p>
            <p class="product-hero__thai">
              <em>🇹🇭 "AI ที่พูดทั้งภาษาไทยและจีน สำหรับโรงงาน EEC"</em><br>
              <span style="font-size:13px;opacity:0.6">{{ t({ zh: '懂泰语也懂中文的工厂 AI', en: 'Factory AI that speaks both Thai and Chinese' }) }}</span>
            </p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
              <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '申请试点', en: 'Request a Pilot' }) }}</RouterLink>
              <a href="#modules" class="btn btn-secondary">{{ t({ zh: '查看三大模块', en: 'Explore Modules' }) }}</a>
            </div>
          </div>
          <div class="product-hero__metrics">
            <div v-for="m in heroMetrics" :key="m.val" class="product-hero__metric">
              <div class="product-hero__metric-val">{{ m.val }}</div>
              <div class="product-hero__metric-label">{{ t(m.label) }}</div>
              <div class="product-hero__metric-sub">{{ m.sub }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Flagship -->
    <section class="section">
      <div class="container">
        <div class="grid-2" style="gap:80px;align-items:center">
          <div>
            <span class="section-label">{{ t({ zh: '为何是旗舰', en: 'Why Flagship' }) }}</span>
            <h2 class="section-title">{{ t({ zh: '三语需求独特\n无竞争对手能同时满足', en: 'Unique Trilingual Requirements\nNo Competitor Can Match' }) }}</h2>
            <div class="divider"></div>
            <div class="why-points">
              <div v-for="p in whyPoints" :key="p.title.zh" class="why-point">
                <div class="why-point__icon">{{ p.icon }}</div>
                <div>
                  <div class="why-point__title">{{ t(p.title) }}</div>
                  <div class="why-point__desc">{{ t(p.desc) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="factory-diagram">
            <div class="factory-diagram__title">{{ t({ zh: 'EEC 工厂 AI 系统架构', en: 'EEC Factory AI System Architecture' }) }}</div>
            <div class="factory-diagram__layers">
              <div v-for="layer in architectureLayers" :key="layer.name.zh" class="factory-layer" :style="{ background: layer.bg }">
                <span class="factory-layer__icon">{{ layer.icon }}</span>
                <span class="factory-layer__name">{{ t(layer.name) }}</span>
                <span class="factory-layer__tech">{{ layer.tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Modules -->
    <section id="modules" class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '三大核心模块', en: 'Core Modules' }) }}</span>
          <h2 class="section-title">{{ t({ zh: 'ZH·FactoryMind 三大模块', en: 'ZH·FactoryMind Three Core Modules' }) }}</h2>
        </div>
        <div class="modules-grid">
          <div v-for="mod in modules" :key="mod.name" class="module-card card">
            <div class="module-card__num">{{ mod.num }}</div>
            <div class="module-card__icon">{{ mod.icon }}</div>
            <h3 class="module-card__name">{{ mod.name }}</h3>
            <div class="module-card__en">{{ t(mod.en) }}</div>
            <p class="module-card__desc">{{ t(mod.desc) }}</p>
            <div class="module-card__features">
              <span v-for="f in mod.features" :key="f.zh" class="module-card__feature">✓ {{ t(f) }}</span>
            </div>
            <div class="module-card__price">
              <span class="module-card__price-label">{{ t({ zh: '起步定价：', en: 'Starting From: ' }) }}</span>
              <span class="module-card__price-val">{{ mod.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section section--dark">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '定价方案', en: 'Pricing' }) }}</span>
          <h2 class="section-title" style="color:#fff">{{ t({ zh: '从单产线试点到全厂部署', en: 'From Single-Line Pilot to Full-Factory Deployment' }) }}</h2>
        </div>
        <div class="pricing-grid">
          <div v-for="tier in pricing" :key="tier.name" class="pricing-card" :class="{ 'pricing-card--featured': tier.featured }">
            <div v-if="tier.featured" class="pricing-card__badge">{{ t({ zh: '推荐', en: 'Recommended' }) }}</div>
            <h3 class="pricing-card__name">{{ tier.name }}</h3>
            <div class="pricing-card__price">{{ tier.price }}</div>
            <div class="pricing-card__desc">{{ t(tier.desc) }}</div>
            <ul class="pricing-card__features">
              <li v-for="f in tier.features" :key="f.zh">✓ {{ t(f) }}</li>
            </ul>
            <RouterLink to="/contact" class="btn" :class="tier.featured ? 'btn-primary' : 'btn-secondary'" style="width:100%;justify-content:center;margin-top:24px">
              {{ t(tier.cta) }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="section">
      <div class="container text-center">
        <span class="section-label">{{ t({ zh: '关键合作伙伴', en: 'Key Partners' }) }}</span>
        <h2 class="section-title">{{ t({ zh: '合作伙伴生态', en: 'Partner Ecosystem' }) }}</h2>
        <div class="partners-row" style="margin-top:36px">
          <span v-for="p in partners" :key="p.zh" class="ecosystem__logo">{{ t(p) }}</span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--alt">
      <div class="container text-center">
        <h2 class="section-title">{{ t({ zh: '申请 ZH·FactoryMind 免费试点评估', en: 'Request a Free ZH·FactoryMind Pilot Assessment' }) }}</h2>
        <p class="section-subtitle" style="margin:0 auto 32px">{{ t({ zh: '我们将在 3 个工作日内为您提供定制化试点方案。', en: 'We will provide a customized pilot plan within 3 business days.' }) }}</p>
        <RouterLink to="/contact" class="btn btn-primary" style="font-size:16px;padding:16px 40px">
          {{ t({ zh: '立即申请试点 →', en: 'Request Pilot Evaluation →' }) }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const heroMetrics = [
  { val: '≥98%', label: { zh: '视觉质检准确率', en: 'VisionQC Accuracy' }, sub: 'VisionQC Accuracy' },
  { val: '-65%', label: { zh: '漏检率下降', en: 'Miss Rate Reduction' }, sub: 'Miss Rate Reduction' },
  { val: '6 Wks', label: { zh: '从签约到上线', en: 'Contract to Production' }, sub: 'Contract to Production' },
  { val: '3-Lang', label: { zh: '中/泰/英 AI 助手', en: 'Trilingual AI Copilot' }, sub: 'Trilingual AI Copilot' },
]

const whyPoints = [
  {
    icon: '🔗',
    title: { zh: 'BYD 渠道直通', en: 'Direct BYD Channel Access' },
    desc: { zh: 'BYD 泰国罗勇工厂与 ZHWC 已有合作渠道，可立即开单', en: 'ZHWC has an established channel with BYD\'s Rayong factory in Thailand — ready to engage immediately' },
  },
  {
    icon: '🏭',
    title: { zh: 'EEC 战略时间窗口', en: 'EEC Strategic Time Window' },
    desc: { zh: '2024-2027 年中国制造业泰国迁移关键期，无竞争对手能同时满足三语需求', en: 'The 2024–2027 Chinese manufacturing relocation wave to Thailand is a critical window; no competitor can meet trilingual requirements' },
  },
  {
    icon: '🔐',
    title: { zh: '主权合规私有化', en: 'Sovereign Compliant Private Deployment' },
    desc: { zh: '数据不出厂区，PDPA 合规架构，工人无需会打字（支持语音输入）', en: 'Data never leaves the factory, PDPA-compliant architecture, workers need no typing skills (voice input supported)' },
  },
]

const architectureLayers = [
  { icon: '👁️', name: { zh: 'ZH·VisionQC 视觉质检', en: 'ZH·VisionQC Vision Inspection' }, tech: 'YOLO v10 + ViT · Jetson Orin', bg: 'rgba(212,135,10,0.12)' },
  { icon: '⚙️', name: { zh: 'ZH·PredictMaint 预测维护', en: 'ZH·PredictMaint Predictive Maintenance' }, tech: 'OPC-UA / Modbus / MQTT · SAP PM', bg: 'rgba(26,46,74,0.08)' },
  { icon: '🎙️', name: { zh: 'ZH·OpsAssist 运营助手', en: 'ZH·OpsAssist Operations Assistant' }, tech: 'Voice Input · TH/ZH/EN · Federated Learning', bg: 'rgba(16,185,129,0.08)' },
  { icon: '🔒', name: { zh: 'ZH·SecureAI 安全层', en: 'ZH·SecureAI Security Layer' }, tech: 'PDPA · AES-256 · On-Premise', bg: 'rgba(239,68,68,0.06)' },
]

const modules = [
  {
    num: '01', icon: '👁️',
    name: 'ZH·VisionQC',
    en: { zh: '视觉 AI 质检系统', en: 'Visual AI Inspection System' },
    desc: { zh: 'YOLO v10 + 定制 ViT 架构，边缘部署于 NVIDIA Jetson Orin，支持 PCB/车身件/电池极片等 EEC 主流品类，LINE 推送班组长实时报警。', en: 'YOLO v10 + custom ViT architecture, edge-deployed on NVIDIA Jetson Orin. Supports PCB, body panels, battery electrodes, and other EEC mainstream categories — with LINE push alerts to line supervisors.' },
    features: [
      { zh: 'YOLO v10 定制训练', en: 'Custom YOLO v10 training' },
      { zh: 'NVIDIA Jetson Orin 边缘部署', en: 'NVIDIA Jetson Orin edge deployment' },
      { zh: 'LINE 推送实时告警', en: 'LINE real-time push alerts' },
      { zh: '支持 PCB/车身/电池极片', en: 'PCB / body panels / battery electrodes' },
      { zh: '泰语/中文双语界面', en: 'Bilingual Thai/Chinese interface' },
    ],
    price: '$15,000 + $500/mo',
  },
  {
    num: '02', icon: '⚙️',
    name: 'ZH·PredictMaint',
    en: { zh: '设备预测性维护', en: 'Predictive Equipment Maintenance' },
    desc: { zh: '兼容 OPC-UA/Modbus/MQTT 工业协议，支持汇川/西门子 PLC，AI 生成泰语/中文双语维修建议，自动生成金蝶/SAP PM 工单。', en: 'Compatible with OPC-UA/Modbus/MQTT industrial protocols. Supports Inovance/Siemens PLCs. AI generates bilingual Thai/Chinese maintenance recommendations and auto-creates Kingdee/SAP PM work orders.' },
    features: [
      { zh: 'OPC-UA / Modbus / MQTT', en: 'OPC-UA / Modbus / MQTT protocols' },
      { zh: '汇川/西门子 PLC 兼容', en: 'Inovance / Siemens PLC compatible' },
      { zh: '双语维修建议生成', en: 'Bilingual maintenance recommendations' },
      { zh: '金蝶/SAP PM 工单集成', en: 'Kingdee / SAP PM work order integration' },
      { zh: '7×24 实时监控', en: '24/7 real-time monitoring' },
    ],
    price: '$20,000 + $1,500/mo',
  },
  {
    num: '03', icon: '🎙️',
    name: 'ZH·OpsAssist',
    en: { zh: '生产运营 AI 助手', en: 'Production Operations AI Assistant' },
    desc: { zh: '支持语音输入（泰语/中文/英语），工人无需会打字；跨工厂联邦学习确保数据不出厂；接入 ERP/MES 系统，生成中英泰三语运营报表。', en: 'Voice input in Thai/Chinese/English — workers need no typing skills. Cross-factory federated learning keeps data on-premise. Connects to ERP/MES systems and generates trilingual operations reports.' },
    features: [
      { zh: '三语语音输入', en: 'Trilingual voice input' },
      { zh: '联邦学习（数据不出厂）', en: 'Federated learning (data stays on-premise)' },
      { zh: 'ERP/MES 系统集成', en: 'ERP / MES system integration' },
      { zh: '三语运营报表', en: 'Trilingual operations reports' },
      { zh: 'LINE 工人移动端访问', en: 'LINE mobile access for workers' },
    ],
    price: '$800/mo SaaS · $60,000 private',
  },
]

const pricing = [
  {
    name: 'Entry Trial',
    price: 'From $15,000',
    desc: { zh: '单产线 VisionQC 试点', en: 'Single-line VisionQC pilot' },
    featured: false,
    cta: { zh: '申请试点', en: 'Request Pilot' },
    features: [
      { zh: '1条产线 VisionQC', en: '1 production line VisionQC' },
      { zh: '30天上线承诺', en: '30-day go-live commitment' },
      { zh: 'LINE 推送报警', en: 'LINE push alerts' },
      { zh: '泰语/中文界面', en: 'Thai/Chinese interface' },
      { zh: '3个月免费运维', en: '3 months free maintenance' },
    ],
  },
  {
    name: 'Standard EEC',
    price: 'From $50,000',
    desc: { zh: 'VisionQC + PredictMaint 双模块', en: 'VisionQC + PredictMaint dual module' },
    featured: true,
    cta: { zh: '预约方案演示', en: 'Book a Demo' },
    features: [
      { zh: 'VisionQC 多产线', en: 'Multi-line VisionQC' },
      { zh: 'PredictMaint 全厂', en: 'Full-factory PredictMaint' },
      { zh: 'OpsAssist 语音助手', en: 'OpsAssist voice copilot' },
      { zh: 'SAP/金蝶集成', en: 'SAP / Kingdee integration' },
      { zh: '12个月运维支持', en: '12-month maintenance support' },
      { zh: 'PDPA 合规架构', en: 'PDPA-compliant architecture' },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    desc: { zh: '全厂部署 + 专属工程师', en: 'Full-factory deployment + dedicated engineers' },
    featured: false,
    cta: { zh: '联系高级顾问', en: 'Contact Senior Advisor' },
    features: [
      { zh: '全厂三模块部署', en: 'All 3 modules, full factory' },
      { zh: '定制 AI 模型训练', en: 'Custom AI model training' },
      { zh: '驻场工程师支持', en: 'On-site engineer support' },
      { zh: '联邦学习跨厂协作', en: 'Federated learning cross-factory' },
      { zh: '99.9% SLA 承诺', en: '99.9% SLA commitment' },
      { zh: 'PDPA + ETDA 全合规', en: 'Full PDPA + ETDA compliance' },
    ],
  },
]

const partners = [
  { zh: 'WHA 工业园区', en: 'WHA Industrial Estate' },
  { zh: '三菱电机泰国', en: 'Mitsubishi Electric Thailand' },
  { zh: 'TISI 泰国工业标准局', en: 'TISI Thai Industrial Standards' },
  { zh: 'BYD 供应链', en: 'BYD Supply Chain' },
  { zh: 'NVIDIA', en: 'NVIDIA' },
  { zh: 'LINE Thailand', en: 'LINE Thailand' },
]
</script>

<style scoped>
.product-hero { padding-top: 120px; }
.product-hero__inner {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 64px;
  align-items: center;
}

@media (max-width: 1023px) {
  .product-hero__inner { grid-template-columns: 1fr; }
}

.product-hero__badge { margin-bottom: 16px; }
.product-hero__brand { font-size: 13px; font-weight: 700; color: var(--color-amber); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; }
.product-hero__title { font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 16px; }
.product-hero__en { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 16px; }
.product-hero__thai { font-size: 15px; color: rgba(255,255,255,0.75); margin-bottom: 0; font-style: italic; }

.product-hero__metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.product-hero__metric {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  padding: 24px;
  text-align: center;
}

.product-hero__metric-val { font-size: 32px; font-weight: 900; color: var(--color-amber); }
.product-hero__metric-label { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.85); margin-top: 6px; }
.product-hero__metric-sub { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 3px; }

/* Why points */
.why-points { display: flex; flex-direction: column; gap: 20px; margin-top: 28px; }
.why-point { display: flex; align-items: flex-start; gap: 16px; }
.why-point__icon { font-size: 24px; flex-shrink: 0; }
.why-point__title { font-size: 16px; font-weight: 700; color: var(--color-indigo); margin-bottom: 4px; }
.why-point__desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }

/* Factory diagram */
.factory-diagram {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 28px;
  border: 1px solid var(--color-border);
}

.factory-diagram__title { font-size: 13px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
.factory-diagram__layers { display: flex; flex-direction: column; gap: 8px; }

.factory-layer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
}

.factory-layer__icon { font-size: 18px; flex-shrink: 0; }
.factory-layer__name { font-size: 14px; font-weight: 600; color: var(--color-indigo); flex: 1; }
.factory-layer__tech { font-size: 11px; color: var(--color-text-muted); text-align: right; }

/* Modules */
.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

@media (max-width: 1023px) { .modules-grid { grid-template-columns: 1fr; } }

.module-card__num { font-size: 11px; font-weight: 800; color: var(--color-amber); letter-spacing: 0.12em; margin-bottom: 8px; }
.module-card__icon { font-size: 36px; margin-bottom: 12px; }
.module-card__name { font-size: 20px; font-weight: 800; color: var(--color-indigo); margin-bottom: 4px; }
.module-card__en { font-size: 13px; color: var(--color-text-muted); margin-bottom: 14px; }
.module-card__desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 16px; }
.module-card__features { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
.module-card__feature { font-size: 13px; color: var(--color-text-secondary); }
.module-card__price { padding-top: 16px; border-top: 1px solid var(--color-border); }
.module-card__price-label { font-size: 12px; color: var(--color-text-muted); }
.module-card__price-val { font-size: 14px; font-weight: 700; color: var(--color-amber-dark); display: block; margin-top: 4px; }

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1023px) { .pricing-grid { grid-template-columns: 1fr; } }

.pricing-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  padding: 32px;
  position: relative;
}

.pricing-card--featured {
  border-color: var(--color-amber);
  background: rgba(212,135,10,0.08);
}

.pricing-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-amber);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 20px;
}

.pricing-card__name { font-size: 18px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 8px; }
.pricing-card__price { font-size: 28px; font-weight: 900; color: var(--color-amber); margin-bottom: 6px; }
.pricing-card__desc { font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 24px; }
.pricing-card__features { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.pricing-card__features li { font-size: 14px; color: rgba(255,255,255,0.7); }

/* Partners */
.partners-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.ecosystem__logo { padding: 10px 20px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; font-weight: 600; color: var(--color-indigo); }
</style>
