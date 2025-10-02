import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";
import { Button } from "@/components/ui/button";
import { returnResults } from "@/lib/winrate";

export default function StartPage() {
  //const { accountId } = useParams();
  const accountId = "282749272";
  const [days, setDays] = React.useState(30);   // 30 | 60 | 90
  const [deltas, setDeltas] = React.useState([]); // [+1, -1, ...] newest→oldest
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!accountId) return;
    (async () => {
      try {
        const results = await returnResults(accountId, days, 22, 500); // adjust limit as you like
        setDeltas(results);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [accountId, days]);

  // Make the curve go oldest → newest and compute cumulative net wins
  const xs = React.useMemo(() => {
    const n = deltas.length;
    return Array.from({ length: n }, (_, i) => i + 1);
  }, [deltas.length]);

  const ys = React.useMemo(() => {
    let acc = 0;
    // reverse so left→right is oldest→newest
    return [...deltas].reverse().map(d => (acc += d));
  }, [deltas]);

  return (
    <div className="flex flex-col bg-gray-950 min-h-screen p-4">
      <div className="flex flex-row justify-between items-center">
        <div className="mb-4 text-white">Winrate (net wins) for {accountId}</div>
        <div className="flex gap-2">
          <Button variant={days===30?"default":"outline"} onClick={() => setDays(30)}>30</Button>
          <Button variant={days===60?"default":"outline"} onClick={() => setDays(60)}>60</Button>
          <Button variant={days===90?"default":"outline"} onClick={() => setDays(90)}>90</Button>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-600 p-4 rounded">
        <LineChart
       
          xAxis={[{ data: xs, label: "Recent matches", color: "#ffffff" }]}
          
          series={[
            {
              data: ys,
              label: "Net wins",
              color: "#60a5fa",     // Tailwind blue-400
             showMark: false,
             colorMap: {
                type: "continous",
                min: Math.min(...ys),
                max: Math.max(...ys),
                color: (value) => (value >= 0 ? "blue" : "red"), // 👈 custom callback
              },
             
            },
          ]}
          height={260}
          sx={{
            ".MuiChartsAxis-root line": { stroke: "#94a3b8" },
            ".MuiChartsAxis-tickLabel": { fill: "#ffffff" },
            ".MuiChartsGrid-line": { stroke: "#475569" },
          }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              axisDirection: 'x',
              direction: 'vertical',
            },
          }}
        />
      </div>
    </div>
  );
}