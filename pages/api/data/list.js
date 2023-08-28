import fetch from "node-fetch";

export default async function handler(req, res) {
  const { codename, serviceKey, type, urlDate } = req.body;
  console.log(type);

  const API_URL =
    type == "cultureList"
      ? `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/150/${codename}/ /${urlDate}`
      : `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/150/ / /${urlDate}`;

  await fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API request failed");
      }
      return response.json();
    })
    .then((result) => {
      return res.status(200).json(result);
    });
}
