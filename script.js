document.getElementById('toggleLink').addEventListener('click', function(e) {
    e.preventDefault();  // prevents jumping to the anchor
    const content = document.getElementById('myContent');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });

