import React, { ReactElement, useState, useEffect } from 'react';

import getPast from "./model/calculations/getPast";
import { Past, PastPromise } from './model/types';

function CalenderApp(): ReactElement<any, any> {
  // Get full life object
  const [myLife, setMyLife] = useState<Past>();

  useEffect(() => {
    getPast(1997).then((res: Past) => {
      setMyLife(res);
    });
  }, [])


  // Create new display object and map life
  return (
    <div>
    </div>
  );
}

export default CalenderApp;