import React from 'react';
import classnames from 'classnames';
import SvgIcon from "@material-ui/core/SvgIcon";

import Icons from './icons';

const Icon = ({
    fill,
    name,
    width,
    height,
    className,
    ...restProps
}) => {
    return(
      <SvgIcon
         className={classnames('Icon',className)}
         {...restProps}
      >
          {name ? Icons[name] && Icons[name](width,height,fill) : ""}
      </SvgIcon>
    )
};

export default Icon;