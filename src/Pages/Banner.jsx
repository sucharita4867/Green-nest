import React from "react";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="
            https://i.ibb.co/nsms9KWc/slaider6.jpg
            "
            className="w-full h-[360px] brightness-60"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❮
            </a>
            <p className="text-white text-xl font-medium text-center">
              "From a tiny seed beneath the soil, life awakens — bringing
              freshness, hope, and a touch of nature to your home."
            </p>
            <a
              href="#slide2"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/TdyWfr0/slaider8.jpg"
            className="w-full h-[360px] brightness-60"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❮
            </a>
            <p className="text-white text-xl font-medium text-center">
              "Watch nature’s magic unfold as a small plant rises from the
              earth, spreading calmness and pure green energy around you."
            </p>
            <a
              href="#slide3"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/DsRvnbg/slaider1.jpg"
            className="w-full h-[360px] brightness-60"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❮
            </a>
            <p className="text-white text-xl font-medium text-center">
              "Every sprouting leaf tells a story of growth, peace, and love —
              turning your space into a living garden of happiness."
            </p>
            <a
              href="#slide4"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/dw6X9WDc/slaider-7.jpg"
            className="w-full h-[360px] brightness-60"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❮
            </a>
            <p className="text-white text-xl font-medium text-center">
              "From soil to sunlight, a tiny plant begins its journey —
              nurturing your home with beauty, air, and positive vibes."
            </p>
            <a
              href="#slide1"
              className="btn btn-circle text-[#0D3C00] text-2xl"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
