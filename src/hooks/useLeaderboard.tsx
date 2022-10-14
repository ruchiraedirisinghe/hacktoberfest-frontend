import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AppConfig } from "../config";

const fetchTeam = () =>
  axios
    .get(`${AppConfig.api_url}/leaderboard`)
    .then((response) => response.data);

export default function useLeaderboard() {
  return useQuery(["leaderboard"], () => fetchTeam());
}
