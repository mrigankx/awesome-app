import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import "./index.css";
import Sdata from "./Sdata";
ReactDOM.render(
  <React.Fragment>
    <h1 className="heading_style">My Favourite Shows</h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    ;
  </React.Fragment>,
  document.getElementById("root")
);
