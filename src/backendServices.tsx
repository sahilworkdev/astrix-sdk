import axios from "axios";
import { EVENT_API_URI } from "./config";

export const getPastEvents = async (
  token: string,
  page: number = 1,
  tags?: string[] | string
) => {
  try {
    const query = new URLSearchParams();

    if (Array.isArray(tags) && tags.length > 0) {
      query.append("type", tags.join(","));
    } else if (typeof tags === "string" && tags.trim() !== "") {
      query.append("type", tags);
    }
    let apiUrl = `${EVENT_API_URI}/event/getPastEvents?page=${page}`;
    const queryString = query.toString();
    if (queryString) {
      apiUrl += `&${queryString}`;
    }

    const { data } = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};



export const getLiveEvents = async (
  token: string,
  page: number = 1,
  tags?: string[] | string
) => {
  try {
    const query = new URLSearchParams();

    if (Array.isArray(tags) && tags.length > 0) {
      query.append("type", tags.join(","));
    } else if (typeof tags === "string" && tags.trim() !== "") {
      query.append("type", tags);
    }
    let apiUrl = `${EVENT_API_URI}/event/getAll?page=${page}`;
    const queryString = query.toString();
    if (queryString) {
      apiUrl += `&${queryString}`;
    }

    const { data } = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};