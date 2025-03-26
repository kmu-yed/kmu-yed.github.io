const targets = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

targets.forEach(target => observer.observe(target));

const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn')


function playAudio() {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();  
}

function stopAudio() {
  audioContainer.pause();  
}

function loadAudio() {
  const source = document.querySelector('#audioSource');  
  source.src = 'audio/music.mp3';
  audioContainer.load();
  playAudio();
}



playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);

const tmiEls = document.querySelectorAll('.tmi');

const onScroll = () => {
  tmiEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
