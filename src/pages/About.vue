<template>
  <div class="about">
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">{{ t({ zh: '关于我们', en: 'About ZHWC' }) }}</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,60px)">
          {{ t({ zh: '十一年，我们如何从安全走向 AI', en: 'Eleven Years: From Security Pioneer to AI-Native Partner' }) }}
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">
          {{ t({ zh: '从网络安全集成商到 AI 智能服务提供商的战略蜕变', en: 'A strategic transformation from cybersecurity integrator to AI-native enterprise partner' }) }}
        </p>
      </div>
    </section>

    <section id="profile" class="section">
      <div class="container">
        <div class="about__profile-grid">
          <div>
            <span class="section-label">{{ t({ zh: '公司简介', en: 'Company Profile' }) }}</span>
            <h2 class="section-title">{{ t({ zh: '深圳市志合创伟信息技术有限公司', en: 'ZHWC Information Technology Co., Ltd.' }) }}</h2>
            <div class="divider"></div>
            <p style="font-size:16px;line-height:1.85;color:var(--color-text-secondary);margin-bottom:20px">
              {{ t({
                zh: '深圳市志合创伟信息技术有限公司（ZHWC）成立于 2013 年，总部位于深圳市南山区，是一家以网络安全为根基、面向 AI 智能服务转型的企业级技术公司。',
                en: 'ZHWC (Shenzhen Zhihe Chuangwei Information Technology Co., Ltd.) was founded in 2013 and headquartered in Nanshan District, Shenzhen. We are an enterprise technology company rooted in cybersecurity, now undergoing strategic transformation toward AI-native services.'
              }) }}
            </p>
            <p style="font-size:16px;line-height:1.85;color:var(--color-text-secondary);margin-bottom:20px">
              {{ t({
                zh: '经过十一年深耕，ZHWC 服务了 200 余家政务、制造、教育、金融等行业客户，积累了可直接迁移的 AI 工程能力与行业场景数据。2025 年，公司战略重心向东南亚转移，以泰国为首要目标市场。',
                en: 'Over eleven years, ZHWC has served 200+ enterprise clients across government, manufacturing, education, and finance — accumulating battle-tested AI engineering capabilities. In 2025, our strategic focus shifted to Southeast Asia, with Thailand as our primary target market.'
              }) }}
            </p>
            <div class="about__meta">
              <div v-for="m in meta" :key="m.label.zh" class="about__meta-item">
                <span class="about__meta-label">{{ t(m.label) }}</span>
                <span class="about__meta-val">{{ t(m.val) }}</span>
              </div>
            </div>
          </div>
          <div class="about__stats-panel">
            <div v-for="s in profileStats" :key="s.num" class="about__stat">
              <div class="about__stat-num">{{ s.num }}</div>
              <div class="about__stat-label">{{ t(s.label) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="journey" class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:56px">
          <span class="section-label">{{ t({ zh: '发展历程', en: 'Our Journey' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '从网络安全到 AI 智能服务', en: 'From Cybersecurity to AI-Native Services' }) }}</h2>
          <p class="section-subtitle" style="margin:0 auto">
            {{ t({ zh: '十一年战略蜕变', en: 'Eleven years of strategic transformation' }) }}
          </p>
        </div>
        <div class="timeline">
          <div v-for="(item, i) in timeline" :key="item.year" class="timeline__item" :class="{ 'timeline__item--right': i % 2 === 1 }">
            <div class="timeline__dot"></div>
            <div class="timeline__card card">
              <div class="timeline__year">{{ item.year }}</div>
              <h3 class="timeline__title">{{ t(item.title) }}</h3>
              <p class="timeline__desc">{{ t(item.desc) }}</p>
              <div v-if="item.milestone" class="timeline__milestone">🏆 {{ t(item.milestone) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="text-center" style="margin-bottom:56px">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '核心价值观', en: 'Core Values' }) }}</span>
          <h2 class="section-title" style="color:#fff">
            {{ t({ zh: '驱动我们每一次决策的五个核心信念', en: 'Five Core Beliefs That Drive Every Decision We Make' }) }}
          </h2>
        </div>
        <div class="values-grid">
          <div v-for="v in values" :key="v.en" class="value-card">
            <div class="value-card__icon">{{ v.icon }}</div>
            <div class="value-card__zh">{{ t({ zh: v.zh, en: v.en }) }}</div>
            <p class="value-card__desc">{{ t(v.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="section">
      <div class="container">
        <div style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '核心团队', en: 'Leadership Team' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '我们的团队', en: 'Our Team' }) }}</h2>
          <p class="section-subtitle">{{ t({ zh: '网络安全 × AI 工程 × 东南亚业务的交汇点', en: 'Where Cybersecurity, AI Engineering, and Southeast Asia Expertise Converge' }) }}</p>
        </div>
        <div class="grid-3">
          <div v-for="member in team" :key="member.initial" class="card team-card">
            <div class="team-card__avatar">{{ member.initial }}</div>
            <h3 class="team-card__name">{{ member.name }}</h3>
            <div class="team-card__title">{{ t(member.title) }}</div>
            <p class="team-card__bio">{{ t(member.bio) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container text-center">
        <h2 class="section-title">{{ t({ zh: '与我们一起开拓东南亚 AI 市场', en: 'Join Us in Building Southeast Asia\'s AI Future' }) }}</h2>
        <p class="section-subtitle" style="margin:0 auto 32px">
          {{ t({ zh: '成为我们值得信赖的合作伙伴', en: 'Become part of Southeast Asia\'s most trusted enterprise AI ecosystem.' }) }}
        </p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '联系我们', en: 'Contact Us' }) }}</RouterLink>
          <RouterLink to="/thailand" class="btn btn-outline">{{ t({ zh: '泰国专区', en: 'Thailand Hub' }) }}</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const meta = [
  { label: { zh: '成立时间', en: 'Founded' }, val: { zh: '2013 年', en: '2013' } },
  { label: { zh: '总部', en: 'Headquarters' }, val: { zh: '深圳市南山区', en: 'Nanshan, Shenzhen' } },
  { label: { zh: '团队规模', en: 'Team Size' }, val: { zh: '40+ 名专业工程师', en: '40+ professional engineers' } },
  { label: { zh: '联系', en: 'Contact' }, val: { zh: '+86 139 2378 0729', en: '+86 139 2378 0729' } },
]

const profileStats = [
  { num: '2013', label: { zh: '成立年份', en: 'Year Founded' } },
  { num: '11+', label: { zh: '年企业安全经验', en: 'Years of Enterprise Security' } },
  { num: '200+', label: { zh: '服务客户', en: 'Enterprise Clients' } },
  { num: '8', label: { zh: '深耕行业', en: 'Industry Verticals' } },
]

const timeline = [
  { year: '2013', title: { zh: '公司创立', en: 'Company Founded' }, desc: { zh: '深圳市志合创伟信息技术有限公司成立，以网络安全产品集成为核心业务，服务南山区科技园区企业。', en: 'ZHWC founded in Nanshan, Shenzhen. Core business: cybersecurity product integration for tech park enterprises.' }, milestone: undefined },
  { year: '2015', title: { zh: '政务安全入场', en: 'Government Security Entry' }, desc: { zh: '进入政务客户市场，承接深圳市级政府机构网络安全运维项目，建立可信赖的政务服务口碑。', en: 'Entered government market, managing cybersecurity operations for Shenzhen municipal agencies. Built trusted government service reputation.' }, milestone: { zh: '首批政务级客户', en: 'First government-tier clients' } },
  { year: '2017', title: { zh: '制造业深耕', en: 'Manufacturing Sector Expansion' }, desc: { zh: '与顺络电子、景旺电子建立长期合作，开始为 PCB、电子制造等领域提供网络安全与信息化集成服务。', en: 'Long-term partnerships with Sunlord Electronics and Jingwang Electronics. Expanded into PCB and electronics manufacturing IT integration.' }, milestone: undefined },
  { year: '2019', title: { zh: 'BYD 战略合作', en: 'BYD Strategic Partnership' }, desc: { zh: '成为比亚迪及其供应链体系的 IT 基础设施服务合作商，积累大规模制造业运营数据。', en: 'Became IT infrastructure partner for BYD and its supply chain ecosystem. Accumulated large-scale manufacturing operational data.' }, milestone: { zh: '进入标杆制造业客群', en: 'Entered flagship manufacturing client tier' } },
  { year: '2021', title: { zh: 'AI 能力布局', en: 'AI Capability Build-Out' }, desc: { zh: '启动 AI 转型战略，引进大模型私有化部署能力，在内部构建 AI 实验室，开始 AI + 安全融合探索。', en: 'Launched AI transformation strategy. Established internal AI lab with private LLM deployment capabilities. Began AI + security convergence R&D.' }, milestone: undefined },
  { year: '2023', title: { zh: '制造业 AI 实战', en: 'Manufacturing AI Goes Live' }, desc: { zh: '为电子制造客户落地视觉 AI 质检，YOLO v10 模型精度 ≥98%，成为 ZH·FactoryMind 的产品原型。', en: 'Deployed vision AI QC for electronics manufacturer. YOLO v10 accuracy ≥98%. This became the prototype for ZH·FactoryMind.' }, milestone: { zh: '首个 AI 质检系统上线', en: 'First AI QC system in production' } },
  { year: '2025', title: { zh: '泰国战略启动', en: 'Thailand Strategy Launch' }, desc: { zh: '向 MHESI 提交泰国高教 AI 国家能力体系建设提案，启动泰国市场拓展，发布 Thailand Edition 产品线。', en: 'Submitted Thailand AI national capability proposal to MHESI. Launched Thailand market expansion and Thailand Edition product line.' }, milestone: { zh: '东南亚扩张元年', en: 'Southeast Asia expansion year one' } },
  { year: '2026', title: { zh: 'AI-Native 战略转型完成', en: 'AI-Native Transformation Complete' }, desc: { zh: '完成从"网络安全集成商"到"AI 智能服务提供商"的战略转型，在曼谷设立本地团队。', en: 'Completed strategic transformation from cybersecurity integrator to AI-native services provider. Bangkok local team established.' }, milestone: { zh: '泰国本地实体落地', en: 'Thailand legal entity established' } },
]

const values = [
  { icon: '🤝', zh: '守信', en: 'Integrity First', desc: { zh: '十一年深耕安全领域，让"可信赖"成为我们交付每一项技术的底线。用实际客户名称和可量化结果说话。', en: 'Eleven years in security have made trustworthiness the baseline of everything we deliver. We speak in real client names and measurable results.' } },
  { icon: '🔐', zh: '主权', en: 'Data Sovereignty', desc: { zh: '您的数据属于您——我们的部署架构确保数据永远在您的控制之下，无论您在哪里运营。', en: 'Your data belongs to you — our architecture ensures it stays under your control, wherever you operate.' } },
  { icon: '🏗️', zh: '深耕', en: 'Industry Depth', desc: { zh: '深入政务、教育、制造行业，打造真正理解业务语境的 AI 智能体，而非通用平台工具。', en: 'We go deep into government, education, and manufacturing to build AI agents that genuinely understand business context — not generic platform tools.' } },
  { icon: '🌉', zh: '共融', en: 'Cross-Cultural', desc: { zh: '在中国与东南亚之间架桥，理解两种商业文化，尊重每一种本地需求与监管框架。', en: 'Bridging China and Southeast Asia — we understand both business cultures and respect every local regulatory requirement.' } },
  { icon: '⚙️', zh: '韧性', en: 'Resilient by Design', desc: { zh: '源自网络安全的工程基因，每一个 AI 系统都具备企业级韧性、可审计性与可扩展性。', en: 'Our cybersecurity DNA means every AI system we build is risk-resilient, auditable, and built to scale at enterprise level.' } },
]

const team = [
  {
    initial: '谷',
    name: 'Gu Hongxiu · 谷红秀',
    title: { zh: '创始人 & CEO', en: 'Founder & CEO' },
    bio: { zh: '13 年企业级网络安全与数字化转型从业经验，带领公司完成从安全集成商到 AI 智能服务提供商的战略转型。主导泰国市场拓展战略。', en: '13 years in enterprise cybersecurity and digital transformation. Led ZHWC\'s strategic pivot from security integrator to AI-native services. Spearheads the Thailand expansion strategy.' },
  },
  {
    initial: 'AI',
    name: 'AI Engineering Lead · 技术负责人',
    title: { zh: 'CTO · 大模型工程', en: 'CTO · Large Model Engineering' },
    bio: { zh: '深度学习与 LLM 工程专家，主导 ZH·FactoryMind 视觉 AI 系统架构，负责私有化大模型部署技术路线。', en: 'Deep learning and LLM engineering specialist. Architected ZH·FactoryMind vision AI systems and leads private LLM deployment technology roadmap.' },
  },
  {
    initial: 'TH',
    name: 'Thailand Director · 泰国总监',
    title: { zh: 'Thailand Country Director', en: 'Thailand Country Director' },
    bio: { zh: '深耕中泰商业对接 8 年，熟悉泰国 BOI、PDPA、ETDA 政策框架，负责 EEC 中资工厂与泰国本地高校客户开拓。', en: '8 years in Sino-Thai business development. Expert in BOI, PDPA, and ETDA regulatory frameworks. Leads EEC manufacturing and Thai university client acquisition.' },
  },
]
</script>

<style scoped>
.page-hero { padding-top: 120px; }
.about__profile-grid { display: grid; grid-template-columns: 1fr 380px; gap: 72px; align-items: start; }
@media (max-width: 1023px) { .about__profile-grid { grid-template-columns: 1fr; } }
.about__meta { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; padding: 24px; background: var(--color-surface-alt); border-radius: var(--radius-md); }
.about__meta-item { display: flex; flex-direction: column; gap: 4px; }
.about__meta-label { font-size: 11px; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
.about__meta-val { font-size: 15px; font-weight: 600; color: var(--color-indigo); }
.about__stats-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.about__stat { background: var(--color-indigo); border-radius: var(--radius-md); padding: 28px 24px; text-align: center; }
.about__stat-num { font-size: 36px; font-weight: 900; color: var(--color-amber); }
.about__stat-label { font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 6px; }

/* Timeline */
.timeline { position: relative; max-width: 800px; margin: 0 auto; }
.timeline::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--color-indigo), var(--color-amber)); transform: translateX(-50%); }
.timeline__item { display: flex; justify-content: flex-end; padding-right: calc(50% + 40px); padding-bottom: 40px; position: relative; }
.timeline__item--right { justify-content: flex-start; padding-right: 0; padding-left: calc(50% + 40px); }
.timeline__dot { position: absolute; left: 50%; top: 20px; width: 14px; height: 14px; background: var(--color-amber); border-radius: 50%; transform: translateX(-50%); border: 3px solid var(--color-surface-alt); z-index: 1; }
.timeline__card { max-width: 340px; width: 100%; }
.timeline__year { font-size: 12px; font-weight: 700; color: var(--color-amber); letter-spacing: 0.1em; margin-bottom: 8px; }
.timeline__title { font-size: 18px; font-weight: 700; color: var(--color-indigo); margin-bottom: 8px; }
.timeline__desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; }
.timeline__milestone { margin-top: 12px; font-size: 12px; font-weight: 600; color: var(--color-amber-dark); background: rgba(212,135,10,0.1); padding: 6px 12px; border-radius: 20px; display: inline-block; }
@media (max-width: 768px) { .timeline::before { left: 20px; } .timeline__item, .timeline__item--right { justify-content: flex-start; padding-left: 60px; padding-right: 0; } .timeline__dot { left: 20px; } .timeline__card { max-width: 100%; } }

/* Values */
.values-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
@media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
.value-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: 28px 20px; text-align: center; transition: all var(--transition); }
.value-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(212,135,10,0.3); }
.value-card__icon { font-size: 32px; margin-bottom: 12px; }
.value-card__zh { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px; }
.value-card__desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.65; }

/* Team */
.team-card { text-align: center; }
.team-card__avatar { width: 72px; height: 72px; background: var(--color-indigo); color: #fff; font-size: 24px; font-weight: 800; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
.team-card__name { font-size: 17px; font-weight: 700; color: var(--color-indigo); margin-bottom: 4px; }
.team-card__title { font-size: 13px; color: var(--color-amber-dark); font-weight: 600; margin-bottom: 12px; }
.team-card__bio { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; }
</style>
