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
    
    const activeLink = document.querySelector(`nav ul li a[onclick="showTab('${tabId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active-link');
    }
}

// Ensure Home tab is active on page load
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => showTab('home'), 100);
});
