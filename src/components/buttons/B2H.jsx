import React from 'react';

import Button from '../Button.jsx';

export default function B2H (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "large"
      roundedType = "all"
      bgType      = "2"
      {...props}
    >
      {props.children}
    </Button>
  );
}
