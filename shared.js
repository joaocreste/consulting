/* ==========================================================================
   JC Consulting & Advisory — Education
   Shared scripts: scroll reveal + quiz + helpers
   ========================================================================== */

// ── Scroll reveal ─────────────────────────────────────────────
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
})();

// ── Quiz blocks ───────────────────────────────────────────────
// Each .quiz has data-correct="A|B|C|D"; choices have data-letter
document.querySelectorAll('.quiz').forEach(quiz => {
  const correct = quiz.dataset.correct;
  const choices = quiz.querySelectorAll('.q-choice');
  choices.forEach(ch => {
    ch.addEventListener('click', () => {
      if (quiz.classList.contains('answered')) return;
      quiz.classList.add('answered');
      const picked = ch.dataset.letter;
      choices.forEach(c => {
        c.classList.add('locked');
        if (c.dataset.letter === correct) c.classList.add('correct');
        else if (c.dataset.letter === picked) c.classList.add('incorrect');
      });
    });
  });
});

// ── Number formatting helpers ─────────────────────────────────
window.fmt = {
  money: (v, d = 0) => {
    if (!isFinite(v)) return '—';
    return v.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d });
  },
  num: (v, d = 0) => {
    if (!isFinite(v)) return '—';
    return v.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: 0 });
  },
  pct: (v, d = 1) => {
    if (!isFinite(v)) return '—';
    return v.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d }) + '%';
  }
};

// ── parseInput: tolerant numeric input ────────────────────────
window.parseInput = (el) => {
  if (!el) return 0;
  const v = parseFloat(String(el.value).replace(/[, ]/g, ''));
  return isNaN(v) ? 0 : v;
};
