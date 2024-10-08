import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="blog-banner banner-height">
        <div className="container-xl h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 d-flex flex-column gap-lg-3">
              <h1 className="fs-9xl text-white mb-0 lh-sm">
                Caribbean Bingo Blogs
              </h1>
            </div>
          </div>
        </div>
      </section >
      <section className="blog-layout-content our-port">
      <div className="portfolio-tabs py-50 bg-gray">
        <div className="container">
          <div className="d-flex">
            <div className="breadcrum-bar py-0 mt-0 ">
              <a className="link-home" href="/" style={{ backgroundColor: "#a4fd90" , padding: "5px", borderRadius: "4px" }}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  color="black"
                  className=""
                  height={22}
                  width={22}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#00c92c" }}
                >
                  <path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z" />
                </svg>
              </a>
              <span>
                <span>
                  <a className="link-home ps-1" href="/">
                    <span className="breadmain">
                      {" "}
                      Home <span className="slash-home">/</span>
                    </span>
                  </a>
                </span>
                <span className="breadcrumb_last" aria-current="page">
                  Blog
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 top-navbar-tab my-3 my-md-4 my-lg-5 ">
              <ul
                className="nav nav-pills"
                id="portfolioTab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#1"
                    type="button"
                    role="tab"
                    aria-controls={1}
                    aria-selected="false"
                  >
                    .Net
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#2"
                    type="button"
                    role="tab"
                    aria-controls={2}
                    aria-selected="false"
                  >
                    Android
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#3"
                    type="button"
                    role="tab"
                    aria-controls={3}
                    aria-selected="false"
                  >
                    Angular
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#4"
                    type="button"
                    role="tab"
                    aria-controls={4}
                    aria-selected="false"
                  >
                    App Development
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="5-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#5"
                    type="button"
                    role="tab"
                    aria-controls={5}
                    aria-selected="false"
                  >
                    Blockchain
                  </button>
                </li>
                <li className="nav-item">
                  <select className="form-select blog-select-main-page">
                    <option value="all">More</option>
                    <option value={6}>Branding</option>
                    <option value={7}>Business Solutions</option>
                    <option value={8}>Business Trip</option>
                    <option value={10}>CSGO Trade BOT</option>
                    <option value={11}>Design</option>
                    <option value={12}>Digital Marketing</option>
                    <option value={13}>django</option>
                    <option value={14}>Ecommerce</option>
                    <option value={16}>Flutter</option>
                    <option value={17}>Game Development</option>
                    <option value={18}>Golang</option>
                    <option value={19}>Hire Web Developers</option>
                    <option value={20}>HTML5</option>
                    <option value={22}>Java Development</option>
                    <option value={23}>Joomla</option>
                    <option value={24}>Laravel Development</option>
                    <option value={25}>News</option>
                    <option value={42}>NextJS</option>
                    <option value={43}>Node.js Developers</option>
                    <option value={44}>PHP</option>
                    <option value={46}>PPC</option>
                    <option value={47}>Python</option>
                    <option value={48}>React js</option>
                    <option value={49}>React Native</option>
                    <option value={50}>Ruby on Rails</option>
                    <option value={51}>Rust Programming</option>
                    <option value={52}>SEO</option>
                    <option value={53}>SharePoint Development</option>
                    <option value={54}>Software development</option>
                    <option value={55}>Web Development</option>
                    <option value={56}>Wordpress</option>
                    <option value={57}>Zend</option>
                  </select>
                </li>
              </ul>
              <div className="search-bar">
                <span className="fa-search" />
                <input type="text" name="s" defaultValue="" placeholder="Search" />
              </div>
            </div>
            <div className="col-12">
              <div className="row gy-4" id="portfolioTabContent">
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-1.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-2.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-3.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-4.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-5.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-6.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-7.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-8.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5 blog-card">
                  <div className="our-work-card">
                    <div className="work-card-img">
                    <Image
                        src="/images/blog-9.png"
                        alt="Blog Image"
                        width={500}
                        height={500}
                        className="img-fluid w-100"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="our-wrok-footer">
                      <ul className="blog-content-top d-flex">
                        <li className="blog-date">
                          <Image 
                            src="/images/blog-small-icon.png"
                            alt="Author Image"
                            width={20}
                            height={20}
                            className=""
                          />
                          <span>By Sunny Chawla</span>
                        </li>
                        <li className="blog-date">
                          <span className="date-content">9th Jan 2024</span>
                        </li>
                      </ul>
                      <div className="card-detail">
                          <a data-wpel-link="internal"
                            href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                          >
                           <h2 className="small-title mt-3">How to Play Bingo</h2>
                            <p> Hipster ipsum tattooed brunch I'm baby. Dreamcatcher four loko kogi cardigan. </p>
                          </a>
                      </div>
                    </div>
                    <ul className="blog-content-top d-flex justify-content-between">
                      <li className="blog-date">
                        <a
                          className="apply-now-link"
                          data-wpel-link="internal"
                          href="/blog/role-of-data-analytics-in-enhancing-bingo-software-performance"
                        >
                          Read More
                          <span style={{ marginLeft: 12 }}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              color="#3B259C"
                              height={20}
                              width={20}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "#00C92C" }}
                            >
                              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="blog-date">
                        <span className="car-value" style={{ marginRight: 12 }}>
                          (541 views)
                        </span>
                      </li>
                    </ul>
                    <div className="cate-wrap">
                      <div>
                        <span className="car-value">Software development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="respo-pagination pagination">
              <li className="page-item ">
                <button className="page-link"> {"< "} </button>
              </li>
              <li className="page-item">
                <button className="page-link">1</button>
              </li>
              <li className="page-item active">
                <button className="page-link">2</button>
              </li>
              <li className="page-item ">
                <button className="page-link">...</button>
              </li>
              <li className="page-item ">
                <button className="page-link">14</button>
              </li>
              <li className="page-item">
                <button className="page-link">{">"}</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </section>
    </>
  );
};

export default page;
