<script setup>
import { ArrowRight, Sparkles } from "@lucide/vue";
import WhatsAppButton from "./WhatsAppButton.vue";
</script>

<template>
  <section id="contacto" class="commercial-cta">
    <div class="commercial-cta__panel glass-panel">
      <span class="commercial-cta__icon" aria-hidden="true">
        <Sparkles :size="24" :stroke-width="2.4" />
      </span>
      <p class="section-kicker">Contacto</p>
      <h2>Queres mejorar la presencia digital de tu negocio?</h2>
      <p>
        Escribime por WhatsApp, contame que vendes y te preparo una propuesta sin
        compromiso, con precio, alcance y tiempos claros.
      </p>

      <div class="commercial-cta__actions">
        <WhatsAppButton />
        <a href="#ejemplos" class="secondary-action">
          <span>Ver ejemplos</span>
          <ArrowRight :size="17" :stroke-width="2.7" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.commercial-cta {
  padding-top: 56px;
}

.commercial-cta__panel {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: clamp(28px, 5vw, 56px);
  text-align: center;
  background:
    linear-gradient(135deg, rgba(93, 214, 255, 0.1), transparent 35%),
    linear-gradient(315deg, rgba(255, 122, 24, 0.14), transparent 42%),
    var(--panel);
}

.commercial-cta__panel::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.32;
}

.commercial-cta__panel > * {
  position: relative;
  z-index: 1;
}

.commercial-cta__icon {
  display: inline-grid;
  width: 56px;
  height: 56px;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 18px;
  color: var(--accent-soft);
  background: rgba(255, 184, 108, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

h2 {
  max-width: 820px;
  margin: 0 auto 16px;
  font-size: clamp(2.1rem, 4vw, 4.2rem);
  line-height: 1.02;
}

.commercial-cta__panel > p:not(.section-kicker) {
  max-width: 720px;
  margin: 0 auto 28px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.commercial-cta__actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.secondary-action {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(168, 180, 200, 0.24);
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 850;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.secondary-action:hover {
  transform: translateY(-3px);
  border-color: rgba(93, 214, 255, 0.34);
  background: rgba(255, 255, 255, 0.06);
}

.secondary-action svg {
  transition: transform 0.2s ease;
}

.secondary-action:hover svg {
  transform: translateX(3px);
}

@media (max-width: 560px) {
  .secondary-action {
    width: 100%;
    min-height: 54px;
  }
}
</style>
