import { Request, Response } from "express";
// import express from 'express';
import fetch from "node-fetch";

export default async function handler(req, res) {
  const API_URL =
    "http://openapi.seoul.go.kr:8088/6e4957636974686432346a6c614d7a/json/culturalEventInfo/1/10/";

  const response = await fetch(API_URL)
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
