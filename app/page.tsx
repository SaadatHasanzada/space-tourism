import Link from "next/link";
import style from "./style.module.scss";
export default function Home() {
  return (
    <div className={`container ${style.home}`}>
      <div className={style.page_content}>
        <h1>
          SO, YOU WANT TO TRAVEL TO
          <br />
          <span>SPACE</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link href="/destination">
        <div className={style.explore_btn}>EXPLORE</div>
      </Link>
    </div>
  );
}
