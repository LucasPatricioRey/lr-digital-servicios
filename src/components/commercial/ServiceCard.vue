<script setup>
import { computed } from "vue";
import {
  BadgeCheck,
  CreditCard,
  MonitorSmartphone,
  ScanLine,
  Settings2,
  ShoppingBag
} from "@lucide/vue";
import { getWhatsappUrl } from "../../config/business";
import WhatsAppIcon from "./WhatsAppIcon.vue";

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
});

const serviceWhatsappUrl = computed(() =>
  getWhatsappUrl(`Hola Lucas, quiero consultar por ${props.service.title}`)
);

const iconMap = {
  BadgeCheck,
  CreditCard,
  MonitorSmartphone,
  ScanLine,
  Settings2,
  ShoppingBag
};

const serviceIcon = computed(() => iconMap[props.service.icon] || MonitorSmartphone);
</script>

<template>
  <article :class="['service-card', 'glass-panel', { 'is-highlighted': service.highlighted }]">
    <div class="service-card__shine" aria-hidden="true"></div>
    <div class="service-card__top">
      <div class="service-card__heading">
        <span class="service-card__icon" aria-hidden="true">
          <component :is="serviceIcon" :size="22" :stroke-width="2.4" />
        </span>
        <p v-if="service.highlighted" class="service-card__badge">Mas pedido</p>
      </div>
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
      <WhatsAppIcon />
      <span>Consultar este servicio</span>
    </a>
  </article>
</template>

<style scoped>
.service-card {
  position: relative;
  overflow: hidden;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  gap: 22px;
  border-radius: 8px;
  padding: 22px;
}

.service-card__shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 32%),
    linear-gradient(315deg, rgba(93, 214, 255, 0.12), transparent 38%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-card__shine {
  opacity: 1;
}

.service-card.is-highlighted {
  border-color: rgba(255, 184, 108, 0.44);
  background:
    linear-gradient(180deg, rgba(255, 122, 24, 0.11), rgba(10, 18, 32, 0.82)),
    var(--panel);
}

.service-card__top {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
}

.service-card__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.service-card__icon {
  display: inline-grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(93, 214, 255, 0.22);
  border-radius: 8px;
  color: var(--accent-cold);
  background: rgba(93, 214, 255, 0.09);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  padding: 12px 14px;
  color: #06101c;
  background: linear-gradient(135deg, #25d366, #8fffb7);
  font-weight: 900;
  text-align: center;
  box-shadow: 0 16px 34px rgba(37, 211, 102, 0.16);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-card__cta :deep(svg) {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
}

.service-card__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 42px rgba(37, 211, 102, 0.24);
}

</style>
