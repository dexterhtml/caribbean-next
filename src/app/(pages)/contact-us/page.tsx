import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io';

const Page = () => {
  return (
    <>
      <section className="contactus-banner banner-height">
        <div className="container-xl h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 d-flex flex-column gap-lg-3">
              <h1 className="fs-9xl text-white mb-0 lh-sm">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="account-type pb-0">
        <div className="container-xl">
          <h2 className="fs-6xl fw-bolder text-black mb-0">Select an Issue</h2>
          <div className="issue-container">
            <div className="issue-button fs-3xl fw-semibold text-black">Account Issue</div>
            <div className="issue-button fs-3xl fw-semibold text-black">Purchasing Issues</div>
            <div className="issue-button fs-3xl fw-semibold text-black">Game Events</div>
            <div className="issue-button fs-3xl fw-semibold text-black">Quests</div>
          </div>
          <div className="show-all text-center fs-2xl text-black fw-bolder">
            Show All Issues <IoIosArrowDown style={{ fontSize: '24px', color: '#000' }} />
          </div>
        </div>
      </section>
      <section className="contact-form py-50">
        <div className="container-xl">
        <div className="form-container">
          <h2 className="text-center mb-3 mb-md-4 fs-6xl fw-bold text-black">Send Us a Message</h2>
          <form>
            <div className="row g-2 g-md-3">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email ID"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="col-md-6">
                <select className="form-select" id="subject">
                  <option>
                    Select Subject
                  </option>
                  <option value={1}>Subject 1</option>
                  <option value={2}>Subject 2</option>
                  <option value={3}>Subject 3</option>
                </select>
              </div>
              <div className="col-md-6">
                <div className="upload-box">
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Upload File
                    </label>
                    <input id="file-upload" type="file" />
                  </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="What do you want to tell us?"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btns btn_secondary w-100 mt-2 mt-md-3">
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </section>
      <section className="contact-address pt-0">
        <div className="container-xl">
          <div className="row gx-md-4 gy-md-0 gy-4">
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon">
                  <Image
                    src="/images/phone.svg"
                    alt="Phone Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="contact-info">
                  <h5 className="fs-4xl text-black fw-bolder mb-2">Get In Touch</h5>
                  <p className="fs-2xl mb-0 text-black fw-medium">
                    <Link href="tel:+12545410032">+1 2545 4100 32</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon">
                  <Image
                    src="/images/mail.svg"
                    alt="Email Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="contact-info">
                  <h5 className="fs-4xl text-black fw-bolder mb-2">Email Address</h5>
                  <p className="fs-2xl mb-0 text-black fw-medium">
                    <Link href="mailto:caribbean@gmail.com">
                      caribbean@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon">
                  <Image
                    src="/images/address.svg"
                    alt="Address Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="contact-info">
                  <h5 className="fs-4xl text-black fw-bolder mb-2">Address</h5>
                  <p className="fs-2xl mb-0 text-black fw-medium">New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
