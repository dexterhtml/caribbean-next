import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Stack } from "react-bootstrap";

export default function Home() {
  return (
   <section className="main-banner banner-height">
<div className="container-xl h-100">
  <div className="row align-items-center h-100">
    <div className="col-lg-6 d-flex flex-column gap-lg-3">
      <h1 className="fs-9xl primary-text mb-0 lh-sm">Caribbean Bingo</h1>
      <p className="fs-6xl text-white fw-bolder lh-base">Now play bingo</p>
      <Stack direction="horizontal" gap={0} className='flex-lg-row flex-column align-items-start gap-lg-3 gap-2'>
                    <Link href="/" className='btns  btn_primary  '>Login</Link>
                    <Link href="/" className='btns  btn_secondary'>Register</Link>
                </Stack>
    </div>
  </div>
</div>
   </section>
  );
}
