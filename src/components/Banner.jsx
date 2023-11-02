import { Link } from "react-router-dom";
import Slider from "react-slick";

import bannerImg from "../assets/images/slider-banner.jpg";
import sliderControl from "../assets/images/slider-control.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner tablet:h-[500px] relative h-[700px] overflow-x-hidden rounded-3xl">
      <div className="banner-slider">
        <div className="slider-item absolute left-0 top-0 h-full w-full">
          <img src={bannerImg} alt="banner" className="img-cover" />
        </div>

        <div className="banner-content tablet:bottom-1/2 tablet:left-[50px] tablet:translate-y-1/2 absolute bottom-[206px] left-6 right-auto z-[1] max-w-[480px] text-textColor desktop:left-[100px] ">
          <h2 className="heading tablet:text-[54px] tablet:tracking-[3px] mb-4 text-[40px] tracking-[2px]">
            Puss in Boots: The Last Wish
          </h2>
          <div className="meta-list">
            <div>2022</div>
            <div className="card-badge">8.3</div>
          </div>
          <p className="genre my-3">
            Adventure, Fantasy, Animation, Comedy, Family, Action
          </p>
          <p className="banner-text mb-6">
            Puss in Boots discovers that his passion for adventure has taken its
            toll: He has burned through eight of his nine lives, leaving him
            with only one life left. Puss sets out on an epic journey to find
            the mythical Last Wish and restore his nine lives.
          </p>
          <Link to="/movie/:id">
            <button className="btn">
              <i className="fa-regular fa-circle-play text-[24px]"></i>
              <span>Watch Now</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="slider-list tablet:left-slider-mobile absolute bottom-5 left-5 right-0 overflow-x-auto pb-2 ">
        <div className="control-inner flex gap-3">
          {/* <Slider {...settings}> */}
          <div className="poster-box slider-item brightness-100">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          <div className="poster-box slider-item">
            <img src={sliderControl} alt="" className="img-cover" />
          </div>
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
