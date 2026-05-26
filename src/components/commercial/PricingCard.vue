<script setup>
defineProps({
  plan: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article :class="['pricing-card', 'glass-panel', { 'is-highlighted': plan.highlighted }]">
    <h3>{{ plan.title }}</h3>
    <strong>{{ plan.price }}</strong>
    <ul>
      <li v-for="item in plan.includes" :key="item">{{ item }}</li>
    </ul>
  </article>
</template>

<style scoped>
.pricing-card {
  min-height: 100%;
  border-radius: 22px;
  padding: 24px;
}

.pricing-card.is-highlighted {
  border-color: rgba(93, 214, 255, 0.4);
  background:
    linear-gradient(180deg, rgba(93, 214, 255, 0.09), rgba(10, 18, 32, 0.82)),
    var(--panel);
}

h3 {
  margin-bottom: 10px;
  font-size: 1.28rem;
}

strong {
  display: block;
  margin-bottom: 20px;
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
  position: relative;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.6;
}

li::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-soft);
}
</style>
