import { useState } from 'react';

export default items => {
  const [currentPageItems, setCurrentPageItems] = useState([]);
  const paginationProps = { items: items, onChange: setCurrentPageItems };
  return [paginationProps, currentPageItems];
};
