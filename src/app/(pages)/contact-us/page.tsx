import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const Page = () => {
  return (
    <>
      <section className="inner-banner banner-height">
        <div className="container-xl h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 d-flex flex-column gap-lg-3">
              <h1 className="fs-9xl text-white mb-0 lh-sm">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-address">
        <div className="container-xl">
          <div className="row">
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
                  <h5 className="fs-4xl text-black">Get In Touch</h5>
                  <p className="fs-2xl mb-0 text-black">
                    <Link href="tel:12545410032">+1 2545 4100 32</Link>
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
                  <h5 className="fs-4xl text-black">Email Address</h5>
                  <p className="fs-2xl mb-0 text-black">
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
                  <h5 className="fs-4xl text-black">Address</h5>
                  <p className="fs-2xl mb-0 text-black">New York, USA</p>
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
