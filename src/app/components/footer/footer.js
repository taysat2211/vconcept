import React from "react";
import "./footer.css";
import Section from "../section/section";

function Footer() {
  return (
    <div>
      <div className="container-fluid summary">
        <div className="row main-width">
          <div className="col">
            <Section title="Thông tin">

            </Section>
          </div>
          <div className="col">
            <Section title="Dịch vụ">

            </Section>
          </div>
          <div className="col">
            <Section title="Chính sách">

            </Section>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center p-3 copyright">
        © 2023 Copyright vconcept.com
      </div>
    </div>
  );
}

export default Footer;
