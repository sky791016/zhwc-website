<template>
  <div class="contact-page">
    <section class="page-hero section--dark section">
      <div class="container">
        <span class="section-label">{{ t({ zh: '联系我们', en: 'Contact Us' }) }}</span>
        <h1 class="section-title" style="color:#fff;font-size:clamp(36px,5vw,56px)">
          {{ t({ zh: '无论您在哪里', en: 'Wherever You Are' }) }}<br>
          <span style="color:var(--color-amber)">{{ t({ zh: '对话从这里开始', en: 'The Conversation Starts Here' }) }}</span>
        </h1>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">
          {{ t({ zh: '无论您是泰国本地企业还是在泰中资机构，我们都有专属的沟通渠道', en: 'Whether you\'re a Thai enterprise or a Chinese company in Thailand — we have a dedicated channel for you.' }) }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-main">
            <h2 class="section-title" style="font-size:28px;margin-bottom:8px">
              {{ t({ zh: '预约 AI 战略咨询', en: 'Schedule a Consultation' }) }}
            </h2>
            <p style="color:var(--color-text-muted);margin-bottom:36px">
              {{ t({ zh: '我们将在 1 个工作日内与您联系，为您定制解决方案。', en: 'We\'ll respond within 1 business day with a tailored solution proposal.' }) }}
            </p>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-field">
                  <label>{{ t({ zh: '姓名', en: 'Name' }) }} *</label>
                  <input v-model="form.name" type="text" :placeholder="t({ zh: '您的姓名', en: 'Your full name' })" required />
                </div>
                <div class="form-field">
                  <label>{{ t({ zh: '公司', en: 'Company' }) }} *</label>
                  <input v-model="form.company" type="text" :placeholder="t({ zh: '公司名称', en: 'Company name' })" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>{{ t({ zh: '邮箱', en: 'Email' }) }} *</label>
                  <input v-model="form.email" type="email" placeholder="your@email.com" required />
                </div>
                <div class="form-field">
                  <label>{{ t({ zh: '电话', en: 'Phone' }) }}</label>
                  <input v-model="form.phone" type="tel" placeholder="+86 / +66" />
                </div>
              </div>
              <div class="form-field">
                <label>{{ t({ zh: '职位', en: 'Job Title' }) }}</label>
                <input v-model="form.title" type="text" :placeholder="t({ zh: 'CTO / IT 总监 / 副校长...', en: 'CTO / IT Director / VP...' })" />
              </div>
              <div class="form-field">
                <label>{{ t({ zh: '感兴趣的产品', en: 'Area of Interest' }) }}</label>
                <select v-model="form.interest">
                  <option value="">{{ t({ zh: '请选择', en: 'Please select' }) }}</option>
                  <option value="factorymind">🏭 ZH·FactoryMind — {{ t({ zh: '制造业 AI', en: 'Manufacturing AI' }) }}</option>
                  <option value="agentos">🤖 ZH·AgentOS — {{ t({ zh: '企业智能体', en: 'Enterprise AI Agents' }) }}</option>
                  <option value="cloudcore">🔐 ZH·CloudCore — {{ t({ zh: '私有化基础设施', en: 'Sovereign Infrastructure' }) }}</option>
                  <option value="eduai">🎓 ZH·EduAI — {{ t({ zh: '教育 AI', en: 'Education AI' }) }}</option>
                  <option value="secureai">🛡️ ZH·SecureAI — {{ t({ zh: '安全合规', en: 'Security & Compliance' }) }}</option>
                  <option value="thailand">🇹🇭 {{ t({ zh: '泰国市场整体方案', en: 'Thailand Market Strategy' }) }}</option>
                  <option value="partnership">🤝 {{ t({ zh: '生态合作', en: 'Partnership' }) }}</option>
                </select>
              </div>
              <div class="form-field">
                <label>{{ t({ zh: '业务需求描述', en: 'Business Challenge' }) }}</label>
                <textarea v-model="form.message" rows="5" :placeholder="t({ zh: '简述您的业务痛点与 AI 应用场景，我们的顾问将为您定制解决方案...', en: 'Briefly describe your business challenge and the AI use case you have in mind. Our consultants will tailor a solution for you...' })"></textarea>
              </div>
              <div class="form-field">
                <label>{{ t({ zh: '首选沟通方式', en: 'Preferred Contact Method' }) }}</label>
                <div class="radio-group">
                  <label v-for="m in contactMethods" :key="m.value" class="radio-item">
                    <input type="radio" v-model="form.method" :value="m.value" />
                    <span>{{ t(m.label) }}</span>
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px">
                {{ submitted
                  ? t({ zh: '✓ 提交成功！我们将尽快联系您', en: '✓ Submitted! We\'ll be in touch shortly.' })
                  : t({ zh: '发送咨询 →', en: 'Send Inquiry →' })
                }}
              </button>
            </form>
          </div>

          <div class="contact-sidebar">
            <div class="contact-card contact-card--line">
              <div class="contact-card__header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#06c755"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                <span>LINE Thailand</span>
              </div>
              <div class="contact-card__qr">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#06c755" stroke-width="1"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17" cy="17" r="3"/><path d="M7 7v0M17 7v0M7 17v0"/></svg>
              </div>
              <div class="contact-card__id">LINE ID: @zhwcthailand</div>
              <div class="contact-card__note">Thai · Chinese · English<br>{{ t({ zh: '工作日 9:00-18:00 (曼谷时间)', en: 'Mon–Fri 9:00–18:00 (Bangkok Time)' }) }}</div>
            </div>

            <div class="contact-card">
              <h4 class="contact-card__title">🏢 {{ t({ zh: '深圳总部', en: 'Shenzhen Headquarters' }) }}</h4>
              <div class="contact-info">
                <div class="contact-info__item">
                  <span class="contact-info__label">{{ t({ zh: '地址', en: 'Address' }) }}</span>
                  <span>{{ t({ zh: '深圳市南山区留仙大道金骐智谷 1803', en: '1803 Jinqi Zhigu, Liuxian Ave, Nanshan, Shenzhen' }) }}</span>
                </div>
                <div class="contact-info__item">
                  <span class="contact-info__label">{{ t({ zh: '电话', en: 'Phone' }) }}</span>
                  <span>+86 139 2378 0729</span>
                </div>
                <div class="contact-info__item">
                  <span class="contact-info__label">{{ t({ zh: '邮箱', en: 'Email' }) }}</span>
                  <span>contact@szzhcw.com</span>
                </div>
              </div>
            </div>

            <div class="contact-card contact-card--promise">
              <h4 class="contact-card__title">⚡ {{ t({ zh: '响应承诺', en: 'Response Commitment' }) }}</h4>
              <div class="promise-items">
                <div v-for="p in promises" :key="p.time.en" class="promise-item">
                  <div class="promise-item__time">{{ t(p.time) }}</div>
                  <div class="promise-item__desc">{{ t(p.desc) }}</div>
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
import { reactive, ref } from 'vue'
import { useLang } from '@/composables/useLang'

const { t } = useLang()
const submitted = ref(false)

const form = reactive({ name: '', company: '', email: '', phone: '', title: '', interest: '', message: '', method: 'email' })

const contactMethods = [
  { value: 'email', label: { zh: '📧 邮件', en: '📧 Email' } },
  { value: 'line', label: { zh: '💬 LINE', en: '💬 LINE' } },
  { value: 'wechat', label: { zh: '微信 WeChat', en: '微信 WeChat' } },
  { value: 'phone', label: { zh: '📞 电话', en: '📞 Phone' } },
]

const promises = [
  { time: { zh: '1 工作日', en: '1 Business Day' }, desc: { zh: '初步回复与顾问安排', en: 'Initial reply & consultant assignment' } },
  { time: { zh: '3 工作日', en: '3 Business Days' }, desc: { zh: '定制解决方案初稿', en: 'Custom solution draft' } },
  { time: { zh: '7 工作日', en: '7 Business Days' }, desc: { zh: '完整方案与报价交付', en: 'Full proposal & pricing delivered' } },
]

const submitForm = () => {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 5000)
}
</script>

<style scoped>
.page-hero { padding-top: 120px; }
.contact-grid { display: grid; grid-template-columns: 1fr 360px; gap: 64px; align-items: start; }
@media (max-width: 1023px) { .contact-grid { grid-template-columns: 1fr; } }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
.form-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
.form-field label { font-size: 13px; font-weight: 600; color: var(--color-indigo); letter-spacing: 0.03em; }
.form-field input, .form-field select, .form-field textarea { padding: 13px 16px; border: 1.5px solid var(--color-border); border-radius: var(--radius-sm); font-size: 14px; font-family: var(--font-sans); color: var(--color-text-primary); background: var(--color-surface); transition: border-color 0.2s; outline: none; }
.form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--color-amber); }
.radio-group { display: flex; gap: 16px; flex-wrap: wrap; }
.radio-item { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--color-text-secondary); cursor: pointer; }
.contact-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 28px; margin-bottom: 20px; }
.contact-card--line { border-color: rgba(6,199,85,0.3); background: rgba(6,199,85,0.03); text-align: center; }
.contact-card--promise { background: var(--color-indigo); border-color: transparent; }
.contact-card--promise .contact-card__title { color: #fff; }
.contact-card__header { display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 16px; font-weight: 700; color: #06c755; margin-bottom: 20px; }
.contact-card__qr { width: 88px; height: 88px; background: rgba(6,199,85,0.08); border: 2px dashed rgba(6,199,85,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
.contact-card__id { font-size: 14px; font-weight: 700; color: var(--color-indigo); margin-bottom: 8px; }
.contact-card__note { font-size: 13px; color: var(--color-text-muted); line-height: 1.7; }
.contact-card__title { font-size: 16px; font-weight: 700; color: var(--color-indigo); margin-bottom: 16px; }
.contact-info { display: flex; flex-direction: column; gap: 12px; }
.contact-info__item { display: grid; grid-template-columns: 52px 1fr; gap: 8px; font-size: 14px; color: var(--color-text-secondary); }
.contact-info__label { font-weight: 700; color: var(--color-text-muted); font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; padding-top: 2px; }
.promise-items { display: flex; flex-direction: column; gap: 14px; }
.promise-item { display: flex; align-items: center; gap: 16px; }
.promise-item__time { font-size: 14px; font-weight: 800; color: var(--color-amber); min-width: 90px; }
.promise-item__desc { font-size: 14px; color: rgba(255,255,255,0.7); }
</style>
