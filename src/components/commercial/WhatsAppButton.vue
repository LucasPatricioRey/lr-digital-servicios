<script setup>
import { computed } from "vue";
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
    <span class="whatsapp-icon" aria-hidden="true">WA</span>
    {{ label }}
  </a>
</template>

<style scoped>
.whatsapp-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 850;
  line-height: 1.1;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.25s ease;
}

.whatsapp-button:hover {
  transform: translateY(-3px);
}

.whatsapp-button--primary {
  color: #06101c;
  background: linear-gradient(135deg, #25d366, #8fffb7);
  box-shadow: 0 18px 42px rgba(37, 211, 102, 0.2);
}

.whatsapp-button--dark {
  color: var(--text);
  border: 1px solid rgba(168, 180, 200, 0.22);
  background: rgba(255, 255, 255, 0.06);
}

.whatsapp-icon {
  display: inline-grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 50%;
  color: #06101c;
  background: rgba(255, 255, 255, 0.82);
  font-size: 0.68rem;
  font-weight: 900;
}

@media (max-width: 560px) {
  .whatsapp-button {
    width: 100%;
    min-height: 54px;
  }
}
</style>
