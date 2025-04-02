document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(accordionItem => {
          accordionItem.classList.remove('active');
          const content = accordionItem.querySelector('.accordion-content');
          content.classList.add('hidden');
          const btn = accordionItem.querySelector('.toggle-btn');
          btn.classList.remove('minus');
          btn.classList.add('plus');
        });
        
        // If the clicked item wasn't already active, open it
        if (!isActive) {
          item.classList.add('active');
          const content = item.querySelector('.accordion-content');
          content.classList.remove('hidden');
          const btn = item.querySelector('.toggle-btn');
          btn.classList.remove('plus');
          btn.classList.add('minus');
        }
      });
    });
  });