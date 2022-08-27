import React from "react";
import { useDropzone } from "react-dropzone";
import image from "../../img/defaultpet.jpg";
import { petURLImage } from "../../atoms";
import { useSetRecoilState } from "recoil";
function MyDropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({});
  const setPetUrlImg = useSetRecoilState(petURLImage);

  const files = acceptedFiles.map((file) => {
    const src = URL.createObjectURL(file);
    

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      var base64data = reader.result as any
      setPetUrlImg(base64data);
    };
    return (
      <img key={1}
        src={src}
        onLoad={() => {
          URL.revokeObjectURL(src);
        }}
      />
    );
  });

  return (
    <section style={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"30px"}} className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <img src={image} />
      </div>
      <div>{files}</div>
    </section>
  );
}

export { MyDropzone };
