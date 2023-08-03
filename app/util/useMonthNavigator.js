// useMonthNavigation.js
import { useState } from 'react';

export function useMonthNavigation(initialDate) {
  const [curDate, setCurDate] = useState({
    year: initialDate.getFullYear(),
    month: initialDate.getMonth(),
    date: initialDate.getDate(),
  });

  const handlePrevMonth = () => {
    setCurDate((state) => {
      const prevMonth = state.month - 1;
      const prevYear = state.year;
      if (prevMonth < 0) {
        return { ...state, month: 11, year: prevYear - 1 };
      }
      return { ...state, month: prevMonth };
    });
  };

  const handleNextMonth = () => {
    setCurDate((state) => {
      const nextMonth = state.month + 1;
      const nextYear = state.year;
      if (nextMonth > 11) {
        return { ...state, month: 0, year: nextYear + 1 };
      }
      return { ...state, month: nextMonth };
    });
  };

  return {
    curDate,
    handlePrevMonth,
    handleNextMonth,
  };
}
