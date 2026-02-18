// Content Protection Script
(function() {
  // Disable right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showProtectionMessage('Content is protected!');
    return false;
  });

  // Disable text selection
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });

  // Disable copy
  document.addEventListener('copy', function(e) {
    e.preventDefault();
    showProtectionMessage('Copying is not allowed!');
    return false;
  });

  // Disable cut
  document.addEventListener('cut', function(e) {
    e.preventDefault();
    showProtectionMessage('Cutting is not allowed!');
    return false;
  });

  // Disable drag on images
  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // Disable keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Disable Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
    if (
      (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
      (e.ctrlKey && (e.key === 'x' || e.key === 'X')) ||
      (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
      (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      showProtectionMessage('This action is not allowed!');
      return false;
    }
  });

  // Show protection message
  function showProtectionMessage(message) {
    const div = document.createElement('div');
    div.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
      padding: 20px 40px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1.2rem;
      z-index: 99999;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      animation: fadeInOut 2s ease;
    `;
    div.textContent = '🔒 ' + message;
    document.body.appendChild(div);
    
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  // Add animation style
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    /* Disable text selection globally */
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    
    /* Disable image dragging */
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: none !important;
    }
    
    /* Watermark overlay */
    body::after {
      content: '© Sorrel Properties 2026';
      position: fixed;
      bottom: 20px;
      right: 20px;
      font-size: 12px;
      color: rgba(0,0,0,0.3);
      z-index: 9999;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  // Console warning
  console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
  console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam!', 'color: red; font-size: 16px;');
  console.log('%c© Sorrel Properties 2026 - All Rights Reserved', 'color: #3b82f6; font-size: 14px;');
})();