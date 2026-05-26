<script setup>
import { computed } from "vue";
import { getWhatsappUrl } from "../../config/business";

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
});

const serviceWhatsappUrl = computed(() =>
  getWhatsappUrl(`Hola Lucas, quiero consultar por ${props.service.title}`)
);
</script>

<template>
  <article :class="['service-card', 'glass-panel', { 'is-highlighted': service.highlighted }]">
    <div class="service-card__top">
      <p v-if="service.highlighted" class="service-card__badge">Mas pedido</p>
      <h3>{{ service.title }}</h3>
      <strong>{{ service.price }}</strong>
      <span v-if="service.note">{{ service.note }}</span>
    </div>

    <ul>
      <li v-for="item in service.includes" :key="item">{{ item }}</li>
    </ul>

    <p class="service-card__ideal">
      <span>Ideal para:</span>
      {{ service.idealFor }}
    </p>

    <a
      class="service-card__cta"
      :href="serviceWhatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Consultar por ${service.title} por WhatsApp`"
    >
      Consultar este servicio
    </a>
  </article>
</template>

<style scoped>
.service-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  gap: 22px;
  border-radius: 22px;
  padding: 24px;
}

.service-card.is-highlighted {
  border-color: rgba(255, 184, 108, 0.44);
  background:
    linear-gradient(180deg, rgba(255, 122, 24, 0.11), rgba(10, 18, 32, 0.82)),
    var(--panel);
}

.service-card__top {
  display: grid;
  gap: 10px;
}

.service-card__badge {
  width: fit-content;
  border-radius: 999px;
  padding: 7px 10px;
  color: #07111f;
  background: var(--accent-soft);
  font-size: 0.76rem;
  font-weight: 900;
}

h3 {
  font-size: 1.3rem;
  line-height: 1.25;
}

strong {
  color: var(--accent-soft);
  font-size: 1.18rem;
}

.service-card__top span {
  color: var(--muted);
  font-size: 0.94rem;
}

ul {
  display: grid;
  gap: 11px;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  padding-left: 20px;
  color: #d8e1ef;
  line-height: 1.55;
}

li::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-cold);
}

.service-card__ideal {
  margin-top: auto;
  border-top: 1px solid rgba(168, 180, 200, 0.14);
  padding-top: 16px;
  color: var(--muted);
  line-height: 1.65;
}

.service-card__ideal span {
  display: block;
  margin-bottom: 4px;
  color: var(--text);
  font-weight: 800;
}

.service-card__cta {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  padding: 12px 14px;
  color: #06101c;
  background: linear-gradient(135deg, #25d366, #8fffb7);
  font-weight: 900;
  text-align: center;
}
</style>
