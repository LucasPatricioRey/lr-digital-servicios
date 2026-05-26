<script setup>
import { ChevronDown, CircleHelp } from "@lucide/vue";

defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <details class="faq-item glass-panel">
    <summary>
      <span class="faq-item__icon" aria-hidden="true">
        <CircleHelp :size="19" :stroke-width="2.5" />
      </span>
      <span>{{ item.question }}</span>
      <ChevronDown class="faq-item__chevron" :size="20" :stroke-width="2.5" aria-hidden="true" />
    </summary>
    <p>{{ item.answer }}</p>
  </details>
</template>

<style scoped>
.faq-item {
  border-radius: 18px;
  padding: 0;
  overflow: hidden;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
}

.faq-item:hover {
  transform: translateY(-3px);
  border-color: rgba(93, 214, 255, 0.28);
}

summary {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 18px 20px;
  color: var(--text);
  font-weight: 850;
  line-height: 1.35;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

.faq-item__icon {
  display: inline-grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 12px;
  color: var(--accent-cold);
  background: rgba(93, 214, 255, 0.1);
}

.faq-item__chevron {
  color: var(--muted);
  transition: transform 0.2s ease;
}

.faq-item[open] .faq-item__chevron {
  transform: rotate(180deg);
}

p {
  border-top: 1px solid rgba(168, 180, 200, 0.12);
  padding: 0 20px 18px;
  color: var(--muted);
  line-height: 1.75;
}
</style>
