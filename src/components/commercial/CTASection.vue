<script setup>
import WhatsAppButton from "./WhatsAppButton.vue";
</script>

<template>
  <section id="contacto" class="commercial-cta">
    <div class="commercial-cta__panel glass-panel">
      <p class="section-kicker">Contacto</p>
      <h2>Queres mejorar la presencia digital de tu negocio?</h2>
      <p>
        Escribime por WhatsApp, contame que vendes y te preparo una propuesta sin
        compromiso, con precio, alcance y tiempos claros.
      </p>

      <div class="commercial-cta__actions">
        <WhatsAppButton />
        <a href="#ejemplos" class="secondary-action">Ver ejemplos</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.commercial-cta {
  padding-top: 56px;
}

.commercial-cta__panel {
  border-radius: 28px;
  padding: clamp(28px, 5vw, 56px);
  text-align: center;
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
  border: 1px solid rgba(168, 180, 200, 0.24);
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 850;
}

@media (max-width: 560px) {
  .secondary-action {
    width: 100%;
    min-height: 54px;
  }
}
</style>
