<script setup>
import { CheckCircle2, Wrench } from "@lucide/vue";

defineProps({
  plan: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article :class="['pricing-card', 'glass-panel', { 'is-highlighted': plan.highlighted }]">
    <div class="pricing-card__top">
      <span class="pricing-card__icon" aria-hidden="true">
        <Wrench :size="20" :stroke-width="2.5" />
      </span>
      <div>
        <h3>{{ plan.title }}</h3>
        <strong>{{ plan.price }}</strong>
      </div>
    </div>
    <ul>
      <li v-for="item in plan.includes" :key="item">
        <CheckCircle2 :size="16" :stroke-width="2.6" aria-hidden="true" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.pricing-card {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  border-radius: 8px;
  padding: 22px;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  border-color: rgba(93, 214, 255, 0.32);
}

.pricing-card.is-highlighted {
  border-color: rgba(93, 214, 255, 0.4);
  background:
    linear-gradient(180deg, rgba(93, 214, 255, 0.09), rgba(10, 18, 32, 0.82)),
    var(--panel);
}

.pricing-card__top {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.pricing-card__icon {
  display: inline-grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 8px;
  color: var(--accent-cold);
  background: rgba(93, 214, 255, 0.1);
}

h3 {
  margin-bottom: 6px;
  font-size: 1.28rem;
}

strong {
  display: block;
  color: var(--accent-cold);
  font-size: 1.18rem;
}

ul {
  display: grid;
  gap: 10px;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: var(--muted);
  line-height: 1.6;
}

li svg {
  flex: 0 0 auto;
  margin-top: 4px;
  color: var(--accent-soft);
}
</style>
