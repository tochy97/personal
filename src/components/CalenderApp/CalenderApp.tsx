import React, { ReactElement } from 'react';
import getPast from "./calculation/getPast";

function CalenderApp(): ReactElement<any, any> {
  // Get full life object
  const myLife = getPast(1997);

  // Create new display object and map life
  return (
    <div>
    </div>
  );
}

export default CalenderApp;