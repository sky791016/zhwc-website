<template>
  <div>
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">{{ t({ zh: '生态合作', en: 'Ecosystem' }) }}</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,60px)">
          {{ t({ zh: 'AI 集成创新生态', en: 'AI Integration Innovation Ecosystem' }) }}
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">
          {{ t({
            zh: '以 AI 为核心，联结技术伙伴、行业渠道与学术机构，共同推动企业 AI 落地创新',
            en: 'Centering on AI, connecting technology partners, industry channels and academic institutions to drive enterprise AI innovation together.'
          }) }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-for="row in partnerRows" :key="row.type.en" style="margin-bottom:64px">
          <div style="margin-bottom:28px">
            <span class="section-label">{{ t(row.type) }}</span>
            <h2 style="font-size:24px;font-weight:700;color:var(--color-indigo)">{{ t(row.title) }}</h2>
            <p style="font-size:15px;color:var(--color-text-secondary);margin-top:8px">{{ t(row.desc) }}</p>
          </div>
          <div class="grid-3">
            <div v-for="p in row.partners" :key="p.name" class="card partner-card">
              <div style="font-size:28px;margin-bottom:10px">{{ p.icon }}</div>
              <h3 style="font-size:16px;font-weight:700;color:var(--color-indigo);margin-bottom:4px">{{ p.name }}</h3>
              <div style="font-size:12px;color:var(--color-amber-dark);font-weight:600;margin-bottom:10px">{{ t(p.type) }}</div>
              <p style="font-size:13px;color:var(--color-text-secondary);line-height:1.6">{{ t(p.desc) }}</p>
            </div>
          </div>
        </div>

        <!-- Regional Presence — low-key -->
        <div style="margin-top:16px;padding:40px;background:var(--color-surface-alt);border-radius:var(--radius-md);border:1px solid var(--color-border)">
          <span class="section-label">{{ t({ zh: '区域覆盖', en: 'Regional Presence' }) }}</span>
          <h2 style="font-size:20px;font-weight:700;color:var(--color-indigo);margin-bottom:8px">
            {{ t({ zh: '东南亚本地化交付能力', en: 'Southeast Asia Local Delivery' }) }}
          </h2>
          <p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:24px;max-width:680px">
            {{ t({
              zh: '我们在泰国曼谷设有本地团队，具备 PDPA 合规私有化部署能力，支持中泰双语业务对接，可为 EEC 工业区及高校客户提供现场服务。',
              en: 'We maintain a local team in Bangkok, Thailand, with PDPA-compliant private deployment capability, bilingual (CN/TH/EN) support, and on-site service for EEC industrial clients and universities.'
            }) }}
          </p>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <div v-for="tag in regionalTags" :key="tag.zh" class="region-tag">
              <span>{{ tag.icon }}</span>
              <span>{{ t(tag) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container text-center">
        <span class="section-label" style="color:var(--color-green)">{{ t({ zh: '加入生态', en: 'Join the Ecosystem' }) }}</span>
        <h2 class="section-title" style="color:#fff">{{ t({ zh: '共建 AI 集成创新合作网络', en: 'Co-Build the AI Integration Innovation Network' }) }}</h2>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65);margin:0 auto 36px">
          {{ t({
            zh: '我们正在寻找技术、渠道、学术三类合作伙伴，共同推动企业 AI 集成与创新落地',
            en: 'We\'re seeking technology, channel, and academic partners to jointly advance enterprise AI integration and innovation deployment.'
          }) }}
        </p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '申请成为合作伙伴', en: 'Apply to Partner' }) }}</RouterLink>
          <RouterLink to="/contact" class="btn btn-secondary">{{ t({ zh: '渠道合作咨询', en: 'Channel Partnership Inquiry' }) }}</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const partnerRows = [
  {
    type: { zh: '🔗 技术合作伙伴', en: '🔗 Technology Partners' },
    title: { zh: 'AI 技术集成生态', en: 'AI Technology Integration Ecosystem' },
    desc: { zh: '联合构建从算力到应用的完整 AI 集成技术栈，加速企业 AI 创新落地', en: 'Co-building the full AI integration stack from compute to application, accelerating enterprise AI innovation deployment' },
    partners: [
      { icon: '⚡', name: 'NVIDIA', type: { zh: 'AI 算力', en: 'AI Compute' }, desc: { zh: 'H100/A100 GPU 集群合作，Jetson Orin 边缘 AI 认证集成商，为工厂 AI 场景提供算力支撑', en: 'H100/A100 GPU cluster partner. Certified Jetson Orin edge AI integrator powering factory AI deployments.' } },
      { icon: '☁️', name: 'AWS / Azure SEA', type: { zh: '混合云集成', en: 'Hybrid Cloud' }, desc: { zh: '私有算力 + 公有云弹性混合架构，满足不同数据主权与弹性需求', en: 'Private AI compute plus public cloud elastic scaling — flexible hybrid architecture for diverse sovereignty needs.' } },
      { icon: '💬', name: 'LINE / WeChat', type: { zh: '企业 IM 集成', en: 'Enterprise Messaging' }, desc: { zh: 'AI Agent 与主流企业 IM 平台原生集成，触达真实业务场景中的用户', en: 'Native AI Agent integration with leading enterprise messaging platforms, reaching users in real business workflows.' } },
      { icon: '🖥️', name: 'Dell / HPE', type: { zh: '基础设施', en: 'Infrastructure' }, desc: { zh: 'GPU 服务器本地化交付与运维，支持私有化 AI 基础设施一站式部署', en: 'Local GPU server delivery and maintenance, enabling turnkey private AI infrastructure deployments.' } },
      { icon: '🔬', name: 'NECTEC / 国产大模型', type: { zh: 'AI 模型生态', en: 'AI Model Ecosystem' }, desc: { zh: '对接国产主流大模型与海外本土模型，构建多模型集成能力', en: 'Integrating leading domestic LLMs and regional models, building robust multi-model integration capabilities.' } },
      { icon: '🔐', name: '安全合规工具链', type: { zh: '合规集成', en: 'Compliance Stack' }, desc: { zh: '整合等保、PDPA、ISO 27001 合规工具，将安全 DNA 内嵌于每一个 AI 集成项目', en: 'Integrating MLPS, PDPA, and ISO 27001 compliance toolchains — embedding security DNA into every AI integration.' } },
    ],
  },
  {
    type: { zh: '🤝 渠道合作伙伴', en: '🤝 Channel Partners' },
    title: { zh: '行业渠道合作', en: 'Industry Channel Partners' },
    desc: { zh: '深入制造、金融、教育等核心行业，将 AI 集成创新能力快速传递至目标客户', en: 'Deep penetration into manufacturing, finance, and education sectors to rapidly deliver AI integration capabilities to target clients' },
    partners: [
      { icon: '🏭', name: 'WHA Industrial Estate', type: { zh: '制造业渠道', en: 'Manufacturing Channel' }, desc: { zh: '覆盖 EEC 大量工厂客户，是制造业 AI 集成创新的核心渠道入口', en: 'Access to hundreds of EEC factory clients — the core channel entry point for manufacturing AI integration.' } },
      { icon: '🏦', name: 'SCB Tech', type: { zh: '金融科技', en: 'FinTech' }, desc: { zh: '联合开发金融 AI 集成方案，覆盖风控、客服、合规等场景', en: 'Joint financial AI integration solutions covering risk control, customer service, and compliance scenarios.' } },
      { icon: '⚙️', name: 'Mitsubishi Electric', type: { zh: '工业设备集成', en: 'Industrial Integration' }, desc: { zh: '与 PLC 设备深度集成，实现 OPC-UA/Modbus 协议层 AI 预测维护', en: 'Deep PLC integration enabling OPC-UA/Modbus AI predictive maintenance at the protocol layer.' } },
      { icon: '🏗️', name: 'FTI / 行业协会', type: { zh: '行业组织', en: 'Industry Associations' }, desc: { zh: '通过行业联合会推动 AI 集成标准，扩大在制造业协会圈层的影响力', en: 'Driving AI integration standards through industry federations, expanding influence across manufacturing associations.' } },
    ],
  },
  {
    type: { zh: '🎓 学术合作伙伴', en: '🎓 Academic Partners' },
    title: { zh: '学术与创新合作', en: 'Academic & Innovation Partners' },
    desc: { zh: '构建 AI 人才供给与政策影响力，推动负责任的 AI 集成创新', en: 'Building AI talent pipelines and policy influence to advance responsible AI integration innovation' },
    partners: [
      { icon: '🎓', name: 'Chulalongkorn AI Center', type: { zh: '顶尖高校', en: 'Top University' }, desc: { zh: 'AI 课程与集成创新内容联合开发，学术背书强化市场公信力', en: 'Joint AI curriculum and integration innovation content development with academic validation.' } },
      { icon: '🏛️', name: 'MHESI / 教育主管部门', type: { zh: '教育政策', en: 'Education Policy' }, desc: { zh: '对齐高校 AI 课程政策，推动 AI 集成创新进入大学教育体系', en: 'Aligning with university AI curriculum policy to integrate AI innovation into higher education systems.' } },
      { icon: '📋', name: 'ETDA / 数字监管', type: { zh: '数字合规', en: 'Digital Compliance' }, desc: { zh: 'AI 合规框架对齐与云服务认证合作，确保集成创新项目合规落地', en: 'AI governance framework alignment and cloud service certification to ensure compliant innovation deployment.' } },
      { icon: '🤖', name: 'AIAT / AI 协会', type: { zh: 'AI 生态组织', en: 'AI Ecosystem Org' }, desc: { zh: '联合推动 AI 行业标准，共同组织 AI 集成创新活动与技术交流', en: 'Jointly advancing AI industry standards, co-organizing AI integration innovation events and technical exchanges.' } },
    ],
  },
]

const regionalTags = [
  { icon: '🔒', zh: 'PDPA 合规部署', en: 'PDPA-Compliant Deployment' },
  { icon: '🏭', zh: 'EEC 工业区现场服务', en: 'EEC Industrial On-Site' },
  { icon: '💬', zh: '中泰英三语支持', en: 'CN / TH / EN Support' },
  { icon: '📋', zh: 'ETDA 标准对齐', en: 'ETDA Standard Aligned' },
  { icon: '🌏', zh: '东南亚 AI 落地经验', en: 'SEA AI Deployment Experience' },
]
</script>

<style scoped>
.page-hero { padding-top: 120px; }
.partner-card { transition: all var(--transition); }
.partner-card:hover { border-color: var(--color-amber); }
.region-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-secondary);
}
</style>
