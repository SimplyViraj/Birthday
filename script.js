document.addEventListener('DOMContentLoaded', () => {
    const videos = document.getElementById('birthdayVideo');
    const image = document.getElementById('birthdayImage');
    
    // Ensure the video fits the viewport
    videos.style.width = '100%';
    videos.style.height = '100vh';
    videos.style.objectFit = 'cover';


    videos.addEventListener('ended', () => {
        videos.style.display = 'none';
        image.style.display = 'block';
        image.src = videos.currentSrc; 
    });
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.video-container');
        const videos = container.querySelectorAll('.video');
        const scrollSpeed = 1; // Adjust speed as needed
        let scrollPosition = 0;
    
        // Clone the videos and append them to the container
        const clonedVideos = Array.from(videos).map(video => video.cloneNode(true));
        container.append(...clonedVideos);
    
        function scrollCarousel() {
            scrollPosition -= scrollSpeed;
    
            // Check if we've scrolled past the original set of videos
            if (Math.abs(scrollPosition) >= container.scrollWidth / 2) {
                // Reset scroll position to the start without transition
                scrollPosition = 0;
                container.style.transition = 'none'; // Disable transition for reset
                container.style.transform = `translateX(${scrollPosition}px)`;
    
                // Re-enable transition after reset
                setTimeout(() => {
                    container.style.transition = 'transform 0.5s ease-in-out';
                }, 0);
            }
    
            // Apply the scroll position
            container.style.transform = `translateX(${scrollPosition}px)`;
    
            // Continue the animation
            requestAnimationFrame(scrollCarousel);
        }
    
        // Start the carousel
        scrollCarousel();
    });
    
    
    const videok = document.querySelectorAll('.video video');

    videok.forEach(video => {
        video.addEventListener('click', () => {
            // Toggle the active class on the parent container
            const parent = video.parentElement;
            parent.classList.toggle('active');

            // Play or pause the video
            if (video.paused) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }

            // Handle full-screen mode
            if (parent.classList.contains('active')) {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) { // Safari
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) { // IE/Edge
                    video.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { // Safari
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { // IE/Edge
                    document.msExitFullscreen();
                }
            }
        });
    });
});