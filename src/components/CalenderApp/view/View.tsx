import React, { createRef, ReactElement, RefObject, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import { Past } from '../model/types';
import { useWindowDimensions } from '../../functions';
import { monthsArray } from '../model/constants';
import { useScroll } from 'framer-motion';
import Modal from '../../Modal/Modal';
import { fixedOptionBox, pictureButton, scrollTracker, stack, submitButton, textField } from '../../classNames';
import { historyContainer } from '../model/classNames';
import Months from './Months/Months';
import Loading from '../../Loading/Loading';

type Props = {
  past: Past
}

export default function View({ past }: Props): ReactElement<any, any> {
    const [goYear, setGoYear] = useState<number>(0);
    const [goMonth, setGoMonth] = useState<number>(0);
    const today:Date = new Date();

    let yearOptions: Array<{display: number, value: number}> = [];

    for (let i = 1997; i <= today.getFullYear(); i++) {
      yearOptions.push({ display: i, value: i });
    }
    let monthOptions = [];

    for (let i = 0; i < 12; i++) {
      monthOptions.push({ display: monthsArray[i], value: i + 1 });
    }

    const { height } = useWindowDimensions();

    const search = (year: number, month: number, direct?: number):void => {
      if (!direct) {
        direct = past.findIndex((element) => element.year == year && element.index == month);
      }
      past[direct].popView();
    };

    let [viewHeight, setViewHeight] = useState(80);

    useEffect(() => {
      if (height <= 740) {
        setViewHeight(70);
      } else {
        setViewHeight(80);
      }
    }, [height]);

    const viewRef: RefObject<HTMLDivElement> = createRef();
    const { scrollYProgress } = useScroll({
      container: viewRef,
    });

    return (
      <div className={`${historyContainer} h-[${viewHeight}vh]`}>
        <motion.div
          className={scrollTracker}
          style={{ scaleX: scrollYProgress }}
        />
        <div className={fixedOptionBox}>
          <div>
            <Modal
              trigger={
                <div className={pictureButton}>
                  {" "}
                  <FaSearch size={29} />
                </div>
              }
              content={
                <>
                  <select
                    className={textField}
                    onChange={(event) =>
                      setGoYear(parseInt(event.target.value))
                    }
                    value={goYear}
                  >
                    <option value="" disabled defaultValue="true">
                      Year
                    </option>
                    {yearOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.display}
                      </option>
                    ))}
                  </select>
                  <select
                    className={textField}
                    onChange={(event) =>
                      setGoMonth(parseInt(event.target.value))
                    }
                    value={goMonth}
                  >
                    <option value="" disabled defaultValue="true">
                      Month
                    </option>
                    {monthOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.display}
                      </option>
                    ))}
                  </select>
                  <button
                    className={submitButton}
                    onClick={() => search(goYear, goMonth)}
                  >
                    Go
                  </button>
                </>
              }
              modalContainerClass={stack + " relative"}
              width="[100px]"
              height="[50px]"
              top="0"
              left="0"
            />
          </div>
        </div>
        {
          past.map((element, index) => (
            <div key={index} ref={past[index].ref}>
              <Months thisMonth={element} year={element.year} />
            </div>
          ))
        }
      </div>
    );
}