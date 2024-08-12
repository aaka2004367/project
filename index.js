document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById('banner');
  const bannerDescription = document.getElementById('banner-description');
  const bannerLink = document.getElementById('banner-link');
  const countdownElement = document.getElementById('countdown');

  const toggleBannerButton = document.getElementById('toggle-banner');
  const updateBannerTextButton = document.getElementById('update-banner-text');
  const setTimerButton = document.getElementById('set-timer');
  const updateBannerLinkButton = document.getElementById('update-banner-link');

  let countdownInterval;

  // Toggle Banner Visibility
  toggleBannerButton.addEventListener('click', () => {
      if (banner.style.display === 'none') {
          banner.style.display = 'block';
      } else {
          banner.style.display = 'none';
      }
  });

  // Update Banner Text
  updateBannerTextButton.addEventListener('click', () => {
      const newText = document.getElementById('banner-text').value;
      bannerDescription.textContent = newText;
  });

  // Update Banner Link
  updateBannerLinkButton.addEventListener('click', () => {
      const newUrl = document.getElementById('banner-url').value;
      bannerLink.href = newUrl;
  });

  // Set Timer
  setTimerButton.addEventListener('click', () => {
      const time = parseInt(document.getElementById('banner-timer').value);

      if (isNaN(time) || time <= 0) {
          alert('Please enter a valid time in seconds.');
          return;
      }

      clearInterval(countdownInterval);

      let timeLeft = time;
      countdownElement.textContent = `${timeLeft} seconds remaining`;

      countdownInterval = setInterval(() => {
          timeLeft -= 1;
          countdownElement.textContent = `${timeLeft} seconds remaining`;

          if (timeLeft <= 0) {
              clearInterval(countdownInterval);
              banner.style.display = 'none';
          }
      }, 1000);
  });
});
