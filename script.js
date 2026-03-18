document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- Search Bar functionality ---
  const searchInputs = document.querySelectorAll('.hero-search-input');
  const searchBtns = document.querySelectorAll('.hero-search-btn');

  const performSearch = (inputElement) => {
    if (!inputElement) return;
    const query = inputElement.value.toLowerCase().trim();
    
    // Check if we are on the industries page
    const isIndustriesPage = window.location.pathname.includes('industries.html') || document.title.includes('Industries');
    
    if (isIndustriesPage) {
      // Filter existing cards
      const cards = document.querySelectorAll('.industry-card');
      let foundAny = false;
      cards.forEach(card => {
        const titleElement = card.querySelector('.industry-title');
        const titleText = titleElement ? titleElement.textContent.toLowerCase() : card.textContent.toLowerCase();
        
        if (titleText.includes(query)) {
          card.style.display = 'flex'; // `.with-img` cards use flex behavior
          foundAny = true;
        } else {
          card.style.display = 'none';
        }
      });

      // Handle no results visibility (optional enhancement)
      let noResultsMsg = document.getElementById('noResultsMsg');
      if (!foundAny && query !== '') {
        if (!noResultsMsg) {
          noResultsMsg = document.createElement('p');
          noResultsMsg.id = 'noResultsMsg';
          noResultsMsg.style.textAlign = 'center';
          noResultsMsg.style.width = '100%';
          noResultsMsg.style.gridColumn = '1 / -1';
          noResultsMsg.style.color = 'var(--text-light)';
          noResultsMsg.style.padding = '2rem';
          noResultsMsg.textContent = 'No industries matched your search.';
          document.querySelector('.industry-grid').appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
      } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
      }

    } else {
      // On Home or other page, redirect to industries page with query
      if (query) {
        window.location.href = `industries.html?q=${encodeURIComponent(query)}`;
      } else {
        window.location.href = 'industries.html';
      }
    }
  };

  // Bind all inputs and buttons on the page
  searchBtns.forEach((btn, index) => {
    const input = searchInputs[index];
    if (input) {
      btn.addEventListener('click', () => performSearch(input));
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          performSearch(input);
        }
      });
    }
  });

  // Check for search query on page load (e.g. redirected from home page)
  const isIndustriesPage = window.location.pathname.includes('industries.html') || document.title.includes('Industries');
  if (isIndustriesPage) {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    const mainInput = searchInputs[0];
    if (q && mainInput) {
      mainInput.value = q;
      performSearch(mainInput);
    }
    
    // Also attach real-time filtering if on industries page
    if (mainInput) {
      mainInput.addEventListener('input', () => performSearch(mainInput));
    }
  }

  // --- Counter Animation for Stats ---
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length > 0) {
    const animateCounters = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          const targetValue = parseInt(targetElement.getAttribute('data-target'));
          const suffix = targetElement.getAttribute('data-suffix') || '';
          
          let currentCount = 0;
          const duration = 2000; // 2 seconds animation
          const frames = 60; // 60 FPS
          const increment = targetValue / frames;
          const stepTime = duration / frames;
          
          const updateCounter = () => {
            currentCount += increment;
            if (currentCount < targetValue) {
              targetElement.textContent = `${Math.ceil(currentCount)}${suffix}`;
              setTimeout(updateCounter, stepTime);
            } else {
              targetElement.textContent = `${targetValue}${suffix}`;
            }
          };
          
          targetElement.textContent = `0${suffix}`;
          updateCounter();
          observer.unobserve(targetElement);
        }
      });
    };

    const counterObserver = new IntersectionObserver(animateCounters, {
      threshold: 0.5
    });

    statNumbers.forEach(stat => {
      counterObserver.observe(stat);
    });
  }

  // Brief golden highlight when service/industry cards are clicked.
  const clickableCards = document.querySelectorAll('.service-card, .industry-card');
  clickableCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.remove('clicked');
      // Force reflow so repeated clicks retrigger the effect.
      void card.offsetWidth;
      card.classList.add('clicked');
      setTimeout(() => {
        card.classList.remove('clicked');
      }, 450);
    });
  });
});
