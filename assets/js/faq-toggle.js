document.addEventListener('DOMContentLoaded', function () {
  const faqRoot = document.querySelector('.page-faq');
  if (!faqRoot) return;

  const details = Array.from(faqRoot.querySelectorAll('details'));

  function ensureContentWrapper(d) {
    let content = d.querySelector('.faq-content');
    if (!content) {
      // wrap all non-summary element nodes into .faq-content
      content = document.createElement('div');
      content.className = 'faq-content';
      const nodes = Array.from(d.childNodes).filter(n => !(n.nodeType === 1 && n.tagName.toLowerCase() === 'summary'));
      nodes.forEach(n => content.appendChild(n));
      d.appendChild(content);
    }
    return content;
  }

  function updateDetail(d) {
    const summary = d.querySelector('summary');
    const content = ensureContentWrapper(d);
    if (summary) summary.setAttribute('aria-expanded', d.open ? 'true' : 'false');

    if (d.open) {
      // set exact max-height for smooth transition
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }
  }

  details.forEach(d => {
    const summary = d.querySelector('summary');
    ensureContentWrapper(d);
    if (summary) {
      summary.setAttribute('role', 'button');
      summary.setAttribute('aria-expanded', d.open ? 'true' : 'false');
      // keyboard support
      summary.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          d.open = !d.open;
          updateDetail(d);
        }
      });
    }
    // update on toggle
    d.addEventListener('toggle', function () { updateDetail(d); });
    // set initial heights
    updateDetail(d);
  });

  // recalc heights on resize
  let t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(function () {
      details.forEach(d => { if (d.open) updateDetail(d); });
    }, 120);
  });
});