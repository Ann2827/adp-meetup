class Video {
  constructor(video, button, step = 1) {
    this.video = video;
    this.button = button;
    this.step = step;
    this.counter = 1;

    this.next = this.next.bind(this);
    this.button.addEventListener('click', this.next);
  }

  async next() {
    this.video.play().then(() => setTimeout(() => {
      this.video.pause();
      this.video.currentTime = this.counter * this.step;
      this.counter ++;
      if (this.video.duration < this.counter) this.counter = 1;
    }, this.step * 1000));
  }
}

export default Video;
