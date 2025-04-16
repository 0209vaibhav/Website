function showTab(tabId) {
    // Hide all tab content sections
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });
    
    // Find and display the selected tab
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
    
    // Update active link styling
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active-link');
    });
    
    document.querySelectorAll(`nav ul li a`).forEach(link => {
        if (link.getAttribute("onclick") === `showTab('${tabId}')`) {
            link.classList.add('active-link');
        }
    });
}

// Ensure About tab is active on page load
document.addEventListener("DOMContentLoaded", function() {
    showTab('about');
});

// Add hover pop-up behavior
document.querySelectorAll('.hover-popup').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const popup = document.createElement('span');
        popup.className = 'popup-box';
        popup.innerText = this.getAttribute('data-hover');
        document.body.appendChild(popup);
        
        const rect = this.getBoundingClientRect();
        popup.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
        popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
        popup.style.transform = 'translateX(-50%)';
    });
    
    item.addEventListener('mouseleave', function() {
        document.querySelectorAll('.popup-box').forEach(popup => popup.remove());
    });
    
    // Add click functionality to open respective links
    item.addEventListener('click', function() {
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
});
