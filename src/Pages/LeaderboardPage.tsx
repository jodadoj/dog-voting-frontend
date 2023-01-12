import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../App";
import { ILeaderboard } from "../interfaces";
import LoadingSpin from "react-loading-spin";
import { TopDog } from "../Components/TopDog";

export function LeaderboardPage(): JSX.Element {
  const [top10Doggies, setTop10Doggies] = useState<ILeaderboard[]>([]);

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

        <div>
          <TopDog formattedBreed={top10Doggies[0].breed} />
          {top10Doggies.length > 1 && (
            <TopDog formattedBreed={top10Doggies[1].breed} />
          )}
          {top10Doggies.length > 2 && (
            <TopDog formattedBreed={top10Doggies[2].breed} />
          )}
        </div>
  } else {
    return (
      <div className={"loading-icon"}>
        <LoadingSpin />
      </div>
    );
  }
}
