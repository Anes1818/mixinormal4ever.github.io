const starContainer = document.createElement('div');
starContainer.className = 'stars';
document.body.appendChild(starContainer);

for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top =' ${Math.random() * 100}%';
  star.style.left = '${Math.random() * 100}%';
  starContainer.appendChild(star);
}