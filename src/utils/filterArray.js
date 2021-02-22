export const filterArray = (array, filter, prop) => 
  array.filter(item => 
    item[prop].toLowerCase().includes(filter.toLowerCase())
  );