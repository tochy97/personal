import { ReactElement, useState, useEffect, createRef } from 'react';
import { Past } from './model/types';
import View from './view/View';
// @ts-ignore
import { getPast } from "@egeonu/calender-calculate"

/**
 * Main function
 * @returns 
 */
function CalenderApp(): ReactElement<any, any> {
  // Get full life object
  const [myLife, setMyLife] = useState<Past>([]);

  useEffect(() => {
    getPast(1997).then((res: Past) => {
      for (let i = 0; i < res.length; i++)
      {
        res[i].ref = createRef();
      }
      setMyLife(res);
    });
  }, [])

  return (
    <>
      <View past={myLife} />
    </>
  );
}

export default CalenderApp;