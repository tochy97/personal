import { ReactElement } from "react";

import { container } from "./model/classNames";
import Floaters from "../Floaters/Floaters";

type Props = {
  display: ReactElement<any, any>;
};

/**
 * Main body for content
 * @param display 
 * @returns 
 */
export default function Content({ display }: Props) {
  return (
    <main className={container}>
      {display}
    </main>
  );
}
