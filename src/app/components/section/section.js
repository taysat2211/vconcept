import React from "react";
import "./section.css";

function Section(props) {
  const { title, subtitle, link } = props;
  return (
    <section className="main-width">
      <div className="container-fluid">
        <div className="title d-flex justify-content-between">
          <h3><span>{title}</span></h3>
          {subtitle && subtitle != "" ? (
            <a href={link}><span>{subtitle + " >"}</span></a>
          ) : null}
        </div>
        {props.children}
      </div>
    </section>
  );
}

export default Section;
