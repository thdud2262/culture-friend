import { API_FilterFunc, API_SortFunc } from "@/app/util/utils";
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { curDate, codename, serviceKey, type } = req.body;

  const API_URL =
    type == "homeList"
      ? `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/50/${
          codename ? codename : " "
        }/ /${codename === null ? curDate : " "}`
      : `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/50/`;

  await fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API request failed");
      }
      return response.json();
    })
    .then((result) => {
      const lists = result.culturalEventInfo.row;
      const listCopy = [...lists];

      const dataSortList = API_SortFunc(listCopy);
      const dataFilterList = API_FilterFunc(dataSortList);
      const dataResult = dataFilterList.slice(0, 6)

      return res.status(200).json(dataResult);
    });
}
