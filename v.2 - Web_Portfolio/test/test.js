document.addEventListener('DOMContentLoaded', () => {
  const cardWraps = document.querySelectorAll('.carte-wrap');

  cardWraps.forEach((cardWrap) => {
    const card = cardWrap.querySelector('.carte');
    const cardBg = cardWrap.querySelector('.carte-bg'); 
    
    
    const imageUrl = cardWrap.getAttribute('data-image');
    if (imageUrl) {
      cardBg.style.backgroundImage = `url(${imageUrl})`;
    }

    let mouseLeaveTimeout;

    cardWrap.addEventListener('mousemove', (e) => {
      const width = cardWrap.offsetWidth;
      const height = cardWrap.offsetHeight;
      
      
      const rect = cardWrap.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      const mousePX = mouseX / width;
      const mousePY = mouseY / height;

      
      const rX = mousePX * 30;
      const rY = mousePY * -30;
      card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
      
      
      const tX = mousePX * -40;
      const tY = mousePY * -40;
      cardBg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    });

    cardWrap.addEventListener('mouseenter', () => {
      clearTimeout(mouseLeaveTimeout);
    });

    cardWrap.addEventListener('mouseleave', () => {
      mouseLeaveTimeout = setTimeout(() => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        cardBg.style.transform = 'translateX(0px) translateY(0px)';
      }, 1000);
    });
  });
});
