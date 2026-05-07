<template>
  <div class="thailand-page">
    <!-- Hero -->
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">🇹🇭 Thailand Hub · 泰国专区</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,60px)">
          {{ t({ zh: '我们帮助泰国建立', en: 'We Help Thailand Build' }) }}<br>
          <span style="color:var(--color-amber)">{{ t({ zh: '属于自己的 AI 能力', en: 'Its Own AI Capabilities' }) }}</span>
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65);max-width:640px">
          {{ t({ zh: '我们帮助泰国建立自己的 AI 能力 — 不是依赖，而是自主。', en: 'We help Thailand build its own AI capabilities — not dependency, but sovereignty.' }) }}
        </p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
          <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: 'LINE 咨询 / 联系我们', en: 'Contact via LINE' }) }}</RouterLink>
          <RouterLink to="/solutions/factorymind" class="btn btn-secondary">{{ t({ zh: '探索 EEC 制造业 AI', en: 'Explore EEC Manufacturing AI' }) }}</RouterLink>
        </div>
      </div>
    </section>

    <!-- Why Thailand -->
    <section class="section">
      <div class="container">
        <div class="grid-2" style="gap:80px;align-items:center">
          <div>
            <span class="section-label">{{ t({ zh: '市场机会', en: 'Market Opportunity' }) }}</span>
            <h2 class="section-title">{{ t({ zh: '为什么是泰国？', en: 'Why Thailand?' }) }}</h2>
            <div class="divider"></div>
            <p style="font-size:16px;color:var(--color-text-secondary);line-height:1.85;margin-bottom:24px">
              {{ t({ zh: '泰国正处于 AI 能力建设的战略窗口期：MHESI 强制 2026 年上线 AI 课程（180+ 高校，90% 尚无基础设施）、EEC 工业园区中资制造业 AI 孤岛困境、私立医院医疗旅游多语言 AI 需求激增。', en: 'Thailand is at a strategic inflection point for AI capability building: MHESI mandates AI courses at 180+ universities by 2026 (90% without infrastructure), Chinese-owned EEC manufacturers face AI island challenges, and private hospitals see surging multilingual AI demand from medical tourism.' }) }}
            </p>
            <div class="opportunity-cards">
              <div v-for="opp in opportunities" :key="opp.title.zh" class="opp-card">
                <div class="opp-card__icon">{{ opp.icon }}</div>
                <div>
                  <div class="opp-card__title">{{ t(opp.title) }}</div>
                  <div class="opp-card__desc">{{ t(opp.desc) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="th-stats-card card">
              <h3 style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:28px">{{ t({ zh: '泰国市场关键数据', en: 'Thailand Market Key Metrics' }) }}</h3>
              <div v-for="s in thStats" :key="s.num" class="th-stat">
                <div class="th-stat__num">{{ s.num }}</div>
                <div class="th-stat__label">{{ t(s.label) }}</div>
                <div class="th-stat__source">{{ s.source }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Customer Segments -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '目标客户', en: 'Target Segments' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '三大核心客户群', en: 'Three Core Customer Segments' }) }}</h2>
          <p class="section-subtitle" style="margin:0 auto">{{ t({ zh: '驱动泰国战略的三大客户群', en: 'Three Customer Segments That Drive Our Thailand Strategy' }) }}</p>
        </div>
        <div class="grid-3">
          <div v-for="seg in segments" :key="seg.title.zh" class="card segment-card">
            <div class="segment-card__flag">{{ seg.flag }}</div>
            <h3 class="segment-card__title">{{ t(seg.title) }}</h3>
            <div class="segment-card__en">{{ seg.en }}</div>
            <p class="segment-card__pain">
              <strong>{{ t({ zh: '核心痛点：', en: 'Key Pain Point: ' }) }}</strong>{{ t(seg.pain) }}
            </p>
            <p class="segment-card__budget">
              <strong>{{ t({ zh: '年采购潜力：', en: 'Annual Budget Potential: ' }) }}</strong>
              <span class="text-amber">{{ seg.budget }}</span>
            </p>
            <RouterLink :to="seg.link" class="btn btn-outline" style="margin-top:20px;width:100%;justify-content:center">
              {{ t({ zh: '了解解决方案 →', en: 'View Solution →' }) }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Framework -->
    <section class="section section--dark">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '合规框架', en: 'Compliance' }) }}</span>
          <h2 class="section-title" style="color:#fff">{{ t({ zh: '泰国 AI 合规\n我们内置，而非附加', en: 'Thailand AI Compliance\nBuilt In, Not Bolted On' }) }}</h2>
          <p class="section-subtitle" style="color:rgba(255,255,255,0.6);margin:0 auto">
            {{ t({ zh: '泰国 AI 合规 — 内置设计，而非事后附加', en: 'Thailand AI Compliance — Built In, Not Bolted On' }) }}
          </p>
        </div>
        <div class="compliance-grid">
          <div v-for="c in compliance" :key="c.name" class="compliance-card">
            <div class="compliance-card__badge">{{ c.badge }}</div>
            <h3 class="compliance-card__name">{{ c.name }}</h3>
            <div class="compliance-card__full">{{ c.full }}</div>
            <p class="compliance-card__desc">{{ t(c.desc) }}</p>
            <div class="compliance-card__features">
              <span v-for="f in c.features" :key="f.zh" class="compliance-card__feature">✓ {{ t(f) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 90-Day Roadmap -->
    <section class="section">
      <div class="container">
        <div style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '落地计划', en: '90-Day Plan' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '90 天泰国市场进入路线图', en: '90-Day Thailand Market Entry Roadmap' }) }}</h2>
          <p class="section-subtitle">{{ t({ zh: '泰国市场进入 — 90 天路线图', en: 'Thailand Market Entry — 90-Day Roadmap' }) }}</p>
        </div>
        <div class="roadmap">
          <div v-for="phase in roadmap" :key="phase.phase.zh" class="roadmap__phase">
            <div class="roadmap__header">
              <div class="roadmap__phase-num">{{ t(phase.phaseNum) }}</div>
              <div>
                <div class="roadmap__title">{{ t(phase.title) }}</div>
                <div class="roadmap__period">{{ t(phase.period) }}</div>
              </div>
            </div>
            <ul class="roadmap__items">
              <li v-for="item in phase.items" :key="item.zh">{{ t(item) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- LINE Contact -->
    <section class="section section--alt">
      <div class="container">
        <div class="line-cta">
          <div class="line-cta__content">
            <h2 class="section-title">{{ t({ zh: '泰国咨询入口', en: 'Thailand Consultation' }) }}</h2>
            <p class="section-subtitle">{{ t({ zh: '泰国咨询 — 通过 LINE、邮件或莅临我们的办公室联系我们', en: 'Thailand Consultation — Contact Us via LINE, Email, or Visit Our Office' }) }}</p>
            <div class="line-cta__methods">
              <div class="line-cta__method line-cta__method--line">
                <div class="line-qr-box">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#06c755" stroke-width="1.2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17" cy="17" r="3"/><path d="M7 7v0M17 7v0M7 17v0"/></svg>
                  <span class="badge badge-green">LINE QR</span>
                </div>
                <div>
                  <div style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:8px">{{ t({ zh: '扫码 LINE 即时咨询', en: 'Scan to Chat via LINE' }) }}</div>
                  <div style="font-size:14px;color:var(--color-text-muted);line-height:1.8">
                    LINE ID: @zhwcthailand<br>
                    {{ t({ zh: '支持泰语 / 中文 / 英语', en: 'Thai / Chinese / English supported' }) }}<br>
                    {{ t({ zh: '工作日 9:00-18:00 (BKK)', en: 'Weekdays 9:00-18:00 (BKK)' }) }}
                  </div>
                </div>
              </div>
              <div class="line-cta__method">
                <div style="font-size:32px;margin-bottom:12px">📧</div>
                <div style="font-weight:700;font-size:16px;color:var(--color-indigo);margin-bottom:8px">Email</div>
                <div style="font-size:14px;color:var(--color-text-muted)">thailand@szzhcw.com</div>
              </div>
              <div class="line-cta__method">
                <div style="font-size:32px;margin-bottom:12px">🏢</div>
                <div style="font-weight:700;font-size:16px;color:var(--color-indigo);margin-bottom:8px">{{ t({ zh: '深圳总部', en: 'Shenzhen HQ' }) }}</div>
                <div style="font-size:14px;color:var(--color-text-muted);line-height:1.8">
                  {{ t({ zh: '深圳市南山区留仙大道\n金骐智谷 1803', en: 'Jinqi Zhigu 1803, Liuxian Blvd\nNanshan District, Shenzhen' }) }}<br>
                  +86 139 2378 0729
                </div>
              </div>
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

const opportunities = [
  {
    icon: '🎓',
    title: { zh: 'MHESI 政策红利', en: 'MHESI Policy Window' },
    desc: { zh: '180+ 高校须在 2026 年上线 AI 课程，90% 尚无配套基础设施，18-24 个月先发窗口', en: '180+ universities must launch AI courses by 2026; 90% have no supporting infrastructure — an 18-24 month first-mover window' },
  },
  {
    icon: '🏭',
    title: { zh: 'EEC 中资工厂 AI 孤岛', en: 'EEC Chinese-Owned Factory AI Islands' },
    desc: { zh: 'BYD、富士康等中资工厂面临国内 AI 系统无法跨境迁移困境，ZHWC 是唯一解', en: 'BYD, Foxconn, and other Chinese-owned factories cannot migrate domestic AI systems cross-border — ZHWC is the only solution' },
  },
  {
    icon: '🏥',
    title: { zh: '医疗旅游多语言 AI', en: 'Medical Tourism Multilingual AI' },
    desc: { zh: '年接待 300 万+ 医疗旅游患者，中文 AI 问诊 + PDPA 合规私有化部署需求迫切', en: '3M+ medical tourists per year generate urgent demand for Chinese-language AI consultation and PDPA-compliant private deployments' },
  },
]

const thStats = [
  { num: '180+', label: { zh: '高校待服务', en: 'Universities Awaiting Service' }, source: 'MHESI 2025' },
  { num: '500+', label: { zh: 'EEC 中资工厂', en: 'Chinese-Owned EEC Factories' }, source: 'BOI Thailand' },
  { num: '3M+', label: { zh: '医疗旅游患者/年', en: 'Medical Tourists / Year' }, source: 'TAT 2024' },
  { num: '2026', label: { zh: 'AI 课程强制年份', en: 'Mandatory AI Course Year' }, source: 'MHESI Policy' },
]

const segments = [
  {
    flag: '🎓',
    title: { zh: '泰国国立大学 CIO', en: 'Thai University Digital Officers' },
    en: 'University Digital Officers',
    pain: { zh: 'MHESI 强制 2026 年上线 AI 课程，但无 AI 实验室、无教材、零 AI 师资', en: 'MHESI mandates AI courses by 2026, but no AI labs, no curriculum, and zero AI-qualified faculty' },
    budget: '800万-3000万泰铢/校',
    link: '/solutions/eduai',
  },
  {
    flag: '🏭',
    title: { zh: 'EEC 中资制造企业 IT 总监', en: 'Chinese-Owned EEC Manufacturers' },
    en: 'Chinese-Owned EEC Manufacturers',
    pain: { zh: '国内 AI 系统因数据主权无法部署泰国；泰国本地 IT 供应商不懂制造业场景', en: 'Domestic AI systems cannot be deployed in Thailand due to data sovereignty; local Thai IT vendors lack manufacturing expertise' },
    budget: '500万-2000万泰铢/厂',
    link: '/solutions/factorymind',
  },
  {
    flag: '🏥',
    title: { zh: '泰国私立医院 CDO', en: 'Thai Private Hospital Digital Officers' },
    en: 'Private Hospital Digital Officers',
    pain: { zh: 'PDPA 合规压力导致不敢上传国际公有云；中文患者 AI 问诊需求强烈', en: 'PDPA compliance pressure prevents public cloud use; strong demand for Chinese-language AI patient consultation' },
    budget: '1200万-4500万泰铢/集团',
    link: '/solutions/agentos',
  },
]

const compliance = [
  {
    badge: '🏛️ PDPA',
    name: 'PDPA',
    full: 'Personal Data Protection Act',
    desc: { zh: '泰国个人数据保护法，2022 年全面生效，对数据收集、处理、传输设有严格规定。', en: 'Thailand\'s Personal Data Protection Act, fully effective in 2022, with strict rules on data collection, processing, and transfer.' },
    features: [
      { zh: '私有化部署架构', en: 'On-premise deployment architecture' },
      { zh: 'AES-256 加密', en: 'AES-256 encryption' },
      { zh: '数据本地化存储', en: 'Data localization storage' },
      { zh: '72 小时泄露通报辅助', en: '72-hour breach notification support' },
    ],
  },
  {
    badge: '📋 ETDA',
    name: 'ETDA',
    full: 'Electronic Transactions Development Agency',
    desc: { zh: '泰国电子交易发展署，负责云服务与 AI 系统合规认证，政府采购硬性要求。', en: 'Thailand\'s Electronic Transactions Development Agency, responsible for cloud service and AI system compliance certification — a mandatory requirement for government procurement.' },
    features: [
      { zh: '云服务认证对齐', en: 'Cloud service certification alignment' },
      { zh: 'AI 系统审计报告', en: 'AI system audit reports' },
      { zh: '人工监督合规设计', en: 'Human oversight compliant design' },
      { zh: 'NCSOC 报告格式', en: 'NCSOC report format' },
    ],
  },
  {
    badge: '🏭 BOI',
    name: 'BOI',
    full: 'Board of Investment Thailand',
    desc: { zh: '泰国投资委员会，外资在泰设立法律实体的核心路径，获批可享受税收减免与政府合同资质。', en: 'Thailand Board of Investment, the core pathway for foreign entities to establish legal presence in Thailand — approval grants tax incentives and eligibility for government contracts.' },
    features: [
      { zh: '外商独资架构建议', en: 'Wholly foreign-owned structure advisory' },
      { zh: 'Smart Visa 申请支持', en: 'Smart Visa application support' },
      { zh: '政府项目资质获取', en: 'Government project qualification' },
      { zh: '90 天落地计划', en: '90-day market entry plan' },
    ],
  },
]

const roadmap = [
  {
    phase: { zh: '第一阶段', en: 'Phase 1' },
    phaseNum: { zh: '阶段一', en: 'P1' },
    title: { zh: '法律实体 & 市场调研', en: 'Legal Entity & Market Research' },
    period: { zh: '第 1-30 天', en: 'Days 1–30' },
    items: [
      { zh: '委托泰国律师启动 BOI 申请（Smart Visa 数字科技类）', en: 'Engage Thai legal counsel to initiate BOI application (Smart Visa — Digital Technology category)' },
      { zh: '完成三大目标客户群深度访谈（各 5 个）', en: 'Complete in-depth interviews with 5 prospects across each of the three target segments' },
      { zh: '泰国合作伙伴初步接洽（True IDC、WHA、LINE）', en: 'Initiate partnership discussions with True IDC, WHA, and LINE Thailand' },
      { zh: '完成 PDPA + ETDA 合规差距分析', en: 'Complete PDPA + ETDA compliance gap analysis' },
    ],
  },
  {
    phase: { zh: '第二阶段', en: 'Phase 2' },
    phaseNum: { zh: '阶段二', en: 'P2' },
    title: { zh: '首批客户签约', en: 'First Customer Contracts' },
    period: { zh: '第 31-60 天', en: 'Days 31–60' },
    items: [
      { zh: '与 1 家 EEC 中资工厂签订 ZH·FactoryMind 试点协议', en: 'Sign ZH·FactoryMind pilot agreement with 1 Chinese-owned EEC factory' },
      { zh: '向 2 所目标高校提交 ZH·EduAI 提案', en: 'Submit ZH·EduAI proposals to 2 target universities' },
      { zh: '在曼谷举办"中泰企业 AI 数字化圆桌"发布活动', en: 'Host "Sino-Thai Enterprise AI Roundtable" launch event in Bangkok' },
      { zh: '本地合规 AI 落地白皮书发布（泰语版）', en: 'Publish Thai-language whitepaper on locally-compliant AI deployment' },
    ],
  },
  {
    phase: { zh: '第三阶段', en: 'Phase 3' },
    phaseNum: { zh: '阶段三', en: 'P3' },
    title: { zh: '规模化与本地团队', en: 'Scale-Up & Local Team' },
    period: { zh: '第 61-90 天', en: 'Days 61–90' },
    items: [
      { zh: 'BOI 公司注册完成，开立本地银行账户', en: 'Complete BOI company registration and open local bank account' },
      { zh: 'ZH·FactoryMind 首个 MVP 验收交付', en: 'Deliver ZH·FactoryMind first MVP acceptance' },
      { zh: '本地客户成功经理招募（泰语 + 中文双语）', en: 'Recruit local Customer Success Manager (bilingual Thai/Chinese)' },
      { zh: '首年 KPI：签约金额 500 万-1500 万泰铢', en: 'Year 1 KPI: 5M–15M THB in signed contracts' },
    ],
  },
]
</script>

<style scoped>
.page-hero { padding-top: 120px; }

.opportunity-cards { display: flex; flex-direction: column; gap: 16px; }

.opp-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px;
  background: var(--color-surface-alt);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--color-amber);
}

.opp-card__icon { font-size: 24px; flex-shrink: 0; }
.opp-card__title { font-size: 15px; font-weight: 700; color: var(--color-indigo); margin-bottom: 4px; }
.opp-card__desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }

.th-stat {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

.th-stat:last-child { border-bottom: none; }
.th-stat__num { font-size: 24px; font-weight: 800; color: var(--color-amber); }
.th-stat__label { font-size: 14px; font-weight: 600; color: var(--color-indigo); }
.th-stat__source { font-size: 11px; color: var(--color-text-muted); white-space: nowrap; }

/* Segments */
.segment-card__flag { font-size: 36px; margin-bottom: 12px; }
.segment-card__title { font-size: 18px; font-weight: 700; color: var(--color-indigo); margin-bottom: 4px; }
.segment-card__en { font-size: 13px; color: var(--color-text-muted); margin-bottom: 16px; }
.segment-card__pain { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 12px; }
.segment-card__budget { font-size: 14px; color: var(--color-text-secondary); }

/* Compliance */
.compliance-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

@media (max-width: 1023px) { .compliance-grid { grid-template-columns: 1fr; } }

.compliance-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-md);
  padding: 32px;
}

.compliance-card__badge { font-size: 20px; margin-bottom: 12px; }
.compliance-card__name { font-size: 24px; font-weight: 900; color: var(--color-amber); margin-bottom: 4px; }
.compliance-card__full { font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px; }
.compliance-card__desc { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 20px; }
.compliance-card__features { display: flex; flex-direction: column; gap: 8px; }
.compliance-card__feature { font-size: 13px; color: rgba(255,255,255,0.7); }

/* Roadmap */
.roadmap { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

@media (max-width: 1023px) { .roadmap { grid-template-columns: 1fr; } }

.roadmap__phase {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 32px;
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-amber);
}

.roadmap__header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.roadmap__phase-num {
  width: 40px;
  height: 40px;
  background: var(--color-indigo);
  color: var(--color-amber);
  font-weight: 800;
  font-size: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.roadmap__title { font-size: 16px; font-weight: 700; color: var(--color-indigo); }
.roadmap__period { font-size: 12px; color: var(--color-amber-dark); font-weight: 600; margin-top: 2px; }
.roadmap__items { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.roadmap__items li { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; padding-left: 16px; position: relative; }
.roadmap__items li::before { content: '→'; position: absolute; left: 0; color: var(--color-amber); }

/* LINE CTA */
.line-cta { max-width: 900px; margin: 0 auto; }
.line-cta__methods {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 28px;
  margin-top: 40px;
}

@media (max-width: 1023px) { .line-cta__methods { grid-template-columns: 1fr; } }

.line-cta__method {
  padding: 28px;
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.line-cta__method--line {
  display: flex;
  gap: 20px;
  align-items: center;
  border-color: rgba(6,199,85,0.3);
  background: rgba(6,199,85,0.03);
}

.line-qr-box {
  width: 88px;
  height: 88px;
  background: rgba(6,199,85,0.08);
  border: 2px dashed rgba(6,199,85,0.35);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
}
</style>
