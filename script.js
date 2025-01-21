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
    
    var video=document.querySelectorAll('video')
    video.forEach(play=>play.addEventListener('click',()=>{play.classList.toggle('active');
       if(play.paused)
       {
        play.play();
       }
       else
       {
        play.pause();
        play.currentTime=0;
       }

    }));
// Function to toggle the letter
function toggleLetter(letterId) {
    const letter = document.getElementById(`letter-${letterId}`);
    letter.classList.toggle('show-letter');
}

// Function to close the letter
function closeLetter(letterId) {
    const letter = document.getElementById(`letter-${letterId}`);
    letter.classList.remove('show-letter');
}
    
});