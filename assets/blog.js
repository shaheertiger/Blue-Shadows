/* Shared behaviour for /blog pages */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Nav ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));

/* ---------- Category filter (blog index only) ---------- */
const filters = document.getElementById('filters');
if(filters){
  filters.addEventListener('click', e=>{
    const btn = e.target.closest('.chip');
    if(!btn) return;
    filters.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('#postGrid .post-card').forEach(card=>{
      card.hidden = !(cat === 'all' || card.dataset.cat === cat);
    });
  });
}

/* ---------- Google Ads: click-to-call conversion ---------- */
document.addEventListener('click', e=>{
  if(!e.target.closest('a[href^="tel:"]')) return;
  /* Fire and forget, same as the homepage: the dialer opens even if gtag.js is blocked. */
  if(typeof gtag_report_conversion === 'function') gtag_report_conversion();
});
