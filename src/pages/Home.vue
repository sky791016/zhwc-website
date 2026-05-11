<template>
  <div class="home">
    <!-- ① HERO -->
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__particles"></div>
        <div class="hero__gradient"></div>
      </div>
      <div class="container hero__inner">
        <div class="hero__content">
          <div class="hero__badge">
            <span class="badge badge-indigo">{{ t({ zh: '企业 AI 集成创新', en: 'Enterprise AI Integration & Innovation' }) }}</span>
          </div>
          <h1 class="hero__title">
            {{ t({ zh: '十一年安全根基', en: 'Eleven Years of Security Heritage' }) }}<br>
            <span class="text-amber">{{ t({ zh: '重新定义可信赖的企业 AI', en: 'Redefining Trustworthy Enterprise AI' }) }}</span>
          </h1>
          <p class="hero__title-en">
            {{ t({
              zh: 'Eleven years of enterprise security heritage, driving AI integration innovation for Asian business.',
              en: 'From cybersecurity pioneer to AI-native partner — battle-tested security DNA powering enterprise AI integration.'
            }) }}
          </p>
          <p class="hero__desc">
            {{ t({
              zh: '志合创伟将十一年企业安全基因与前沿 AI 集成能力深度融合——我们不卖平台许可证，我们交付可验收的 AI 场景创新成果。',
              en: 'ZHWC fuses eleven years of enterprise security DNA with cutting-edge AI integration capabilities. We don\'t sell platform licenses — we deliver verifiable AI innovation outcomes.'
            }) }}
          </p>
          <div class="hero__actions">
            <RouterLink to="/solutions/factorymind" class="btn btn-primary hero__btn">
              {{ t({ zh: '探索旗舰产品 ZH·FactoryMind', en: 'Explore ZH·FactoryMind →' }) }}
            </RouterLink>
            <RouterLink to="/partners" class="btn btn-secondary hero__btn">
              {{ t({ zh: '了解生态合作 →', en: 'Our Ecosystem →' }) }}
            </RouterLink>
          </div>
          <div class="hero__trust">
            <span class="hero__trust-label">{{ t({ zh: '核心客户', en: 'Key Clients' }) }}:</span>
            <div class="hero__trust-logos">
              <span v-for="c in clients" :key="c" class="hero__trust-logo">{{ c }}</span>
            </div>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__card hero__card--main">
            <div class="hero__card-icon">🏭</div>
            <div class="hero__card-title">ZH·FactoryMind</div>
            <div class="hero__card-sub">{{ t({ zh: 'EEC 制造业 AI · Thailand Edition', en: 'AI for EEC Manufacturing' }) }}</div>
            <div class="hero__card-metric">
              <span class="hero__metric-num">≥98%</span>
              <span class="hero__metric-label">{{ t({ zh: '视觉质检准确率', en: 'Vision QC Accuracy' }) }}</span>
            </div>
          </div>
          <div class="hero__card hero__card--float hero__card--float1">
            <span class="hero__card-emoji">🔒</span>
            <span>{{ t({ zh: 'PDPA 合规部署', en: 'PDPA Compliant' }) }}</span>
          </div>
          <div class="hero__card hero__card--float hero__card--float2">
            <span class="hero__card-emoji">🌐</span>
            <span>{{ t({ zh: '中 · 泰 · 英 三语 AI', en: 'Thai · CN · EN AI' }) }}</span>
          </div>
          <div class="hero__card hero__card--float hero__card--float3">
            <span class="hero__card-emoji">⚡</span>
            <span>{{ t({ zh: '30 天上线承诺', en: '30-Day Go-Live' }) }}</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll">
        <span>{{ t({ zh: '向下了解更多', en: 'Scroll to explore' }) }}</span>
        <div class="hero__scroll-indicator"></div>
      </div>
    </section>

    <!-- ② STATS -->
    <section class="stats section">
      <div class="container">
        <div class="stats__grid">
          <div v-for="stat in stats" :key="stat.num" class="stats__item">
            <div class="stats__num">{{ stat.num }}</div>
            <div class="stats__label">{{ t(stat.label) }}</div>
            <div class="stats__sub">{{ t(stat.sub) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ③ TRANSFORMATION -->
    <section class="transform section--dark section">
      <div class="container">
        <div class="transform__header text-center">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '战略转型', en: 'Strategic Transformation' }) }}</span>
          <h2 class="section-title" style="color:#fff">
            {{ t({ zh: '从传统信息化集成<br>走向 AI 智能服务', en: 'From Traditional IT Integration<br>to AI-Native Services' }) }}
          </h2>
        </div>
        <div class="transform__arrow">
          <div class="transform__before">
            <h3>{{ t({ zh: '传统阶段 Legacy', en: 'Legacy Phase' }) }}</h3>
            <ul>
              <li v-for="i in t({ zh: 'legacy', en: 'legacyEn' }) === 'legacy' ? legacy : legacyEn" :key="i">{{ i }}</li>
            </ul>
          </div>
          <div class="transform__arrow-icon">→</div>
          <div class="transform__after">
            <h3>{{ t({ zh: 'AI 智能体时代', en: 'AI-Native Era' }) }}</h3>
            <ul>
              <li v-for="i in lang === 'zh' ? aiEra : aiEraEn" :key="i">{{ i }}</li>
            </ul>
          </div>
        </div>
        <div class="methodology">
          <div class="section-label" style="color:var(--color-amber);text-align:center;display:block;margin-bottom:40px">
            {{ t({ zh: '6步交付方法论', en: '6-Step Delivery Methodology' }) }}
          </div>
          <div class="methodology__steps">
            <div v-for="(step, i) in methodology" :key="step.zh" class="methodology__step">
              <div class="methodology__num">{{ i + 1 }}</div>
              <div class="methodology__icon">{{ step.icon }}</div>
              <div class="methodology__zh">{{ t(step) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ④ CAPABILITIES -->
    <section class="capabilities section">
      <div class="container">
        <div class="capabilities__header">
          <span class="section-label">{{ t({ zh: '核心能力', en: 'Core Capabilities' }) }}</span>
          <h2 class="section-title">
            {{ t({ zh: '不是 AI 的追随者<br>而是为企业定制 AI 路径的工程师', en: 'Not AI Followers —<br>Engineers Who Map Custom AI Paths' }) }}
          </h2>
          <p class="section-subtitle">
            {{ t({ zh: '我们深入政务、教育、制造行业，打造真正理解业务语境的 AI 智能体', en: 'We go deep into government, education, and manufacturing to build AI agents that genuinely understand your business context.' }) }}
          </p>
        </div>
        <div class="grid-3" style="margin-top:52px">
          <div v-for="cap in capabilities" :key="cap.title.zh" class="card cap-card">
            <div class="cap-card__icon">{{ cap.icon }}</div>
            <div class="cap-card__tag">{{ t(cap.tag) }}</div>
            <h3 class="cap-card__title">{{ t(cap.title) }}</h3>
            <p class="cap-card__desc">{{ t(cap.desc) }}</p>
            <RouterLink :to="cap.link" class="cap-card__link link-underline">
              {{ t({ zh: '了解更多 →', en: 'Learn more →' }) }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑤ THAILAND HUB -->
    <section class="thailand section section--alt">
      <div class="container">
        <div class="thailand__grid">
          <div class="thailand__content">
            <span class="section-label">🇹🇭 {{ t({ zh: '泰国落地', en: 'Thailand Hub' }) }}</span>
            <h2 class="section-title">
              {{ t({ zh: '我们不是远程服务商<br>我们在曼谷，与您并肩', en: 'We\'re Not a Remote Vendor —<br>We\'re in Bangkok, Beside You' }) }}
            </h2>
            <p class="section-subtitle">
              {{ t({ zh: 'PDPA 合规 · ETDA 认证 · LINE 即时联系', en: 'PDPA Compliant · ETDA Aligned · LINE Instant Contact' }) }}
            </p>
            <div class="divider"></div>
            <div class="thailand__features">
              <div v-for="f in thailandFeatures" :key="f.zh" class="thailand__feature">
                <span class="thailand__feature-icon">{{ f.icon }}</span>
                <div>
                  <div class="thailand__feature-zh">{{ t(f) }}</div>
                  <div class="thailand__feature-en">{{ t(f.sub) }}</div>
                </div>
              </div>
            </div>
            <RouterLink to="/thailand" class="btn btn-primary" style="margin-top:32px">
              {{ t({ zh: '探索泰国专区 →', en: 'Explore Thailand Hub →' }) }}
            </RouterLink>
          </div>
          <div class="thailand__map">
            <div class="thailand__map-card">
              <div class="thailand__map-visual">
                <div class="thailand__city thailand__city--sz">
                  <div class="thailand__city-dot"></div>
                  <span>{{ t({ zh: '深圳 Shenzhen', en: 'Shenzhen HQ' }) }}</span>
                </div>
                <div class="thailand__connection-line"></div>
                <div class="thailand__city thailand__city--bkk">
                  <div class="thailand__city-dot thailand__city-dot--amber"></div>
                  <span>{{ t({ zh: '曼谷 Bangkok', en: 'Bangkok Office' }) }}</span>
                </div>
              </div>
              <div class="thailand__map-stats">
                <div v-for="s in mapStats" :key="s.num" class="thailand__map-stat">
                  <div class="thailand__map-stat-num">{{ s.num }}</div>
                  <div class="thailand__map-stat-label">{{ t(s.label) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑥ CASES -->
    <section class="cases section">
      <div class="container">
        <div class="cases__header text-center">
          <span class="section-label">{{ t({ zh: '案例与洞察', en: 'Cases & Insights' }) }}</span>
          <h2 class="section-title">
            {{ t({ zh: '真实的业务挑战<br>可验证的 AI 成果', en: 'Real Business Challenges.<br>Verifiable AI Outcomes.' }) }}
          </h2>
        </div>
        <div class="cases__grid" style="margin-top:52px">
          <div v-for="c in cases" :key="c.client.zh" class="case-card card">
            <div class="case-card__header">
              <span class="badge" :class="c.badgeClass">{{ t(c.industry) }}</span>
              <span class="case-card__client">{{ t(c.client) }}</span>
            </div>
            <h3 class="case-card__challenge">{{ t(c.challenge) }}</h3>
            <p class="case-card__solution">{{ t(c.solution) }}</p>
            <div class="case-card__metrics">
              <div v-for="m in c.metrics" :key="m.label.zh" class="case-card__metric">
                <span class="case-card__metric-num">{{ m.value }}</span>
                <span class="case-card__metric-label">{{ t(m.label) }}</span>
              </div>
            </div>
            <RouterLink to="/cases" class="case-card__link link-underline">
              {{ t({ zh: '查看完整案例 →', en: 'View Full Case Study →' }) }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑦ WHY ZHWC -->
    <section class="why section section--dark">
      <div class="container">
        <div class="why__header text-center">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '为什么是志合创伟', en: 'Why ZHWC' }) }}</span>
          <h2 class="section-title" style="color:#fff">
            {{ t({ zh: '市场不缺 AI 供应商<br>缺的是真正懂您业务的技术伙伴', en: 'The Market Isn\'t Short of AI Vendors.<br>It\'s Short of Partners Who Truly Understand Your Business.' }) }}
          </h2>
        </div>
        <div class="why__table" style="margin-top:52px">
          <table>
            <thead>
              <tr>
                <th>{{ t({ zh: '能力维度', en: 'Capability' }) }}</th>
                <th class="why__us">ZHWC ✓</th>
                <th>{{ t({ zh: '典型 AI 供应商', en: 'Generic AI Vendor' }) }}</th>
                <th>{{ t({ zh: '本地 IT 服务商', en: 'Local IT Vendor' }) }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in compareRows" :key="row.dim.zh">
                <td class="why__dim">{{ t(row.dim) }}</td>
                <td class="why__us why__cell--green">✓ {{ t(row.zhwc) }}</td>
                <td class="why__cell--neutral">{{ t(row.typical) }}</td>
                <td class="why__cell--weak">{{ t(row.local) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="why__values" style="margin-top:64px">
          <div v-for="v in values" :key="v.zh" class="why__value">
            <div class="why__value-icon">{{ v.icon }}</div>
            <div class="why__value-zh">{{ t(v.name) }}</div>
            <p class="why__value-desc">{{ t(v.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑧ ECOSYSTEM + CONTACT -->
    <section class="ecosystem section">
      <div class="container">
        <div class="ecosystem__header text-center">
          <span class="section-label">{{ t({ zh: '合作生态', en: 'Ecosystem' }) }}</span>
          <h2 class="section-title">
            {{ t({ zh: '开放生态，共同构建东南亚 AI 基础设施', en: 'An Open Ecosystem, Co-Building Southeast Asia\'s AI Infrastructure' }) }}
          </h2>
        </div>
        <div class="ecosystem__partners" style="margin-top:48px">
          <div v-for="row in partnerRows" :key="row.type.zh" class="ecosystem__row">
            <div class="ecosystem__row-label">{{ t(row.type) }}</div>
            <div class="ecosystem__logos">
              <span v-for="p in row.partners" :key="p" class="ecosystem__logo">{{ p }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT CTA -->
    <section class="contact-cta section section--alt">
      <div class="container">
        <div class="contact-cta__grid">
          <div class="contact-cta__thai">
            <h3 class="contact-cta__title">
              <span class="text-amber">🇹🇭</span>
              {{ t({ zh: '泰国本地企业 & 在泰中资机构', en: 'Thai Enterprises & Chinese Companies in Thailand' }) }}
            </h3>
            <p class="contact-cta__sub">
              {{ t({ zh: '无论您是泰国本地企业还是在泰中资机构，对话从这里开始。', en: 'Whether you\'re a Thai enterprise or a Chinese company operating in Thailand — the conversation starts here.' }) }}
            </p>
            <div class="contact-cta__line">
              <div class="contact-cta__line-qr">
                <div class="contact-cta__qr-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#06c755" stroke-width="1.5"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg>
                  <span>LINE QR</span>
                </div>
              </div>
              <div>
                <div class="contact-cta__line-title">
                  {{ t({ zh: '扫码 LINE 即时咨询', en: 'Scan to Chat on LINE' }) }}
                </div>
                <div class="contact-cta__line-desc">LINE ID: @zhwcthailand</div>
                <div class="contact-cta__line-desc">{{ t({ zh: '（泰语/中文/英语服务）', en: 'Thai / Chinese / English' }) }}</div>
              </div>
            </div>
          </div>
          <div class="contact-cta__form">
            <h3 class="contact-cta__title">
              {{ t({ zh: '预约 AI 战略咨询', en: 'Schedule a Consultation' }) }}
            </h3>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="contact-form__row">
                <input v-model="form.name" type="text" :placeholder="t({ zh: '姓名 / Name *', en: 'Your Name *' })" required />
                <input v-model="form.company" type="text" :placeholder="t({ zh: '公司 / Company *', en: 'Company *' })" required />
              </div>
              <input v-model="form.email" type="email" :placeholder="t({ zh: '邮件 / Email *', en: 'Email Address *' })" required />
              <select v-model="form.interest">
                <option value="">{{ t({ zh: '感兴趣的方向', en: 'Area of Interest' }) }}</option>
                <option value="factorymind">🏭 ZH·FactoryMind — {{ t({ zh: '制造业 AI', en: 'Manufacturing AI' }) }}</option>
                <option value="agentos">🤖 ZH·AgentOS — {{ t({ zh: '企业智能体', en: 'Enterprise AI Agents' }) }}</option>
                <option value="cloudcore">🔐 ZH·CloudCore — {{ t({ zh: '私有化基础设施', en: 'Sovereign Infrastructure' }) }}</option>
                <option value="eduai">🎓 ZH·EduAI — {{ t({ zh: '教育 AI', en: 'Education AI' }) }}</option>
                <option value="secureai">🛡️ ZH·SecureAI — {{ t({ zh: '安全合规', en: 'Security & Compliance' }) }}</option>
                <option value="thailand">🇹🇭 {{ t({ zh: '泰国市场', en: 'Thailand Market' }) }}</option>
              </select>
              <textarea v-model="form.message" rows="3" :placeholder="t({ zh: '简述您的业务需求...', en: 'Briefly describe your business needs...' })"></textarea>
              <button type="submit" class="btn btn-primary" style="width:100%">
                {{ t({ zh: '发送咨询 →', en: 'Send Inquiry →' }) }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang, t } = useLang()

const clients = ['BYD', 'Ping An 平安', 'WeBank 微众', 'Shenlun 深科技', 'Sunlord 顺络', 'Jingwang 景旺', 'Skyworth 创维']

const stats = [
  {
    num: '11+',
    label: { zh: '企业级安全运营年', en: 'Years of Enterprise Security' },
    sub: { zh: 'Years of Enterprise Security', en: 'Deep cybersecurity DNA' },
  },
  {
    num: '200+',
    label: { zh: '服务客户', en: 'Enterprise Clients' },
    sub: { zh: 'Enterprise Clients Served', en: 'Across 8 industry verticals' },
  },
  {
    num: '8',
    label: { zh: '深耕行业', en: 'Industry Verticals' },
    sub: { zh: 'Industry Verticals', en: 'Gov · Mfg · Edu · Finance · Health' },
  },
  {
    num: '99.97%',
    label: { zh: '系统 SLA 承诺', en: 'System SLA' },
    sub: { zh: 'System SLA Commitment', en: 'Enterprise-grade reliability' },
  },
]

const legacy = ['网络安全产品集成与销售', '云基础设施运维外包', '传统 IT 系统集成项目', '按需人力资源服务']
const legacyEn = ['Cybersecurity product integration', 'Cloud infrastructure outsourcing', 'Traditional IT system integration', 'On-demand staffing services']
const aiEra = ['AI 智能体设计与交付', '私有化大模型部署运营', '制造业 AI 质检 & 预维护', '泰国主权合规 AI 解决方案']
const aiEraEn = ['AI agent design & delivery', 'Private LLM deployment & ops', 'Manufacturing AI QC & predictive maintenance', 'Thailand sovereign-compliant AI solutions']

const methodology = [
  { icon: '🎓', zh: 'AI 认知培训', en: 'AI Literacy' },
  { icon: '🔍', zh: '业务诊断', en: 'Business Diagnosis' },
  { icon: '🎯', zh: '场景设计', en: 'Scenario Design' },
  { icon: '🚀', zh: 'MVP 智能体', en: 'MVP Agent' },
  { icon: '🏗️', zh: '平台化交付', en: 'Platform Delivery' },
  { icon: '🔄', zh: '年度持续运营', en: 'Annual Ops' },
]

const capabilities = [
  {
    icon: '🏭',
    tag: { zh: '旗舰 HERO', en: 'Flagship' },
    title: { zh: '制造业 AI · ZH·FactoryMind', en: 'Manufacturing AI · ZH·FactoryMind' },
    desc: {
      zh: 'YOLO v10 视觉质检 ≥98% 准确率、OPC-UA/Modbus 设备预维护、LINE 推送三语 AI 助手。专为 EEC 中资与本地工厂设计。',
      en: 'YOLO v10 vision QC ≥98% accuracy, OPC-UA/Modbus predictive maintenance, trilingual LINE-integrated AI copilot. Built for EEC factories.'
    },
    link: '/solutions/factorymind',
  },
  {
    icon: '🤖',
    tag: { zh: 'Enterprise', en: 'Enterprise' },
    title: { zh: '企业智能体 · ZH·AgentOS', en: 'Enterprise AI Agents · ZH·AgentOS' },
    desc: {
      zh: '基于 MCP 标准拖拽构建 AI 工作流，内置 LINE Thailand 集成、三语 RAG 知识库，ETDA 合规审计追踪。',
      en: 'MCP-native drag-and-drop AI workflow builder, built-in LINE Thailand integration, trilingual RAG engine, ETDA-compliant audit trail.'
    },
    link: '/solutions/agentos',
  },
  {
    icon: '🔐',
    tag: { zh: 'Infrastructure', en: 'Infrastructure' },
    title: { zh: '私有化基础设施 · ZH·CloudCore', en: 'Sovereign Infrastructure · ZH·CloudCore' },
    desc: {
      zh: 'GPU 集群 30 天上线、PDPA 合规数据主权架构、ThaiLLM/Typhoon-2 本土模型支持。数据永远在您控制之下。',
      en: 'GPU cluster live in 30 days. PDPA-compliant sovereign data architecture. ThaiLLM/Typhoon-2 support. Your data stays under your control, always.'
    },
    link: '/solutions/cloudcore',
  },
]

const thailandFeatures = [
  { icon: '🏛️', zh: 'PDPA 合规私有化部署', en: 'PDPA-compliant private deployment', sub: { zh: 'Thailand Personal Data Protection Act', en: 'Thailand Personal Data Protection Act' } },
  { icon: '📋', zh: 'ETDA 云服务认证对齐', en: 'ETDA cloud service standard aligned', sub: { zh: 'Electronic Transactions Development Agency', en: 'Electronic Transactions Development Agency' } },
  { icon: '🏭', zh: 'EEC 工业园区深耕', en: 'Deep roots in EEC industrial zones', sub: { zh: 'Eastern Economic Corridor — manufacturing hub', en: 'Eastern Economic Corridor — manufacturing hub' } },
  { icon: '🎓', zh: 'MHESI 高校 AI 课程合规', en: 'MHESI university AI curriculum compliant', sub: { zh: '180+ 泰国高校政策合规', en: '180+ Thai universities, 2026 mandate' } },
  { icon: '💬', zh: 'LINE Thailand 原生集成', en: 'LINE Thailand native integration', sub: { zh: '54M 月活用户，泰国第一 IM', en: '54M MAU — Thailand\'s #1 business messenger' } },
  { icon: '🌏', zh: '中泰双向业务对接', en: 'Sino-Thai bidirectional business bridge', sub: { zh: '唯一同时理解两种商业文化的合作伙伴', en: 'The only partner fluent in both business cultures' } },
]

const mapStats = [
  { num: '180+', label: { zh: '泰国高校待服务', en: 'Thai Universities' } },
  { num: '500+', label: { zh: 'EEC 中资工厂', en: 'EEC Chinese Factories' } },
  { num: '90天', label: { zh: '泰国主体落地计划', en: 'Market Entry Plan' } },
]

const cases = [
  {
    client: { zh: '顺络电子 / BYD 系供应商', en: 'Sunlord Electronics / BYD Supply Chain' },
    industry: { zh: '🏭 EEC 制造', en: '🏭 EEC Manufacturing' },
    badgeClass: 'badge-indigo',
    challenge: {
      zh: '跨境 AI 质检部署：中国总部 AI 系统因数据主权无法迁移至泰国工厂',
      en: 'Cross-border AI QC deployment blocked by data sovereignty — China HQ AI system couldn\'t migrate to Thailand factory'
    },
    solution: {
      zh: 'ZH·FactoryMind 私有化部署，PDPA 合规架构，3 语双轨 AI 助手，数据不出厂区',
      en: 'ZH·FactoryMind private deployment, PDPA-compliant architecture, trilingual AI copilot, data never leaves the factory'
    },
    metrics: [
      { value: '≥98%', label: { zh: '质检准确率', en: 'QC Accuracy' } },
      { value: '-65%', label: { zh: '漏检率下降', en: 'Miss Rate Reduced' } },
      { value: '6wks', label: { zh: '签约到上线', en: 'Contract to Live' } },
    ],
  },
  {
    client: { zh: '深科技 · 智慧园区', en: 'SZ Tech · Smart Campus' },
    industry: { zh: '🏢 企业 AI', en: '🏢 Enterprise AI' },
    badgeClass: 'badge-amber',
    challenge: {
      zh: '知识管理碎片化：10000+ 份工程文档分散，工程师日均搜索耗时 2+ 小时',
      en: 'Fragmented knowledge: 10,000+ engineering docs scattered across 5 systems, engineers spending 2+ hrs/day searching'
    },
    solution: {
      zh: 'ZH·AgentOS 私有 RAG 知识库，中英双语语义搜索，MCP 集成 ERP/PLM',
      en: 'ZH·AgentOS private RAG engine, bilingual semantic search, MCP integration with ERP/PLM systems'
    },
    metrics: [
      { value: '-78%', label: { zh: '搜索耗时', en: 'Search Time' } },
      { value: '95%', label: { zh: '答案相关度', en: 'Answer Relevance' } },
      { value: '4mo', label: { zh: 'ROI 回收', en: 'ROI Payback' } },
    ],
  },
  {
    client: { zh: '泰国某国立大学 (拟)', en: 'Thai National University (Prospect)' },
    industry: { zh: '🎓 高校 AI', en: '🎓 Education AI' },
    badgeClass: 'badge-green',
    challenge: {
      zh: 'MHESI 强制 2026 年上线 AI 课程，但零基础设施、零教材、零 AI 师资',
      en: 'MHESI mandates AI curriculum by 2026 — zero infrastructure, zero courseware, zero AI-qualified faculty'
    },
    solution: {
      zh: 'ZH·EduAI 交钥匙方案：算力租用 + 16 周课程包 + 教师驻场培训，符合 ETDA 合规',
      en: 'ZH·EduAI turnkey solution: GPU compute + 16-week curriculum pack + on-site faculty training, ETDA-compliant'
    },
    metrics: [
      { value: '90d', label: { zh: '课程上线', en: 'Curriculum Live' } },
      { value: '5,000+', label: { zh: '受益学生', en: 'Students Served' } },
      { value: 'MHESI', label: { zh: '政策合规', en: 'Policy Compliant' } },
    ],
  },
]

const compareRows = [
  {
    dim: { zh: '11年网络安全根基', en: '11-yr Cybersecurity DNA' },
    zhwc: { zh: '原生安全 DNA', en: 'Native security DNA' },
    typical: { zh: '仅 AI 能力', en: 'AI capabilities only' },
    local: { zh: '基础 IT 集成', en: 'Basic IT integration' },
  },
  {
    dim: { zh: '泰国 PDPA/ETDA 合规', en: 'Thailand PDPA/ETDA Compliance' },
    zhwc: { zh: '原生合规架构', en: 'Native compliance architecture' },
    typical: { zh: '需额外定制', en: 'Requires custom add-ons' },
    local: { zh: '合规能力弱', en: 'Weak compliance capability' },
  },
  {
    dim: { zh: '制造业场景深度', en: 'Manufacturing Domain Depth' },
    zhwc: { zh: 'BYD 等实战验证', en: 'BYD-validated, battle-tested' },
    typical: { zh: '通用方案', en: 'Generic solutions' },
    local: { zh: '缺乏制造经验', en: 'No manufacturing expertise' },
  },
  {
    dim: { zh: '三语 AI（中/泰/英）', en: 'Trilingual AI (TH/CN/EN)' },
    zhwc: { zh: '内置三语支持', en: 'Built-in trilingual support' },
    typical: { zh: '单语或双语', en: 'Mono or bilingual' },
    local: { zh: '通常仅泰语', en: 'Thai only, typically' },
  },
  {
    dim: { zh: '数据主权私有化部署', en: 'Data Sovereignty · Private Deploy' },
    zhwc: { zh: '核心能力', en: 'Core capability' },
    typical: { zh: '偏公有云', en: 'Leans public cloud' },
    local: { zh: '有限能力', en: 'Limited capability' },
  },
  {
    dim: { zh: '中泰业务对接桥梁', en: 'Sino-Thai Business Bridge' },
    zhwc: { zh: '唯一中泰双向专家', en: 'Only true bilateral expert' },
    typical: { zh: '无', en: 'None' },
    local: { zh: '无', en: 'None' },
  },
]

const values = [
  {
    icon: '🤝', zh: '守信', en: 'Integrity',
    name: { zh: '守信', en: 'Integrity First' },
    desc: { zh: '十一年深耕安全领域，让"可信赖"成为我们交付每一项技术的底线', en: 'Eleven years in cybersecurity have made trustworthiness the baseline of every technology we deliver.' }
  },
  {
    icon: '🔐', zh: '主权', en: 'Sovereignty',
    name: { zh: '主权', en: 'Data Sovereignty' },
    desc: { zh: '您的数据属于您——我们的部署架构确保数据永远在您的控制之下', en: 'Your data belongs to you — our architecture ensures it stays under your control, wherever you operate.' }
  },
  {
    icon: '🏗️', zh: '深耕', en: 'Depth',
    name: { zh: '深耕', en: 'Industry Depth' },
    desc: { zh: '深入政务、教育、制造行业，打造真正理解业务语境的 AI 智能体', en: 'We go deep into government, education, and manufacturing to build AI that genuinely understands your business.' }
  },
  {
    icon: '🌉', zh: '共融', en: 'Bridge',
    name: { zh: '共融', en: 'Cross-Cultural' },
    desc: { zh: '在中国与东南亚之间架桥，理解两种商业文化，尊重每一种本地需求', en: 'Bridging China and Southeast Asia — we understand both business cultures and respect every local requirement.' }
  },
  {
    icon: '⚙️', zh: '韧性', en: 'Resilient',
    name: { zh: '韧性', en: 'Resilient by Design' },
    desc: { zh: '源自网络安全的工程基因，每一个 AI 系统都具备企业级韧性与可审计性', en: 'Our cybersecurity DNA means every AI system we build is risk-resilient, auditable, and enterprise-scale ready.' }
  },
]

const partnerRows = [
  {
    type: { zh: '🏗️ 技术合作', en: '🏗️ Technology' },
    partners: ['NVIDIA', 'True IDC', 'NECTEC', 'Dell', 'HPE', 'LINE Thailand'],
  },
  {
    type: { zh: '🤝 渠道合作', en: '🤝 Channel' },
    partners: ['WHA Industrial Estate', 'SCB Tech', '三菱電機 Thailand', 'FTI Thailand'],
  },
  {
    type: { zh: '🎓 学术合作', en: '🎓 Academic' },
    partners: ['Chulalongkorn AI Center', 'MHESI', 'ETDA', 'AIAT', 'NRCT'],
  },
]

const form = reactive({ name: '', company: '', email: '', interest: '', message: '' })
const submitForm = () => {
  alert(t({
    zh: '感谢您的咨询！我们将在 1 个工作日内联系您。',
    en: 'Thank you! We will contact you within 1 business day.'
  }))
}
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  background: var(--color-indigo);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 88px;
}

.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__gradient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 40%, rgba(212,135,10,0.08) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 20% 80%, rgba(26,46,74,0.4) 0%, transparent 60%);
}
.hero__particles {
  position: absolute; inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero__inner {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

@media (max-width: 1023px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__visual { display: none; }
}

.hero__badge { margin-bottom: 24px; }

.hero__title {
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 12px;
}

.hero__title-en {
  font-size: clamp(14px, 1.4vw, 17px);
  color: rgba(255,255,255,0.5);
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.6;
}

.hero__desc {
  font-size: 15px;
  color: rgba(255,255,255,0.72);
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 540px;
}

.hero__actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }

.hero__trust { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.hero__trust-label { font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
.hero__trust-logos { display: flex; gap: 8px; flex-wrap: wrap; }
.hero__trust-logo { font-size: 11px; color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.07); padding: 4px 10px; border-radius: 4px; font-weight: 500; }

/* Hero visual */
.hero__visual { position: relative; height: 440px; }
.hero__card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; backdrop-filter: blur(12px); }
.hero__card--main { padding: 32px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 280px; text-align: center; }
.hero__card-icon { font-size: 40px; margin-bottom: 12px; }
.hero__card-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.hero__card-sub { font-size: 12px; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
.hero__metric-num { font-size: 36px; font-weight: 800; color: var(--color-amber); display: block; }
.hero__metric-label { font-size: 12px; color: rgba(255,255,255,0.6); }
.hero__card--float { position: absolute; padding: 12px 18px; display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.85); font-weight: 500; white-space: nowrap; }
.hero__card-emoji { font-size: 18px; }
.hero__card--float1 { top: 30px; left: 0; animation: float 4s ease-in-out infinite; }
.hero__card--float2 { top: 30px; right: 0; animation: float 4s ease-in-out infinite 1.3s; }
.hero__card--float3 { bottom: 60px; left: 10%; animation: float 4s ease-in-out infinite 2.6s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.hero__scroll { display: flex; flex-direction: column; align-items: center; gap: 8px; padding-bottom: 32px; color: rgba(255,255,255,0.35); font-size: 12px; }
.hero__scroll-indicator { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent); animation: scrollPulse 2s ease-in-out infinite; }
@keyframes scrollPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

/* ===== STATS ===== */
.stats__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--color-border); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; }
@media (max-width: 768px) { .stats__grid { grid-template-columns: repeat(2, 1fr); } }
.stats__item { background: var(--color-surface); padding: 40px 32px; text-align: center; transition: background var(--transition); }
.stats__item:hover { background: var(--color-surface-alt); }
.stats__num { font-size: clamp(36px, 4vw, 52px); font-weight: 900; color: var(--color-indigo); line-height: 1; margin-bottom: 10px; }
.stats__label { font-size: 14px; font-weight: 600; color: var(--color-text-primary); margin-bottom: 4px; }
.stats__sub { font-size: 12px; color: var(--color-text-muted); }

/* ===== TRANSFORM ===== */
.transform__header { margin-bottom: 60px; }
.transform__arrow { display: grid; grid-template-columns: 1fr auto 1fr; gap: 32px; align-items: center; margin-bottom: 72px; }
@media (max-width: 768px) { .transform__arrow { grid-template-columns: 1fr; } }
.transform__before, .transform__after { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 32px; }
.transform__after { border-color: rgba(212,135,10,0.3); background: rgba(212,135,10,0.06); }
.transform__before h3, .transform__after h3 { font-size: 15px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 16px; }
.transform__before ul, .transform__after ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.transform__before li::before { content: '✗ '; color: rgba(255,255,255,0.3); }
.transform__after li::before { content: '✓ '; color: var(--color-amber); }
.transform__before li, .transform__after li { font-size: 14px; color: rgba(255,255,255,0.7); }
.transform__arrow-icon { font-size: 32px; color: var(--color-amber); font-weight: 900; }

.methodology__steps { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
@media (max-width: 1024px) { .methodology__steps { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .methodology__steps { grid-template-columns: repeat(2, 1fr); } }
.methodology__step { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 24px 16px; text-align: center; position: relative; }
.methodology__num { position: absolute; top: 12px; left: 12px; font-size: 11px; font-weight: 700; color: var(--color-amber); background: rgba(212,135,10,0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.methodology__icon { font-size: 28px; margin-bottom: 10px; }
.methodology__zh { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.9); margin-bottom: 4px; }

/* ===== CAPABILITIES ===== */
.capabilities__header { max-width: 640px; }
.cap-card { display: flex; flex-direction: column; }
.cap-card__icon { font-size: 32px; margin-bottom: 12px; }
.cap-card__tag { font-size: 11px; font-weight: 700; color: var(--color-amber); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px; }
.cap-card__title { font-size: 18px; font-weight: 700; color: var(--color-indigo); margin-bottom: 12px; }
.cap-card__desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; flex: 1; }
.cap-card__link { font-size: 14px; font-weight: 600; color: var(--color-amber); }

/* ===== THAILAND ===== */
.thailand__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
@media (max-width: 1023px) { .thailand__grid { grid-template-columns: 1fr; } }
.thailand__features { display: flex; flex-direction: column; gap: 16px; margin-top: 28px; }
.thailand__feature { display: flex; align-items: center; gap: 16px; }
.thailand__feature-icon { font-size: 24px; flex-shrink: 0; }
.thailand__feature-zh { font-size: 15px; font-weight: 600; color: var(--color-indigo); }
.thailand__feature-en { font-size: 13px; color: var(--color-text-muted); }
.thailand__map-card { background: var(--color-surface); border-radius: var(--radius-lg); padding: 40px; border: 1px solid var(--color-border); box-shadow: var(--shadow-md); }
.thailand__map-visual { display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px; padding: 32px; background: var(--color-surface-alt); border-radius: var(--radius-md); }
.thailand__city { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--color-indigo); }
.thailand__city-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--color-indigo); box-shadow: 0 0 0 4px rgba(26,46,74,0.15); }
.thailand__city-dot--amber { background: var(--color-amber); box-shadow: 0 0 0 4px rgba(212,135,10,0.15); }
.thailand__connection-line { flex: 1; height: 2px; background: linear-gradient(to right, var(--color-indigo), var(--color-amber)); margin: 0 20px; position: relative; }
.thailand__connection-line::after { content: '✈'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); color: var(--color-amber); font-size: 16px; }
.thailand__map-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; text-align: center; }
.thailand__map-stat-num { font-size: 24px; font-weight: 800; color: var(--color-amber); }
.thailand__map-stat-label { font-size: 12px; color: var(--color-text-muted); margin-top: 4px; }

/* ===== CASES ===== */
.cases__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
@media (max-width: 1023px) { .cases__grid { grid-template-columns: 1fr; } }
.case-card__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
.case-card__client { font-size: 13px; font-weight: 600; color: var(--color-indigo); }
.case-card__challenge { font-size: 15px; font-weight: 700; color: var(--color-indigo); margin-bottom: 12px; line-height: 1.4; }
.case-card__solution { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; }
.case-card__metrics { display: flex; gap: 12px; padding: 14px; background: var(--color-surface-alt); border-radius: var(--radius-sm); margin-bottom: 20px; }
.case-card__metric { text-align: center; flex: 1; }
.case-card__metric-num { display: block; font-size: 18px; font-weight: 800; color: var(--color-amber); }
.case-card__metric-label { font-size: 11px; color: var(--color-text-muted); margin-top: 2px; }
.case-card__link { font-size: 14px; font-weight: 600; color: var(--color-amber); }

/* ===== WHY ===== */
.why__table { overflow-x: auto; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.1); }
.why__table table { width: 100%; border-collapse: collapse; min-width: 600px; }
.why__table th { padding: 16px 20px; text-align: left; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08); text-transform: uppercase; letter-spacing: 0.06em; }
.why__table td { padding: 14px 20px; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.06); vertical-align: middle; }
.why__dim { color: rgba(255,255,255,0.8); font-weight: 500; }
.why__us { color: var(--color-amber) !important; font-weight: 600 !important; }
.why__cell--green { background: rgba(212,135,10,0.06); color: var(--color-amber) !important; }
.why__cell--neutral { color: rgba(255,255,255,0.45); }
.why__cell--weak { color: rgba(255,255,255,0.3); }
.why__values { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }
@media (max-width: 1024px) { .why__values { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .why__values { grid-template-columns: repeat(2, 1fr); } }
.why__value { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 24px; text-align: center; }
.why__value-icon { font-size: 28px; margin-bottom: 10px; }
.why__value-zh { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 6px; }
.why__value-desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6; }

/* ===== ECOSYSTEM ===== */
.ecosystem__row { display: flex; align-items: center; gap: 24px; padding: 20px 0; border-bottom: 1px solid var(--color-border); }
.ecosystem__row:last-child { border-bottom: none; }
.ecosystem__row-label { font-size: 13px; font-weight: 700; color: var(--color-text-muted); min-width: 120px; flex-shrink: 0; }
.ecosystem__logos { display: flex; gap: 12px; flex-wrap: wrap; }
.ecosystem__logo { padding: 8px 16px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--color-indigo); transition: all var(--transition); }
.ecosystem__logo:hover { border-color: var(--color-amber); color: var(--color-amber-dark); }

/* ===== CONTACT CTA ===== */
.contact-cta__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
@media (max-width: 1023px) { .contact-cta__grid { grid-template-columns: 1fr; } }
.contact-cta__title { font-size: 22px; font-weight: 700; color: var(--color-indigo); margin-bottom: 12px; }
.contact-cta__sub { font-size: 15px; color: var(--color-text-secondary); margin-bottom: 28px; }
.contact-cta__line { display: flex; gap: 20px; align-items: center; background: var(--color-surface); padding: 24px; border-radius: var(--radius-md); border: 1px solid #e8f8f0; }
.contact-cta__qr-placeholder { width: 80px; height: 80px; background: rgba(6,199,85,0.06); border: 2px dashed rgba(6,199,85,0.3); border-radius: var(--radius-sm); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; flex-shrink: 0; }
.contact-cta__qr-placeholder span { font-size: 10px; font-weight: 600; color: #06c755; }
.contact-cta__line-title { font-size: 16px; font-weight: 700; color: var(--color-indigo); margin-bottom: 4px; }
.contact-cta__line-desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.8; }
.contact-form { display: flex; flex-direction: column; gap: 14px; }
.contact-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.contact-form input, .contact-form select, .contact-form textarea { padding: 12px 16px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-size: 14px; font-family: var(--font-sans); color: var(--color-text-primary); background: var(--color-surface); transition: border-color var(--transition); outline: none; width: 100%; }
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus { border-color: var(--color-amber); }
.contact-form textarea { resize: vertical; }
</style>
