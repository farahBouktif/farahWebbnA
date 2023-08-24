  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Carousel } from 'react-responsive-carousel';
  import 'react-responsive-carousel/lib/styles/carousel.min.css';
  import './CarouselAcceuil.css'

  const CarouselAcceuil = () => {
    const onChange = (selectedIndex) => {
      console.log(`Selected index: ${selectedIndex}`);
    };

    const onClickItem = (index, item) => {
      console.log(`Clicked item: ${item}`);
    };

    const onClickThumb = (index, item) => {
      console.log(`Clicked thumb: ${item}`);
    };

    return (
      <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
        <div>
          <img src="http://www.bna.tn/images/banniere/603.jpg" />
        </div>
        <div>
          <img src="http://www.bna.tn/images/banniere/604.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="http://www.bna.tn/images/banniere/605.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="http://www.bna.tn/images/banniere/606.jpg" alt="Image 4" />
        </div>
        <div>
          <img src="http://www.bna.tn/images/banniere/607.jpg" alt="Image 5" />
        </div>
        <div>
          <img src="http://www.bna.tn/images/banniere/593.png" alt="Image 6" />
        </div>
      </Carousel>
    );
  };

  ReactDOM.render(<CarouselAcceuil />, document.getElementById('root'));
  export default CarouselAcceuil