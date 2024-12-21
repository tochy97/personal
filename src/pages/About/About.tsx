import React, { ReactElement, RefObject } from "react";
// @ts-ignore
import WeatherUI from '@egeonu/weather';

import {
  centerContainer,
  innerContainer,
  innerText,
  link,
  pageHeader,
  stack,
} from "../../components/classNames";

export default function About(): ReactElement<any, any> {
  const meRef: RefObject<HTMLImageElement> = React.createRef()
  meRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })

  return (
    <div className={stack + " place-items-center mb-[5em]"}>
      <h1 className={pageHeader + 'text-center'}>Grand Prairie, Tx Weather</h1>
      <WeatherUI longitude={-97.028336} latitude={32.679420} temperature_unit='f' wind_speed_unit='mph'/>
      <article className={innerContainer + centerContainer + stack}>
        <h1 className={pageHeader + 'text-center'}>About</h1>
        <p className={innerText + 'indent-12 '}>
          My name is Tochy, and I am a Nigerian born American living in Texas. I am experienced building full-stack web applications, microservice based APIs, AI development and cloud-base ecosystems.
        </p>
        <p className={innerText + 'indent-12 '}>
          In my current role as a Software Developer at Argo, I have gained hands-on experience in designing and implementing features within an enterprise API, optimizing algorithms, and ensuring the scalability and reliability of microservices architectures. 
        </p>
        <p className={innerText + 'indent-12 '}>
          I also have professional experience as a network operation technician working at Provision Data Center. This role also required me to I set up local networks for data servers and crypto minors as well as performing daily checks and maintenance on these data servers and crypto minors. 
        </p>
        <aside className={innerText + 'indent-12 '}>
          This website is a simple react app built to showcase my node packages from my organization<a className={link} href="https://www.npmjs.com/org/egeonu"  target="_blank" rel="noopener noreferrer">&#9;@egeonu</a>. The website is hosted on Google Firebase and I have
continuous integration and deployments handled with Github Actions. - <a className={link} target="_blank" href='https://github.com/tochy97/personal'>Souce code. </a>
        </aside>
        <aside className={innerText + 'indent-12 '}>
          The NyTimes page is something i wrote for fun using my <a className={link} href="https://www.npmjs.com/package/@egeonu/calender-calculate"  target="_blank" rel="noopener noreferrer">&#9;@egeonu/calender</a> node package. I am requesting a list of articles based on the day clicked in on the calender.
          Enjoy the bubbles!
        </aside>
      </article>
    </div>
  );
}
