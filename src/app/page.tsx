import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Stack } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <section className="main-banner banner-height">
        <div className="container-xl h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-8 d-flex flex-column gap-lg-3">
              <h1 className="fs-9xl primary-text mb-0 lh-sm">Play Caribbean online bingo</h1>
              <p className="fs-6xl text-white fw-bolder lh-base">Win real money with Coco Loco and tropical bingo!</p>
              <Stack direction="horizontal" gap={0} className='flex-lg-row flex-column align-items-start gap-lg-3 gap-2'>
                <Link href="/" className='btns  btn_primary  '>Join the fun now!</Link>
                {/* <Link href="/" className='btns  btn_secondary'>Register</Link> */}
              </Stack>
            </div>
          </div>
        </div>
      </section>

      <section className="caribbean-online">
        <div className="caribbean-online-bg">
          <Image src='/images/caribbean-online-bg.png' width={1440} height={1144} alt="caribbean-online" className="w-100"  />
        </div>
        <div className="container py-40 ">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <h2 className="section-title">
                The #1 Caribbean Online Bingo Game
              </h2>
              <p>Cocoloco Bingo and Tropical Bingo are your best bets for online bingo games. These exciting games bring the spirit of the Caribbean right to your home. With bright colors and engaging themes, you’ll feel like you’re enjoying a beach party. The rules are simple, making it easy for anyone to join in.   </p>
              <p>Both are the <span className="fw-bold">best online bingo games</span>, providing players with plenty of opportunities to win wonderful prizes. Connect with others and share the thrill as the numbers roll in.
              </p>
              <p>Are you ready to experience the excitement of so <span className="fw-bold">many bingo games to play</span>? Join Cocoloco Bingo and Tropical Bingo today. Feel the joy of winning and the fun of playing!
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <Image src='/images/caribbean-online.png' alt="caribbean-online" width={473} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
