<script setup>
import { computed, onMounted } from "vue";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
  MousePointerClick,
  SearchCheck,
  Share2,
  ShoppingBag,
  Sparkles,
  Store
} from "@lucide/vue";
import { businessConfig } from "../config/business";
import {
  businessBenefits,
  faqs,
  heroBadges,
  heroMetrics,
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
    <div class="animated-surface" aria-hidden="true"></div>

    <header class="commercial-nav" aria-label="Navegacion principal">
      <a class="commercial-logo" href="/" aria-label="Ir al inicio">
        <span>{{ businessConfig.brandName }}</span>
        <small>{{ businessConfig.businessName }}</small>
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
      <section id="inicio" class="services-hero">
        <div class="services-hero__copy">
          <p class="section-kicker">
            <Sparkles :size="15" :stroke-width="2.6" aria-hidden="true" />
            Webs para negocios
          </p>
          <h1>Tu negocio mas profesional y listo para recibir consultas</h1>
          <p class="services-hero__intro">
            Creo webs, catalogos y menus digitales para que tus clientes vean que
            ofreces, donde estas y te escriban por WhatsApp sin vueltas.
          </p>

          <div class="services-hero__actions">
            <WhatsAppButton />
            <a href="#servicios" class="action action--secondary">
              <span>Ver precios</span>
              <ArrowRight :size="18" :stroke-width="2.7" aria-hidden="true" />
            </a>
          </div>

          <ul class="services-hero__badges" aria-label="Beneficios principales">
            <li v-for="badge in heroBadges" :key="badge">
              <BadgeCheck :size="15" :stroke-width="2.7" aria-hidden="true" />
              <span>{{ badge }}</span>
            </li>
          </ul>

          <div class="hero-metrics" aria-label="Datos destacados del servicio">
            <article v-for="metric in heroMetrics" :key="metric.label">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </article>
          </div>
        </div>

        <div class="services-hero__visual" aria-label="Ejemplo visual de web comercial">
          <div class="mockup-card glass-panel">
            <div class="mockup-card__bar">
              <span></span>
              <span></span>
              <span></span>
              <p>Catalogo digital</p>
            </div>

            <div class="mockup-card__screen">
              <div class="mockup-card__status">
                <span class="live-dot" aria-hidden="true"></span>
                Web lista para recibir consultas
              </div>

              <div class="mockup-card__headline">
                <span>Negocio local</span>
                <strong>Servicios, precios y contacto claro</strong>
              </div>

              <div class="mockup-card__grid">
                <article>
                  <MessageCircle :size="20" :stroke-width="2.5" aria-hidden="true" />
                  <small>WhatsApp</small>
                  <b>Consulta directa</b>
                </article>
                <article>
                  <MapPin :size="20" :stroke-width="2.5" aria-hidden="true" />
                  <small>Google Maps</small>
                  <b>Ubicacion visible</b>
                </article>
                <article>
                  <ShoppingBag :size="20" :stroke-width="2.5" aria-hidden="true" />
                  <small>Catalogo</small>
                  <b>Productos ordenados</b>
                </article>
                <article>
                  <Share2 :size="20" :stroke-width="2.5" aria-hidden="true" />
                  <small>Redes</small>
                  <b>Instagram y links</b>
                </article>
              </div>

              <div class="mockup-card__footer">
                <div>
                  <small>Proxima accion</small>
                  <b>Cliente toca y escribe</b>
                </div>
                <div class="mockup-card__cta">
                  Pedir propuesta
                  <MousePointerClick :size="17" :stroke-width="2.6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          <div class="quick-proof glass-panel">
            <Store :size="24" :stroke-width="2.4" aria-hidden="true" />
            <div>
              <span>LR Digital</span>
              <strong>Propuesta clara, precio definido y entrega ordenada.</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="business-context">
        <div>
          <p class="section-kicker">Por que importa</p>
          <h2>Tu cliente decide rapido si confiar o seguir de largo</h2>
        </div>
        <div class="business-context__content">
          <p>
            Hoy muchas personas miran Instagram, Google o una web antes de consultar. Si
            tu negocio no muestra claro que ofrece, donde esta y como contactarte, podes
            perder clientes.
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
        <p class="section-kicker">Servicios principales</p>
        <h2 class="section-title">Elegi por donde empezar</h2>
        <p class="section-subtitle">
          Los precios son desde y sirven para orientarte. Antes de empezar te paso una
          propuesta concreta con alcance, tiempo de entrega y que incluye.
        </p>

        <div class="services-grid">
          <ServiceCard v-for="service in services" :key="service.title" :service="service" />
        </div>
      </section>

      <section class="recommended-service">
        <div class="recommended-service__panel glass-panel">
          <p class="section-kicker">Servicio recomendado</p>
          <div class="recommended-service__icon" aria-hidden="true">
            <SearchCheck :size="28" :stroke-width="2.4" />
          </div>
          <h2>No sabes que elegir? Empeza por una web profesional o catalogo con WhatsApp.</h2>
          <p>
            Para muchos negocios chicos, un catalogo con WhatsApp funciona mejor que una
            tienda completa al principio: es simple, cuesta menos y permite validar
            consultas antes de automatizar pagos o stock.
          </p>
          <div class="recommended-service__actions">
            <WhatsAppButton label="Consultar que me conviene" />
            <a href="#servicios">
              <span>Comparar servicios</span>
              <ArrowRight :size="17" :stroke-width="2.7" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="ejemplos" class="projects-proof">
        <p class="section-kicker">Ejemplos</p>
        <h2 class="section-title">Demos propias que muestran lo que puedo armar</h2>
        <p class="section-subtitle">
          No son trabajos para clientes. Son proyectos propios usados como prueba de
          capacidad: reservas, tiendas, catalogos, paneles y sistemas simples.
        </p>

        <div class="projects-proof__grid">
          <ProjectProofCard
            v-for="project in projectProofs"
            :key="project.title"
            :project="project"
          />
        </div>
      </section>

      <section id="proceso" class="process-section">
        <p class="section-kicker">Proceso de trabajo</p>
        <h2 class="section-title">Una forma simple y ordenada de avanzar</h2>
        <p class="section-subtitle">
          La idea es que sepas que se entrega, cuanto cuesta y que falta antes de avanzar.
        </p>

        <div class="process-grid">
          <ProcessStep
            v-for="(step, index) in processSteps"
            :key="step.title"
            :step="step"
            :number="index + 1"
          />
        </div>
      </section>

      <section id="precios" class="maintenance-section">
        <p class="section-kicker">Mantenimiento mensual</p>
        <h2 class="section-title">Soporte para que la web siga funcionando y mejore con el tiempo</h2>
        <p class="section-subtitle">
          Podes contratar mantenimiento mensual o soporte puntual. Si el proyecto tiene
          panel, usuarios o datos internos, el soporte se define segun el alcance real.
        </p>

        <div class="pricing-grid">
          <PricingCard v-for="plan in maintenancePlans" :key="plan.title" :plan="plan" />
        </div>
      </section>

      <section class="industries-section">
        <div>
          <p class="section-kicker">Para quien es</p>
          <h2>Negocios que necesitan verse claros, confiables y faciles de contactar</h2>
        </div>

        <div class="industries-list" aria-label="Rubros recomendados">
          <span v-for="industry in industries" :key="industry">{{ industry }}</span>
        </div>
      </section>

      <CTASection />

      <section id="faq" class="faq-section">
        <p class="section-kicker">Preguntas frecuentes</p>
        <h2 class="section-title">Antes de pedir una propuesta</h2>
        <div class="faq-grid">
          <FAQItem v-for="item in faqs" :key="item.question" :item="item" />
        </div>
      </section>

      <section class="commercial-contact">
        <div class="commercial-contact__panel glass-panel">
          <div>
            <p class="section-kicker">Datos de contacto</p>
            <h2>Lucas Rey / LR Digital</h2>
            <p>
              Webs, catalogos digitales, menus, tiendas online simples, sistemas y mantenimiento para
              negocios que necesitan recibir mas consultas.
            </p>
          </div>

          <div class="commercial-contact__links">
            <WhatsAppButton />
            <a v-if="hasEmail" :href="`mailto:${businessConfig.email}`">
              <CalendarCheck :size="18" :stroke-width="2.5" aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.commercial-page {
  position: relative;
  overflow-x: hidden;
  isolation: isolate;
}

.animated-surface {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    linear-gradient(115deg, transparent 0 18%, rgba(93, 214, 255, 0.08) 30%, transparent 44%),
    linear-gradient(245deg, transparent 0 20%, rgba(255, 122, 24, 0.1) 34%, transparent 48%);
  background-size: 180% 180%, 160% 160%;
  opacity: 0.75;
  animation: surfaceDrift 18s ease-in-out infinite alternate;
}

.commercial-nav {
  position: sticky;
  top: 14px;
  z-index: 40;
  display: grid;
  width: min(1180px, calc(100% - 48px));
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 18px;
  margin: 16px auto 0;
  border: 1px solid rgba(168, 180, 200, 0.16);
  border-radius: 20px;
  padding: 12px 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.055), transparent),
    rgba(5, 12, 23, 0.82);
  box-shadow:
    0 18px 70px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
}

.commercial-logo {
  display: grid;
  gap: 2px;
}

.commercial-logo span {
  font-family: "Bahnschrift", "Aptos Display", "Segoe UI", sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
}

.commercial-logo small {
  color: var(--accent-soft);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.commercial-nav nav {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.commercial-nav nav a {
  position: relative;
  border-radius: 999px;
  padding: 10px 12px;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 780;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.commercial-nav nav a:hover {
  transform: translateY(-1px);
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.services-hero {
  display: grid;
  min-height: calc(100vh - 104px);
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  align-items: center;
  gap: clamp(32px, 5vw, 64px);
  padding-top: 52px;
}

.services-hero h1 {
  max-width: 880px;
  margin-bottom: 22px;
  font-size: clamp(2.35rem, 4vw, 4.45rem);
  line-height: 1.02;
}

.services-hero__intro {
  max-width: 720px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.9;
}

.services-hero__actions,
.recommended-service__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.action {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 850;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.action:hover,
.recommended-service__actions a:hover,
.commercial-contact__links a:hover {
  transform: translateY(-3px);
}

.action--secondary {
  color: #07111f;
  background: linear-gradient(135deg, #5dd6ff, #9be7ff);
  box-shadow:
    0 18px 42px rgba(93, 214, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.62);
}

.action--secondary svg {
  transition: transform 0.2s ease;
}

.action--secondary:hover svg {
  transform: translateX(3px);
}

.action--ghost,
.recommended-service__actions a {
  border: 1px solid rgba(168, 180, 200, 0.24);
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.services-hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  padding: 0;
  list-style: none;
}

.services-hero__badges li {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid rgba(168, 180, 200, 0.16);
  border-radius: 999px;
  padding: 9px 12px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.9rem;
  font-weight: 760;
}

.services-hero__badges svg {
  color: var(--accent-cold);
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  max-width: 620px;
  margin-top: 20px;
}

.hero-metrics article {
  border: 1px solid rgba(168, 180, 200, 0.14);
  border-radius: 18px;
  padding: 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.065), transparent),
    rgba(255, 255, 255, 0.035);
}

.hero-metrics strong,
.hero-metrics span {
  display: block;
}

.hero-metrics strong {
  color: #ffffff;
  font-size: 1.08rem;
  line-height: 1.15;
}

.hero-metrics span {
  margin-top: 5px;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.35;
}

.services-hero__visual {
  display: grid;
  gap: 16px;
}

.mockup-card {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.09), transparent 34%),
    var(--panel);
}

.mockup-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 34px 34px;
  opacity: 0.18;
}

.mockup-card__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(168, 180, 200, 0.14);
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
}

.mockup-card__bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(168, 180, 200, 0.42);
}

.mockup-card__bar p {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 800;
}

.mockup-card__screen {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 18px;
  padding: clamp(20px, 4vw, 34px);
}

.mockup-card__status {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 9px;
  border: 1px solid rgba(37, 211, 102, 0.22);
  border-radius: 999px;
  padding: 8px 11px;
  color: #dfffea;
  background: rgba(37, 211, 102, 0.08);
  font-size: 0.82rem;
  font-weight: 820;
}

.live-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #25d366;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
  animation: livePulse 1.8s ease-out infinite;
}

.mockup-card__headline {
  display: grid;
  gap: 9px;
}

.mockup-card__headline span {
  color: var(--accent-cold);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.mockup-card__headline strong {
  max-width: 12ch;
  font-size: clamp(1.9rem, 4vw, 3.1rem);
  line-height: 1.04;
}

.mockup-card__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.mockup-card__grid article {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(168, 180, 200, 0.14);
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.045);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.mockup-card__grid article:hover {
  transform: translateY(-3px);
  border-color: rgba(93, 214, 255, 0.28);
  background: rgba(255, 255, 255, 0.07);
}

.mockup-card__grid svg {
  margin-bottom: 10px;
  color: var(--accent-cold);
}

.mockup-card__grid small {
  display: block;
  margin-bottom: 8px;
  color: var(--accent-soft);
  font-weight: 850;
}

.mockup-card__grid b {
  color: #edf4fb;
  line-height: 1.35;
}

.mockup-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-top: 1px solid rgba(168, 180, 200, 0.12);
  padding-top: 16px;
}

.mockup-card__footer small,
.mockup-card__footer b {
  display: block;
}

.mockup-card__footer small {
  margin-bottom: 4px;
  color: var(--muted);
  font-weight: 780;
}

.mockup-card__cta {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  padding: 13px 16px;
  color: #06101c;
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  font-weight: 900;
  white-space: nowrap;
  box-shadow: 0 18px 42px rgba(255, 122, 24, 0.2);
}

.quick-proof {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 14px;
  border-radius: 20px;
  padding: 20px;
  background:
    linear-gradient(135deg, rgba(93, 214, 255, 0.1), transparent 42%),
    var(--panel);
}

.quick-proof svg {
  color: var(--accent-cold);
}

.quick-proof span {
  color: var(--accent-cold);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.quick-proof strong {
  font-size: 1.12rem;
  line-height: 1.45;
}

.business-context,
.industries-section {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 42px;
  align-items: start;
}

.business-context h2,
.industries-section h2 {
  font-size: clamp(2rem, 3.4vw, 4rem);
  line-height: 1.06;
}

.business-context__content {
  display: grid;
  gap: 24px;
}

.business-context__content > p {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.85;
}

.business-context ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding: 0;
  list-style: none;
}

.business-context li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid rgba(168, 180, 200, 0.14);
  border-radius: 16px;
  padding: 16px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.045);
  line-height: 1.55;
}

.business-context li svg {
  flex: 0 0 auto;
  margin-top: 3px;
  color: var(--accent-cold);
}

.services-grid,
.projects-proof__grid,
.process-grid,
.pricing-grid,
.faq-grid {
  display: grid;
  gap: 18px;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.projects-proof__grid {
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

.recommended-service__panel {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: clamp(26px, 5vw, 54px);
  background:
    linear-gradient(135deg, rgba(255, 122, 24, 0.13), transparent 36%),
    linear-gradient(315deg, rgba(93, 214, 255, 0.1), transparent 42%),
    var(--panel);
}

.recommended-service__panel::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.04) 0 1px,
    transparent 1px 18px
  );
  opacity: 0.24;
}

.recommended-service__panel > * {
  position: relative;
  z-index: 1;
}

.recommended-service__icon {
  display: inline-grid;
  width: 58px;
  height: 58px;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 18px;
  color: var(--accent-cold);
  background: rgba(93, 214, 255, 0.1);
}

.recommended-service h2 {
  max-width: 920px;
  margin-bottom: 16px;
  font-size: clamp(2rem, 3.6vw, 4.1rem);
  line-height: 1.05;
}

.recommended-service p {
  max-width: 820px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.85;
}

.recommended-service__actions a {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 850;
}

.recommended-service__actions a svg {
  transition: transform 0.2s ease;
}

.recommended-service__actions a:hover svg {
  transform: translateX(3px);
}

.industries-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.industries-list span {
  border: 1px solid rgba(168, 180, 200, 0.16);
  border-radius: 999px;
  padding: 10px 13px;
  color: #dce7f5;
  background: rgba(255, 255, 255, 0.05);
  font-weight: 780;
}

.commercial-contact {
  padding-top: 48px;
}

.commercial-contact__panel {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 28px;
  align-items: center;
  border-radius: 24px;
  padding: 28px;
}

.commercial-contact h2 {
  margin-bottom: 10px;
  font-size: clamp(1.8rem, 3vw, 3rem);
}

.commercial-contact p {
  max-width: 620px;
  color: var(--muted);
  line-height: 1.75;
}

.commercial-contact__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.commercial-contact__links a:not(.whatsapp-button) {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(168, 180, 200, 0.2);
  border-radius: 14px;
  padding: 12px 15px;
  color: var(--text);
  font-weight: 820;
  background: rgba(255, 255, 255, 0.04);
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

@keyframes surfaceDrift {
  0% {
    background-position: 0% 20%, 100% 10%;
  }

  100% {
    background-position: 100% 80%, 0% 90%;
  }
}

@keyframes livePulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.52);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (max-width: 1080px) {
  .commercial-nav {
    grid-template-columns: 1fr;
  }

  .commercial-nav nav {
    order: 3;
    flex-wrap: wrap;
  }

  .services-hero,
  .business-context,
  .industries-section,
  .commercial-contact__panel {
    grid-template-columns: 1fr;
  }

  .services-grid,
  .process-grid,
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .commercial-contact__links {
    justify-content: flex-start;
  }
}

@media (max-width: 760px) {
  .commercial-nav {
    top: 10px;
    width: min(100% - 20px, 1180px);
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .commercial-nav nav {
    display: flex;
    order: 2;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 6px;
    overflow: visible;
    padding-bottom: 0;
  }

  .commercial-nav nav a {
    flex: 1 1 calc(33.333% - 6px);
    padding: 9px 8px;
    text-align: center;
    font-size: 0.84rem;
  }

  .services-hero {
    min-height: auto;
    padding-top: 28px;
  }

  .services-hero h1 {
    max-width: 12ch;
    font-size: clamp(2.25rem, 10.5vw, 3.25rem);
    line-height: 1;
  }

  .services-hero__intro {
    max-width: 31ch;
    font-size: 1rem;
    line-height: 1.75;
  }

  .services-hero__badges {
    margin-top: 18px;
  }

  .hero-metrics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 100%;
    gap: 8px;
  }

  .hero-metrics article {
    padding: 11px 8px;
  }

  .hero-metrics strong {
    font-size: 0.92rem;
  }

  .hero-metrics span {
    font-size: 0.72rem;
  }

  .mockup-card__footer {
    align-items: stretch;
    flex-direction: column;
  }

  .mockup-card__cta {
    justify-content: center;
    width: 100%;
  }

  .services-grid,
  .projects-proof__grid,
  .process-grid,
  .pricing-grid,
  .faq-grid,
  .business-context ul {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 560px) {
  .services-hero__actions,
  .recommended-service__actions {
    display: grid;
  }

  .action,
  .recommended-service__actions a {
    width: 100%;
    min-height: 54px;
  }

  .services-hero__badges {
    display: grid;
  }

  .mockup-card__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .quick-proof {
    grid-template-columns: 1fr;
  }

  .commercial-contact__links {
    display: grid;
  }
}
</style>
