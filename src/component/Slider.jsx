import React from 'react'
import "../css/slider.css"
export function Slider() {
  return (
    <>
    <div>
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://img.freepik.com/free-photo/whipped-cream-chocolate-berries-galore-gourmet-indulgence-generated-by-ai_188544-9812.jpg?t=st=1715687970~exp=1715691570~hmac=f340e26085234b8d5218966ffc1b470f378cb4d0129c4d2d07a53f8fa14a67eb&w=1060" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://img.freepik.com/free-photo/various-homemade-mini-tartlets-with-nuts-chocolate-cream_114579-41738.jpg?t=st=1715687833~exp=1715691433~hmac=09a6ccbc974f941e916694b96c9fb3eb5b4e610aed87781aa2ae14668c0f72c9&w=996" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://img.freepik.com/free-photo/tasty-homemade-tiramisu-cake_114579-85350.jpg?t=st=1715688064~exp=1715691664~hmac=9e90b15fbfe90738f5fba3289c5fd22e3c2d2aec0240ec7efe2e8869933ec69d&w=996" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  </>
  )
}

