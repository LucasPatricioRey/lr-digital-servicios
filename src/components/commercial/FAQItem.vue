<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <details class="faq-item glass-panel">
    <summary>{{ item.question }}</summary>
    <p>{{ item.answer }}</p>
  </details>
</template>

<style scoped>
.faq-item {
  border-radius: 18px;
  padding: 0;
  overflow: hidden;
}

summary {
  cursor: pointer;
  padding: 18px 20px;
  color: var(--text);
  font-weight: 850;
  line-height: 1.35;
  list-style-position: inside;
}

p {
  border-top: 1px solid rgba(168, 180, 200, 0.12);
  padding: 0 20px 18px;
  color: var(--muted);
  line-height: 1.75;
}
</style>
