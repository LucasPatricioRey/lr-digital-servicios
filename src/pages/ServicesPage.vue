<script setup>
import { computed, onMounted } from "vue";
import { businessConfig } from "../config/business";
import {
  businessBenefits,
  faqs,
  heroBadges,
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
          <p class="section-kicker">Webs para negocios</p>
          <h1>Tu negocio mas profesional y listo para recibir consultas</h1>
          <p class="services-hero__intro">
            Creo webs, catalogos y menus digitales para que tus clientes vean que
            ofreces, donde estas y te escriban por WhatsApp sin vueltas.
          </p>

          <div class="services-hero__actions">
            <WhatsAppButton />
            <a href="#servicios" class="action action--secondary">Ver precios</a>
          </div>

          <ul class="services-hero__badges" aria-label="Beneficios principales">
            <li v-for="badge in heroBadges" :key="badge">{{ badge }}</li>
          </ul>
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
              <div class="mockup-card__headline">
                <span>Negocio local</span>
                <strong>Servicios, precios y contacto claro</strong>
              </div>

              <div class="mockup-card__grid">
                <article>
                  <small>WhatsApp</small>
                  <b>Consulta directa</b>
                </article>
                <article>
                  <small>Google Maps</small>
                  <b>Ubicacion visible</b>
                </article>
                <article>
                  <small>Catalogo</small>
                  <b>Productos ordenados</b>
                </article>
                <article>
                  <small>Redes</small>
                  <b>Instagram y links</b>
                </article>
              </div>

              <div class="mockup-card__cta">Pedir propuesta</div>
            </div>
          </div>

          <div class="quick-proof glass-panel">
            <span>LR Digital</span>
            <strong>Propuesta clara, precio definido y entrega ordenada.</strong>
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
            <li v-for="benefit in businessBenefits" :key="benefit">{{ benefit }}</li>
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
          <h2>No sabes que elegir? Empeza por una web profesional o catalogo con WhatsApp.</h2>
          <p>
            Para muchos negocios chicos, un catalogo con WhatsApp funciona mejor que una
            tienda completa al principio: es simple, cuesta menos y permite validar
            consultas antes de automatizar pagos o stock.
          </p>
          <div class="recommended-service__actions">
            <WhatsAppButton label="Consultar que me conviene" />
            <a href="#servicios">Comparar servicios</a>
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
            <a v-if="hasEmail" :href="`mailto:${businessConfig.email}`">Email</a>
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
  background: rgba(5, 12, 23, 0.78);
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
  border-radius: 999px;
  padding: 10px 12px;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 780;
}

.commercial-nav nav a:hover {
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
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
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
  border: 1px solid rgba(168, 180, 200, 0.16);
  border-radius: 999px;
  padding: 9px 12px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.9rem;
  font-weight: 760;
}

.services-hero__visual {
  display: grid;
  gap: 16px;
}

.mockup-card {
  overflow: hidden;
  border-radius: 28px;
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
  display: grid;
  gap: 18px;
  padding: clamp(20px, 4vw, 34px);
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
  border: 1px solid rgba(168, 180, 200, 0.14);
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.045);
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

.mockup-card__cta {
  width: fit-content;
  border-radius: 14px;
  padding: 13px 16px;
  color: #06101c;
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  font-weight: 900;
}

.quick-proof {
  display: grid;
  gap: 8px;
  border-radius: 20px;
  padding: 20px;
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
  border: 1px solid rgba(168, 180, 200, 0.14);
  border-radius: 16px;
  padding: 16px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.045);
  line-height: 1.55;
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
  border-radius: 28px;
  padding: clamp(26px, 5vw, 54px);
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
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 850;
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
    max-width: 10ch;
    font-size: clamp(2.55rem, 12vw, 4rem);
    line-height: 0.98;
  }

  .services-hero__intro {
    max-width: 31ch;
    font-size: 1rem;
    line-height: 1.75;
  }

  .services-hero__badges {
    margin-top: 18px;
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
    grid-template-columns: 1fr;
  }

  .commercial-contact__links {
    display: grid;
  }
}
</style>
