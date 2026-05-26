<script setup>
import { computed } from "vue";
import { MessageCircle, Send } from "@lucide/vue";
import { getWhatsappUrl } from "../../config/business";

const props = defineProps({
  label: {
    type: String,
    default: "Pedir propuesta por WhatsApp"
  },
  message: {
    type: String,
    default: ""
  },
  variant: {
    type: String,
    default: "primary"
  }
});

const whatsappUrl = computed(() => getWhatsappUrl(props.message || undefined));
</script>

<template>
  <a
    :href="whatsappUrl"
    :class="['whatsapp-button', `whatsapp-button--${variant}`]"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Pedir propuesta por WhatsApp a Lucas Rey"
  >
    <span class="whatsapp-icon" aria-hidden="true">
      <MessageCircle :size="18" :stroke-width="2.6" />
    </span>
    <span>{{ label }}</span>
    <Send class="whatsapp-button__arrow" :size="17" :stroke-width="2.6" aria-hidden="true" />
  </a>
</template>

<style scoped>
.whatsapp-button {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  padding: 13px 16px;
  font-weight: 850;
  line-height: 1.1;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.25s ease;
}

.whatsapp-button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.34) 45%, transparent 58%);
  transform: translateX(-120%);
  transition: transform 0.65s ease;
}

.whatsapp-button > * {
  position: relative;
  z-index: 1;
}

.whatsapp-button:hover {
  transform: translateY(-3px);
}

.whatsapp-button:hover::before {
  transform: translateX(120%);
}

.whatsapp-button--primary {
  color: #06101c;
  background: linear-gradient(135deg, #25d366, #8fffb7);
  box-shadow:
    0 18px 42px rgba(37, 211, 102, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.whatsapp-button--dark {
  color: var(--text);
  border: 1px solid rgba(168, 180, 200, 0.22);
  background: rgba(255, 255, 255, 0.06);
}

.whatsapp-icon {
  display: inline-grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border-radius: 50%;
  color: #06101c;
  background: rgba(255, 255, 255, 0.82);
}

.whatsapp-button__arrow {
  transition: transform 0.2s ease;
}

.whatsapp-button:hover .whatsapp-button__arrow {
  transform: translate(3px, -2px);
}

@media (max-width: 560px) {
  .whatsapp-button {
    width: 100%;
    min-height: 54px;
  }
}
</style>
