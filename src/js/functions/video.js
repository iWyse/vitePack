function findVideos() {
    let videos = document.querySelectorAll(".video");
    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector(".video__link");
    let media = video.querySelector(".video__media");
    let button = video.querySelector(".video__button");
    let id = link.getAttribute("href");

    video.addEventListener("click", () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute("href");
    video.classList.add("video--enabled");
}

function createIframe(id) {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("src", generateURL(id));
    iframe.classList.add("video__media");
    return iframe;
}

function generateURL(id) {
    let query = "?rel=0&showinfo=0&autoplay=1";
    return id + query;
}

findVideos();
