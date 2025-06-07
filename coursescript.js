const markWatchedBtn = document.getElementById('markWatchedBtn');
const videoStatus = document.getElementById('videoStatus');

// Check localStorage on load
window.addEventListener('load', () => {
  if(localStorage.getItem('lesson1Watched') === 'true') {
    videoStatus.textContent = 'You have already watched this lesson.';
    markWatchedBtn.disabled = true;
    markWatchedBtn.style.backgroundColor = 'gray';
    markWatchedBtn.style.cursor = 'not-allowed';
  }
});

markWatchedBtn.addEventListener('click', () => {
  localStorage.setItem('lesson1Watched', 'true');
  videoStatus.textContent = 'Marked as watched!';
  markWatchedBtn.disabled = true;
  markWatchedBtn.style.backgroundColor = 'gray';
  markWatchedBtn.style.cursor = 'not-allowed';
});


// quiz section

  const quizForm = document.getElementById('quizForm');
  const quizResult = document.getElementById('quizResult');

  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const selected = quizForm.answer.value;
    if(!selected){
      quizResult.textContent = "Please select an answer!";
      quizResult.style.color = "red";
      return;
    }

    if(selected === 'a'){
      quizResult.textContent = "Correct! HTML stands for Hyper Text Markup Language.";
      quizResult.style.color = "green";
    } else {
      quizResult.textContent = "Incorrect! Try again.";
      quizResult.style.color = "red";
    }
  });
//** Quize section */ 

// progress tracking

const videoKey = 'videoWatched';

// Check saved status on page load
if(localStorage.getItem(videoKey) === 'true'){
  videoStatus.textContent = 'Video watched ✔️';
  markWatchedBtn.disabled = true;
  markWatchedBtn.textContent = 'Watched';
}

markWatchedBtn.addEventListener('click', () => {
  localStorage.setItem(videoKey, 'true');
  videoStatus.textContent = 'Video watched ✔️';
  markWatchedBtn.disabled = true;
  markWatchedBtn.textContent = 'Watched';
});
//** progress tracking */
