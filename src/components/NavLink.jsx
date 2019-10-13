import React from 'react';
import { Link } from '@reach/router';
import { baseColor } from '../constant';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? baseColor : '#666',
          borderRadius: isCurrent && '0',
          borderLeft: isCurrent
            ? props.border
              ? `0.2rem solid ${baseColor}`
              : '0.2rem solid transparent'
            : '0.2rem solid transparent'
        }
      };
    }}
  />
);

export default NavLink;
