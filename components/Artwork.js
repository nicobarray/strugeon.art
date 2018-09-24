import React, { Fragment } from "react";

const getImageSize = imageUrl => {
  try {
    const [width, height] = imageUrl
      .split("-")[1]
      .split(".")[0]
      .split("x");
    return { width: parseInt(width, 10), height: parseInt(height, 10) };
  } catch (err) {
    return { width: undefined, height: undefined };
  }
};

export default props => {
  const categories = props.categories.map((cat, index) => (
    <div key={index} className={"category"}>
      {cat}
    </div>
  ));

  const size = getImageSize(props.imageUrl);
  const imageClassName =
    size.width > size.height ? "landscape-image" : "portrait-image";

  return (
    <div className={"root"}>
      <div className={"title"}>{props.title}</div>
      <div className={"info"}>
        <div className={"catergories"}>{categories}</div>
      </div>
      <img className={imageClassName} src={props.imageUrl} alt={props.title} />
      {/* <div className={"extra"}>
        <div className={"carrousel"}>
          <img className={"preview"} src={props.imageUrl} alt={props.title} />
          <img className={"preview"} src={props.imageUrl} alt={props.title} />
          <img className={"preview"} src={props.imageUrl} alt={props.title} />
        </div>
        <button className={"like"}>{"<3"}</button>
      </div> */}
      <style jsx>{`
        .root {
          display: grid;

          grid-template-areas: "title image" "info image";
          grid-template-columns: 33% auto;

          margin-bottom: 128px;
        }

        .title {
          grid-area: title;

          padding-left: 32px;

          /* Text */
          font-size: 1.5em;
        }

        .landscape-image {
          grid-area: image;

          width: 60vw;
          height: auto;
        }

        .portrait-image {
          grid-area: image;

          width: auto;
          height: 90vmin;
        }

        .info {
          grid-area: info;

          padding-left: 32px;

          display: flex;
          flex-flow: column nowrap;
        }

        .preview {
          width: 32px;
          height: auto;
        }
      `}</style>
    </div>
  );
};
