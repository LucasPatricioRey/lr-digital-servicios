<script setup>
defineProps({
  step: {
    type: Object,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <article class="process-step glass-panel">
    <span>{{ String(number).padStart(2, "0") }}</span>
    <h3>{{ step.title }}</h3>
    <p>{{ step.text }}</p>
  </article>
</template>

<style scoped>
.process-step {
  min-height: 100%;
  border-radius: 20px;
  padding: 22px;
}

span {
  display: inline-grid;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  place-items: center;
  border-radius: 14px;
  color: #07111f;
  background: linear-gradient(135deg, var(--accent-soft), #fff0c2);
  font-size: 0.92rem;
  font-weight: 900;
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
