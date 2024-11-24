import { createRef, ReactElement, useState } from 'react'
import { FaSearch } from "react-icons/fa";

import { Past } from '../model/types';
import { monthsArray } from '../model/constants';
import Modal from '../../Modal/Modal';
import { pictureButton, submitButton, textField } from '../../classNames';
import { historyContainer, fixedOptionBox, instruction } from './classNames';
import Months from './Months/Months';

type Props = {
  past: Past
}

/**
 * Build display including:
 * Scrolltracker
 * Calender
 * Options Box
 * @param past 
 * @returns 
 */
export default function View({ past }: Props): ReactElement<any, any> {

  const today: Date = new Date();

  // Inputs for options box
  const [goYear, setGoYear] = useState<number>(1997);
  let yearOptions: Array<{ display: number, value: number }> = [];
  for (let i = 1997; i <= today.getFullYear(); i++) {
    yearOptions.push({ display: i, value: i });
  }
  const [goMonth, setGoMonth] = useState<number>(0);
  let monthOptions = [];
  for (let i = 0; i < 12; i++) {
    monthOptions.push({ display: monthsArray[i], value: i });
  }


  // Either use a direct input or find index of the month and pop then view there
  const search = (year: number, month: number, direct?: number): void => {
    if (!direct) {
      direct = past.findIndex((element) => element.year === year && element.index === month);
    }
    past[direct].ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  };

  return (
    <div className={historyContainer}>
      <div className={instruction + "bg-blue-200"}>New York Times calender of articles from 1997 to today.</div>

      <div className={fixedOptionBox}>
        <div>
          {/* Options Box */}
          <Modal
            enableOnClick={true}
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
            width="[100px]"
            height="[50px]"
            top="0"
            left="0"
          />
        </div>
      </div>
      <div>
        {
          // Map the months to Months
          past.map((element, index) => (
            <div key={index} ref={past[index].ref}>
              <Months thisMonth={element} year={element.year} />
            </div>
          ))
        }
      </div>
    </div>
  );
}