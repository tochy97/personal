import { ReactElement } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { footer, footerContainer, footerIcon } from "./classNames";

const links = [
  { href: "https://www.linkedin.com/in/tochukwu-egeonu-6b3600424/", label: "LinkedIn", Icon: AiOutlineLinkedin },
  { href: "https://github.com/tochy97", label: "GitHub", Icon: VscGithub },
];

export default function Footer(): ReactElement {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        {links.map(({ href, label, Icon }) => (
          <a key={label} target="_blank" rel="noreferrer" href={href} aria-label={label}>
            <Icon className={footerIcon} />
          </a>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500">
        React on Firebase, shipped by GitHub Actions · packages at{" "}
        <a className="text-sky-400 hover:text-sky-300" target="_blank" rel="noreferrer" href="https://www.npmjs.com/org/egeonu">@egeonu</a>
        {" "}·{" "}
        <a className="text-sky-400 hover:text-sky-300" target="_blank" rel="noreferrer" href="https://github.com/tochy97/personal">source</a>
        {" "}· enjoy the bubbles
      </p>
    </footer>
  );
}
