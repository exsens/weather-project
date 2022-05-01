import React from 'react';

import './list.scss'

export const List = ({ children }) => {
  return (
    <ul className="list">{children}</ul>
  )
}
