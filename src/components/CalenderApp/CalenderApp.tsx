import React, { ReactElement, useState, useEffect } from 'react';

import getPast from "./model/calculations/getPast";
import { Past, PastPromise } from './model/types';
import View from './view/View';
import Loading from '../Loading/Loading';

function CalenderApp(): ReactElement<any, any> {
  // Get full life object
  const [myLife, setMyLife] = useState<Past>([]);

  useEffect(() => {
    getPast(1997).then((res: Past) => {
      setMyLife(res);
    });
  }, [])


  // Create new display object and map life
  return (
        <View past={myLife} />
  );
}

export default CalenderApp;