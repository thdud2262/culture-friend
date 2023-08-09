import { Request, Response } from "express";
// import express from 'express';
import fetch from "node-fetch";

export default async function handler(req, res) {
  // console.log(req.body);
  const { curDate, codename, serviceKey, type, urlDate } = req.body;

  const API_URL =
    type == "homeList"
      ? `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/150/${
          codename ? codename : " "
        }/ /${codename === null ? curDate : " "}`
      : type == "carousel"
      ? `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/150/`
      : type == "cultureList"
      ? `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/500/${codename}/ /${urlDate}`
      : `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/50/ / /${urlDate}`;

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
