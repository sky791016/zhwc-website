<template>
  <div class="product-page">
    <section class="product-hero section--dark section">
      <div class="container">
        <div class="product-hero__inner">
          <div>
            <div class="product-hero__brand">ZH·AgentOS</div>
            <h1 class="product-hero__title">{{ t({ zh: '企业 AI 智能体平台', en: 'Enterprise AI Agent Platform' }) }}<br><span style="color:var(--color-amber)">Enterprise AI Agent Orchestration</span></h1>
            <p class="product-hero__desc">
              {{ t({ zh: '无代码 AI 智能体构建器，原生 MCP 集成 — 在数天内（而非数月）将您的 ERP、CRM 和业务系统连接到 AI。内置 LINE Thailand 集成，让企业业务流程从"人工执行"升级为"AI 智能体自动运行"。', en: 'No-code AI agent builder with MCP-native integrations — connect your ERP, CRM, and line systems to AI in days, not months. Built-in LINE Thailand integration upgrades enterprise workflows from "manual execution" to "AI agent automation".' }) }}
            </p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
              <RouterLink to="/contact" class="btn btn-primary">{{ t({ zh: '预约演示', en: 'Book Demo' }) }}</RouterLink>
              <RouterLink to="/contact" class="btn btn-secondary">{{ t({ zh: '免费试用', en: 'Free Trial' }) }}</RouterLink>
            </div>
          </div>
          <div class="product-hero__metrics">
            <div v-for="m in heroMetrics" :key="m.val" class="product-hero__metric">
              <div class="product-hero__metric-val">{{ m.val }}</div>
              <div class="product-hero__metric-label">{{ t(m.label) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom:52px">
          <span class="section-label">{{ t({ zh: '三大核心模块', en: 'Core Modules' }) }}</span>
          <h2 class="section-title">{{ t({ zh: 'ZH·AgentOS 三大核心模块', en: 'ZH·AgentOS Three Core Modules' }) }}</h2>
        </div>
        <div class="grid-3">
          <div v-for="mod in modules" :key="mod.name" class="card">
            <div style="font-size:36px;margin-bottom:12px">{{ mod.icon }}</div>
            <h3 style="font-size:18px;font-weight:700;color:var(--color-indigo);margin-bottom:6px">{{ mod.name }}</h3>
            <div style="font-size:13px;color:var(--color-text-muted);margin-bottom:14px">{{ t(mod.en) }}</div>
            <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.7">{{ t(mod.desc) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="grid-2" style="gap:80px;align-items:center">
          <div>
            <span class="section-label">LINE Thailand Integration</span>
            <h2 class="section-title">{{ t({ zh: '内置 LINE Thailand\n泰国商务沟通主渠道', en: 'Built-In LINE Thailand\nThailand\'s #1 Business Communication Channel' }) }}</h2>
            <div class="divider"></div>
            <p style="font-size:16px;color:var(--color-text-secondary);line-height:1.85">
              {{ t({ zh: '泰国 LINE 月活 5400 万人，是泰国商务沟通的绝对主渠道。ZH·AgentOS 内置 LINE Official Account 集成，企业 AI 助手直接部署在客户已有的 LINE 对话中，无需下载额外 APP。', en: 'LINE has 54 million monthly active users in Thailand — the undisputed #1 business communication channel. ZH·AgentOS has built-in LINE Official Account integration, deploying enterprise AI assistants directly into customers\' existing LINE conversations with no additional app required.' }) }}
            </p>
            <ul style="margin-top:20px;list-style:none;display:flex;flex-direction:column;gap:12px">
              <li v-for="f in lineFeatures" :key="f.zh" style="font-size:14px;color:var(--color-text-secondary);display:flex;gap:10px">
                <span style="color:#06c755;font-weight:700">✓</span> {{ t(f) }}
              </li>
            </ul>
          </div>
          <div style="background:var(--color-surface);border-radius:var(--radius-md);padding:40px;border:1px solid var(--color-border)">
            <div style="font-size:14px;font-weight:700;color:var(--color-indigo);margin-bottom:24px">{{ t({ zh: '定价方案', en: 'Pricing Plans' }) }}</div>
            <div v-for="tier in pricing" :key="tier.name" style="margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--color-border)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <span style="font-weight:700;color:var(--color-indigo)">{{ tier.name }}</span>
                <span style="font-weight:800;color:var(--color-amber)">{{ tier.price }}</span>
              </div>
              <div style="font-size:13px;color:var(--color-text-muted)">{{ t(tier.desc) }}</div>
            </div>
            <RouterLink to="/contact" class="btn btn-primary" style="width:100%;justify-content:center">{{ t({ zh: '获取定制报价', en: 'Get Custom Quote' }) }}</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <h2 class="section-title">{{ t({ zh: '开始您的 AI 智能体之旅', en: 'Start Your AI Agent Journey' }) }}</h2>
        <p class="section-subtitle" style="margin:0 auto 32px">{{ t({ zh: '5 个 Agent + LINE 集成，$500/月起', en: '5 Agents + LINE Integration, from $500/month' }) }}</p>
        <RouterLink to="/contact" class="btn btn-primary" style="font-size:16px;padding:16px 40px">{{ t({ zh: '立即咨询', en: 'Get Started →' }) }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const heroMetrics = [
  { val: '5 Days', label: { zh: '从需求到首个 Agent 上线', en: 'Requirement to First Agent Live' } },
  { val: '3-Lang', label: { zh: '泰/中/英 RAG 知识库', en: 'TH/ZH/EN RAG Knowledge Base' } },
  { val: 'MCP', label: { zh: '原生 Model Context Protocol', en: 'Native Model Context Protocol' } },
  { val: 'LINE', label: { zh: '泰国原生 IM 集成', en: 'Thailand Native IM Integration' } },
]

const modules = [
  {
    icon: '🎨',
    name: 'ZH·Agent Studio',
    en: { zh: 'MCP 拖拽式工作流编排', en: 'MCP Drag-and-Drop Workflow Orchestration' },
    desc: { zh: '基于 MCP（Model Context Protocol）标准，无需编程即可构建 AI 工作流，内置 LINE Thailand 集成（泰国主流 IM），连接 ERP/CRM/MES 系统。', en: 'Built on MCP (Model Context Protocol) standard — build AI workflows without coding. Includes built-in LINE Thailand integration and connects to ERP/CRM/MES systems.' },
  },
  {
    icon: '📚',
    name: 'ZH·KnowledgeRail',
    en: { zh: '三语 RAG 知识库', en: 'Trilingual RAG Knowledge Base' },
    desc: { zh: '泰语/中文/英语三语 RAG 引擎，支持泰国标准政府公文格式，私有化部署确保企业文档不外泄。', en: 'Trilingual Thai/Chinese/English RAG engine supporting Thai standard government document formats. Private deployment ensures enterprise documents never leave your environment.' },
  },
  {
    icon: '🔍',
    name: 'ZH·AgentOps',
    en: { zh: 'Agent 全链路审计', en: 'Full-Chain Agent Audit' },
    desc: { zh: 'Agent 运行全链路审计追踪，幻觉检测，低置信度自动转人工，满足 ETDA 人工监督合规要求。', en: 'Full-chain audit trail for agent operations, hallucination detection, automatic low-confidence handoff to humans — compliant with ETDA human oversight requirements.' },
  },
]

const lineFeatures = [
  { zh: '企业 AI 助手直接部署于 LINE Official Account', en: 'Enterprise AI assistant deployed directly in LINE Official Account' },
  { zh: '无需额外 APP，客户用熟悉的 LINE 操作', en: 'No additional app needed — customers use familiar LINE interface' },
  { zh: 'LINE Notify 推送事件通知与报警', en: 'LINE Notify push notifications for events and alerts' },
  { zh: '泰语语义理解，支持非正式泰语表达', en: 'Thai semantic understanding including informal Thai expressions' },
  { zh: 'LINE Pay 集成（可选），打通支付场景', en: 'LINE Pay integration (optional) for seamless payment workflows' },
]

const pricing = [
  { name: 'Entry SaaS', price: '$500/mo', desc: { zh: '5 个 Agent，LINE 集成，泰/中/英', en: '5 Agents, LINE integration, TH/ZH/EN' } },
  { name: 'Mid Private', price: '$8,000/mo', desc: { zh: '无限 Agent，私有部署，PDPA 合规', en: 'Unlimited agents, private deployment, PDPA compliant' } },
  { name: 'Enterprise', price: 'Custom', desc: { zh: '定制开发 + 驻场工程师支持', en: 'Custom development + on-site engineer support' } },
]
</script>

<style scoped>
.product-hero { padding-top: 120px; }
.product-hero__inner { display: grid; grid-template-columns: 1fr 340px; gap: 64px; align-items: center; }
@media (max-width: 1023px) { .product-hero__inner { grid-template-columns: 1fr; } }
.product-hero__brand { font-size: 13px; font-weight: 700; color: var(--color-amber); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; }
.product-hero__title { font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 16px; }
.product-hero__desc { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.8; }
.product-hero__metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.product-hero__metric { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 24px; text-align: center; }
.product-hero__metric-val { font-size: 28px; font-weight: 900; color: var(--color-amber); }
.product-hero__metric-label { font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 6px; }
</style>
