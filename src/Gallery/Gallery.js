import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import bg1 from "../Carousel/asset/bg1.jpg";
import bg2 from "../Carousel/asset/bg2.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3}>
            <div class="container-image">
              <img src={bg1} alt="Avatar" class="image" />
              <div class="overlay-bottom">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="container-image">
              <img src={bg1} alt="Avatar" class="image" />
              <div class="overlay-bottom">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="container-image">
              <img src={bg1} alt="Avatar" class="image" />
              <div class="overlay-bottom">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="container-image">
              <img src={bg1} alt="Avatar" class="image" />
              <div class="overlay-bottom">
                <div class="text">Hello World</div>
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
