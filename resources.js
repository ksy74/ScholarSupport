document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.resource-card'));
  const topicFilters = document.getElementById('topicFilters');
  const langFilters = document.getElementById('langFilters');
  const emptyState = document.getElementById('emptyState');
  if (!cards.length || !topicFilters || !langFilters) return;

  let activeTopic = 'all';
  let activeLang = 'all';

  function apply() {
    let visibleCount = 0;
    cards.forEach(card => {
      const matchesTopic = activeTopic === 'all' || card.dataset.topic === activeTopic;
      const matchesLang = activeLang === 'all' || card.dataset.lang === activeLang;
      const show = matchesTopic && matchesLang;
      card.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    });
    emptyState.classList.toggle('show', visibleCount === 0);
  }

  function wireGroup(group, onSelect) {
    group.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      group.querySelectorAll('.filter-chip').forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      onSelect(btn.dataset.topic ?? btn.dataset.lang);
      apply();
    });
  }

  wireGroup(topicFilters, (val) => { activeTopic = val; });
  wireGroup(langFilters, (val) => { activeLang = val; });
});
