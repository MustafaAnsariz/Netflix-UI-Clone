// Get modal element
var modal = document.getElementById("trailerModal");

// Get all buttons that open the modal
var previewButtons = document.querySelectorAll(".card-preview-button");

// Get <span> element that closes the modal
var span = document.querySelector(".close-button");

// YouTube Player API
var player;
var youtubeVideoId = "Kv5RKsqVe-Y"; // Updated video ID

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  // Player initialization is handled when the modal opens
}

// Function to open the modal and initialize/play the video
function openModal() {
  modal.style.display = "block";
  if (player) {
    player.playVideo();
  } else {
    player = new YT.Player("youtubePlayer", {
      height: "390",
      width: "640",
      videoId: youtubeVideoId,
      playerVars: {
        playsinline: 1,
        autoplay: 1, // Autoplay when modal opens
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  }
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo(); // Autoplay is handled in playerVars
}

// Function to close the modal and stop the video
function closeModal() {
  modal.style.display = "none";
  if (player && typeof player.stopVideo === "function") {
    player.stopVideo();
  }
}

// When the user clicks any preview button, open the modal
previewButtons.forEach(function (button) {
  button.onclick = openModal;
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
