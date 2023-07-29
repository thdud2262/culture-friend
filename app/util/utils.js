export const serviceKey = process.env.NEXT_PUBLIC_SERVICEKEY;

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

// 지난 공연 데이터를 제외하는 필터링 함수
export const API_FilterFunc = (data) => {
  const curDate = new Date().toISOString().split("T")[0];

  const filterData = data.filter((item) => {
    const dateRange = item.DATE.split("~");
    const endDate = new Date(dateRange[1]).toISOString().split("T")[0];
    return endDate >= curDate;
  });
  return filterData;
};

// 20일 내로 끝나는 공연 리스트 필터링 함수
export const API_WeekendFilterFunc = (data) => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 20);
  const nextWeekDay = nextWeek.toISOString().split('T')[0]

  const weekendFilterData = data.filter((item) => {
    const endDate = item.END_DATE.split(" ")[0];
    return endDate < nextWeekDay;
  });
  return weekendFilterData;
};