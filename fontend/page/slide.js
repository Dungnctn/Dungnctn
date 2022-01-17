const Slider = {
    render() {
        return /*html*/ `
        <div class="max-w-9xl mx-auto">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://theme.hstatic.net/1000184601/1000766836/14/slide_4.jpg?v=1223" alt="" class="w-1495px">
          </div>
          <div class="carousel-item">
            <img src="https://theme.hstatic.net/1000184601/1000766836/14/slide_1.jpg?v=1223" alt="">
          </div>
          <div class="carousel-item">
            <img src="https://theme.hstatic.net/1000184601/1000766836/14/slide_5.jpg?v=1223" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        
      </div>
      `
    }

}
export default Slider