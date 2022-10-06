import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AppConfig } from "../config";

const fetchTeam = (teamId: string) =>
  axios
    .get(`${AppConfig.api_url}/registration/${teamId}`)
    .then((response) => response.data);

export default function useTeam(teamId: string) {
  return useQuery(["team", teamId], () => fetchTeam(teamId));
}
