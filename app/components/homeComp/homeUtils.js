// API 데이터의 날짜순 정렬 함수
const sortFunc = (data) =>
  data.sort((a, b) => {
    const dateA = new Date(a.DATE.split("~")[0]);
    const dateB = new Date(b.DATE.split("~")[0]);
    return dateA - dateB;
  });

export const API_SortFunc = (data) => {
  sortFunc(data);
  return data;
};

// 지난 행사 데이터를 제외한 리스트 필터 함수
export const API_FilterFunc = (data) => {
  const curDate = new Date().toISOString().split("T")[0];
  const filterData = data.filter((item) => {
    const dateRange = item.DATE.split("~");
    const endDate = new Date(dateRange[1]).toISOString().split("T")[0];
    return endDate >= curDate;
  });
  return filterData;
};
