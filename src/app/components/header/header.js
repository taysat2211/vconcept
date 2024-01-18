import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      {/* <div className="top">
        <div className="container-fluid d-flex justify-content-between main-width">
          <div className="slogan">NHÀ LÀ ĐỂ YÊU ĐỂ SỐNG VÀ ĐỂ TRỞ VỀ</div>
          <div className="cart">
            <div>
              Giỏ hàng / 0đ
              <a className="icon-link icon-link-hover" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div> */}
      <nav className="h-5">
        <div className="navbar navbar-expand-lg bg-body-tertiary fixed-top sticky-top">
          <div className="container-fluid main-width">
            <a className="navbar-brand" href="#">
              <img
                src="logo.png"
                alt="Logo"
                className="d-inline-block align-text-top logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/introduce">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/category"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Thiết kế-Thi công
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Nhà ở
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Biệt thự
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Nội thất căn hộ
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="/prices">
                    Báo giá
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="/news">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="/contact">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
