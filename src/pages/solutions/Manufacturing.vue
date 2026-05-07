<template>
  <div class="mfg-page">

    <!-- ═══ HERO ═══ -->
    <section class="mfg-hero section--dark section">
      <div class="container">
        <div class="mfg-hero__inner">
          <div class="mfg-hero__left">
            <div class="mfg-hero__tag">{{ t({ zh: '精益 AI 方法论体系', en: 'Lean AI Methodology' }) }}</div>
            <h1 class="mfg-hero__title">
              {{ t({ zh: 'AI 时代高科技制造业', en: 'High-Tech Manufacturing' }) }}<br>
              <span class="highlight">{{ t({ zh: '转型解决方案', en: 'AI Transformation' }) }}</span>
            </h1>
            <p class="mfg-hero__desc">
              {{ t({
                zh: '面向半导体、EMS/ODM/JDM、存储模组、智能控制器、新能源电子企业。帮助制造企业从"想做 AI 但不知道做什么"，走向"达成认知共识、完成场景探索、开发制造智能体、建立 AI 运营体系"。',
                en: 'For semiconductor, EMS/ODM/JDM, memory module, smart controller, and new energy electronics enterprises. We guide manufacturers from "wanting AI but not knowing where to start" to achieving cognitive consensus, completing scenario discovery, developing manufacturing agents, and establishing AI operations.'
              }) }}
            </p>
            <div class="mfg-hero__btns">
              <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '预约方案评估', en: 'Book Assessment' }) }}</RouterLink>
              <RouterLink to="/solutions/factorymind" class="btn btn-secondary">{{ t({ zh: '了解 FactoryMind', en: 'Explore FactoryMind' }) }}</RouterLink>
            </div>
          </div>
          <div class="mfg-hero__metrics">
            <div v-for="m in heroMetrics" :key="m.val" class="mfg-metric">
              <div class="mfg-metric__val">{{ m.val }}</div>
              <div class="mfg-metric__label">{{ t(m.label) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ INDUSTRY SHIFT ═══ -->
    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '行业本质洞察', en: 'Industry Insight' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '从流程效率到认知效率', en: 'From Process Efficiency to Cognitive Efficiency' }) }}</h2>
        </div>
        <div class="shift-grid">
          <div class="shift-card shift-card--old">
            <div class="shift-card__header">
              <span class="shift-card__era">{{ t({ zh: '过去二十年', en: 'Past 20 Years' }) }}</span>
              <h3>{{ t({ zh: '流程效率时代', en: 'Process Efficiency Era' }) }}</h3>
              <p>{{ t({ zh: '制造业数字化的主线是系统化、在线化、可视化', en: 'Manufacturing digitalization focused on systematization, online operation, and visualization' }) }}</p>
            </div>
            <div class="shift-card__systems">
              <span v-for="s in oldSystems" :key="s" class="system-tag system-tag--old">{{ s }}</span>
            </div>
            <div class="shift-card__limit">
              <div class="limit-label">{{ t({ zh: '共同局限', en: 'Common Limitation' }) }}</div>
              <p>{{ t({ zh: '记录了发生了什么，却不解释为什么发生；固化了流程，却不帮助人做复杂判断。', en: 'Records what happened, but doesn\'t explain why it happened; codifies processes, but doesn\'t help with complex decisions.' }) }}</p>
            </div>
          </div>

          <div class="shift-arrow">
            <div class="shift-arrow__icon">→</div>
            <div class="shift-arrow__label">AI</div>
          </div>

          <div class="shift-card shift-card--new">
            <div class="shift-card__header">
              <span class="shift-card__era" style="background:rgba(212,135,10,0.15);color:var(--color-amber)">{{ t({ zh: 'AI 时代', en: 'AI Era' }) }}</span>
              <h3 style="color:var(--color-amber)">{{ t({ zh: '认知效率时代', en: 'Cognitive Efficiency Era' }) }}</h3>
              <p>{{ t({ zh: '制造 AI 解决的是最昂贵的认知问题', en: 'Manufacturing AI solves the most expensive cognitive problems' }) }}</p>
            </div>
            <div class="shift-card__questions">
              <div v-for="q in cognitiveQuestions" :key="q.zh" class="cog-question">
                <span class="cog-q-icon">?</span>
                <span>{{ t(q) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="core-insight">
          <div class="core-insight__icon">💡</div>
          <blockquote>{{ t({
            zh: '高科技制造 AI 转型的本质，不是把大模型接进企业，而是把企业的工程知识、质量经验、测试数据、设备状态、工艺参数、客户需求和供应链约束，组织成可感知、可推理、可协同、可执行、可运营的智能制造系统。',
            en: 'The essence of AI transformation in high-tech manufacturing is not just connecting LLMs to enterprise systems — it\'s organizing engineering knowledge, quality experience, test data, equipment status, process parameters, customer requirements, and supply chain constraints into an intelligent manufacturing system that can perceive, reason, collaborate, execute, and be operated continuously.'
          }) }}</blockquote>
        </div>
      </div>
    </section>

    <!-- ═══ 7-LAYER ARCHITECTURE ═══ -->
    <section class="section section--dark">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '总体架构', en: 'Total Architecture' }) }}</span>
          <h2 class="section-title" style="color:#fff">{{ t({ zh: '制造认知网络七层架构', en: 'Seven-Layer Manufacturing Cognitive Network' }) }}</h2>
          <p class="section-subtitle" style="margin:0 auto;color:rgba(255,255,255,0.6)">
            {{ t({ zh: '从数字化系统到制造认知网络的完整架构体系', en: 'Complete architectural framework from digital systems to manufacturing cognitive network' }) }}
          </p>
        </div>
        <div class="arch-stack">
          <div v-for="(layer, i) in archLayers" :key="layer.name.zh" class="arch-layer" :style="`--layer-idx:${i}`">
            <div class="arch-layer__num">L{{ archLayers.length - i }}</div>
            <div class="arch-layer__content">
              <div class="arch-layer__name">{{ t(layer.name) }}</div>
              <div class="arch-layer__items">
                <span v-for="item in layer.items" :key="item.zh" class="arch-item">{{ t(item) }}</span>
              </div>
            </div>
            <div class="arch-layer__badge" :class="`arch-layer__badge--${layer.color}`">{{ t(layer.badge) }}</div>
          </div>
        </div>
        <div class="sidecar-box">
          <div class="sidecar-box__title">{{ t({ zh: '核心架构思想：制造认知侧车', en: 'Core Concept: Manufacturing Cognitive Sidecar' }) }}</div>
          <div class="sidecar-points">
            <div v-for="p in sidecarPoints" :key="p.zh" class="sidecar-point">
              <span class="sidecar-point__icon">✓</span>
              <span>{{ t(p) }}</span>
            </div>
          </div>
          <div class="sidecar-formula">
            <span class="sf-left">ERP / MES / QMS</span>
            <span class="sf-eq">{{ t({ zh: '交易 & 流程核心', en: 'Transaction & Process Core' }) }}</span>
            <span class="sf-plus">+</span>
            <span class="sf-right" style="color:var(--color-amber)">{{ t({ zh: 'AI 认知侧车', en: 'AI Cognitive Sidecar' }) }}</span>
            <span class="sf-eq">{{ t({ zh: '理解 · 推理 · 协同', en: 'Understand · Reason · Collaborate' }) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 4-PHASE METHODOLOGY ═══ -->
    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:16px">
          <span class="section-label">{{ t({ zh: '精益 AI 四阶方法论', en: 'Lean AI Four-Phase Methodology' }) }}</span>
          <h2 class="section-title">{{ t({ zh: 'AI 转型价值公式', en: 'AI Transformation Value Formula' }) }}</h2>
        </div>
        <div class="formula-bar">
          <span class="formula-term">{{ t({ zh: '认知共识', en: 'Cognitive Consensus' }) }}</span>
          <span class="formula-op">×</span>
          <span class="formula-term">{{ t({ zh: '场景质量', en: 'Scenario Quality' }) }}</span>
          <span class="formula-op">×</span>
          <span class="formula-term">{{ t({ zh: '智能体闭环', en: 'Agent Closure' }) }}</span>
          <span class="formula-op">×</span>
          <span class="formula-term">{{ t({ zh: 'AI 运营能力', en: 'AI Ops Capability' }) }}</span>
          <span class="formula-op">=</span>
          <span class="formula-result">{{ t({ zh: 'AI 转型价值', en: 'AI Transformation Value' }) }}</span>
        </div>
        <div class="phases-grid">
          <div v-for="(phase, i) in phases" :key="phase.name.zh" class="phase-card">
            <div class="phase-card__num">0{{ i + 1 }}</div>
            <div class="phase-card__icon">{{ phase.icon }}</div>
            <h3 class="phase-card__name">{{ t(phase.name) }}</h3>
            <div class="phase-card__question">{{ t(phase.question) }}</div>
            <div class="phase-card__output-label">{{ t({ zh: '关键产出', en: 'Key Outputs' }) }}</div>
            <div class="phase-card__outputs">
              <span v-for="o in phase.outputs" :key="o.zh" class="phase-output">{{ t(o) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SCENARIO PRIORITY ═══ -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:48px">
          <span class="section-label">{{ t({ zh: '场景探索原则', en: 'Scenario Discovery Principles' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '问对问题，才能找到 P0 场景', en: 'Ask the Right Questions to Find P0 Scenarios' }) }}</h2>
        </div>
        <div class="priority-grid">
          <div class="priority-ask">
            <div class="priority-ask__title">{{ t({ zh: '不要问', en: "Don't Ask" }) }}</div>
            <div v-for="q in wrongQuestions" :key="q.zh" class="priority-wrong">
              <span>✗</span> {{ t(q) }}
            </div>
          </div>
          <div class="priority-divider">{{ t({ zh: '而要问', en: 'Instead Ask' }) }}</div>
          <div class="priority-ask">
            <div class="priority-ask__title" style="color:var(--color-indigo)">{{ t({ zh: '应该问', en: 'Ask Instead' }) }}</div>
            <div v-for="q in rightQuestions" :key="q.zh" class="priority-right">
              <span style="color:var(--color-amber)">✓</span> {{ t(q) }}
            </div>
          </div>
        </div>
        <div class="scenario-levels">
          <div v-for="level in scenarioLevels" :key="level.grade" class="scenario-level" :class="`scenario-level--${level.grade.toLowerCase()}`">
            <div class="scenario-level__grade">{{ level.grade }}</div>
            <div class="scenario-level__def">{{ t(level.def) }}</div>
            <div class="scenario-level__action">{{ t(level.action) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 8 AGENTS ═══ -->
    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '制造智能体体系', en: 'Manufacturing Agent System' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '8 大核心制造智能体', en: '8 Core Manufacturing Agents' }) }}</h2>
          <p class="section-subtitle" style="margin:0 auto">
            {{ t({ zh: '围绕特定制造业务角色，能够理解业务上下文、调用企业系统、基于权限执行动作、接受人工监督并持续学习的 AI 工作单元。', en: 'AI work units built around specific manufacturing roles — understanding business context, calling enterprise systems, executing within permissions, accepting human oversight, and continuously learning.' }) }}
          </p>
        </div>
        <div class="agents-grid">
          <div v-for="agent in agents" :key="agent.name.zh" class="agent-card">
            <div class="agent-card__icon">{{ agent.icon }}</div>
            <h3 class="agent-card__name">{{ t(agent.name) }}</h3>
            <div class="agent-card__caps">
              <div v-for="cap in agent.caps" :key="cap.zh" class="agent-cap">
                <span class="agent-cap__dot"></span>
                {{ t(cap) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Action Risk Levels -->
        <div class="risk-table">
          <div class="risk-table__title">{{ t({ zh: '智能体动作风险分级', en: 'Agent Action Risk Classification' }) }}</div>
          <div class="risk-levels">
            <div v-for="r in riskLevels" :key="r.level.zh" class="risk-level" :class="`risk-level--${r.color}`">
              <div class="risk-level__badge">{{ t(r.level) }}</div>
              <div class="risk-level__example">{{ t(r.example) }}</div>
              <div class="risk-level__control">{{ t(r.control) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ AI OPS ═══ -->
    <section class="section section--dark">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: 'AI 运营体系', en: 'AI Operations System' }) }}</span>
          <h2 class="section-title" style="color:#fff">{{ t({ zh: 'AI 上线不是终点\nAI 运营才是价值来源', en: 'Going Live Is Not the End\nAI Operations Is the Value Source' }) }}</h2>
        </div>
        <div class="ops-grid">
          <div v-for="obj in opsObjects" :key="obj.name.zh" class="ops-card">
            <div class="ops-card__icon">{{ obj.icon }}</div>
            <h4 class="ops-card__name">{{ t(obj.name) }}</h4>
            <div class="ops-card__metrics">
              <span v-for="m in obj.metrics" :key="m.zh" class="ops-metric">{{ t(m) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CASE STUDIES ═══ -->
    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '同行业案例启发', en: 'Industry Case Inspirations' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '全球领军企业实践', en: 'Global Industry Leader Practices' }) }}</h2>
        </div>
        <div class="cases-grid">
          <div v-for="c in cases" :key="c.company" class="case-card">
            <div class="case-card__company">{{ c.company }}</div>
            <div class="case-card__sector">{{ t(c.sector) }}</div>
            <blockquote class="case-card__insight">{{ t(c.insight) }}</blockquote>
            <div class="case-card__applications">
              <div class="case-card__apps-label">{{ t({ zh: '适合借鉴', en: 'Applicable Patterns' }) }}</div>
              <span v-for="app in c.applications" :key="app.zh" class="case-app">{{ t(app) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 90-DAY ROADMAP ═══ -->
    <section class="section section--alt">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '90 天 MVP 路线图', en: '90-Day MVP Roadmap' }) }}</span>
          <h2 class="section-title">{{ t({ zh: '三大 P0 场景，90 天完成闭环', en: '3 P0 Scenarios, Closed Loop in 90 Days' }) }}</h2>
        </div>

        <div class="p0-grid">
          <div v-for="p0 in p0scenarios" :key="p0.id" class="p0-card">
            <div class="p0-card__id">{{ p0.id }}</div>
            <h3 class="p0-card__name">{{ t(p0.name) }}</h3>
            <p class="p0-card__fit">{{ t(p0.fit) }}</p>
            <div class="p0-card__goal-label">{{ t({ zh: '目标', en: 'Goal' }) }}</div>
            <p class="p0-card__goal">{{ t(p0.goal) }}</p>
          </div>
        </div>

        <div class="timeline">
          <div v-for="phase in roadmapPhases" :key="phase.weeks.zh" class="timeline-phase">
            <div class="timeline-phase__weeks">{{ t(phase.weeks) }}</div>
            <div class="timeline-phase__title">{{ t(phase.title) }}</div>
            <div class="timeline-phase__tasks">
              <div v-for="task in phase.tasks" :key="task.zh" class="timeline-task">
                <span class="timeline-task__dot"></span>
                {{ t(task) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ AI MOAT ═══ -->
    <section class="section section--dark moat-section">
      <div class="container">
        <div class="moat-inner">
          <div class="moat-left">
            <span class="section-label" style="color:var(--color-amber)">{{ t({ zh: '高科技制造的 AI 护城河', en: 'AI Moat for High-Tech Manufacturing' }) }}</span>
            <h2 class="section-title" style="color:#fff">{{ t({ zh: 'AI 时代\n制造业的真正护城河', en: 'The True Moat of Manufacturing\nin the AI Era' }) }}</h2>
            <blockquote class="moat-quote">
              {{ t({
                zh: 'AI 时代，高科技制造业的胜负，不再只取决于谁拥有更强的设备和产能，而取决于谁能把数据、知识、专家和流程组织成持续学习的制造智能系统。',
                en: 'In the AI era, the winners in high-tech manufacturing are no longer determined solely by who has the strongest equipment and capacity — but by who can organize data, knowledge, expertise, and processes into a continuously learning intelligent manufacturing system.'
              }) }}
            </blockquote>
          </div>
          <div class="moat-assets">
            <div class="moat-assets__title">{{ t({ zh: '最终形成的六大资产', en: '6 Strategic Assets You Will Build' }) }}</div>
            <div class="moat-asset-list">
              <div v-for="asset in moatAssets" :key="asset.icon" class="moat-asset">
                <span class="moat-asset__icon">{{ asset.icon }}</span>
                <span class="moat-asset__name">{{ t(asset.name) }}</span>
              </div>
            </div>
            <RouterLink to="/contact" class="btn btn-primary" style="margin-top:32px;width:100%;justify-content:center;font-size:16px;padding:16px 0">
              {{ t({ zh: '开始您的 AI 转型之旅 →', en: 'Start Your AI Transformation →' }) }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const heroMetrics = [
  { val: '23%', label: { zh: '全球企业已规模化部署 Agentic AI（McKinsey 2025）', en: 'Global enterprises have scaled Agentic AI (McKinsey 2025)' } },
  { val: '39%', label: { zh: '正在实验 AI Agent，竞争窗口正在关闭', en: 'Currently piloting AI Agents — the window is closing' } },
  { val: '90天', label: { zh: '精益 AI MVP 标准交付周期', en: 'Standard Lean AI MVP delivery cycle' } },
  { val: '8类', label: { zh: '核心制造智能体，覆盖主要价值流', en: 'Core manufacturing agents covering key value streams' } },
]

const oldSystems = ['ERP', 'MES', 'PLM', 'QMS', 'WMS', 'EAM', 'APS', 'SCADA', 'BI']

const cognitiveQuestions = [
  { zh: '为什么这批产品良率下降？', en: 'Why did yield drop for this batch?' },
  { zh: '为什么这个缺陷反复发生？', en: 'Why does this defect keep recurring?' },
  { zh: '为什么新产品试产迟迟爬不上去？', en: 'Why is the new product NPI ramp so slow?' },
  { zh: '为什么设备报警频繁但根因不清？', en: 'Why do equipment alarms keep firing with no clear root cause?' },
  { zh: '为什么老专家不在，问题就没人会处理？', en: 'Why does everything stall when the senior expert is away?' },
  { zh: '为什么一个工厂的最佳实践复制不到另一个工厂？', en: 'Why can\'t best practices from one plant transfer to another?' },
]

const archLayers = [
  {
    name: { zh: 'AI 运营层', en: 'AI Operations Layer' },
    badge: { zh: '持续运营', en: 'Continuous Ops' },
    color: 'amber',
    items: [
      { zh: '场景运营', en: 'Scenario Ops' },
      { zh: 'Agent运营', en: 'Agent Ops' },
      { zh: '知识运营', en: 'Knowledge Ops' },
      { zh: '数据运营', en: 'Data Ops' },
      { zh: '模型运营', en: 'Model Ops' },
      { zh: '价值运营', en: 'Value Ops' },
    ],
  },
  {
    name: { zh: '受控执行层', en: 'Controlled Execution Layer' },
    badge: { zh: '安全合规', en: 'Secure & Compliant' },
    color: 'red',
    items: [
      { zh: '身份/权限', en: 'Identity/Permissions' },
      { zh: '工具调用', en: 'Tool Calling' },
      { zh: '审批', en: 'Approval' },
      { zh: '日志', en: 'Logs' },
      { zh: '审计', en: 'Audit' },
      { zh: '人工确认', en: 'Human Confirm' },
      { zh: '回滚', en: 'Rollback' },
    ],
  },
  {
    name: { zh: '智能体层', en: 'Agent Layer' },
    badge: { zh: '自主执行', en: 'Autonomous Execution' },
    color: 'purple',
    items: [
      { zh: '工程知识Agent', en: 'Eng Knowledge Agent' },
      { zh: '质量异常Agent', en: 'Quality Anomaly Agent' },
      { zh: 'NPI Agent', en: 'NPI Agent' },
      { zh: '测试良率Agent', en: 'Test Yield Agent' },
      { zh: '设备维修Agent', en: 'Equipment Agent' },
      { zh: 'BOM风险Agent', en: 'BOM Risk Agent' },
    ],
  },
  {
    name: { zh: 'AI 能力层', en: 'AI Capability Layer' },
    badge: { zh: '核心 AI', en: 'Core AI' },
    color: 'blue',
    items: [
      { zh: '大模型/LLM', en: 'LLM' },
      { zh: 'RAG', en: 'RAG' },
      { zh: '知识图谱', en: 'Knowledge Graph' },
      { zh: '视觉模型', en: 'Vision Model' },
      { zh: '时序异常检测', en: 'Time-Series Anomaly' },
      { zh: '优化算法', en: 'Optimization' },
    ],
  },
  {
    name: { zh: '制造语义层', en: 'Manufacturing Semantics Layer' },
    badge: { zh: '语义理解', en: 'Semantic Understanding' },
    color: 'teal',
    items: [
      { zh: '产品', en: 'Product' },
      { zh: 'BOM', en: 'BOM' },
      { zh: '工艺', en: 'Process' },
      { zh: '设备', en: 'Equipment' },
      { zh: '批次', en: 'Batch' },
      { zh: '缺陷', en: 'Defect' },
      { zh: '测试', en: 'Test' },
      { zh: '客户', en: 'Customer' },
      { zh: '供应商', en: 'Supplier' },
      { zh: '认证', en: 'Certification' },
    ],
  },
  {
    name: { zh: '数据与知识层', en: 'Data & Knowledge Layer' },
    badge: { zh: '知识资产', en: 'Knowledge Assets' },
    color: 'green',
    items: [
      { zh: '主数据', en: 'Master Data' },
      { zh: '指标体系', en: 'Metrics' },
      { zh: '文档知识', en: 'Doc Knowledge' },
      { zh: '图像样本', en: 'Image Samples' },
      { zh: '测试日志', en: 'Test Logs' },
      { zh: '工艺参数', en: 'Process Params' },
      { zh: '质量案例', en: 'Quality Cases' },
    ],
  },
  {
    name: { zh: '业务系统层', en: 'Business Systems Layer' },
    badge: { zh: '数字化底座', en: 'Digital Foundation' },
    color: 'gray',
    items: [
      { zh: 'ERP', en: 'ERP' },
      { zh: 'MES', en: 'MES' },
      { zh: 'PLM', en: 'PLM' },
      { zh: 'QMS', en: 'QMS' },
      { zh: 'EAM', en: 'EAM' },
      { zh: 'WMS', en: 'WMS' },
      { zh: 'APS', en: 'APS' },
      { zh: 'SRM', en: 'SRM' },
      { zh: 'SCADA', en: 'SCADA' },
      { zh: 'AOI', en: 'AOI' },
      { zh: 'ATE', en: 'ATE' },
    ],
  },
]

const sidecarPoints = [
  { zh: '不替代系统，而是理解系统', en: 'Does not replace systems — understands them' },
  { zh: '不绕过流程，而是增强流程', en: 'Does not bypass processes — enhances them' },
  { zh: '不直接自动决策，而是受控辅助判断', en: 'Does not auto-decide — provides controlled assisted judgment' },
  { zh: '不打破权限，而是在权限内调用工具', en: 'Does not break permissions — calls tools within permissions' },
  { zh: '不制造黑箱，而是保留证据链和审计链', en: 'Does not create black boxes — preserves evidence and audit chains' },
]

const phases = [
  {
    icon: '🧠',
    name: { zh: '达成认知共识', en: 'Achieve Cognitive Consensus' },
    question: { zh: 'AI 到底改变制造业什么？', en: 'What exactly does AI change in manufacturing?' },
    outputs: [
      { zh: 'AI 共识卡', en: 'AI Consensus Cards' },
      { zh: '转型原则', en: 'Transformation Principles' },
      { zh: '管理层共识', en: 'Leadership Alignment' },
    ],
  },
  {
    icon: '🗺️',
    name: { zh: 'AI 场景探索', en: 'AI Scenario Discovery' },
    question: { zh: '我们到底先做什么 AI？', en: 'Which AI use case should we start with?' },
    outputs: [
      { zh: '场景地图', en: 'Scenario Map' },
      { zh: '优先级矩阵', en: 'Priority Matrix' },
      { zh: 'P0 场景', en: 'P0 Scenarios' },
    ],
  },
  {
    icon: '🤖',
    name: { zh: '智能体开发', en: 'Agent Development' },
    question: { zh: '如何把场景变成可运行的 Agent？', en: 'How to turn scenarios into running Agents?' },
    outputs: [
      { zh: 'Agent PRD', en: 'Agent PRD' },
      { zh: '数据知识底座', en: 'Data & Knowledge Foundation' },
      { zh: '流程闭环', en: 'Process Closure' },
    ],
  },
  {
    icon: '📊',
    name: { zh: 'AI 运营', en: 'AI Operations' },
    question: { zh: '如何从 Demo 走向持续价值？', en: 'How to move from Demo to sustained value?' },
    outputs: [
      { zh: 'AI 运营体系', en: 'AI Ops System' },
      { zh: '价值看板', en: 'Value Dashboard' },
      { zh: '复制机制', en: 'Scale-Up Mechanism' },
    ],
  },
]

const wrongQuestions = [
  { zh: '要不要上大模型？', en: 'Should we adopt a large language model?' },
  { zh: '要不要建知识库？', en: 'Should we build a knowledge base?' },
  { zh: '要不要做 AI 平台？', en: 'Should we build an AI platform?' },
  { zh: '要不要买一体机？', en: 'Should we buy an all-in-one AI device?' },
]

const rightQuestions = [
  { zh: '哪条价值流损失最大？', en: 'Which value stream has the highest losses?' },
  { zh: '哪个判断最依赖专家？', en: 'Which decisions depend most on expert knowledge?' },
  { zh: '哪类知识最难复用？', en: 'Which knowledge is hardest to reuse?' },
  { zh: '哪个场景可以 90 天做 MVP？', en: 'Which scenario can produce an MVP in 90 days?' },
]

const scenarioLevels = [
  { grade: 'P0', def: { zh: '高价值、高可行、低到中风险、可快速验证', en: 'High value, high feasibility, low-to-medium risk, quickly verifiable' }, action: { zh: '立即做 90 天 MVP', en: 'Start 90-Day MVP Now' } },
  { grade: 'P1', def: { zh: '高价值，但数据或流程需要准备', en: 'High value, but data or processes need preparation' }, action: { zh: '做 3-6 个月路线图', en: '3-6 Month Roadmap' } },
  { grade: 'P2', def: { zh: '中等价值、易实现', en: 'Medium value, easy to implement' }, action: { zh: '作为快赢场景', en: 'Quick Win Scenario' } },
  { grade: 'P3', def: { zh: '高风险、高复杂、跨系统重', en: 'High risk, high complexity, heavy cross-system dependencies' }, action: { zh: '纳入长期规划', en: 'Long-Term Planning' } },
]

const agents = [
  {
    icon: '📚',
    name: { zh: '工程知识 Agent', en: 'Engineering Knowledge Agent' },
    caps: [
      { zh: '查询 SOP、FMEA、8D、测试报告', en: 'Query SOP, FMEA, 8D, test reports' },
      { zh: '对比新旧标准', en: 'Compare old and new standards' },
      { zh: '支持客户审核准备', en: 'Support customer audit preparation' },
      { zh: '新人培训知识问答', en: 'Onboarding knowledge Q&A' },
    ],
  },
  {
    icon: '🔍',
    name: { zh: '质量异常分析 Agent', en: 'Quality Anomaly Analysis Agent' },
    caps: [
      { zh: '聚合 MES/QMS/SPC/AOI/测试数据', en: 'Aggregate MES/QMS/SPC/AOI/test data' },
      { zh: '查找相似历史案例', en: 'Find similar historical cases' },
      { zh: '推理可能根因', en: 'Reason through possible root causes' },
      { zh: '生成 8D / CAPA 草稿', en: 'Generate 8D/CAPA drafts' },
    ],
  },
  {
    icon: '👁️',
    name: { zh: 'AOI 复判与模型迭代 Agent', en: 'AOI Re-inspection & Model Iteration Agent' },
    caps: [
      { zh: '接入 AOI 图片和判定结果', en: 'Integrate AOI images and judgment results' },
      { zh: '建立缺陷样本库', en: 'Build defect sample library' },
      { zh: '推荐模型更新样本', en: 'Recommend model update samples' },
      { zh: '管理模型版本', en: 'Manage model versions' },
    ],
  },
  {
    icon: '🚀',
    name: { zh: 'NPI 工程协同 Agent', en: 'NPI Engineering Coordination Agent' },
    caps: [
      { zh: '识别 BOM、工艺、测试、供应链风险', en: 'Identify BOM, process, test, supply chain risks' },
      { zh: '跟踪试产问题', en: 'Track pilot production issues' },
      { zh: '评估量产 readiness', en: 'Assess mass production readiness' },
      { zh: '沉淀 NPI 复盘经验', en: 'Capture NPI post-mortem insights' },
    ],
  },
  {
    icon: '📊',
    name: { zh: '测试与良率分析 Agent', en: 'Test & Yield Analysis Agent' },
    caps: [
      { zh: '解析测试日志', en: 'Parse test logs' },
      { zh: '关联批次、机台、固件、物料', en: 'Correlate batch, machine, firmware, materials' },
      { zh: '解释良率波动', en: 'Explain yield fluctuations' },
      { zh: '预测可靠性风险', en: 'Predict reliability risks' },
    ],
  },
  {
    icon: '⚙️',
    name: { zh: '设备维修 Agent', en: 'Equipment Maintenance Agent' },
    caps: [
      { zh: '解释设备报警', en: 'Interpret equipment alarms' },
      { zh: '匹配历史故障', en: 'Match historical failures' },
      { zh: '推荐排查步骤', en: 'Recommend troubleshooting steps' },
      { zh: '自动生成维修工单', en: 'Auto-generate maintenance work orders' },
    ],
  },
  {
    icon: '🔗',
    name: { zh: 'BOM 与供应链风险 Agent', en: 'BOM & Supply Chain Risk Agent' },
    caps: [
      { zh: '监控缺料和涨价风险', en: 'Monitor shortage and price escalation risks' },
      { zh: '推荐替代料', en: 'Recommend alternative components' },
      { zh: '提醒认证风险', en: 'Alert on qualification risks' },
      { zh: '分析订单和客户影响', en: 'Analyze order and customer impact' },
    ],
  },
  {
    icon: '🤝',
    name: { zh: '客户审核与质量响应 Agent', en: 'Customer Audit & Quality Response Agent' },
    caps: [
      { zh: '自动调取质量记录', en: 'Auto-retrieve quality records' },
      { zh: '生成审核证据包', en: 'Generate audit evidence packages' },
      { zh: '辅助 8D / CAPA 回复', en: 'Assist with 8D/CAPA responses' },
      { zh: '沉淀客户审核经验', en: 'Capture customer audit experience' },
    ],
  },
]

const riskLevels = [
  { color: 'green', level: { zh: '低风险', en: 'Low Risk' }, example: { zh: '查询资料、生成摘要、生成日报', en: 'Query info, generate summaries, daily reports' }, control: { zh: '可自动执行', en: 'Auto-execute allowed' } },
  { color: 'yellow', level: { zh: '中风险', en: 'Medium Risk' }, example: { zh: '创建工单、生成 8D 草稿', en: 'Create tickets, generate 8D drafts' }, control: { zh: '人工确认', en: 'Human confirmation required' } },
  { color: 'orange', level: { zh: '高风险', en: 'High Risk' }, example: { zh: '修改工艺参数、释放批次', en: 'Modify process parameters, release batches' }, control: { zh: '必须审批', en: 'Mandatory approval' } },
  { color: 'red', level: { zh: '禁止动作', en: 'Prohibited' }, example: { zh: '绕过质量流程、自动放行不合格品', en: 'Bypass quality process, auto-release defective items' }, control: { zh: '系统禁止', en: 'System prohibited' } },
]

const opsObjects = [
  {
    icon: '🎯',
    name: { zh: '场景运营', en: 'Scenario Operations' },
    metrics: [
      { zh: '上线场景数量', en: 'Live scenarios' },
      { zh: '使用频率', en: 'Usage frequency' },
      { zh: '业务价值', en: 'Business value' },
    ],
  },
  {
    icon: '🤖',
    name: { zh: 'Agent 运营', en: 'Agent Operations' },
    metrics: [
      { zh: '任务完成率', en: 'Task completion rate' },
      { zh: '人工采纳率', en: 'Human adoption rate' },
      { zh: '幻觉率', en: 'Hallucination rate' },
    ],
  },
  {
    icon: '📖',
    name: { zh: '知识运营', en: 'Knowledge Operations' },
    metrics: [
      { zh: '知识更新周期', en: 'Knowledge update cycle' },
      { zh: '专家反馈频率', en: 'Expert feedback frequency' },
      { zh: '过期知识清理', en: 'Expired knowledge cleanup' },
    ],
  },
  {
    icon: '🗄️',
    name: { zh: '数据运营', en: 'Data Operations' },
    metrics: [
      { zh: '数据质量评分', en: 'Data quality score' },
      { zh: '数据延迟', en: 'Data latency' },
      { zh: '数据血缘覆盖', en: 'Data lineage coverage' },
    ],
  },
  {
    icon: '🧪',
    name: { zh: '模型运营', en: 'Model Operations' },
    metrics: [
      { zh: '准确率 / 误判率', en: 'Accuracy / error rate' },
      { zh: '模型漂移监控', en: 'Model drift monitoring' },
      { zh: '更新周期', en: 'Update cycle' },
    ],
  },
  {
    icon: '💰',
    name: { zh: '价值运营', en: 'Value Operations' },
    metrics: [
      { zh: 'ROI 追踪', en: 'ROI tracking' },
      { zh: '良率 / 停机改善', en: 'Yield / downtime improvement' },
      { zh: '人效 / 交付提升', en: 'Productivity / delivery improvement' },
    ],
  },
]

const cases = [
  {
    company: 'TE Connectivity',
    sector: { zh: '连接器 / 传感器', en: 'Connectors / Sensors' },
    insight: { zh: '高科技制造 AI 转型的第一块地基，不是大模型，而是工程知识资产化。', en: 'The first foundation of AI transformation in high-tech manufacturing is not a large model — it\'s engineering knowledge asset creation.' },
    applications: [
      { zh: '工程知识 Agent', en: 'Engineering Knowledge Agent' },
      { zh: 'NPI Agent', en: 'NPI Agent' },
      { zh: '全球工厂最佳实践复用', en: 'Global plant best practice replication' },
    ],
  },
  {
    company: 'Siemens Amberg',
    sector: { zh: '高混合电子制造', en: 'High-Mix Electronics Manufacturing' },
    insight: { zh: '高混合、多品种电子制造的本质能力，是把产品、工艺、设备、质量和工程知识形成实时闭环。', en: 'The essential capability for high-mix, multi-product electronics manufacturing is forming a real-time closed loop across products, processes, equipment, quality, and engineering knowledge.' },
    applications: [
      { zh: 'NPI 风险 Agent', en: 'NPI Risk Agent' },
      { zh: '制造认知网络', en: 'Manufacturing Cognitive Network' },
      { zh: '质量与工艺闭环', en: 'Quality-process closed loop' },
    ],
  },
  {
    company: 'Schneider Electric',
    sector: { zh: '电气制造 / 工业自动化', en: 'Electrical Manufacturing / Industrial Automation' },
    insight: { zh: 'AI 转型不是只有新工厂能做，老工厂也可以通过小场景、小闭环、持续运营逐步升级。', en: 'AI transformation is not just for new factories — legacy plants can also upgrade progressively through small scenarios, small closed loops, and continuous operations.' },
    applications: [
      { zh: '设备维修 Agent', en: 'Equipment Maintenance Agent' },
      { zh: '工厂异常日报 Agent', en: 'Factory Anomaly Daily Report Agent' },
      { zh: '老工厂智能化路线', en: 'Legacy plant intelligence roadmap' },
    ],
  },
  {
    company: 'Jabil',
    sector: { zh: 'EMS 电子制造服务', en: 'EMS Electronics Manufacturing Services' },
    insight: { zh: 'AI 视觉只是入口，真正价值在于把检测、质量、工艺、设备、物料和客户反馈连接起来。', en: 'AI vision is just the entry point — the real value is connecting inspection, quality, process, equipment, materials, and customer feedback.' },
    applications: [
      { zh: 'AOI 复判 Agent', en: 'AOI Re-inspection Agent' },
      { zh: '质量异常分析 Agent', en: 'Quality Anomaly Analysis Agent' },
      { zh: 'AI 视觉模型运营', en: 'AI vision model operations' },
    ],
  },
  {
    company: 'Foxconn',
    sector: { zh: 'EMS / 多基地制造', en: 'EMS / Multi-site Manufacturing' },
    insight: { zh: '多基地制造企业的 AI 不应只服务单个工厂，而要服务整个制造网络。', en: 'AI for multi-site manufacturers should not just serve a single factory — it should serve the entire manufacturing network.' },
    applications: [
      { zh: '多基地制造协同 Agent', en: 'Multi-site Manufacturing Coordination Agent' },
      { zh: '供应链风险 Agent', en: 'Supply Chain Risk Agent' },
      { zh: '客户交付智能控制塔', en: 'Customer delivery intelligent control tower' },
    ],
  },
  {
    company: 'Micron',
    sector: { zh: '半导体 / 存储制造', en: 'Semiconductor / Memory Manufacturing' },
    insight: { zh: '半导体和存储企业的 AI 价值，在于实时异常识别、测试数据解释、良率影响预测和根因分析。', en: 'The AI value for semiconductor and memory companies lies in real-time anomaly detection, test data interpretation, yield impact prediction, and root cause analysis.' },
    applications: [
      { zh: '测试与良率分析 Agent', en: 'Test & Yield Analysis Agent' },
      { zh: '固件问题定位 Agent', en: 'Firmware Issue Localization Agent' },
      { zh: '工艺参数优化 Agent', en: 'Process Parameter Optimization Agent' },
    ],
  },
]

const p0scenarios = [
  {
    id: 'P0-1',
    name: { zh: '质量异常分析 Agent', en: 'Quality Anomaly Analysis Agent' },
    fit: { zh: '适合所有高科技制造企业', en: 'Suitable for all high-tech manufacturing enterprises' },
    goal: { zh: '缩短质量异常分析周期，提高 8D 质量，降低重复缺陷率', en: 'Shorten quality anomaly analysis cycle, improve 8D quality, reduce repeat defect rates' },
  },
  {
    id: 'P0-2',
    name: { zh: 'NPI 工程协同 Agent', en: 'NPI Engineering Coordination Agent' },
    fit: { zh: '适合 EMS、ODM/JDM、智能控制器、存储、元器件企业', en: 'For EMS, ODM/JDM, smart controllers, memory, and component manufacturers' },
    goal: { zh: '缩短新产品导入周期，降低试产反复，提升量产 readiness', en: 'Shorten NPI cycle, reduce pilot run iterations, improve mass production readiness' },
  },
  {
    id: 'P0-3',
    name: { zh: 'AOI 复判与模型迭代 Agent', en: 'AOI Re-inspection & Model Iteration Agent' },
    fit: { zh: '适合电子制造、元器件、精密制造企业', en: 'For electronics manufacturing, component, and precision manufacturing companies' },
    goal: { zh: '降低误判率，减少人工复判压力，建立缺陷样本库和模型运营机制', en: 'Reduce false-positive rates, lower manual re-inspection load, build defect library and model ops' },
  },
]

const roadmapPhases = [
  {
    weeks: { zh: '第 1-2 周', en: 'Weeks 1-2' },
    title: { zh: '认知共识与场景确认', en: 'Consensus & Scenario Confirmation' },
    tasks: [
      { zh: '明确业务目标与成功指标', en: 'Define business goals and success metrics' },
      { zh: '选择 P0 场景和业务 Owner', en: 'Select P0 scenario and business owner' },
    ],
  },
  {
    weeks: { zh: '第 3-4 周', en: 'Weeks 3-4' },
    title: { zh: '数据与知识盘点', en: 'Data & Knowledge Inventory' },
    tasks: [
      { zh: '梳理系统接口和权限边界', en: 'Map system interfaces and permission boundaries' },
      { zh: '盘点文档、历史案例和样本', en: 'Inventory documents, historical cases, and samples' },
    ],
  },
  {
    weeks: { zh: '第 5-8 周', en: 'Weeks 5-8' },
    title: { zh: 'Agent 原型开发', en: 'Agent Prototype Development' },
    tasks: [
      { zh: '构建 RAG / 数据查询 / 工具调用', en: 'Build RAG / data query / tool calling' },
      { zh: '完成专家验证，形成试运行版本', en: 'Complete expert validation, build pilot version' },
    ],
  },
  {
    weeks: { zh: '第 9-12 周', en: 'Weeks 9-12' },
    title: { zh: '业务闭环试运行', en: 'Business Closed-Loop Trial' },
    tasks: [
      { zh: '接入真实流程，记录使用数据', en: 'Connect to real processes, record usage data' },
      { zh: '评估业务指标，制定复制路线图', en: 'Evaluate business metrics, build scale-up roadmap' },
    ],
  },
]

const moatAssets = [
  { icon: '🎯', name: { zh: '场景资产', en: 'Scenario Assets' } },
  { icon: '📖', name: { zh: '知识资产', en: 'Knowledge Assets' } },
  { icon: '🗄️', name: { zh: '数据资产', en: 'Data Assets' } },
  { icon: '🤖', name: { zh: '智能体资产', en: 'Agent Assets' } },
  { icon: '⚙️', name: { zh: '运营资产', en: 'Operations Assets' } },
  { icon: '🏢', name: { zh: '组织能力', en: 'Organizational Capability' } },
]
</script>

<style scoped>
/* ── Hero ── */
.mfg-page { min-height: 100vh; }

.mfg-hero { padding-top: 120px; }
.mfg-hero__inner { display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: center; }
@media (max-width: 1023px) { .mfg-hero__inner { grid-template-columns: 1fr; } }

.mfg-hero__tag {
  display: inline-block;
  font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--color-amber); border: 1px solid rgba(212,135,10,0.4);
  padding: 6px 14px; border-radius: 20px; margin-bottom: 20px;
}
.mfg-hero__title { font-size: clamp(32px, 4vw, 56px); font-weight: 900; color: #fff; line-height: 1.15; margin-bottom: 20px; }
.mfg-hero__title .highlight { color: var(--color-amber); }
.mfg-hero__desc { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.85; max-width: 540px; }
.mfg-hero__btns { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 36px; }

.mfg-hero__metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.mfg-metric { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 24px; text-align: center; }
.mfg-metric__val { font-size: 28px; font-weight: 900; color: var(--color-amber); }
.mfg-metric__label { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 8px; line-height: 1.5; }

/* ── Shift Section ── */
.shift-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 32px;
  align-items: stretch;
}
@media (max-width: 860px) { .shift-grid { grid-template-columns: 1fr; } }

.shift-card {
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--color-border);
}
.shift-card--old { background: var(--color-surface); }
.shift-card--new { background: linear-gradient(135deg, rgba(26,46,74,0.05) 0%, rgba(212,135,10,0.05) 100%); border-color: rgba(212,135,10,0.2); }

.shift-card__header { margin-bottom: 24px; }
.shift-card__era { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; background: rgba(26,46,74,0.08); color: var(--color-text-muted); padding: 4px 10px; border-radius: 12px; }
.shift-card__header h3 { font-size: 20px; font-weight: 800; color: var(--color-indigo); margin-top: 10px; margin-bottom: 8px; }
.shift-card__header p { font-size: 14px; color: var(--color-text-secondary); }

.shift-card__systems { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.system-tag { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 6px; }
.system-tag--old { background: rgba(26,46,74,0.08); color: var(--color-text-muted); }

.shift-card__limit { background: rgba(255,0,0,0.04); border-left: 3px solid rgba(200,50,50,0.3); padding: 16px; border-radius: 0 8px 8px 0; }
.limit-label { font-size: 11px; font-weight: 700; color: rgba(200,50,50,0.7); text-transform: uppercase; margin-bottom: 6px; }

.shift-card__questions { display: flex; flex-direction: column; gap: 10px; }
.cog-question { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--color-text-secondary); }
.cog-q-icon { width: 20px; height: 20px; background: var(--color-amber); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }

.shift-arrow { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 0 16px; }
.shift-arrow__icon { font-size: 36px; color: var(--color-amber); }
.shift-arrow__label { font-size: 12px; font-weight: 700; color: var(--color-amber); letter-spacing: 0.1em; }

.core-insight {
  margin-top: 48px;
  background: var(--color-indigo);
  border-radius: var(--radius-lg);
  padding: 36px 48px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.core-insight__icon { font-size: 32px; flex-shrink: 0; }
.core-insight blockquote { font-size: 17px; color: rgba(255,255,255,0.9); line-height: 1.85; font-weight: 500; margin: 0; font-style: italic; }

/* ── Architecture ── */
.arch-stack { display: flex; flex-direction: column; gap: 8px; }
.arch-layer {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 18px 24px;
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: background 0.2s;
}
.arch-layer:hover { background: rgba(255,255,255,0.07); }

.arch-layer__num { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.3); text-align: center; }
.arch-layer__name { font-size: 15px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 8px; }
.arch-layer__items { display: flex; flex-wrap: wrap; gap: 6px; }
.arch-item { font-size: 12px; color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: 4px; }

.arch-layer__badge { font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; white-space: nowrap; }
.arch-layer__badge--amber { background: rgba(212,135,10,0.2); color: var(--color-amber); }
.arch-layer__badge--red { background: rgba(220,60,60,0.2); color: #f87171; }
.arch-layer__badge--purple { background: rgba(139,92,246,0.2); color: #a78bfa; }
.arch-layer__badge--blue { background: rgba(59,130,246,0.2); color: #60a5fa; }
.arch-layer__badge--teal { background: rgba(20,184,166,0.2); color: #2dd4bf; }
.arch-layer__badge--green { background: rgba(34,197,94,0.2); color: #4ade80; }
.arch-layer__badge--gray { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); }

.sidecar-box {
  margin-top: 40px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212,135,10,0.3);
  border-radius: var(--radius-lg);
  padding: 36px;
}
.sidecar-box__title { font-size: 17px; font-weight: 700; color: var(--color-amber); margin-bottom: 20px; }
.sidecar-points { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-bottom: 28px; }
.sidecar-point { display: flex; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.75); }
.sidecar-point__icon { color: var(--color-amber); font-weight: 700; flex-shrink: 0; }
.sidecar-formula { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; background: rgba(0,0,0,0.2); border-radius: var(--radius-md); padding: 20px; }
.sf-left, .sf-right { font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.9); }
.sf-eq { font-size: 13px; color: rgba(255,255,255,0.5); }
.sf-plus { font-size: 24px; color: var(--color-amber); font-weight: 700; }

/* ── 4-Phase ── */
.formula-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-indigo) 0%, #2a4a7f 100%);
  border-radius: var(--radius-md);
  padding: 24px 36px;
  margin-bottom: 48px;
}
.formula-term { font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 8px; }
.formula-op { font-size: 24px; color: var(--color-amber); font-weight: 900; }
.formula-result { font-size: 16px; font-weight: 800; color: var(--color-amber); background: rgba(212,135,10,0.2); padding: 8px 16px; border-radius: 8px; border: 1px solid rgba(212,135,10,0.4); }

.phases-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
@media (max-width: 860px) { .phases-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 540px) { .phases-grid { grid-template-columns: 1fr; } }

.phase-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 28px;
  border-top: 3px solid var(--color-amber);
  transition: transform 0.2s, box-shadow 0.2s;
}
.phase-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.phase-card__num { font-size: 36px; font-weight: 900; color: rgba(212,135,10,0.2); line-height: 1; margin-bottom: 4px; }
.phase-card__icon { font-size: 28px; margin-bottom: 12px; }
.phase-card__name { font-size: 17px; font-weight: 800; color: var(--color-indigo); margin-bottom: 10px; }
.phase-card__question { font-size: 13px; color: var(--color-text-muted); font-style: italic; padding: 10px; background: var(--color-surface-alt); border-radius: 6px; margin-bottom: 16px; }
.phase-card__output-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 8px; }
.phase-card__outputs { display: flex; flex-direction: column; gap: 6px; }
.phase-output { font-size: 13px; color: var(--color-text-secondary); display: flex; align-items: center; gap: 6px; }
.phase-output::before { content: '→'; color: var(--color-amber); font-weight: 700; }

/* ── Scenario Priority ── */
.priority-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 24px; align-items: start; margin-bottom: 40px; }
@media (max-width: 700px) { .priority-grid { grid-template-columns: 1fr; } }

.priority-ask__title { font-size: 14px; font-weight: 700; margin-bottom: 14px; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
.priority-wrong { font-size: 14px; color: var(--color-text-secondary); padding: 10px 14px; background: rgba(200,50,50,0.05); border-radius: 6px; margin-bottom: 8px; display: flex; gap: 8px; }
.priority-wrong span { color: #ef4444; font-weight: 700; }
.priority-right { font-size: 14px; color: var(--color-text-secondary); padding: 10px 14px; background: rgba(212,135,10,0.05); border-radius: 6px; margin-bottom: 8px; display: flex; gap: 8px; }
.priority-divider { display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: var(--color-amber); padding: 0 8px; }

.scenario-levels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 700px) { .scenario-levels { grid-template-columns: 1fr 1fr; } }
.scenario-level { padding: 20px; border-radius: var(--radius-md); text-align: center; }
.scenario-level--p0 { background: rgba(212,135,10,0.1); border: 1px solid rgba(212,135,10,0.3); }
.scenario-level--p1 { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); }
.scenario-level--p2 { background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2); }
.scenario-level--p3 { background: rgba(156,163,175,0.08); border: 1px solid rgba(156,163,175,0.2); }
.scenario-level__grade { font-size: 22px; font-weight: 900; color: var(--color-indigo); margin-bottom: 8px; }
.scenario-level--p0 .scenario-level__grade { color: var(--color-amber); }
.scenario-level__def { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 10px; }
.scenario-level__action { font-size: 13px; font-weight: 700; color: var(--color-indigo); }

/* ── 8 Agents ── */
.agents-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 48px; }
@media (max-width: 1023px) { .agents-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .agents-grid { grid-template-columns: 1fr; } }

.agent-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: all 0.2s;
}
.agent-card:hover { border-color: var(--color-amber); box-shadow: 0 4px 20px rgba(212,135,10,0.12); }
.agent-card__icon { font-size: 28px; margin-bottom: 12px; }
.agent-card__name { font-size: 15px; font-weight: 800; color: var(--color-indigo); margin-bottom: 14px; }
.agent-card__caps { display: flex; flex-direction: column; gap: 8px; }
.agent-cap { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.4; }
.agent-cap__dot { width: 6px; height: 6px; background: var(--color-amber); border-radius: 50%; margin-top: 5px; flex-shrink: 0; }

.risk-table { background: var(--color-surface-alt); border-radius: var(--radius-lg); padding: 32px; }
.risk-table__title { font-size: 17px; font-weight: 700; color: var(--color-indigo); margin-bottom: 20px; }
.risk-levels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 700px) { .risk-levels { grid-template-columns: 1fr 1fr; } }
.risk-level { padding: 20px; border-radius: var(--radius-md); text-align: center; }
.risk-level--green { background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.25); }
.risk-level--yellow { background: rgba(234,179,8,0.08); border: 1px solid rgba(234,179,8,0.25); }
.risk-level--orange { background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.25); }
.risk-level--red { background: rgba(220,38,38,0.08); border: 1px solid rgba(220,38,38,0.25); }
.risk-level__badge { font-size: 14px; font-weight: 800; margin-bottom: 8px; }
.risk-level--green .risk-level__badge { color: #16a34a; }
.risk-level--yellow .risk-level__badge { color: #ca8a04; }
.risk-level--orange .risk-level__badge { color: #ea580c; }
.risk-level--red .risk-level__badge { color: #dc2626; }
.risk-level__example { font-size: 13px; color: var(--color-text-secondary); line-height: 1.4; margin-bottom: 8px; }
.risk-level__control { font-size: 12px; font-weight: 700; color: var(--color-text-muted); }

/* ── AI Ops ── */
.ops-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 860px) { .ops-grid { grid-template-columns: 1fr 1fr; } }
.ops-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 24px; }
.ops-card__icon { font-size: 28px; margin-bottom: 12px; }
.ops-card__name { font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 14px; }
.ops-card__metrics { display: flex; flex-direction: column; gap: 6px; }
.ops-metric { font-size: 13px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px; }
.ops-metric::before { content: ''; width: 6px; height: 6px; background: var(--color-amber); border-radius: 50%; flex-shrink: 0; }

/* ── Cases ── */
.cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 860px) { .cases-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 540px) { .cases-grid { grid-template-columns: 1fr; } }
.case-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 28px; }
.case-card__company { font-size: 17px; font-weight: 800; color: var(--color-indigo); margin-bottom: 4px; }
.case-card__sector { font-size: 12px; color: var(--color-text-muted); margin-bottom: 16px; }
.case-card__insight { font-size: 14px; color: var(--color-text-secondary); line-height: 1.7; font-style: italic; border-left: 3px solid var(--color-amber); padding-left: 14px; margin: 0 0 16px; }
.case-card__apps-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 8px; }
.case-card__applications { }
.case-app { display: inline-block; font-size: 12px; background: rgba(26,46,74,0.06); color: var(--color-indigo); padding: 4px 10px; border-radius: 6px; margin-right: 6px; margin-bottom: 6px; font-weight: 500; }

/* ── 90-Day Roadmap ── */
.p0-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
@media (max-width: 700px) { .p0-grid { grid-template-columns: 1fr; } }
.p0-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 28px; border-top: 4px solid var(--color-amber); }
.p0-card__id { font-size: 28px; font-weight: 900; color: var(--color-amber); line-height: 1; margin-bottom: 12px; }
.p0-card__name { font-size: 17px; font-weight: 800; color: var(--color-indigo); margin-bottom: 10px; }
.p0-card__fit { font-size: 13px; color: var(--color-text-muted); margin-bottom: 16px; padding: 8px 12px; background: var(--color-surface-alt); border-radius: 6px; }
.p0-card__goal-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 8px; }
.p0-card__goal { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }

.timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
@media (max-width: 860px) { .timeline { grid-template-columns: 1fr 1fr; } }
.timeline::before { content: ''; position: absolute; top: 28px; left: 0; right: 0; height: 2px; background: var(--color-border); z-index: 0; }
.timeline-phase { padding: 0 12px; position: relative; }
.timeline-phase__weeks {
  font-size: 12px; font-weight: 700; color: #fff;
  background: var(--color-indigo); border-radius: 20px; padding: 6px 14px;
  display: inline-block; margin-bottom: 16px; position: relative; z-index: 1;
}
.timeline-phase__title { font-size: 15px; font-weight: 700; color: var(--color-indigo); margin-bottom: 12px; }
.timeline-phase__tasks { display: flex; flex-direction: column; gap: 8px; }
.timeline-task { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.4; }
.timeline-task__dot { width: 6px; height: 6px; background: var(--color-amber); border-radius: 50%; margin-top: 5px; flex-shrink: 0; }

/* ── Moat Section ── */
.moat-section { padding: 100px 0; }
.moat-inner { display: grid; grid-template-columns: 1fr 400px; gap: 80px; align-items: center; }
@media (max-width: 1023px) { .moat-inner { grid-template-columns: 1fr; } }
.moat-quote { font-size: 18px; color: rgba(255,255,255,0.75); line-height: 1.85; font-style: italic; border-left: 3px solid var(--color-amber); padding-left: 20px; margin: 24px 0 0; }
.moat-assets { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg); padding: 36px; }
.moat-assets__title { font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 20px; }
.moat-asset-list { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.moat-asset { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.05); border-radius: var(--radius-md); padding: 14px 16px; }
.moat-asset__icon { font-size: 22px; }
.moat-asset__name { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.85); }
</style>
