class Video {
  constructor(video, button) {
    this.video = video;
    this.button = button;

    this.next = this.next.bind(this);
    this.button.addEventListener('click', this.next);
  }

  next() {
    this.video.play();
    setTimeout(() => this.video.pause(), 1000);
  }
}

export default Video;
