import React from "react";
import SlideShow from "react-image-show";
import "../../img/fondo.png";

const urlArray = [
  "https://images.ecestaticos.com/SDMTrmhCJ8yQxVY8bh3TixeExsQ=/0x0:600x450/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4a4%2Fb0b%2F4e5%2F4a4b0b4e54ac0b812f1966dd882f9480.jpg",
  "https://i0.wp.com/revista.weepec.com/wp-content/uploads/2019/09/romantic-couple-in-love-walking-dogs-and-bonding-L3G8Y29.jpg?fit=1200%2C633&ssl=1",
];

function Slider() {
  return (
    <SlideShow
      images={urlArray}
      width="100vw"
      imagesWidth="800px"
      imagesHeight="450px"
      imagesHeightMobile="56vw"
      thumbnailsWidth="920px"
      thumbnailsHeight="12vw"
      indicators
      thumbnails
      fixedImagesHeight
    />
  );
}

export { Slider };
