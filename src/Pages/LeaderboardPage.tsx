import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../App";
import { ILeaderboard } from "../interfaces";

export function LeaderboardPage(): JSX.Element {
  const [top10Doggies, setTop10Doggies] = useState<ILeaderboard[]>();

  const fetchTop10Doggies = useCallback(async () => {
    try {
      const { data } = await axios.get(baseUrl + "leaderboard");
      setTop10Doggies(data);
    } catch (error) {
      console.error(error);
    }
  }, [setTop10Doggies]);

  useEffect(() => {
    fetchTop10Doggies();
  }, [fetchTop10Doggies]);

  return (
    <div className="ctn-leaderboard-page">
      <div className="ctn-leaderboard">
        <p>Top 10</p>
      </div>
    </div>
  );
}
