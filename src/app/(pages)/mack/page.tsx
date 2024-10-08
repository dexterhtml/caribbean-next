import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Stack } from "react-bootstrap";

export default function Home() {
  return (
    <>
      {/* Faq Start From Here  */}
      <section className="faq-wrapper py-0">
      <div className="faq-section">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="faq-left">
                <div className="faq-left-desc">
                  <span className="green-para">How We can help?</span>
                  <h2 className="com-title">Hipster ipsum tattooed brunch</h2>
                </div>
                <div className="faq-left-img">
                  <Image
                    src="/images/faq-super-bingo.png"
                    width={460}
                    height={260}
                    alt="Super Bingo"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
             
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Q.1 What is online bingo, and how does it work?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <b>Ans:</b> <b>Online Bingo</b> is a digital adaptation
                        of traditional bingo in which players have to match
                        numbers on the cards with those that are called out.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Q.2 How do I sign up to play bingo on your website?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <b>Ans:</b> To <b> play bingo online games</b>, go to
                        our page and click on the ‘sign up’ button; after that,
                        complete the fields provided and validate your account
                        by email.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Q.3 Is it free to play bingo, or do I need to pay?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <b> Ans:</b> You have to pay to join premium games with
                        bigger prizes and more exciting features.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Q.4 What are the different types of bingo games
                        available?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <b> Ans:</b> Different forms of <b>bingo games</b> may
                        include 75-ball, 90-ball, and other types of themed
                        bingo with standard rules and jackpots.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Q.5 How many rounds are in bingo?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <b> Ans:</b> The number of rounds varies by game.
                        However, most sessions include multiple rounds. This, in
                        turn, provides many chances to win.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Q.6 What are the rules of bingo?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <b> Ans:</b> Players match called numbers on their
                        cards; the first to complete a winning pattern shouts
                        "Bingo!" to claim victory.
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Faq End Here  */}

      {/* Footer Start From Here  */}
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="image-section">
                  <img
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
                    <img
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
                        <img
                          src="/images/google-play.png"
                          alt="Google Play"
                          width="190"
                          height="56"
                        />{" "}
                      </Link>
                      <Link href="" className="btn-img">
                        <img
                          src="/images/app-store.png"
                          alt="App Store"
                          width="162"
                          height="56"
                        />{" "}
                      </Link>
                      <Link href="" className="btn-img">
                        {" "}
                        <img
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
                      <img
                        src="/images/facebook-yellow.svg"
                        alt="facebook"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <img
                        src="/images/linkedin-yellow.svg"
                        alt="linkedin"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <img
                        src="/images/twitter-yellow.svg"
                        alt="twitter"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <img
                        src="/images/instagram-yellow.svg"
                        alt="instagram"
                        width="48"
                        height="48"
                      />
                    </Link>
                    <Link href="" className="social-img">
                      <img
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
      {/* Footer End Here  */}
    </>
  );
}
