<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <!-- Brand -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="/logo.png" alt="志合创伟 ForgeFlow AI" class="footer__logo-img" />
          </div>
          <p class="footer__tagline">智能驱动，信任为本<br><em>AI-Powered. Enterprise-Trusted.</em></p>
          <p class="footer__desc">十一年安全根基，赋能亚洲企业迈向人工智能新时代</p>
          <div class="footer__social">
            <a href="https://line.me" target="_blank" class="footer__social-link footer__social-link--line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              LINE
            </a>
            <a href="mailto:contact@szzhcw.com" class="footer__social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>

        <!-- Solutions -->
        <div class="footer__col">
          <h4 class="footer__col-title">解决方案 / Solutions</h4>
          <ul class="footer__links">
            <li><RouterLink to="/solutions/factorymind">ZH·FactoryMind 制造业 AI</RouterLink></li>
            <li><RouterLink to="/solutions/agentos">ZH·AgentOS 企业智能体</RouterLink></li>
            <li><RouterLink to="/solutions/cloudcore">ZH·CloudCore 私有基础设施</RouterLink></li>
            <li><RouterLink to="/solutions/eduai">ZH·EduAI 教育 AI</RouterLink></li>
            <li><RouterLink to="/solutions/secureai">ZH·SecureAI 安全合规</RouterLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer__col">
          <h4 class="footer__col-title">公司 / Company</h4>
          <ul class="footer__links">
            <li><RouterLink to="/about">关于我们 / About</RouterLink></li>
            <li><RouterLink to="/about#journey">发展历程 / Journey</RouterLink></li>
            <li><RouterLink to="/qualifications">资质认证 / Qualifications</RouterLink></li>
            <li><RouterLink to="/thailand">泰国专区 / Thailand Hub</RouterLink></li>
            <li><RouterLink to="/cases">案例洞察 / Cases</RouterLink></li>
            <li><RouterLink to="/partners">生态合作 / Partners</RouterLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer__col">
          <h4 class="footer__col-title">联系 / Contact</h4>
          <div class="footer__contact">
            <div class="footer__contact-item">
              <strong>深圳总部 Shenzhen HQ</strong>
              <p>深圳市南山区留仙大道金骐智谷 1803</p>
              <p>+86 139 2378 0729</p>
            </div>
            <div class="footer__contact-item">
              <strong>泰国业务 Thailand</strong>
              <p>Bangkok, Thailand</p>
              <p class="footer__line-cta">扫码 LINE 咨询 ↗</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 深圳市志合创伟信息技术有限公司 ZHWC. All rights reserved.</p>
        <div class="footer__bottom-links">
          <a href="#">隐私政策 / Privacy</a>
          <a href="#">PDPA 合规声明</a>
          <a href="#">服务条款 / Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts" />

<style scoped>
.footer {
  background: var(--color-indigo-dark);
  color: rgba(255,255,255,0.7);
  padding: 72px 0 0;
}

.footer__top {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.2fr 1.5fr;
  gap: 48px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

@media (max-width: 1024px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .footer__top { grid-template-columns: 1fr; }
}

.footer__logo {
  margin-bottom: 12px;
}

.footer__logo-img {
  height: 48px;
  width: auto;
  border-radius: 8px;
  background: #fff;
  padding: 5px 12px;
  display: block;
}

.footer__tagline {
  font-size: 15px;
  color: rgba(255,255,255,0.9);
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.6;
}

.footer__tagline em { color: var(--color-amber); font-style: normal; }

.footer__desc {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
  margin-bottom: 20px;
}

.footer__social {
  display: flex;
  gap: 12px;
}

.footer__social-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
  transition: all 0.2s;
}

.footer__social-link:hover {
  background: rgba(255,255,255,0.12);
  color: #fff;
}

.footer__social-link--line {
  color: #06c755;
  border-color: rgba(6,199,85,0.25);
  background: rgba(6,199,85,0.08);
}

.footer__social-link--line:hover {
  background: rgba(6,199,85,0.15);
}

.footer__col-title {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__links a {
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  transition: color 0.2s;
  line-height: 1.5;
}

.footer__links a:hover {
  color: var(--color-amber);
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__contact-item strong {
  display: block;
  font-size: 13px;
  color: rgba(255,255,255,0.9);
  margin-bottom: 6px;
}

.footer__contact-item p {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
}

.footer__line-cta {
  color: #06c755 !important;
  font-weight: 600;
}

.footer__bottom {
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer__bottom p {
  font-size: 13px;
  color: rgba(255,255,255,0.35);
}

.footer__bottom-links {
  display: flex;
  gap: 20px;
}

.footer__bottom-links a {
  font-size: 13px;
  color: rgba(255,255,255,0.35);
  transition: color 0.2s;
}

.footer__bottom-links a:hover {
  color: rgba(255,255,255,0.7);
}
</style>
