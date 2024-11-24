import React, { ReactElement, RefObject, useState } from "react";
import { motion } from "framer-motion";

import {
  articleContainer,
  centerContainer,
  innerContainer,
  innerText,
  link,
  pageHeader,
  stack,
  textButtom,
} from "../../components/classNames";
import { useWindowDimensions } from "../../components/functions";
import me from "./MeCircle.jpg";

export default function About(): ReactElement<any, any> {
  const variants = {
    open: { opacity: 1, height: "auto", x: 0 },
    closed: { opacity: 0, height: "0", x: "-100%" },
  };
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(true);
  const [isMySite, setIsMySite] = useState<boolean>(true);
  const [isAboutMe, setIsAboutMe] = useState<boolean>(true);

  const meRef: RefObject<HTMLImageElement> = React.createRef()
  const { width, height } = useWindowDimensions();
  meRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  })
  // test 2
  return (
    <div className={stack + " place-items-center mb-[5em]"}>
      <div className={innerText}>
        Practicing software developer with a B.S. in Computer Science from the
        University of Texas at Arlington.
      </div>
      <article className={innerContainer + centerContainer + stack}>
        <h1 className={pageHeader + 'text-center'}>About</h1>
        <p className={innerText + 'indent-12 '}>
          My name is Tochy and I am a Nigerian born American living in Texas. I am experienced building full-stack web applications, microservice based APIs, ai development and cloudbase ecosystems.
        </p>
        <p>
          In my current role as a Software Developer at Argo, I have gained hands-on experience in designing and implementing enteprise API, optimizing algorithms, and ensuring the scalability and reliability of microservices architectures.
        </p>
        <p>
          I have worked extensively with Python, Java, Node.js, Go, SQL, NoSQL; Databases like Microsoft-SQL Server, MySQL, MongoDB, and PostgreSQL; Container management with Docker, Kubernetes and OpenShift.
        </p>
        <aside className={innerText + 'indent-12 '}>
          This website is a simple react app deployed with Google Firebase and Github Actions for CI/CD.
        </aside>
        <aside className={innerText + 'indent-12 '}>
          The history page is something i wrote for fun. I use todays date to calculate the week, the week is used to calculate the month, the month is used calculate year, then i use the year calculation to go all the way back to my birthday. - <a className={link} href='https://github.com/tochy97/tochyegeonu_dot_com'>Souce code. </a>
          Enjoy the bubbles!
        </aside>
      </article>
    </div>
  );
}
