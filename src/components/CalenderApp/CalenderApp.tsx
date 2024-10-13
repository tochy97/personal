import { ReactElement, useState, useEffect } from 'react';

import getPast from "./model/calculations/getPast";
import { Past } from './model/types';
import View from './view/View';

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
        <View past={myLife} />
  );
}

export default CalenderApp;