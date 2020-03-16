'use strict';
{
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const result = ['大吉', '中吉', '末吉', '凶'];
    btn.textContent = result[Math.floor(Math.random() * result.length)];
    
  });
}