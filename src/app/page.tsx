import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Stack } from "react-bootstrap";

export default function Home() {
  const social = [
    {
      title: "Explore our fan page with 5.6M followers",
      image: "/images/facebook-3d.png",
      link: "/",
      alt: "facebook",
    },
    {
      title: "Enjoy travels in Booga verse with our colorful characters",
      image: "/images/twitter-3d.png",
      link: "/",
      alt: "twitter",
    },
    {
      title: "Catch the latest trends, the BINGO Blitz way",
      image: "/images/bingo-3d.png",
      link: "/",
      alt: "google",
    },
    {
      title: "Adventure through Bingo posts, stories and Reels!",
      image: "/images/instagram-3d.png",
      link: "/",
      alt: "instagram",
    },
    {
      title: "Every video is a Bingo with your bubbly host, Michelle!",
      image: "/images/youtube-3d.png",
      link: "/",
      alt: "apple",
    },
    {
      title: "Get inspired by travel, cooking, DIY and more",
      image: "/images/pintrest-3d.png",
      link: "/",
      alt: "apple",
    },
  ];
  const firstHalf = social.slice(0, 3); // First 3 items
  const secondHalf = social.slice(3); // Remaining items
  return (
    <>
      <section className="main-banner banner-height position-relative">
        <div className="container-xl h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-8 d-flex flex-column gap-lg-3">
              <h1 className="fs-9xl primary-text mb-0 lh-sm">
                Play Caribbean online bingo
              </h1>
              <p className="fs-6xl text-white fw-bolder lh-base">
                Win real money with Coco Loco and tropical bingo!
              </p>
              <Stack
                direction="horizontal"
                gap={0}
                className="flex-lg-row flex-column align-items-start gap-lg-3 gap-2"
              >
                <Link href="/" className="btns  btn_primary  ">
                  Join the fun now!
                </Link>
                {/* <Link href="/" className=`&lsquo;btns  btn_secondary`&lsquo;>Register</Link> */}
              </Stack>
            </div>
          </div>
        </div>
      </section>

      <div className="caribbean-online-bg">
        {/* <Image src="/images/caribbean-online-bg.png" className="caribbean-online-bg w-100" alt ="/images/caribbean-online-bg " width={1440} height={1024}/> */}
        <section className="caribbean-online pb-0">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-md-6">
                <h2 className="section-title">
                  The #1 Caribbean Online Bingo Game
                </h2>
                <p>
                  Cocoloco Bingo and Tropical Bingo are your best bets for
                  online bingo games. These exciting games bring the spirit of
                  the Caribbean right to your home. With bright colors and
                  engaging themes, you&rsquo;ll feel like you&rsquo;re enjoying
                  a beach party. The rules are simple, making it easy for anyone
                  to join in. 
                </p>
                <p>
                  Both are the 
                  <span className="fw-bold">best online bingo games</span>,
                  providing players with plenty of opportunities to win
                  wonderful prizes. Connect with others and share the thrill as
                  the numbers roll in.
                </p>
                <p>
                  Are you ready to experience the excitement of so 
                  <span className="fw-bold">many bingo games to play</span>?
                  Join Cocoloco Bingo and Tropical Bingo today. Feel the joy of
                  winning and the fun of playing!
                </p>
                <p className="fw-bold">
                  Don`&lsquo;t wait—your Caribbean bingo adventure starts now!
                </p>
              </div>
              <div className="col-md-6 text-center">
                <Image
                  src="/images/caribbean-online.png"
                  alt="caribbean-online"
                  width={473}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-md-9 mx-auto text-center">
                <h2 className="section-subtitle d-inline-block">
                  Why Carribean Bingo?
                </h2>
                <h3 className="section-title">
                  Join the Caribbean Bingo Experience – Social, Fun, and Online!
                </h3>
              </div>
              <div className="col-md-6 text-center">
                <Image
                  src="/images/tropical-punch.png"
                  alt="Tropical Punch"
                  width={474}
                  height={498}
                />
                <p className="fw-bold fs-6xl">Tropical Punch</p>
              </div>
              <div className="col-md-6 text-center">
                <Image
                  src="/images/cocoloco-bingo.png"
                  alt="cocoloco-bingo"
                  width={474}
                  height={498}
                />
                <p className="fw-bold fs-6xl">Cocoloco Bingo</p>
              </div>
              <div className="col-12">
                <p>
                  Caribbean Bingo offers a unique gaming experience like no
                  other. With vibrant themes and lively graphics, you can enjoy
                  a tropical escape while playing. The fun doesn&rsquo;t stop at
                  just winning; it`&lsquo;s about connecting with others too. 
                </p>
                <p>
                  Many players love the friendly community that comes with 
                  <span className="fw-bold">bingo games online</span>. You can
                  chat with fellow players, share tips, and celebrate wins
                  together.
                </p>
                <p>
                  Caribbean <span className="fw-bold"> </span>bingo to play
                  online is more than just a game; it&rsquo;s a social event.
                  The interactive features allow you to communicate with others
                  during gameplay, enhancing the fun. Join themed events and
                  special promotions that add to the excitement.
                </p>
              </div>
            </div>
          </div>
        </section>
       
      </div>
      {/* end */}
      <Image
          src="/images/bingo-60.png"
          alt="bingo 60"
          width={1440}
          height={1024}
          className="w-100 position-relative"
        />
      <section className="let-connect-online connect-online-bg">
          {/* <div className="connect-online-bg"> */}
          {/* <Image
            src="/images/connect-online-bg.png"
            className="connect-online-bg"
            alt="let-connect"
            width={1440}
            height={1024}
          /> */}
          {/* </div> */}
          <div className="container-xl">
            <div className="row align-items-center">
              <div className="col-md-9 mx-auto text-center">
                <h2 className="section-subtitle d-inline-block">
                  Get Social With Us
                </h2>
                <h3 className="section-title">Let’s Connect Online</h3>
                <p className="">
                  Let’s connect online and enhance your bingo experience! Join
                  our vibrant community of players and learn about 
                  <span className="fw-bold">different ways to play bingo </span> 
                  and several online bingo sites. Follow us on social media to
                  stay updated on special events, promotions, and the latest
                  news. Share your wins, interact with fellow players, and
                  participate in fun discussions. Join the fun, and let’s make
                  lasting connections together. We can’t wait to see you online!
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <Image
                  src="/images/let-connect.png"
                  alt="let-connect"
                  width={524}
                  height={574}
                />
              </div>
              <div className="col-lg-6">
                <div className="d-flex flex-sm-row flex-column gap-lg-4 gap-3">
                  <ul className="social-links">
                    {firstHalf.map((button, index) => (
                      <li
                        className="d-flex align-items-center mb-3"
                        key={index}
                      >
                        <Image
                          src={button.image}
                          alt={button.alt}
                          width={91}
                          height={92}
                          className="me-3"
                        />
                        <div>
                          <p className="fs-base fw-semibold heading-text mb-2">
                            {button.title}
                          </p>
                          <a
                            href={button.link}
                            className="btn btn_sm btn_secondary_outline fw-bold"
                          >
                            Join Now
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Second List */}
                  <ul className="social-links mt-md-5 pt-lg-2 ">
                    {secondHalf.map((button, index) => (
                      <li
                        className="d-flex align-items-center mb-3"
                        key={index}
                      >
                        <Image
                          src={button.image}
                          alt={button.alt}
                          width={91}
                          height={92}
                          className="me-3"
                        />
                        <div>
                          <p className="fs-base fw-semibold heading-text mb-2">
                            {button.title}
                          </p>
                          <a
                            href={button.link}
                            className="btn btn_sm btn_secondary_outline fw-bold"
                          >
                            Join Now
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      <div className="py-100">
        <div className="container-xl pb-5">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              {/* <h2 className="section-subtitle d-inline-block">
                
                </h2> */}
              <h2 className="section-title">
                Are You Ready to Travel the Globe?  Fun All Around the World!
              </h2>
            </div>
            <div className="col-md-6">
              <p>Get ready for an exciting adventure with our global <span className="fw-bold">bingo games to play!</span> You can explore Caribbean and Asian cultures while playing your favorite game. Every week, we offer unique themes and challenges inspired by countries worldwide. You’ll experience vibrant graphics and sounds that transport you to new destinations.   </p>
              <p>In addition to thrilling <span className="fw-bold">bingo to play online</span>, plenty of bonuses are waiting for you. Earn rewards by participating in special events and completing fun challenges. Our community loves sharing tips and tricks to help you maximize your winnings.  </p>
              <p>Whether you’re a seasoned player or just starting, there’s always something new to discover when <span className="fw-bold"> playing online bingo games! </span> Join us for the chance to win prizes and enjoy engaging themes.  </p>
              <Link href="/" className="btns btn_primary mt-md-3 mt-2">Join now!</Link>
            </div>
          </div>
        </div>
        <Image src="/images/bingo_img1.png" className="w-100" alt="bingo" width={1440} height={951} />
      </div>
      <section className="pt-0">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6 text-center">
              <Image
                src="/images/how-to-play.png"
                alt="how-to-play"
                width={640}
                height={411}
              />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">
                How to play Bingo Online?
              </h2>
              <p>
                Playing bingo online is simple and fun! First, choose a reputable <span className="fw-bold">best online bingo games</span> site and create your account. Once registered, you can select a game that interests you. Each game has a unique card with a grid of numbers. As the game starts, the host will call out numbers randomly.
              </p>
              <p>
                Your goal is to match the numbers on your card. When you complete a specific pattern, like a line or full house, shout "Bingo!" to claim your prize. Most <span className="fw-bold">online bingo websites</span> offer automatic daubing and marking numbers, so you never miss a win.

              </p>
              <p>
                Get ready for endless fun and big wins! Join us today and experience the thrill of <span className="fw-bol">online bingo games!</span>
              </p>

            </div>

          </div>
        </div>
      </section>
        {/* Faq Start From Here  */}
        <section className="faq-wrapper py-0">
      <div className="faq-section">
        <div className="container">
          <div className="row">
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
    </>
  );
}
