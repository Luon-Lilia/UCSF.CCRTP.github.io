/* ─── NAV: highlight current page ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  initDropZones();
  initTeamPhotoDrops();
});

/* ─── GENERIC FILE DROP ZONES ───────────────────────────────── */
function initDropZones() {
  document.querySelectorAll('.drop-zone').forEach(zone => {
    const input = zone.querySelector('input[type=file]');
    const fileList = zone.querySelector('.file-list');
    const accepts = (zone.dataset.accept || '').split(',').map(s => s.trim());

    zone.addEventListener('click', e => {
      if (e.target.classList.contains('file-remove')) return;
      input && input.click();
    });

    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      handleFiles(Array.from(e.dataTransfer.files), fileList, accepts);
    });

    input && input.addEventListener('change', () => {
      handleFiles(Array.from(input.files), fileList, accepts);
      input.value = '';
    });
  });
}

function handleFiles(files, listEl, accepts) {
  if (!listEl) return;
  files.forEach(file => {
    const ext = '.' + file.name.split('.').pop().toLowerCase();
    if (accepts.length && !accepts.includes(ext) && !accepts.includes('*')) {
      alert(`"${file.name}" is not an accepted file type (${accepts.join(', ')})`);
      return;
    }
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `
      <span>📄 ${file.name} <small style="color:var(--cool-gray)">(${formatBytes(file.size)})</small></span>
      <button class="file-remove" title="Remove">✕</button>
    `;
    item.querySelector('.file-remove').addEventListener('click', () => item.remove());
    listEl.appendChild(item);
  });
}

function formatBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1024 * 1024) return (b / 1024).toFixed(1) + ' KB';
  return (b / (1024 * 1024)).toFixed(1) + ' MB';
}

/* ─── TEAM PHOTO HOVER-DROP ─────────────────────────────────── */
function initTeamPhotoDrops() {
  document.querySelectorAll('.team-card').forEach(card => {
    const dropOverlay = card.querySelector('.team-photo-drop');
    const photoEl    = card.querySelector('.team-photo');
    if (!dropOverlay || !photoEl) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    card.appendChild(input);

    dropOverlay.addEventListener('click', () => input.click());

    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        let img = photoEl.querySelector('img');
        if (!img) {
          img = document.createElement('img');
          img.alt = 'Team member photo';
          photoEl.prepend(img);
        }
        img.src = e.target.result;
        const icon = photoEl.querySelector('.no-photo-icon');
        if (icon) icon.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });

    photoEl.addEventListener('dragover', e => { e.preventDefault(); card.classList.add('drag-over-card'); });
    photoEl.addEventListener('dragleave', () => card.classList.remove('drag-over-card'));
    photoEl.addEventListener('drop', e => {
      e.preventDefault();
      card.classList.remove('drag-over-card');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = ev => {
          let img = photoEl.querySelector('img');
          if (!img) { img = document.createElement('img'); img.alt = 'Team member photo'; photoEl.prepend(img); }
          img.src = ev.target.result;
          const icon = photoEl.querySelector('.no-photo-icon');
          if (icon) icon.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  });
}

/* ─── POSTER CARD DROP (posters.html) ───────────────────────── */
function initPosterDrops() {
  document.querySelectorAll('.poster-card').forEach(card => {
    const thumbEl = card.querySelector('.poster-thumb');
    if (!thumbEl) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.pdf';
    input.style.display = 'none';
    card.appendChild(input);

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:absolute;inset:0;background:rgba(5,32,73,.5);
      display:flex;align-items:center;justify-content:center;
      opacity:0;transition:opacity .15s;font-size:.75rem;
      color:#fff;font-weight:600;cursor:pointer;
    `;
    overlay.textContent = 'Drop or click to add poster';
    thumbEl.style.position = 'relative';
    thumbEl.appendChild(overlay);

    card.addEventListener('mouseenter', () => overlay.style.opacity = '1');
    card.addEventListener('mouseleave', () => overlay.style.opacity = '0');

    overlay.addEventListener('click', () => input.click());
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => {
          let img = thumbEl.querySelector('img');
          if (!img) { img = document.createElement('img'); img.alt = 'Poster'; thumbEl.prepend(img); }
          img.src = e.target.result;
          const ph = thumbEl.querySelector('.placeholder-icon');
          if (ph) ph.closest('.placeholder-wrap')?.remove();
        };
        reader.readAsDataURL(file);
      }
      const link = card.querySelector('.poster-link');
      if (link && file.type === 'application/pdf') {
        link.href = URL.createObjectURL(file);
        link.textContent = 'View PDF';
      }
    });
  });
}
