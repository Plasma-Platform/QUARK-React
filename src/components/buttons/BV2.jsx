import React from 'react';

import Button from '../Button.jsx';

export default function BV2 (props) {
  return (
    <Button
      widthType   = "full"
      heightType  = "medium"
      roundedType = "all"
      bgType      = "vk"
      icon        = "vk"
      {...props}
    >
      {props.children}
    </Button>
  );
}
