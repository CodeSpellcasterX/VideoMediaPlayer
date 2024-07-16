const openVideo = document.getElementById("input-file");
const openVideoBtn = document.getElementById("open-btn");
const mainElement = document.getElementById("main-id");
const speedUpElement = document.getElementById("speed-up");
const speedDownElement = document.getElementById("speed-down");
const volumeUpElement = document.getElementById("volume-up");
const volumeDownElement = document.getElementById("volume-down");
const toastMessage = document.getElementById("toast");
const fullScreenElement = document.getElementById("full-screen");

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

volumeUpElement.addEventListener("click", () => {
    const videoElement = document.getElementById("video");
    if(videoElement!=null && video.volume<=0.9) {
        video.volume = video.volume+0.1;
    }
    toastMessage.style.display = "block"
    toastMessage.textContent = "Volume: " + video.volume * 100;
    setTimeout(() => {
        toastMessage.style.display = "none"
    },2000)
})

volumeDownElement.addEventListener("click", () => {
    const videoElement = document.getElementById("video");
    if(videoElement!=null && video.volume>=0.1) {
        video.volume = video.volume-0.1;
    }
    toastMessage.style.display = "block"
    toastMessage.textContent = "Volume: " + video.volume * 100;
    setTimeout(() => {
        toastMessage.style.display = "none"
    },2000)
})

speedUpElement.addEventListener("click", () => {
    const videoElement = document.getElementById("video");
    if(videoElement!=null && video.playbackRate<=2.5) {
        video.playbackRate = video.playbackRate+0.5;
    }
    toastMessage.style.display = "block"
    toastMessage.textContent = "Speed: " + video.playbackRate + "x";
    setTimeout(() => {
        toastMessage.style.display = "none"
    },2000)
})

speedDownElement.addEventListener("click", () => {
    const videoElement = document.getElementById("video");
    if(videoElement!=null && video.playbackRate>=1.0) {
        video.playbackRate = video.playbackRate-0.5;
    }
    toastMessage.style.display = "block"
    toastMessage.textContent = "Speed: " + video.playbackRate + "x";
    setTimeout(() => {
        toastMessage.style.display = "none"
    },2000)
})

fullScreenElement.addEventListener("click", () => {
    mainElement.requestFullscreen();
})