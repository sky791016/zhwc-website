<template>
  <div>
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">{{ t({ zh: '生态合作', en: 'Partnerships' }) }}</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,60px)">
          {{ t({ zh: '开放生态', en: 'An Open Ecosystem' }) }}<br>
          {{ t({ zh: '共建东南亚 AI 基础设施', en: 'Co-Building Southeast Asia\'s AI Infrastructure' }) }}
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">
          {{ t({ zh: '技术 · 渠道 · 学术 三大合作维度', en: 'Technology · Channel · Academic — Three Partnership Dimensions' }) }}
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
      </div>
    </section>

    <section class="section section--dark">
      <div class="container text-center">
        <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '加入生态', en: 'Join the Ecosystem' }) }}</span>
        <h2 class="section-title" style="color:#fff">{{ t({ zh: '成为 ZHWC 合作伙伴', en: 'Become a ZHWC Partner' }) }}</h2>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65);margin:0 auto 36px">
          {{ t({ zh: '我们正在寻找技术、渠道、学术三类合作伙伴，共同构建东南亚最可信赖的 AI 生态', en: 'We\'re seeking technology, channel, and academic partners to co-build Southeast Asia\'s most trusted AI ecosystem.' }) }}
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
    type: { zh: '🏗️ 技术合作伙伴', en: '🏗️ Technology Partners' },
    title: { zh: '技术生态合作', en: 'Technology Ecosystem' },
    desc: { zh: '共同构建 AI 基础设施与算力生态，覆盖从 GPU 算力到数据中心的完整技术栈', en: 'Co-building AI infrastructure and compute ecosystems, covering the full stack from GPU compute to data centers' },
    partners: [
      { icon: '⚡', name: 'NVIDIA', type: { zh: 'AI 算力', en: 'AI Compute' }, desc: { zh: 'H100/A100 GPU 集群合作，Jetson Orin 边缘 AI 认证集成商', en: 'H100/A100 GPU cluster partner. Certified Jetson Orin edge AI integrator for factory deployments.' } },
      { icon: '🏢', name: 'True IDC', type: { zh: '泰国数据中心', en: 'Thailand Data Center' }, desc: { zh: '泰国最大 IDC 运营商，提供 PDPA 合规本地数据中心托管', en: 'Thailand\'s largest IDC operator. PDPA-compliant local data center colocation for sovereign AI deployments.' } },
      { icon: '🔬', name: 'NECTEC', type: { zh: '泰语 AI 研究', en: 'Thai AI Research' }, desc: { zh: '国家电子与计算机技术中心，ThaiLLM 技术合作伙伴', en: 'National Electronics and Computer Technology Center. Core partner for ThaiLLM and Thai NLP research.' } },
      { icon: '🖥️', name: 'Dell / HPE', type: { zh: '服务器硬件', en: 'Server Hardware' }, desc: { zh: '泰国代理商合作，GPU 服务器本地交付与运维', en: 'Thailand reseller partnership for local GPU server delivery, deployment, and maintenance.' } },
      { icon: '💬', name: 'LINE Thailand', type: { zh: '企业 IM 平台', en: 'Enterprise Messaging' }, desc: { zh: 'LINE Official Account 企业 AI 集成，覆盖泰国 54M 月活用户', en: 'LINE Official Account enterprise AI integration. Reach Thailand\'s 54M monthly active users where they already work.' } },
      { icon: '☁️', name: 'AWS / Azure SEA', type: { zh: '混合云', en: 'Hybrid Cloud' }, desc: { zh: '混合云架构合作，私有算力 + 公有云弹性扩展方案', en: 'Hybrid cloud architecture partnership — private AI compute plus public cloud elastic scaling when needed.' } },
    ],
  },
  {
    type: { zh: '🤝 渠道合作伙伴', en: '🤝 Channel Partners' },
    title: { zh: '市场渠道合作', en: 'Market Channel Partners' },
    desc: { zh: '深入泰国制造、金融、教育本地市场，触达目标客户群', en: 'Deep access to Thai manufacturing, financial, and education markets to reach our target customer segments' },
    partners: [
      { icon: '🏭', name: 'WHA Industrial Estate', type: { zh: 'EEC 工业园', en: 'EEC Industrial Estate' }, desc: { zh: '泰国最大工业园区运营商，EEC 制造业客户直接触达', en: 'Thailand\'s largest industrial estate operator. Direct access to EEC manufacturing tenants — our core ZH·FactoryMind audience.' } },
      { icon: '🏦', name: 'SCB Tech', type: { zh: '金融科技', en: 'FinTech' }, desc: { zh: '泰国暹罗商业银行数字科技子公司，金融 AI 联合方案', en: 'Digital technology arm of Siam Commercial Bank. Joint financial AI solutions for Thai banking and insurance sectors.' } },
      { icon: '⚡', name: 'Mitsubishi Electric Thailand', type: { zh: '工业设备', en: 'Industrial Equipment' }, desc: { zh: '泰国工厂 PLC 设备合作，ZH·PredictMaint 联合解决方案', en: 'Thai factory PLC equipment partner. Joint ZH·PredictMaint predictive maintenance solution for Mitsubishi-equipped factories.' } },
      { icon: '🏗️', name: 'FTI Thailand', type: { zh: '行业组织', en: 'Industry Association' }, desc: { zh: '泰国工业联合会，推动 AI 行业标准，进入制造业协会圈层', en: 'Federation of Thai Industries. Drives AI industry standards adoption and gives ZHWC access to the entire Thai manufacturing association network.' } },
    ],
  },
  {
    type: { zh: '🎓 学术合作伙伴', en: '🎓 Academic Partners' },
    title: { zh: '学术生态合作', en: 'Academic Ecosystem' },
    desc: { zh: '构建泰国 AI 人才生态与政策影响力，推动负责任 AI 发展', en: 'Building Thailand\'s AI talent pipeline and policy influence, advancing responsible AI development' },
    partners: [
      { icon: '🎓', name: 'Chulalongkorn University AI Center', type: { zh: '顶尖高校', en: 'Top University' }, desc: { zh: '泰国最顶尖大学，AI 课程内容合作开发与学术背书', en: 'Thailand\'s most prestigious university. Joint AI curriculum development and academic validation for ZH·EduAI content.' } },
      { icon: '🏛️', name: 'MHESI', type: { zh: '泰国教育部', en: 'Ministry of Education' }, desc: { zh: '泰国高等教育科研与创新部，AI 政策合规对齐', en: 'Thailand Ministry of Higher Education, Science, Research and Innovation. Policy alignment for AI curriculum compliance and the 2026 mandate.' } },
      { icon: '📋', name: 'ETDA', type: { zh: '数字监管', en: 'Digital Regulator' }, desc: { zh: '电子交易发展署，AI 合规框架与云服务认证合作', en: 'Electronic Transactions Development Agency. AI governance framework alignment and cloud service certification cooperation.' } },
      { icon: '🤖', name: 'AIAT', type: { zh: '泰国 AI 协会', en: 'Thai AI Association' }, desc: { zh: '泰国 AI 协会，联合组织泰国 AI 发展活动与行业标准', en: 'Artificial Intelligence Association of Thailand. Joint events, industry standards, and AI ecosystem development across Thailand.' } },
    ],
  },
]
</script>

<style scoped>
.page-hero { padding-top: 120px; }
.partner-card { transition: all var(--transition); }
.partner-card:hover { border-color: var(--color-amber); }
</style>
