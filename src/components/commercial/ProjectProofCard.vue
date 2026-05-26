<script setup>
import { ExternalLink, Layers3 } from "@lucide/vue";

defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article class="proof-card glass-panel">
    <div v-if="project.preview" class="proof-card__media">
      <img :src="project.preview" :alt="`Vista previa de ${project.title}`" loading="lazy" />
    </div>

    <div class="proof-card__body">
      <p class="proof-card__type">{{ project.type }}</p>
      <div class="proof-card__title-row">
        <span class="proof-card__icon" aria-hidden="true">
          <Layers3 :size="20" :stroke-width="2.5" />
        </span>
        <h3>{{ project.title }}</h3>
      </div>
      <p class="proof-card__description">{{ project.description }}</p>

      <div class="proof-card__use">
        <span>Sirve para vender:</span>
        <p>{{ project.useFor }}</p>
      </div>

      <div class="tag-list" aria-label="Capacidades comerciales">
        <span v-for="tag in project.commercialTags" :key="tag" class="tag tag--commercial">
          {{ tag }}
        </span>
      </div>

      <details class="tech-details">
        <summary>Ver tecnologias usadas</summary>
        <div class="tag-list tag-list--tech" aria-label="Tecnologias usadas">
          <span v-for="tag in project.techTags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </details>

      <div class="proof-card__links">
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir demo del proyecto"
        >
          <span>Ver demo</span>
          <ExternalLink :size="16" :stroke-width="2.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.proof-card {
  position: relative;
  display: grid;
  min-height: 100%;
  overflow: hidden;
  border-radius: 8px;
  transition:
    transform 0.24s ease,
    border-color 0.24s ease;
}

.proof-card:hover {
  transform: translateY(-6px);
  border-color: rgba(93, 214, 255, 0.28);
}

.proof-card__media {
  position: relative;
  min-height: 190px;
  border-bottom: 1px solid rgba(168, 180, 200, 0.14);
  background: rgba(255, 255, 255, 0.04);
}

.proof-card__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(7, 17, 31, 0.68));
  opacity: 0.75;
}

.proof-card__media img {
  width: 100%;
  height: 100%;
  max-height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.proof-card:hover .proof-card__media img {
  transform: scale(1.04);
}

.proof-card__body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 22px;
}

.proof-card__type {
  color: var(--accent-soft);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h3 {
  font-size: 1.35rem;
}

.proof-card__title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.proof-card__icon {
  display: inline-grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 8px;
  color: var(--accent-cold);
  background: rgba(93, 214, 255, 0.1);
}

.proof-card__description,
.proof-card__use p {
  color: var(--muted);
  line-height: 1.7;
}

.proof-card__use {
  border-left: 3px solid var(--accent-cold);
  padding-left: 14px;
}

.proof-card__use span {
  display: block;
  margin-bottom: 4px;
  color: var(--text);
  font-weight: 850;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border-radius: 999px;
  border: 1px solid rgba(168, 180, 200, 0.18);
  padding: 7px 10px;
  color: #d8e1ef;
  background: rgba(255, 255, 255, 0.045);
  font-size: 0.8rem;
  font-weight: 760;
}

.tag--commercial {
  border-color: rgba(93, 214, 255, 0.26);
  background: rgba(93, 214, 255, 0.09);
}

.proof-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 6px;
}

.tech-details {
  margin-top: auto;
  color: var(--muted);
}

.tech-details summary {
  cursor: pointer;
  width: fit-content;
  font-size: 0.86rem;
  font-weight: 800;
}

.tag-list--tech {
  margin-top: 10px;
}

.proof-card__links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid rgba(168, 180, 200, 0.2);
  padding: 10px 13px;
  color: var(--text);
  font-weight: 800;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.proof-card__links a:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 184, 108, 0.42);
  background: rgba(255, 255, 255, 0.06);
}

.proof-card__links a svg {
  transition: transform 0.2s ease;
}

.proof-card__links a:hover svg {
  transform: translate(2px, -2px);
}
</style>
