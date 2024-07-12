const openVideo = document.getElementById("input-file");
const openVideoBtn = document.getElementById("open-btn");
const mainElement = document.getElementById("main-id");
const speedUpElement = document.getElementById("speed-up");
const speedDownElement = document.getElementById("speed-down");
const volumeUpElement = document.getElementById("volume-up");
const volumeDownElement = document.getElementById("volume-down");
const toastMessage = document.getElementById("toast");

const inputHandler = (obj) => {
    openVideo.click();
}
openVideoBtn.addEventListener("click", inputHandler);

openVideo.addEventListener("change", (obj) => {
    console.log(obj);
    const video = obj.target.files[0]; 
    const link = URL.createObjectURL(video);
    const videoElement = document.createElement("video");
    videoElement.src = link;
    videoElement.play();
    videoElement.setAttribute("id", "video")
    mainElement.appendChild(videoElement);
})
