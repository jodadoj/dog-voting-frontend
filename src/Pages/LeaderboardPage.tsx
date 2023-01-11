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
      <ol className="ctn-leaderboard">
        {top10Doggies.length > 0 &&
          top10Doggies.map((oneDog, index) => {
            return (
              <li className="ctn-leaderboard-row" key={oneDog.breed}>
                <div className="ctn-leaderboard-row-breed">{oneDog.breed}</div>
                <div className="ctn-leaderboard-row-votes">{oneDog.votes}</div>
              </li>
            );
          })}
      </ol>
    </div>
  );
}
