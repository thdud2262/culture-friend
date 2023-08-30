"use client";
import React, { useEffect, useState } from "react";
import { serviceKey } from "../utils";

export default function useHomeDataFetch(codename = "", curDate = "", type) {
  const [fetchHomeDataList, setFetchHomeDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/data/home`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codename: codename,
          curDate: curDate,
          serviceKey: serviceKey,
          type: type,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const result = await response.json();
      setFetchHomeDataList(result);
    };

    fetchData();
  }, [codename, curDate]);

  return fetchHomeDataList;
}
