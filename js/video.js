
function toggleList() {
    let listElement = document.getElementById('drop');
    
    if (listElement.style.display === "none") {
      listElement.style.display = "block";

    } else {
      listElement.style.display = "none";
    }
  }
  // ====================change theme=============// 
  let replacebutton = document.getElementById("replace");
  let theme1 =document.getElementById("theme1");
let theme2 =document.getElementById("theme2");

replacebutton.addEventListener('click', function () {
  if(theme2.hasAttribute('disabled')) {
      theme2.removeAttribute('disabled');
      theme1.setAttribute('disabled','disabled');
  }
  else {
      theme2.setAttribute('disabled','disabled');
      theme1.removeAttribute('disabled');
  }
});
// =========================display video===========//
function displayvideo(videoId) {
   
  // Get references to video elements and the current video
  const videoElements = document.querySelectorAll('video');
  const currentVideo = document.getElementById(videoId);

  // Hide all videos initially
  videoElements.forEach(video => video.style.display = 'none');
  // Show the selected video
  videoElements.forEach(video => video.pause());
    currentVideo.load();
    currentVideo.play();
  currentVideo.style.display = 'block';
  document.getElementById('poster').style.display='none';
}
// ===============================feetback=============//
function displayfeetback(id) {
  const feetback = document.getElementById(id);
      feetback.style.display='block';
}
// =====================change color icons===================//
const likeIcon = document.querySelector('.bx-like');
const dislikeIcon = document.querySelector('.bx-dislike');
const feedbackText = document.getElementById('p1');

likeIcon.addEventListener('click', function() {
  likeIcon.style.color = 'blue'; // Change color to blue on click
  dislikeIcon.style.color = 'black'; // Reset dislike icon color
  feedbackText.textContent = 'Thanks for the positive feedback!';
});

dislikeIcon.addEventListener('click', function() {
  dislikeIcon.style.color = 'red'; // Change color to red on click
  likeIcon.style.color = 'black';})
  