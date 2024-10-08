import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const Footer = () => {
  return (
   <>
   
   <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="image-section">
                  <Image
                    src="/images/footer-banner.png"
                    width="1280"
                    height="515"
                    alt=""
                  />
                </div>
                <div className="footer-top-content">
                  <h2 className="small-title">Play Caribbean Bingo</h2>
                  <h2 className="large-title">Free Bingo Now</h2>
                  <Link href="/" className="footer-top-btn">
                    Play Now
                  </Link>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="footer-bottom-up">
                  <div className="footer-img">
                    <Image
                      src="/images/footer-brand-logo.png"
                      width="192"
                      height="128"
                      alt="Caribbean Bingo"
                    />
                  </div>
                  <div className="right-content">
                    <div className="right-up">
                      <Link href="" className="btn-link">
                        Home
                      </Link>
                      <Link href="" className="btn-link">
                        Blog
                      </Link>
                      <Link href="" className="btn-link">
                        Contact Us
                      </Link>
                      <Link href="" className="btn-link">
                        Policy
                      </Link>
                    </div>
                    <div className="right-down">
                      <Link href="" className="btn-img">
                        {" "}
                        <Image
                          src="/images/google-play.png"
                          alt="Google Play"
                          width="190"
                          height="56"
                        />{" "}
                      </Link>
                      <Link href="" className="btn-img">
                        <Image
                          src="/images/app-store.png"
                          alt="App Store"
                          width="162"
                          height="56"
                        />{" "}
                      </Link>
                      <Link href="" className="btn-img">
                        {" "}
                        <Image
                          src="/images/microsoft.png"
                          alt="Microsoft"
                          width="190"
                          height="56"
                        />{" "}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="footer-bottom-down">
                  <div className="social-group">
                    <Link href="" className="social-img">
                      <Image
                        src="/images/facebook-yellow.svg"
                        alt="facebook"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <Image
                        src="/images/linkedin-yellow.svg"
                        alt="linkedin"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <Image
                        src="/images/twitter-yellow.svg"
                        alt="twitter"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <Image
                        src="/images/instagram-yellow.svg"
                        alt="instagram"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <Image
                        src="/images/youtube-yellow.svg"
                        alt="youtube"
                        width="48"
                        height="48"
                      />
                    </Link>
                  </div>
                  <p className="com-para">
                  Caribbean Bingo  is an online game created for entertainment for users aged 21 and above. It has no connections with real money gambling. Participation success in this game does not translate to winning in other real money gambling practices.
                  </p>
                  <p className="com-para">
                  By playing bingo online games and Caribbean Bingo, you agree to receive future game updates. While you may choose to update the game, not doing so may limit your experience and functionality. 
                  </p>
                  <p className="copy-right">
                    © 2024 Caribbean Bingo. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer