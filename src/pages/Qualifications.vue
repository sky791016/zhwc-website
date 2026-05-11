<template>
  <div class="qual-page">
    <!-- Hero -->
    <section class="qual-hero">
      <div class="container qual-hero__inner">
        <div class="qual-hero__badge">
          <span class="badge badge-indigo">{{ t({ zh: '官方认证 · 权威背书', en: 'Official Certifications · Authoritative Credentials' }) }}</span>
        </div>
        <h1 class="qual-hero__title">
          {{ t({ zh: '资质认证', en: 'Qualifications &amp; Certifications' }) }}
        </h1>
        <p class="qual-hero__sub">
          {{ t({
            zh: '十一年深耕安全与 AI 领域，志合创伟持有国内外权威机构颁发的多项资质认证，是您可信赖的企业级 AI 技术伙伴。',
            en: 'With eleven years of deep expertise in security and AI, ZHWC holds authoritative certifications from domestic and international bodies — your trusted enterprise AI technology partner.'
          }) }}
        </p>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="qual-tabs section">
      <div class="container">
        <div class="qual-tabs__nav">
          <button
            v-for="cat in categories"
            :key="cat.key"
            :class="['qual-tab-btn', { 'qual-tab-btn--active': activeTab === cat.key }]"
            @click="activeTab = cat.key"
          >
            <span class="qual-tab-icon">{{ cat.icon }}</span>
            {{ t(cat.label) }}
          </button>
        </div>

        <!-- Grid of certifications -->
        <div class="qual-grid">
          <template v-for="cert in filteredCerts" :key="cert.id">
            <div class="qual-card">
              <div class="qual-card__top">
                <div class="qual-card__icon">{{ cert.icon }}</div>
                <div class="qual-card__meta">
                  <span class="qual-card__cat-tag" :style="{ background: cert.tagBg, color: cert.tagColor }">
                    {{ t(cert.catLabel) }}
                  </span>
                  <span v-if="cert.status === 'active'" class="qual-card__status qual-card__status--active">
                    {{ t({ zh: '有效', en: 'Active' }) }}
                  </span>
                  <span v-else-if="cert.status === 'aligned'" class="qual-card__status qual-card__status--aligned">
                    {{ t({ zh: '对齐认定', en: 'Aligned' }) }}
                  </span>
                </div>
              </div>
              <h3 class="qual-card__title">{{ t(cert.title) }}</h3>
              <p class="qual-card__title-en" v-if="lang === 'zh'">{{ cert.title.en }}</p>
              <p class="qual-card__title-zh" v-else>{{ cert.title.zh }}</p>
              <div class="qual-card__detail">
                <div class="qual-card__row">
                  <span class="qual-card__label">{{ t({ zh: '颁发机构', en: 'Issuing Body' }) }}</span>
                  <span class="qual-card__value">{{ t(cert.issuer) }}</span>
                </div>
                <div class="qual-card__row" v-if="cert.certNo">
                  <span class="qual-card__label">{{ t({ zh: '证书编号', en: 'Cert. No.' }) }}</span>
                  <span class="qual-card__value qual-card__value--mono">{{ cert.certNo }}</span>
                </div>
                <div class="qual-card__row" v-if="cert.validUntil">
                  <span class="qual-card__label">{{ t({ zh: '有效期至', en: 'Valid Until' }) }}</span>
                  <span class="qual-card__value">{{ cert.validUntil }}</span>
                </div>
                <div class="qual-card__row" v-if="cert.scope">
                  <span class="qual-card__label">{{ t({ zh: '认证范围', en: 'Scope' }) }}</span>
                  <span class="qual-card__value">{{ t(cert.scope) }}</span>
                </div>
              </div>
              <p class="qual-card__desc">{{ t(cert.desc) }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Trust Statement -->
    <section class="qual-trust section section--dark">
      <div class="container">
        <div class="qual-trust__inner text-center">
          <span class="section-label" style="color:var(--color-green)">{{ t({ zh: '合规承诺', en: 'Compliance Commitment' }) }}</span>
          <h2 class="section-title" style="color:#fff">
            {{ t({ zh: '认证不是终点，是持续合规的起点', en: 'Certifications Are Not the Destination — They Are the Foundation of Continuous Compliance' }) }}
          </h2>
          <p class="qual-trust__desc">
            {{ t({
              zh: '我们定期接受外部审计，保持认证有效性，并主动跟进国内外最新合规要求，确保每一个交付项目都符合最高标准。',
              en: 'We undergo regular external audits to maintain certification validity and proactively track the latest domestic and international compliance requirements, ensuring every delivered project meets the highest standards.'
            }) }}
          </p>
          <div class="qual-trust__stats">
            <div v-for="s in trustStats" :key="s.num" class="qual-trust__stat">
              <div class="qual-trust__stat-num">{{ s.num }}</div>
              <div class="qual-trust__stat-label">{{ t(s.label) }}</div>
            </div>
          </div>
          <RouterLink to="/contact" class="btn btn-primary" style="margin-top:40px">
            {{ t({ zh: '索取完整资质证明文件 →', en: 'Request Full Credentials Package →' }) }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang, t } = useLang()
const activeTab = ref('all')

const categories = [
  { key: 'all',       icon: '📋', label: { zh: '全部资质', en: 'All' } },
  { key: 'national',  icon: '🏛️', label: { zh: '国家资质', en: 'National' } },
  { key: 'iso',       icon: '🌐', label: { zh: '国际认证', en: 'ISO / Intl' } },
  { key: 'security',  icon: '🔐', label: { zh: '网络安全', en: 'Cybersecurity' } },
  { key: 'thailand',  icon: '🇹🇭', label: { zh: '泰国合规', en: 'Thailand' } },
]

const certs = [
  {
    id: 'hnte',
    cat: 'national',
    icon: '🏆',
    catLabel: { zh: '国家资质', en: 'National' },
    tagBg: 'rgba(0,112,192,0.10)', tagColor: '#005A99',
    status: 'active',
    title: {
      zh: '国家高新技术企业认定',
      en: 'National High-Tech Enterprise Certification'
    },
    issuer: { zh: '科技部 / 财政部 / 国家税务总局', en: 'MOST / MOF / SAT, P.R. China' },
    certNo: 'GR202444XXXXXX',
    validUntil: '2027-12-31',
    scope: { zh: 'AI 软件研发与系统集成', en: 'AI Software R&D & Systems Integration' },
    desc: {
      zh: '由科技部、财政部及国家税务总局联合颁发，认定企业具备高新技术研发能力，是中国最具权威的科技企业资质之一。',
      en: 'Jointly issued by MOST, MOF, and SAT, certifying advanced R&D capabilities in high-tech fields. One of the most authoritative technology enterprise credentials in China.'
    }
  },
  {
    id: 'software-ent',
    cat: 'national',
    icon: '💻',
    catLabel: { zh: '国家资质', en: 'National' },
    tagBg: 'rgba(0,112,192,0.10)', tagColor: '#005A99',
    status: 'active',
    title: {
      zh: '软件企业认定证书（双软认证）',
      en: 'Software Enterprise Certificate (Dual-Software)'
    },
    issuer: { zh: '工业和信息化部', en: 'Ministry of Industry and Information Technology (MIIT)' },
    certNo: 'RQ-GD-XXXXXX',
    validUntil: '2026-12-31',
    scope: { zh: '软件研发、AI 平台建设', en: 'Software R&D, AI Platform Development' },
    desc: {
      zh: '工信部颁发的双软认证，涵盖软件企业认定及软件产品登记，享受国家软件产业扶持政策。',
      en: 'MIIT Dual-Software certification covering software enterprise recognition and product registration, eligible for national software industry support policies.'
    }
  },
  {
    id: 'cmmi3',
    cat: 'national',
    icon: '⚙️',
    catLabel: { zh: '国家资质', en: 'National' },
    tagBg: 'rgba(0,112,192,0.10)', tagColor: '#005A99',
    status: 'active',
    title: {
      zh: 'CMMI 3级认证',
      en: 'CMMI Level 3 Appraisal'
    },
    issuer: { zh: 'CMMI Institute / 赛宝认证中心', en: 'CMMI Institute / CEPREI' },
    certNo: 'CMMI-L3-2024-XXXX',
    validUntil: '2027-06-30',
    scope: { zh: '软件研发过程管理与持续改进', en: 'Software Development Process Management & Continuous Improvement' },
    desc: {
      zh: '通过软件能力成熟度模型 3 级评估，证明企业具备规范化、标准化的软件研发过程管理能力，有效控制项目交付质量与风险。',
      en: 'Appraised at CMMI Maturity Level 3, demonstrating standardized software development process management with effective quality and risk control.'
    }
  },
  {
    id: 'specialized',
    cat: 'national',
    icon: '🌟',
    catLabel: { zh: '国家资质', en: 'National' },
    tagBg: 'rgba(0,112,192,0.10)', tagColor: '#005A99',
    status: 'active',
    title: {
      zh: '广东省专精特新中小企业',
      en: 'Guangdong Province "Specialized & Sophisticated" SME'
    },
    issuer: { zh: '广东省工业和信息化厅', en: 'Guangdong Department of Industry and Information Technology' },
    certNo: '粤工信〔2024〕XXXX号',
    validUntil: '2026-12-31',
    scope: { zh: 'AI 软件及网络安全服务', en: 'AI Software & Cybersecurity Services' },
    desc: {
      zh: '由广东省工信厅认定，表彰在专业化、精细化、特色化、新颖化方向具备核心竞争力的中小企业。',
      en: 'Recognized by the Guangdong DIIT for specialization, refinement, differentiation, and innovation in core competency areas.'
    }
  },
  {
    id: 'iso9001',
    cat: 'iso',
    icon: '✅',
    catLabel: { zh: '国际认证', en: 'ISO / Intl' },
    tagBg: 'rgba(124,185,62,0.12)', tagColor: '#5C9A28',
    status: 'active',
    title: {
      zh: 'ISO 9001:2015 质量管理体系认证',
      en: 'ISO 9001:2015 Quality Management System'
    },
    issuer: { zh: 'Bureau Veritas / 必维国际检验集团', en: 'Bureau Veritas Certification' },
    certNo: 'CN23/XXXXX',
    validUntil: '2027-03-15',
    scope: { zh: 'AI 解决方案研发、实施与技术服务', en: 'AI Solution R&D, Implementation & Technical Services' },
    desc: {
      zh: '国际标准化组织颁发的质量管理体系认证，涵盖从需求分析到交付运维的全生命周期质量控制流程。',
      en: 'ISO quality management system certification covering full-lifecycle quality control from requirements analysis through delivery and operations.'
    }
  },
  {
    id: 'iso27001',
    cat: 'iso',
    icon: '🔒',
    catLabel: { zh: '国际认证', en: 'ISO / Intl' },
    tagBg: 'rgba(124,185,62,0.12)', tagColor: '#5C9A28',
    status: 'active',
    title: {
      zh: 'ISO/IEC 27001:2022 信息安全管理体系认证',
      en: 'ISO/IEC 27001:2022 Information Security Management System'
    },
    issuer: { zh: 'SGS 通标标准技术服务有限公司', en: 'SGS Société Générale de Surveillance' },
    certNo: 'IS-CN-XXXXXX',
    validUntil: '2026-09-20',
    scope: { zh: '信息系统、AI 平台、数据处理及运维服务', en: 'Information systems, AI platforms, data processing and operations' },
    desc: {
      zh: '全球最广泛认可的信息安全管理体系国际标准，证明企业在信息资产保护、风险管理和持续改进方面达到国际最高水准。',
      en: 'The world\'s most widely recognized ISMS standard, demonstrating top-tier information asset protection, risk management, and continuous improvement capabilities.'
    }
  },
  {
    id: 'mlps3',
    cat: 'security',
    icon: '🛡️',
    catLabel: { zh: '网络安全', en: 'Cybersecurity' },
    tagBg: 'rgba(26,58,92,0.08)', tagColor: '#1A3A5C',
    status: 'active',
    title: {
      zh: '网络安全等级保护备案（三级）',
      en: 'Cybersecurity Multi-Level Protection Scheme — Level 3 (MLPS 3.0)'
    },
    issuer: { zh: '公安部网络安全局', en: 'Cybersecurity Bureau, Ministry of Public Security' },
    certNo: '粤公网安备44XXXXXXXXXX',
    validUntil: '持续有效',
    scope: { zh: '核心业务系统、AI 平台、数据库', en: 'Core business systems, AI platform, databases' },
    desc: {
      zh: '依据《网络安全法》完成等级保护三级备案与测评，证明核心系统具备最高级别的安全防护体系与应急响应能力。',
      en: 'Compliant with China\'s Cybersecurity Law at Level 3 — the highest tier for commercial systems — demonstrating top-grade security protection and incident response capability.'
    }
  },
  {
    id: 'security-svc',
    cat: 'security',
    icon: '🔐',
    catLabel: { zh: '网络安全', en: 'Cybersecurity' },
    tagBg: 'rgba(26,58,92,0.08)', tagColor: '#1A3A5C',
    status: 'active',
    title: {
      zh: '信息安全服务资质证书（安全运营）',
      en: 'Information Security Service Qualification — Security Operations'
    },
    issuer: { zh: '中国信息安全测评中心 (ISCCC)', en: 'China Information Security Evaluation Center (ISCCC)' },
    certNo: 'ISCCC-XXXX-XXXXX',
    validUntil: '2026-11-30',
    scope: { zh: '安全运营、渗透测试、安全咨询', en: 'Security operations, penetration testing, security consulting' },
    desc: {
      zh: '由中国信息安全测评中心颁发，是具备专业安全服务能力的重要认证，深圳市志合创伟安全团队已通过全体人员资质审核。',
      en: 'Issued by ISCCC, an important certification demonstrating professional security service capabilities, with all ZHWC security team members individually qualified.'
    }
  },
  {
    id: 'pdpa',
    cat: 'thailand',
    icon: '🇹🇭',
    catLabel: { zh: '泰国合规', en: 'Thailand' },
    tagBg: 'rgba(255,180,0,0.12)', tagColor: '#8B6200',
    status: 'aligned',
    title: {
      zh: 'PDPA 个人数据保护合规声明',
      en: 'Thailand PDPA Personal Data Protection Compliance'
    },
    issuer: { zh: '泰国个人数据保护委员会 (PDPC)', en: 'Personal Data Protection Committee (PDPC), Thailand' },
    certNo: 'DPA-TH-2024-XXXX',
    validUntil: '持续更新 / Ongoing',
    scope: { zh: '所有在泰国境内处理个人数据的业务', en: 'All business operations processing personal data within Thailand' },
    desc: {
      zh: '完全符合泰国《个人数据保护法》(PDPA B.E. 2562) 要求，完成数据处理影响评估 (DPIA)，签署数据处理协议 (DPA)，确保客户数据主权。',
      en: 'Fully compliant with Thailand\'s Personal Data Protection Act (PDPA B.E. 2562), with completed DPIA assessments and signed DPAs ensuring customer data sovereignty.'
    }
  },
  {
    id: 'etda',
    cat: 'thailand',
    icon: '📡',
    catLabel: { zh: '泰国合规', en: 'Thailand' },
    tagBg: 'rgba(255,180,0,0.12)', tagColor: '#8B6200',
    status: 'aligned',
    title: {
      zh: 'ETDA 数字服务商认定对齐',
      en: 'ETDA Digital Service Provider Standard Aligned'
    },
    issuer: { zh: '泰国电子交易发展署 (ETDA)', en: 'Electronic Transactions Development Agency (ETDA), Thailand' },
    certNo: '—',
    validUntil: '持续更新 / Ongoing',
    scope: { zh: '云服务、AI 平台、数字化转型服务', en: 'Cloud services, AI platforms, digital transformation' },
    desc: {
      zh: '志合创伟在泰国的交付架构严格对齐 ETDA 云服务标准及数字平台规范，确保服务具备可审计性与合规性，为企业客户提供合规保障。',
      en: 'ZHWC\'s Thailand delivery architecture strictly aligns with ETDA cloud service standards and digital platform requirements, ensuring auditability and compliance for enterprise clients.'
    }
  },
  {
    id: 'eec',
    cat: 'thailand',
    icon: '🏭',
    catLabel: { zh: '泰国合规', en: 'Thailand' },
    tagBg: 'rgba(255,180,0,0.12)', tagColor: '#8B6200',
    status: 'aligned',
    title: {
      zh: 'EEC 东部经济走廊数字服务商资格',
      en: 'EEC Eastern Economic Corridor Digital Service Provider Qualification'
    },
    issuer: { zh: '泰国东部经济走廊办公室 (EECO)', en: 'Eastern Economic Corridor Office (EECO), Thailand' },
    certNo: 'EECO-DS-2024-XXX',
    validUntil: '2026-12-31',
    scope: { zh: 'EEC 工业园区 AI 与数字化服务', en: 'AI and digital services within EEC industrial zones' },
    desc: {
      zh: '获得泰国 EEC 管理委员会认定，具备在东部经济走廊工业园区提供 AI 与数字化服务的资格，重点服务制造业中资与本地工厂。',
      en: 'Recognized by the Thai EEC Office as a qualified digital service provider within EEC industrial zones, primarily serving Chinese-invested and local manufacturing factories.'
    }
  },
]

const filteredCerts = computed(() =>
  activeTab.value === 'all' ? certs : certs.filter(c => c.cat === activeTab.value)
)

const trustStats = [
  { num: '11+', label: { zh: '年持续合规运营', en: 'Years Continuous Compliance' } },
  { num: '12+', label: { zh: '有效资质证书', en: 'Active Certifications' } },
  { num: '100%', label: { zh: '年度外部审计通过率', en: 'Annual Audit Pass Rate' } },
  { num: '0',   label: { zh: '重大安全事件记录', en: 'Major Security Incidents' } },
]
</script>

<style scoped>
/* ===== HERO ===== */
.qual-hero {
  background: var(--color-indigo);
  padding: 120px 0 72px;
}

.qual-hero__badge { margin-bottom: 20px; }

.qual-hero__title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 20px;
}

.qual-hero__sub {
  font-size: 17px;
  color: rgba(255,255,255,0.7);
  max-width: 700px;
  line-height: 1.8;
}

/* ===== TABS ===== */
.qual-tabs__nav {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-border);
}

.qual-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-secondary);
  transition: all 0.2s;
}

.qual-tab-btn:hover {
  border-color: var(--color-amber);
  color: var(--color-amber);
}

.qual-tab-btn--active {
  background: var(--color-amber);
  border-color: var(--color-amber);
  color: #fff;
}

.qual-tab-icon { font-size: 16px; }

/* ===== GRID ===== */
.qual-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

@media (max-width: 1100px) {
  .qual-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .qual-grid { grid-template-columns: 1fr; }
}

/* ===== CARD ===== */
.qual-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: all var(--transition);
  position: relative;
}

.qual-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(0,112,192,0.25);
}

.qual-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
}

.qual-card__icon {
  font-size: 32px;
  line-height: 1;
}

.qual-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.qual-card__cat-tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 3px 10px;
  border-radius: 100px;
}

.qual-card__status {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 100px;
}

.qual-card__status--active {
  background: rgba(124,185,62,0.12);
  color: var(--color-green-dark);
}

.qual-card__status--aligned {
  background: rgba(255,180,0,0.12);
  color: #8B6200;
}

.qual-card__title {
  font-size: 17px;
  font-weight: 700;
  color: var(--color-indigo);
  line-height: 1.35;
  margin-bottom: 4px;
}

.qual-card__title-en,
.qual-card__title-zh {
  font-size: 12px;
  color: var(--color-text-muted);
  margin-bottom: 16px;
  line-height: 1.5;
  font-style: italic;
}

.qual-card__detail {
  background: var(--color-surface-alt);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.qual-card__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  font-size: 13px;
}

.qual-card__label {
  color: var(--color-text-muted);
  font-weight: 500;
  flex-shrink: 0;
  min-width: 70px;
}

.qual-card__value {
  color: var(--color-text-primary);
  font-weight: 600;
  text-align: right;
  line-height: 1.4;
}

.qual-card__value--mono {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: var(--color-amber);
}

.qual-card__desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-top: auto;
}

/* ===== TRUST SECTION ===== */
.qual-trust__inner {
  max-width: 800px;
  margin: 0 auto;
}

.qual-trust__desc {
  font-size: 16px;
  color: rgba(255,255,255,0.65);
  line-height: 1.8;
  max-width: 680px;
  margin: 20px auto 0;
}

.qual-trust__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 52px;
  padding-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

@media (max-width: 768px) {
  .qual-trust__stats { grid-template-columns: repeat(2, 1fr); }
}

.qual-trust__stat-num {
  font-size: 40px;
  font-weight: 900;
  color: var(--color-green);
  line-height: 1;
  margin-bottom: 8px;
}

.qual-trust__stat-label {
  font-size: 13px;
  color: rgba(255,255,255,0.55);
}
</style>
