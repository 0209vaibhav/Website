function showTab(tabId) {
    // Remove the 'active' class from all tab content sections
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.remove('active');
    });
  
    // Add the 'active' class to the selected tab
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  
    // Update active link styling
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.remove('active-link');
      if (link.dataset.tab === tabId) {
        link.classList.add('active-link');
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Set default active tab (for example, 'about')
    showTab('about');
  
    // Attach click event listeners to navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showTab(this.dataset.tab);
      });
    });
  
    // Setup dynamic popup for contact info elements
    document.querySelectorAll('.hover-popup').forEach(item => {
      let removalTimer = null;
      
      // When clicking the contact element (but not its copy icon) open the corresponding link
      item.addEventListener('click', function(e) {
        if (e.target.classList.contains('copy-icon')) return;
        
        const dataHover = this.getAttribute('data-hover');
        let url = '';
  
        if (dataHover.includes('@')) {
          url = `mailto:${dataHover}`;
        } else if (dataHover.includes('+')) {
          url = `tel:${dataHover.replace(/\s+/g, '')}`;
        } else if (dataHover.includes('linkedin.com')) {
          url = `https://${dataHover}`;
        } else if (dataHover.includes('github.com')) {
          url = `https://${dataHover}`;
        }
  
        if (url) {
          window.open(url, '_blank');
        }
      });
  
      // Create popup on mouseenter
      item.addEventListener('mouseenter', function() {
        // Create the popup container
        const popup = document.createElement('div');
        popup.className = 'popup-box';
        
        // Create span for the text
        const textSpan = document.createElement('span');
        textSpan.className = 'popup-text';
        textSpan.innerText = this.getAttribute('data-hover');
        popup.appendChild(textSpan);
        
        // Create the copy icon
        const copyIcon = document.createElement('span');
        copyIcon.className = 'copy-icon';
        copyIcon.innerHTML = '📋'; // clipboard icon
        popup.appendChild(copyIcon);
        
        // Copy text when clicking the icon
        copyIcon.addEventListener('click', function(e) {
          e.stopPropagation();
          navigator.clipboard.writeText(textSpan.innerText).then(() => {
            copyIcon.innerHTML = '✅'; // show check mark
            setTimeout(() => {
              copyIcon.innerHTML = '📋';
            }, 2000);
          });
        });
        
        document.body.appendChild(popup);
        // Store reference on the item for later removal
        item.popupBox = popup;
        
        // Position the popup below the hovered element (centered)
        const rect = item.getBoundingClientRect();
        popup.style.left = rect.left + rect.width / 2 + window.scrollX + 'px';
        popup.style.top = rect.bottom + window.scrollY + 5 + 'px';
        popup.style.transform = 'translateX(-50%)';
        
        // When mouse enters the popup, cancel any pending removal
        popup.addEventListener('mouseenter', function() {
          if (removalTimer) {
            clearTimeout(removalTimer);
            removalTimer = null;
          }
        });
        // When mouse leaves the popup, remove it
        popup.addEventListener('mouseleave', function() {
          popup.remove();
        });
      });
  
      // On mouseleave of the contact element, delay removal of the popup
      item.addEventListener('mouseleave', function() {
        removalTimer = setTimeout(() => {
          if (item.popupBox) {
            item.popupBox.remove();
            item.popupBox = null;
          }
        }, 300);
      });
    });
  });
  