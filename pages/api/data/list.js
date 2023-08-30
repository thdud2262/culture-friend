import { API_FilterFunc, API_SortFunc } from "@/app/util/utils";
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { codename, serviceKey, type, urlDate } = req.body;
  const API_URL =
    type == "cultureList"
      ? `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/100/${codename}/ /${urlDate}`
      : `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/100/ / /${urlDate}`;

  await fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API request failed --- fetch 요청실패");
      }
      return response.json();
    })
    .then((result) => {
      const lists = result.culturalEventInfo.row;
      const listCopy = [...lists];

      const dataSortList = API_SortFunc(listCopy);
      const filterList = API_FilterFunc(dataSortList);

      return res.status(200).json(filterList);
    });
}
