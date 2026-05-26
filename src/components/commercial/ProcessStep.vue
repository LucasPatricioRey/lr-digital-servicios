<script setup>
import { computed } from "vue";
import {
  ClipboardList,
  CreditCard,
  FileText,
  Headphones,
  Rocket,
  Wrench
} from "@lucide/vue";

const props = defineProps({
  step: {
    type: Object,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
});

const icons = [ClipboardList, FileText, CreditCard, Wrench, Rocket, Headphones];
const stepIcon = computed(() => icons[props.number - 1] || ClipboardList);
</script>

<template>
  <article class="process-step glass-panel">
    <div class="process-step__top">
      <span>{{ String(number).padStart(2, "0") }}</span>
      <component :is="stepIcon" :size="22" :stroke-width="2.4" aria-hidden="true" />
    </div>
    <h3>{{ step.title }}</h3>
    <p>{{ step.text }}</p>
  </article>
</template>

<style scoped>
.process-step {
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

.process-step::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 184, 108, 0.12), transparent 42%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 184, 108, 0.32);
}

.process-step:hover::before {
  opacity: 1;
}

.process-step__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.process-step__top svg {
  color: var(--accent-cold);
}

span {
  display: inline-grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 8px;
  color: #07111f;
  background: linear-gradient(135deg, var(--accent-soft), #fff0c2);
  font-size: 0.92rem;
  font-weight: 900;
}

h3,
p {
  position: relative;
  z-index: 1;
}

h3 {
  margin-bottom: 10px;
  font-size: 1.16rem;
}

p {
  color: var(--muted);
  line-height: 1.7;
}
</style>
