import React from 'react';

import Button from '../Button.jsx';

export default function B3C (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "3"
      {...props}
    >
      {props.children}
    </Button>
  );
}
