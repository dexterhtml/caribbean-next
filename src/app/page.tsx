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
      <section className="main-banner banner-height">
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
                {/* <Link href="/" className='btns  btn_secondary'>Register</Link> */}
              </Stack>
            </div>
          </div>
        </div>
      </section>

      <div className="caribbean-online-bg">
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
                  to join in.{" "}
                </p>
                <p>
                  Both are the{" "}
                  <span className="fw-bold">best online bingo games</span>,
                  providing players with plenty of opportunities to win
                  wonderful prizes. Connect with others and share the thrill as
                  the numbers roll in.
                </p>
                <p>
                  Are you ready to experience the excitement of so{" "}
                  <span className="fw-bold">many bingo games to play</span>?
                  Join Cocoloco Bingo and Tropical Bingo today. Feel the joy of
                  winning and the fun of playing!
                </p>
                <p className="fw-bold">
                  Don't wait—your Caribbean bingo adventure starts now!
                </p>
              </div>
              <div className="col-lg-6 text-center">
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
        <section className="py-0">
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
                  just winning; it's about connecting with others too.{" "}
                </p>
                <p>
                  Many players love the friendly community that comes with{" "}
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
        <Image
          src="/images/bingo-60.png"
          alt="bingo 60"
          width={1440}
          height={1024}
          className="w-100"
        />
        <section className="let-connect-online position-relative z-ind">
          {/* <div className="connect-online-bg"> */}
          <Image
            src="/images/connect-online-bg.png"
            className="connect-online-bg"
            alt="let-connect"
            width={1440}
            height={1024}
          />
          {/* </div> */}
          <div className="container-xl">
            <div className="row align-items-center">
              <div className="col-md-9 mx-auto text-center">
                <h2 className="section-subtitle d-inline-block">
                  Get Social With Us
                </h2>
                <h3 className="section-title">Let’s Connect Online</h3>
                <p>
                  Let’s connect online and enhance your bingo experience! Join
                  our vibrant community of players and learn about{" "}
                  <span className="fw-bold">different ways to play bingo </span>{" "}
                  and several online bingo sites. Follow us on social media to
                  stay updated on special events, promotions, and the latest
                  news. Share your wins, interact with fellow players, and
                  participate in fun discussions. Join the fun, and let’s make
                  lasting connections together. We can’t wait to see you online!
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/images/let-connect.png"
                  alt="let-connect"
                  width={524}
                  height={574}
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-lg-4 gap-3">
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
      </div>
    </>
  );
}
