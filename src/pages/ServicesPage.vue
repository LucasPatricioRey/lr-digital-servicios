<script setup>
import { computed, onMounted } from "vue";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  TrendingUp
} from "@lucide/vue";
import { businessConfig } from "../config/business";
import {
  businessBenefits,
  faqs,
  industries,
  maintenancePlans,
  processSteps,
  projectProofs,
  services
} from "../data/commercial";
import CTASection from "../components/commercial/CTASection.vue";
import FAQItem from "../components/commercial/FAQItem.vue";
import PricingCard from "../components/commercial/PricingCard.vue";
import ProcessStep from "../components/commercial/ProcessStep.vue";
import ProjectProofCard from "../components/commercial/ProjectProofCard.vue";
import ServiceCard from "../components/commercial/ServiceCard.vue";
import WhatsAppButton from "../components/commercial/WhatsAppButton.vue";

const hasEmail = computed(
  () => businessConfig.email && businessConfig.email !== "AGREGAR_EMAIL"
);

const featuredServices = computed(() => services.slice(0, 3));

const setMeta = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("content", content);
  }
};

onMounted(() => {
  document.title = "Lucas Rey | Webs y Catalogos Digitales para Negocios";
  const description =
    "Diseno y desarrollo paginas web, catalogos digitales, menus, tiendas online simples y sistemas para negocios que quieren verse profesionales y recibir mas consultas.";

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', document.title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', businessConfig.siteUrl);
  setMeta('meta[property="og:image"]', businessConfig.ogImage);
});
</script>

<template>
  <div class="commercial-page">
    <header class="commercial-nav" aria-label="Navegacion principal">
      <a class="commercial-logo" href="/" aria-label="Ir al inicio">
        <img src="/logo-lr-digital-crop.png" alt="LR Digital" />
      </a>

      <nav>
        <a href="#servicios">Servicios</a>
        <a href="#ejemplos">Ejemplos</a>
        <a href="#proceso">Proceso</a>
        <a href="#precios">Precios</a>
        <a href="#faq">Preguntas</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero-section">
        <video
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          poster="/lr-digital-showcase-space.png"
          aria-hidden="true"
        >
          <source src="/lr-digital-hero.mp4" type="video/mp4" />
        </video>
        <div class="hero-overlay" aria-hidden="true"></div>

        <div class="hero-content">
          <p class="section-kicker">
            <Sparkles :size="15" :stroke-width="2.5" aria-hidden="true" />
            Servicios digitales para negocios
          </p>

          <h1>Webs y catalogos profesionales para recibir mas consultas</h1>

          <p class="hero-lead">
            Diseno paginas web, menus, catalogos y sistemas simples para que tus clientes
            entiendan que ofreces y te escriban por WhatsApp.
          </p>

          <div class="hero-actions">
            <WhatsAppButton label="Pedir propuesta" />
            <a href="#servicios" class="action action--secondary">
              <span>Ver servicios</span>
              <ArrowRight :size="18" :stroke-width="2.6" aria-hidden="true" />
            </a>
          </div>

          <div class="trust-strip" aria-label="Beneficios principales">
            <span>
              <ShieldCheck :size="17" :stroke-width="2.5" aria-hidden="true" />
              Propuesta clara
            </span>
            <span>
              <Clock3 :size="17" :stroke-width="2.5" aria-hidden="true" />
              Entrega rapida
            </span>
            <span>
              <MessageCircle :size="17" :stroke-width="2.5" aria-hidden="true" />
              WhatsApp directo
            </span>
          </div>
        </div>

        <aside class="proposal-panel" aria-label="Vista previa de propuesta comercial">
          <div class="proposal-panel__header">
            <div>
              <span>LR Digital</span>
              <strong>Plan recomendado</strong>
            </div>
            <p>Web + WhatsApp</p>
          </div>

          <div class="proposal-panel__score">
            <div>
              <small>Objetivo</small>
              <strong>Mas consultas calificadas</strong>
            </div>
            <TrendingUp :size="28" :stroke-width="2.4" aria-hidden="true" />
          </div>

          <div class="proposal-panel__services">
            <article v-for="service in featuredServices" :key="service.title">
              <span>{{ service.title }}</span>
              <strong>{{ service.price }}</strong>
            </article>
          </div>

          <div class="proposal-panel__timeline">
            <div>
              <CheckCircle2 :size="18" :stroke-width="2.6" aria-hidden="true" />
              Relevamiento
            </div>
            <div>
              <FileText :size="18" :stroke-width="2.6" aria-hidden="true" />
              Propuesta clara
            </div>
            <div>
              <MapPin :size="18" :stroke-width="2.6" aria-hidden="true" />
              Publicacion online
            </div>
          </div>
        </aside>
      </section>

      <section class="showcase-section">
        <div class="showcase-section__copy">
          <p class="section-kicker">Primera impresion</p>
          <h2>Una web tiene que verse profesional antes de que el cliente pregunte el precio.</h2>
          <p>
            La idea no es llenar de tecnologia por llenar. Es presentar tu negocio con una
            imagen clara, moderna y confiable para que la persona entienda rapido y quiera
            escribirte.
          </p>
        </div>

        <div class="showcase-section__media">
          <figure class="showcase-card showcase-card--large">
            <img src="/lr-digital-showcase-space.png" alt="Concepto visual digital para LR Digital" />
            <figcaption>
              <span>Imagen de marca</span>
              <strong>Impacto visual para destacar</strong>
            </figcaption>
          </figure>

          <figure class="showcase-card">
            <img src="/lr-digital-showcase-workspace.png" alt="Ambiente de trabajo digital" />
            <figcaption>
              <span>Trabajo personalizado</span>
              <strong>Desarrollo pensado para cada negocio</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="context-section">
        <div>
          <p class="section-kicker">
            <Target :size="15" :stroke-width="2.5" aria-hidden="true" />
            Por que importa
          </p>
          <h2>Si tu negocio no se entiende rapido, el cliente sigue de largo.</h2>
        </div>

        <div class="context-section__content">
          <p>
            La web no tiene que ser complicada. Tiene que mostrar que vendes, cuanto
            cuesta, donde estas y como contactarte. Eso baja dudas y mejora la confianza
            antes del primer mensaje.
          </p>

          <ul>
            <li v-for="benefit in businessBenefits" :key="benefit">
              <CheckCircle2 :size="18" :stroke-width="2.6" aria-hidden="true" />
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="servicios" class="services-section">
        <div class="section-heading">
          <p class="section-kicker">Servicios</p>
          <h2 class="section-title">Soluciones concretas para vender, mostrar o gestionar mejor</h2>
          <p class="section-subtitle">
            Precios desde, alcance claro y entrega organizada. Antes de empezar definimos
            que incluye, tiempos y condiciones.
          </p>
        </div>

        <div class="services-grid">
          <ServiceCard v-for="service in services" :key="service.title" :service="service" />
        </div>
      </section>

      <section class="advice-section">
        <div class="advice-section__panel glass-panel">
          <div class="advice-section__icon" aria-hidden="true">
            <SearchCheck :size="30" :stroke-width="2.4" />
          </div>
          <div>
            <p class="section-kicker">Recomendacion</p>
            <h2>Para empezar, conviene una web profesional o un catalogo con WhatsApp.</h2>
            <p>
              En muchos negocios chicos, un catalogo con WhatsApp funciona mejor que una
              tienda completa al principio: es mas simple, cuesta menos y permite validar
              demanda antes de sumar pagos, stock o automatizaciones.
            </p>
          </div>
          <div class="advice-section__actions">
            <WhatsAppButton label="Consultar que me conviene" />
            <a href="#ejemplos">
              <span>Ver ejemplos</span>
              <ArrowRight :size="17" :stroke-width="2.6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="ejemplos" class="projects-section">
        <div class="section-heading">
          <p class="section-kicker">Ejemplos</p>
          <h2 class="section-title">Demos propias que prueban capacidad real de desarrollo</h2>
          <p class="section-subtitle">
            No son trabajos para clientes. Son desarrollos propios que muestran sistemas
            de reservas, tiendas, paneles, usuarios y catalogos.
          </p>
        </div>

        <div class="projects-grid">
          <ProjectProofCard
            v-for="project in projectProofs"
            :key="project.title"
            :project="project"
          />
        </div>
      </section>

      <section id="proceso" class="process-section">
        <div class="section-heading">
          <p class="section-kicker">Proceso</p>
          <h2 class="section-title">Un proceso simple para avanzar sin vueltas</h2>
          <p class="section-subtitle">
            Cada etapa tiene un objetivo concreto para evitar improvisaciones, cambios
            confusos y entregas poco claras.
          </p>
        </div>

        <div class="process-grid">
          <ProcessStep
            v-for="(step, index) in processSteps"
            :key="step.title"
            :step="step"
            :number="index + 1"
          />
        </div>
      </section>

      <section id="precios" class="pricing-section">
        <div class="section-heading">
          <p class="section-kicker">Mantenimiento</p>
          <h2 class="section-title">Soporte mensual para mantener la web prolija y funcionando</h2>
          <p class="section-subtitle">
            Para cambios de contenido, soporte, mejoras y control tecnico. En sistemas con
            usuarios o base de datos, el soporte se define segun el alcance.
          </p>
        </div>

        <div class="pricing-grid">
          <PricingCard v-for="plan in maintenancePlans" :key="plan.title" :plan="plan" />
        </div>
      </section>

      <section class="industries-section">
        <div>
          <p class="section-kicker">
            <Store :size="15" :stroke-width="2.5" aria-hidden="true" />
            Para quien es
          </p>
          <h2>Negocios que necesitan verse confiables antes del primer mensaje</h2>
        </div>

        <div class="industries-list" aria-label="Rubros recomendados">
          <span v-for="industry in industries" :key="industry">{{ industry }}</span>
        </div>
      </section>

      <CTASection />

      <section id="faq" class="faq-section">
        <div class="section-heading">
          <p class="section-kicker">Preguntas frecuentes</p>
          <h2 class="section-title">Antes de pedir una propuesta</h2>
        </div>
        <div class="faq-grid">
          <FAQItem v-for="item in faqs" :key="item.question" :item="item" />
        </div>
      </section>

      <section class="contact-section">
        <div class="contact-section__panel glass-panel">
          <div>
            <p class="section-kicker">Contacto</p>
            <h2>Lucas Rey / LR Digital</h2>
            <p>
              Webs, catalogos digitales, menus, tiendas online simples, sistemas y
              mantenimiento para negocios que necesitan recibir mas consultas.
            </p>
          </div>

          <div class="contact-section__links">
            <WhatsAppButton />
            <a v-if="hasEmail" :href="`mailto:${businessConfig.email}`">
              <CalendarCheck :size="18" :stroke-width="2.5" aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <WhatsAppButton class="floating-whatsapp" label="WhatsApp" />
  </div>
</template>

<style scoped>
.commercial-page {
  position: relative;
  overflow-x: hidden;
}

.commercial-page main > section {
  scroll-margin-top: 118px;
}

.commercial-nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: grid;
  width: min(1180px, calc(100% - 48px));
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 8px;
  padding: 12px 14px;
  background:
    linear-gradient(90deg, rgba(26, 183, 255, 0.08), transparent 24%, rgba(255, 255, 255, 0.05)),
    rgba(7, 12, 20, 0.9);
  box-shadow:
    0 16px 52px rgba(0, 0, 0, 0.32),
    0 0 0 1px rgba(36, 194, 255, 0.04);
  backdrop-filter: blur(18px);
  animation:
    navDrop 0.72s cubic-bezier(0.22, 1, 0.36, 1) both,
    navGlow 4.8s ease-in-out 0.8s infinite;
}

.commercial-logo {
  display: inline-flex;
  align-items: center;
}

.commercial-logo img {
  width: 126px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 12px rgba(36, 194, 255, 0.2));
}

.commercial-nav nav {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

.commercial-nav nav a {
  border-radius: 6px;
  padding: 10px 11px;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 760;
  transition:
    color 0.18s ease,
    background 0.18s ease;
}

.commercial-nav nav a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.hero-section {
  position: relative;
  overflow: hidden;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
  align-items: center;
  gap: clamp(36px, 6vw, 78px);
  padding: 142px max(24px, calc((100vw - 1180px) / 2)) 88px;
}

.hero-video,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
  filter: saturate(1.05) contrast(1.04);
}

.hero-overlay {
  z-index: 0;
  background:
    linear-gradient(90deg, rgba(3, 7, 14, 0.92) 0%, rgba(3, 7, 14, 0.7) 40%, rgba(3, 7, 14, 0.48) 74%, rgba(3, 7, 14, 0.78) 100%),
    linear-gradient(180deg, rgba(3, 7, 14, 0.52) 0%, rgba(3, 7, 14, 0.2) 46%, #050a13 100%);
}

.hero-section::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 180px;
  pointer-events: none;
  background: linear-gradient(180deg, transparent, #050a13);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
}

.hero-content h1 {
  max-width: 820px;
  margin-bottom: 22px;
  font-size: clamp(2.7rem, 5vw, 5.25rem);
  line-height: 0.95;
}

.hero-lead {
  max-width: 690px;
  color: var(--muted);
  font-size: clamp(1.02rem, 1vw, 1.16rem);
  line-height: 1.82;
}

.hero-actions,
.advice-section__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.action {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  padding: 13px 16px;
  font-weight: 850;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.action:hover,
.advice-section__actions a:hover,
.contact-section__links a:hover {
  transform: translateY(-2px);
}

.action--secondary,
.advice-section__actions a {
  border: 1px solid rgba(148, 163, 184, 0.22);
  color: var(--text);
  background: rgba(255, 255, 255, 0.045);
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 28px;
}

.trust-strip span {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 8px;
  padding: 12px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.035);
  font-size: 0.86rem;
  font-weight: 760;
}

.trust-strip svg {
  flex: 0 0 auto;
  color: var(--accent-cold);
}

.proposal-panel {
  position: relative;
  z-index: 2;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 8px;
  padding: clamp(22px, 3.5vw, 34px);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), transparent 38%),
    rgba(9, 16, 28, 0.9);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.36);
}

.showcase-section {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: clamp(30px, 5vw, 58px);
  align-items: center;
}

.showcase-section__copy h2 {
  margin-bottom: 16px;
  font-size: clamp(2rem, 3.4vw, 4rem);
  line-height: 1.02;
}

.showcase-section__copy p:not(.section-kicker) {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.78;
}

.showcase-section__media {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 14px;
  align-items: end;
}

.showcase-card {
  position: relative;
  overflow: hidden;
  min-height: 360px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.34);
}

.showcase-card--large {
  min-height: 520px;
}

.showcase-card img {
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  filter: saturate(1.04) contrast(1.02);
  transition: transform 0.5s ease;
}

.showcase-card:hover img {
  transform: scale(1.04);
}

.showcase-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(3, 7, 14, 0.9));
}

.showcase-card figcaption {
  position: absolute;
  right: 18px;
  bottom: 18px;
  left: 18px;
  z-index: 1;
}

.showcase-card figcaption span {
  display: block;
  margin-bottom: 6px;
  color: var(--accent-cold);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.showcase-card figcaption strong {
  display: block;
  color: #fff;
  font-size: 1.18rem;
  line-height: 1.22;
}

.proposal-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(93, 214, 255, 0.16), transparent 34%),
    repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.045) 0 1px, transparent 1px 20px);
  opacity: 0.5;
}

.proposal-panel > * {
  position: relative;
  z-index: 1;
}

.proposal-panel__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.proposal-panel__header span,
.proposal-panel__score small {
  display: block;
  margin-bottom: 6px;
  color: var(--accent-cold);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.proposal-panel__header strong {
  font-size: 1.28rem;
}

.proposal-panel__header p {
  border: 1px solid rgba(93, 214, 255, 0.28);
  border-radius: 999px;
  padding: 8px 10px;
  color: #dff8ff;
  background: rgba(93, 214, 255, 0.08);
  font-size: 0.78rem;
  font-weight: 850;
}

.proposal-panel__score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 8px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.045);
}

.proposal-panel__score strong {
  font-size: 1.52rem;
  line-height: 1.08;
}

.proposal-panel__score svg {
  color: var(--accent-soft);
}

.proposal-panel__services {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

.proposal-panel__services article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.13);
  padding: 14px 0;
}

.proposal-panel__services span {
  color: #d8e1ef;
  line-height: 1.35;
}

.proposal-panel__services strong {
  color: var(--accent-soft);
  white-space: nowrap;
}

.proposal-panel__timeline {
  display: grid;
  gap: 8px;
  margin-top: 18px;
}

.proposal-panel__timeline div {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 0.92rem;
}

.proposal-panel__timeline svg {
  color: var(--accent-cold);
}

.context-section,
.industries-section {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 44px;
  align-items: start;
}

.context-section h2,
.industries-section h2 {
  font-size: clamp(2rem, 3.4vw, 4rem);
  line-height: 1.02;
}

.context-section__content {
  display: grid;
  gap: 24px;
}

.context-section__content > p {
  color: var(--muted);
  font-size: 1.07rem;
  line-height: 1.82;
}

.context-section ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  padding: 0;
  list-style: none;
}

.context-section li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 8px;
  padding: 15px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.035);
  line-height: 1.5;
}

.context-section li svg {
  flex: 0 0 auto;
  margin-top: 2px;
  color: var(--accent-cold);
}

.section-heading {
  max-width: 860px;
}

.services-grid,
.projects-grid,
.process-grid,
.pricing-grid,
.faq-grid {
  display: grid;
  gap: 14px;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.projects-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.process-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.pricing-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.faq-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.advice-section__panel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 22px;
  align-items: center;
  border-radius: 8px;
  padding: clamp(24px, 4vw, 38px);
}

.advice-section__icon {
  display: inline-grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 8px;
  color: var(--accent-cold);
  background: rgba(93, 214, 255, 0.09);
}

.advice-section h2 {
  max-width: 860px;
  margin-bottom: 10px;
  font-size: clamp(1.9rem, 3vw, 3.3rem);
  line-height: 1.04;
}

.advice-section p:not(.section-kicker) {
  max-width: 760px;
  color: var(--muted);
  line-height: 1.72;
}

.advice-section__actions {
  justify-content: flex-end;
  margin-top: 0;
}

.advice-section__actions a {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  padding: 13px 16px;
  font-weight: 850;
}

.industries-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.industries-list span {
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 999px;
  padding: 9px 12px;
  color: #dce7f5;
  background: rgba(255, 255, 255, 0.04);
  font-weight: 760;
}

.contact-section {
  padding-top: 48px;
}

.contact-section__panel {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 28px;
  align-items: center;
  border-radius: 8px;
  padding: 28px;
}

.contact-section h2 {
  margin-bottom: 10px;
  font-size: clamp(1.8rem, 3vw, 3rem);
}

.contact-section p {
  max-width: 620px;
  color: var(--muted);
  line-height: 1.75;
}

.contact-section__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.contact-section__links a:not(.whatsapp-button) {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 6px;
  padding: 12px 15px;
  color: var(--text);
  font-weight: 820;
  background: rgba(255, 255, 255, 0.04);
  transition:
    transform 0.18s ease,
    background 0.18s ease;
}

.floating-whatsapp {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 50;
  min-height: 46px;
  box-shadow: 0 20px 44px rgba(37, 211, 102, 0.24);
}

@keyframes navDrop {
  from {
    opacity: 0;
    transform: translate(-50%, -18px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes navGlow {
  0%,
  100% {
    border-color: rgba(148, 163, 184, 0.18);
    box-shadow:
      0 16px 52px rgba(0, 0, 0, 0.32),
      0 0 0 1px rgba(36, 194, 255, 0.04);
  }

  50% {
    border-color: rgba(93, 214, 255, 0.34);
    box-shadow:
      0 18px 58px rgba(0, 0, 0, 0.36),
      0 0 24px rgba(36, 194, 255, 0.1);
  }
}

@media (max-width: 1080px) {
  .commercial-nav {
    grid-template-columns: 1fr;
  }

  .commercial-nav nav {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .hero-section,
  .showcase-section,
  .context-section,
  .industries-section,
  .contact-section__panel,
  .advice-section__panel {
    grid-template-columns: 1fr;
  }

  .services-grid,
  .process-grid,
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .advice-section__actions,
  .contact-section__links {
    justify-content: flex-start;
  }
}

@media (max-width: 760px) {
  .commercial-nav {
    top: 10px;
    width: min(100% - 20px, 1180px);
    gap: 12px;
  }

  .commercial-page main > section {
    scroll-margin-top: 190px;
  }

  .commercial-nav nav {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }

  .commercial-nav nav a {
    padding: 9px 6px;
    text-align: center;
    font-size: 0.8rem;
  }

  .commercial-logo img {
    width: 96px;
  }

  .hero-section {
    min-height: 100svh;
    padding: 210px 14px 76px;
  }

  .proposal-panel {
    display: none;
  }

  .hero-content h1 {
    font-size: clamp(2.3rem, 10.5vw, 3.2rem);
    line-height: 0.98;
  }

  .hero-lead {
    font-size: 1rem;
    line-height: 1.72;
  }

  .hero-actions,
  .advice-section__actions {
    display: grid;
  }

  .action,
  .advice-section__actions a {
    width: 100%;
    min-height: 54px;
  }

  .trust-strip {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .trust-strip span {
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    font-size: 0.73rem;
    line-height: 1.25;
  }

  .proposal-panel__score {
    align-items: flex-start;
  }

  .context-section ul,
  .services-grid,
  .showcase-section__media,
  .projects-grid,
  .process-grid,
  .pricing-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .floating-whatsapp {
    right: 14px;
    bottom: 14px;
    width: auto;
    min-width: 0;
  }
}

@media (max-width: 560px) {
  .showcase-card,
  .showcase-card--large {
    min-height: 380px;
  }

  .proposal-panel__header {
    align-items: flex-start;
    flex-direction: column;
  }

  .contact-section__links {
    display: grid;
  }
}
</style>
