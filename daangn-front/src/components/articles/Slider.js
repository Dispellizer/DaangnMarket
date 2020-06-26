import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import xs1 from '../../images/xs1.jpg';
import xs2 from '../../images/xs2.jpg';
import xs3 from '../../images/xs3.jpg';
import xs4 from '../../images/xs4.jpg';
import xs5 from '../../images/xs5.jpg';

const SliderBlock = styled(Slider)`
  img {
    border-radius: 5px;
  }
  .slick-prev::before,
  .slick-next::before {
    font-size: 20px;
    color: #868e96;
  }
  .slick-dots {
    border-radius: 5px;
    position: relative;
    padding: 16px 0;
    top: -54px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
`;

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderBlock {...settings}>
      <div>
        <img alt="xs1" src={xs1} width="100%" />
      </div>
      <div>
        <img alt="xs2" src={xs2} width="100%" />
      </div>
      <div>
        <img alt="xs3" src={xs3} width="100%" />
      </div>
      <div>
        <img alt="xs4" src={xs4} width="100%" />
      </div>
      <div>
        <img alt="xs5" src={xs5} width="100%" />
      </div>
    </SliderBlock>
  );
};

export default SimpleSlider;
