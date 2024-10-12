import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { closeButton, pageDivider } from '../classNames';
import { modalContentContainer, modalHeaderContainer } from './model/classNames';

type Props = {
  trigger: ReactNode;
  content: ReactNode;
  header?: ReactNode;
  closeButtonclass?: string;
  modalContainerClass?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
};

export default function Modal({ trigger, header, content, closeButtonclass, modalContainerClass, width, height, top, left }: Props) {
    const [visible, setVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Close modal if click outside
        const handleClickOutside = (event: MouseEvent) => {

            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setVisible(false)
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

    return (
      <>
        <div onClick={() => setVisible(true)}>{trigger}</div>
        {visible && (
          <div
            ref={modalRef}
            className={`
                        ${modalContentContainer}
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
            <div className={modalContentContainer}>{content}</div>
            <button
              className={closeButton + closeButtonclass}
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </div>
        )}
      </>
    );
}