import { ReactNode, useRef, useState } from 'react'
import { IoOptionsOutline, IoClose } from "react-icons/io5";

import { navBar, navComponentContainer, subNavContainer } from './model/classnames'
import { useWindowDimensions } from '../../functions';
import { contentVar } from '../../apollo/apollo';

export default function Nav() {
  const [subVisible, setSubVisible] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const navRef = useRef<HTMLDivElement>(null);

  const content = contentVar();

  const changeView = (view: string) => {
    content.current = view;
    contentVar(content);
  }
  const rightSide: ReactNode =
    <>
      <div className={navComponentContainer} onClick={() => changeView("History")}>
        History
      </div>
    </>

  return (
    <>
      <nav className={navBar} ref={navRef}>
        <div className={navComponentContainer} onClick={() => changeView("Home")}>
            Tochy Egeonu
        </div>
        {
          (width < 1024)
            ?
            <>
              <div className={`h-auto visible cursor-pointer mt-2 ${navComponentContainer}`} onClick={() => setSubVisible(!subVisible)}>
                {
                  subVisible
                    ?
                    <IoClose size={25} />
                    :
                    <IoOptionsOutline size={25} />
                }
              </div>
              {
                (subVisible)
                &&
                <div className={subNavContainer}>
                  {rightSide}
                </div>
              }
            </>

            :
            <div className={'flex'}>
              {rightSide}
            </div>

        }
      </nav>
    </>
  );
}