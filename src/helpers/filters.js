export function filterData(data, query, filter = "") {
  const filteredData = data.filter(item => 
    item.name
      .toString()
      .toLowerCase()
      .indexOf(query.toString().toLocaleLowerCase()) > -1 &&
    item.region
      .toString()
      .toLowerCase()
      .indexOf(filter.toString().toLocaleLowerCase()) > -1
  );
  return filteredData;
}