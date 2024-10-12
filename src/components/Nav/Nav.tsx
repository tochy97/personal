import React, { ReactNode, useRef, useState } from 'react'
import { IoOptionsOutline, IoClose } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

import { navBar, navComponentContainer, navTitle, subNavContainer } from './model/classnames'
import { useWindowDimensions } from '../functions';

type Props = {}

export default function Nav({ }: Props) {
  const [subVisible, setSubVisible] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const navRef = useRef<HTMLDivElement>(null);

  const rightSide: ReactNode =
    <>
      <div className={navComponentContainer}>
        History
      </div>
    </>

  return (
    <>
      <nav className={navBar} ref={navRef}>
        <div className={navComponentContainer}>
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