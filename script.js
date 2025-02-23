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
    showTab('home');
});

// Add hover pop-up behavior
document.querySelectorAll('.hover-popup').forEach(item => {
    let popup = null;
    let timeoutId = null;
    
    function createPopup() {
        if (popup) return; // Don't create if already exists
        
        popup = document.createElement('div');
        popup.className = 'popup-box';
        
        const content = item.getAttribute('data-hover');
        
        if (content.includes('&#10;')) {
            // Handle multiple lines (emails)
            const emails = content.split('&#10;');
            const container = document.createElement('div');
            container.className = 'popup-content';
            
            emails.forEach(email => {
                const lineDiv = document.createElement('div');
                lineDiv.className = 'popup-line';
                lineDiv.style.display = 'flex';
                lineDiv.style.alignItems = 'center';
                
                const textSpan = document.createElement('span');
                textSpan.innerText = email;
                
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-btn';
                copyButton.style.marginLeft = '2px';
                copyButton.innerHTML = '📋';
                copyButton.onclick = (e) => {
                    e.stopPropagation();
                    copyText(email);
                };
                
                lineDiv.appendChild(textSpan);
                lineDiv.appendChild(copyButton);
                container.appendChild(lineDiv);
            });
            
            popup.appendChild(container);
        } else {
            // Handle single line (other contact info)
            const lineDiv = document.createElement('div');
            lineDiv.className = 'popup-line';
            
            const textSpan = document.createElement('span');
            textSpan.innerText = content;
            
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.innerHTML = '📋';
            copyButton.onclick = (e) => {
                e.stopPropagation();
                copyText(content);
            };
            
            lineDiv.appendChild(textSpan);
            lineDiv.appendChild(copyButton);
            popup.appendChild(lineDiv);
        }
        
        document.body.appendChild(popup);
        
        const rect = item.getBoundingClientRect();
        popup.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
        popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
        popup.style.transform = 'translateX(-50%)';
    }
    
    function removePopup() {
        if (popup) {
            popup.remove();
            popup = null;
        }
    }
    
    function clearRemovalTimeout() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }
    
    item.addEventListener('mouseenter', () => {
        clearRemovalTimeout();
        createPopup();
    });
    
    item.addEventListener('mouseleave', () => {
        clearRemovalTimeout();
        timeoutId = setTimeout(() => {
            const isMouseOverPopup = popup && popup.matches(':hover');
            if (!isMouseOverPopup) {
                removePopup();
            }
        }, 100);
    });
    
    // Add event listeners to the document to handle popup hover
    document.addEventListener('mouseover', (e) => {
        if (popup && (e.target === popup || popup.contains(e.target))) {
            clearRemovalTimeout();
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (popup && (e.target === popup || popup.contains(e.target))) {
            clearRemovalTimeout();
            timeoutId = setTimeout(() => {
                const isMouseOverTrigger = item.matches(':hover');
                const isMouseOverPopup = popup.matches(':hover');
                if (!isMouseOverTrigger && !isMouseOverPopup) {
                    removePopup();
                }
            }, 100);
        }
    });

    // Keep the rest of your click handler for opening links...
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

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show a brief "Copied!" message
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = 'Copied!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
