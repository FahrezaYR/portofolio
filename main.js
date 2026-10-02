// Fungsi Portofolio
const text = "Halo, semua! Perkenalkan, nama saya Fahreza Yurian Rastafara! Anak IT asal Lampung, Indonesia!";
let index = 0;

function typeEffect() {
  const typingTextElement = document.getElementById('typing-text');
  const cursorElement = document.getElementById('cursor');
  
  if (typingTextElement && index < text.length) {
    typingTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  } else {
    if (cursorElement) cursorElement.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
});