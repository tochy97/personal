import { ReactElement, useState, useEffect } from 'react';
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