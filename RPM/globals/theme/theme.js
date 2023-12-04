// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

// Add an event listener to your theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
  if (document.body.classList.contains('dark-theme')) {
    // Switch to light theme
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to dark theme
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});