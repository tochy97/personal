import React, { ReactNode, useEffect, useRef, useState } from 'react'

import { closeButton, pageDivider } from '../classNames';
import { modalContainer, modalContentContainer, modalHeaderContainer } from './model/classNames';

type Props = {
  enableOnClick: boolean;
  trigger?: ReactNode;
  content: ReactNode;
  header?: ReactNode;
  closeButtonclass?: string;
  modalContainerClass?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
};

export default function Modal({ enableOnClick, trigger, header, content, closeButtonclass, modalContainerClass, width, height, top, left }: Props) {
  const [visible, setVisible] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close modal if click outside
    const handleClickOutside = (event: MouseEvent) => {

      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        changeVisibility();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  // Default fullscreen
  let w = width ? width : 'screen';
  let h = height ? height : 'screen';
  let t = top ? top : '[75px]';
  let l = left ? left : '0';

  const changeVisibility = () => {
    if (enableOnClick && !visible) {
      setVisible(true);
      if (h === "screen") {
        document.body.style.overflow = "hidden";
      }
    }
    else {
      setVisible(false);
      document.body.style.overflow = "scroll";
    }
  }

  return (
    <>
      <div onClick={() => changeVisibility()}>{trigger}</div>
      {visible && (
        <div
          ref={modalRef}
          className={`
                        ${modalContainer}
                        ${modalContainerClass}
                        top-${t} 
                        left-${l} 
                        w-${w} 
                        h-${h} 
                        rounded-lg`}
        >
          {header ? (
            <>
              <div className={modalHeaderContainer}>{header}</div>
              <hr className={pageDivider} />
            </>
          ) : (
            <></>
          )}
          <div className={modalContentContainer}>
            {content}
            <button
              className={closeButton + closeButtonclass}
              onClick={() => changeVisibility()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}