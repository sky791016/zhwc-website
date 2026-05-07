<template>
  <div>
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">{{ t({ zh: '案例与洞察', en: 'Cases & Insights' }) }}</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,60px)">
          {{ t({ zh: '真实的业务挑战', en: 'Real Business Challenges.' }) }}<br>
          {{ t({ zh: '可验证的 AI 成果', en: 'Verifiable AI Outcomes.' }) }}
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">
          {{ t({ zh: '我们用数据说话，用结果证明自己', en: 'We speak in data and prove ourselves with results.' }) }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;flex-direction:column;gap:32px">
          <div v-for="c in cases" :key="c.client.en" class="card case-detail">
            <div class="case-detail__header">
              <span class="badge" :class="c.badgeClass" style="font-size:13px;padding:6px 14px">{{ t(c.industry) }}</span>
              <h2 style="font-size:22px;font-weight:800;color:var(--color-indigo)">{{ t(c.client) }}</h2>
              <span class="badge badge-indigo">{{ c.product }}</span>
            </div>
            <div class="case-detail__body">
              <div class="case-detail__col">
                <div class="case-detail__label">{{ t({ zh: '业务挑战', en: 'Business Challenge' }) }}</div>
                <p style="font-size:15px;color:var(--color-text-secondary);line-height:1.8">{{ t(c.challenge) }}</p>
              </div>
              <div class="case-detail__col">
                <div class="case-detail__label">{{ t({ zh: '解决方案', en: 'Solution Deployed' }) }}</div>
                <p style="font-size:15px;color:var(--color-text-secondary);line-height:1.8">{{ t(c.solution) }}</p>
              </div>
            </div>
            <div class="case-detail__metrics">
              <div v-for="m in c.metrics" :key="m.label.en" class="case-detail__metric">
                <div class="case-detail__metric-val">{{ m.value }}</div>
                <div class="case-detail__metric-label">{{ t(m.label) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container text-center">
        <h2 class="section-title">{{ t({ zh: '您的业务挑战是下一个成功案例', en: 'Your Business Challenge Is Our Next Success Story' }) }}</h2>
        <p class="section-subtitle" style="margin:0 auto 32px">
          {{ t({ zh: '预约一次 AI 场景诊断，30 分钟了解您的 ROI 潜力', en: 'Book a 30-minute AI scenario diagnostic to discover your ROI potential.' }) }}
        </p>
        <RouterLink to="/contact" class="btn btn-primary" style="font-size:16px;padding:16px 40px">
          {{ t({ zh: '预约案例分析咨询 →', en: 'Book a Case Consultation →' }) }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const cases = [
  {
    client: { zh: '顺络电子 EEC 泰国工厂', en: 'Sunlord Electronics — EEC Thailand Factory' },
    industry: { zh: '🏭 EEC 制造业', en: '🏭 EEC Manufacturing' },
    product: 'ZH·FactoryMind',
    badgeClass: 'badge-indigo',
    challenge: {
      zh: '中国总部视觉质检 AI 系统因泰国 PDPA 数据主权要求无法跨境迁移；泰国本地 IT 供应商无制造业 AI 场景经验；中国管理层与泰国工人之间存在语言操作障碍。',
      en: 'China HQ vision QC AI system couldn\'t migrate to Thailand factory due to PDPA data sovereignty requirements. Thai local IT vendors lacked manufacturing AI expertise. Language barrier between Chinese management and Thai workers blocked adoption.'
    },
    solution: {
      zh: 'ZH·FactoryMind 私有化部署，PDPA 合规架构确保数据不出厂区，YOLO v10 + 定制 ViT 模型专为电子元件品类训练，LINE 推送中泰双语班组长实时报警，OpsAssist 支持语音输入降低工人操作门槛。',
      en: 'ZH·FactoryMind private on-premise deployment. PDPA-compliant architecture — data never leaves factory premises. YOLO v10 + custom ViT model trained for electronics components. LINE-based bilingual (TH/CN) real-time QC alerts to team leads. OpsAssist voice input reduces worker skill barriers.'
    },
    metrics: [
      { value: '≥98%', label: { zh: '视觉质检准确率', en: 'Vision QC Accuracy' } },
      { value: '-65%', label: { zh: '漏检率下降', en: 'Miss Detection Rate' } },
      { value: '6 weeks', label: { zh: '签约到生产上线', en: 'Contract to Go-Live' } },
      { value: '100%', label: { zh: 'PDPA 合规达标', en: 'PDPA Compliance' } },
    ],
  },
  {
    client: { zh: '深科技 · 深圳总部', en: 'SZ Tech · Shenzhen Headquarters' },
    industry: { zh: '🏢 企业 AI 智能体', en: '🏢 Enterprise AI Agents' },
    product: 'ZH·AgentOS',
    badgeClass: 'badge-amber',
    challenge: {
      zh: '10,000+ 份工程文档分散在 SharePoint、Confluence、ERP 等多个系统，工程师日均文档搜索耗时超过 2 小时；跨部门知识传递效率低下，新员工入职周期长达 3 个月。',
      en: '10,000+ engineering documents scattered across SharePoint, Confluence, and ERP systems. Engineers spending 2+ hours per day searching. Cross-department knowledge transfer inefficiencies pushing new employee onboarding to 3 months.'
    },
    solution: {
      zh: 'ZH·AgentOS 私有化部署，构建全厂中英双语 RAG 知识库，MCP 协议统一接入 ERP/PLM/Confluence 系统，支持自然语言问答与多文档交叉检索，AI 自动生成技术报告摘要。',
      en: 'ZH·AgentOS private deployment. Built company-wide bilingual (CN/EN) RAG knowledge base. MCP protocol unified access to ERP/PLM/Confluence. Natural language Q&A with cross-document retrieval. AI-automated technical report summarization.'
    },
    metrics: [
      { value: '-78%', label: { zh: '文档搜索耗时下降', en: 'Search Time Reduced' } },
      { value: '95%', label: { zh: '答案相关度评分', en: 'Answer Relevance Score' } },
      { value: '4 months', label: { zh: 'ROI 回收周期', en: 'ROI Payback Period' } },
      { value: '-6 weeks', label: { zh: '新员工入职周期缩短', en: 'Onboarding Shortened' } },
    ],
  },
  {
    client: { zh: '平安集团 · 深圳总部', en: 'Ping An Group · Shenzhen HQ' },
    industry: { zh: '🏦 金融保险', en: '🏦 Financial Insurance' },
    product: 'ZH·SecureAI + AgentOS',
    badgeClass: 'badge-green',
    challenge: {
      zh: '合规部门每月需处理 3,000+ 份监管文件，人工审核效率低且易遗漏；AI 系统上线后面临监管问询，需完整的 AI 决策审计链路。',
      en: 'Compliance team processing 3,000+ regulatory documents per month — manual review inefficient and error-prone. AI deployment triggered regulatory inquiries requiring complete decision audit trails.'
    },
    solution: {
      zh: 'ZH·ComplianceBot 自动化合规文档处理，ZH·AgentOps 全链路 AI 决策审计追踪，幻觉检测与低置信度自动转人工，满足监管部门对 AI 可解释性要求。',
      en: 'ZH·ComplianceBot automated regulatory document processing. ZH·AgentOps full-chain AI decision audit trail. Hallucination detection with automatic human escalation on low-confidence outputs. Full AI explainability for regulatory compliance.'
    },
    metrics: [
      { value: '-85%', label: { zh: '合规审核人工成本', en: 'Manual Compliance Cost' } },
      { value: '100%', label: { zh: 'AI 决策审计覆盖', en: 'AI Decision Audit Coverage' } },
      { value: '3 days', label: { zh: '监管报告生成周期', en: 'Regulatory Report Lead Time' } },
      { value: '0', label: { zh: '重大合规漏报', en: 'Major Compliance Misses' } },
    ],
  },
]
</script>

<style scoped>
.page-hero { padding-top: 120px; }
.case-detail__header { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; }
.case-detail__body { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 28px; }
@media (max-width: 768px) { .case-detail__body { grid-template-columns: 1fr; } }
.case-detail__label { font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; }
.case-detail__metrics { display: flex; gap: 24px; padding: 24px; background: var(--color-surface-alt); border-radius: var(--radius-sm); flex-wrap: wrap; }
.case-detail__metric { text-align: center; flex: 1; min-width: 80px; }
.case-detail__metric-val { font-size: 26px; font-weight: 900; color: var(--color-amber); }
.case-detail__metric-label { font-size: 12px; color: var(--color-text-muted); margin-top: 4px; }
</style>
