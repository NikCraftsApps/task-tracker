import { useEffect, useState } from "react";

export default function Points({ refreshTrigger }) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5178/api/points")
      .then((res) => res.json())
      .then((data) => setPoints(data.points ?? 0));
  }, [refreshTrigger]);

  return (
    <div className="points">
      🏆 Points: <strong>{points}</strong>
    </div>
  );
}
