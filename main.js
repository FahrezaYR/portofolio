// Fungsi Portofolio
const text = "Halo, semua! Perkenalkan, nama saya Fahreza Yurian Rastafara! Anak IT asal Lampung, Indonesia!";
let index = 0;

function typeEffect() {
  if (document.getElementById('typing-text') && index < text.length) {
    document.getElementById('typing-text').textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  } else {
    if (document.getElementById('cursor')) document.getElementById('cursor').style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  
  if (document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();
});