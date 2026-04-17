import { ResponsiveBar } from "@nivo/bar";

type RevenueData = {
  day: string;
  "Online Sales": number;
  "Offline Sales": number;
};

const data: RevenueData[] = [
  { day: "Monday", "Online Sales": 15000, "Offline Sales": 10000 },
  { day: "Tuesday", "Online Sales": 20000, "Offline Sales": 15000 },
  { day: "Wednesday", "Online Sales": 5000, "Offline Sales": 24000 },
  { day: "Thursday", "Online Sales": 15000, "Offline Sales": 5000 },
  { day: "Friday", "Online Sales": 20000, "Offline Sales": 10000 },
  { day: "Saturday", "Online Sales": 15000, "Offline Sales": 20000 },
  { day: "Sunday", "Online Sales": 21000, "Offline Sales": 10000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card h-94">
      <h3 className="font-semibold mb-2 text-[#05004E]">Total Revenue</h3>
      <ResponsiveBar
        data={data}
        keys={["Online Sales", "Offline Sales"]}
        indexBy="day"
        margin={{ top: 5, right: 10, bottom: 80, left: 30 }}
        padding={0.4}
        innerPadding={4}
        groupMode="grouped"
        borderRadius={4}
        colors={({ id }) => (id === "Online Sales" ? "#3B82F6" : "#10B981")}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          format: (v) => `${v / 1000}k`,
        }}
        gridYValues={[0, 5000, 10000, 15000, 20000, 25000]}
        enableLabel={false}
        tooltip={({ label, value, color }) => (
          <div
            className="bg-[#0f172a] py-3 px-4 rounded-md text-white text-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              minWidth: "120px",
            }}
          >
            <div className="flex items-center gap-2 whitespace-nowrap opacity-70 text-xs">
              <p
                className="h-3 w-3 rounded-full"
                style={{ background: color }}
              />
              {label}
            </div>
            <div className="mt-1 text-sm">{value}</div>
          </div>
        )}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom",
            direction: "row",
            translateY: 50,
            itemWidth: 120,
            itemHeight: 20,
            symbolSize: 10,
            symbolShape: "circle",
          },
        ]}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: "#9CA3AF",
              },
            },
          },
          grid: {
            line: {
              stroke: "#E5E7EB",
            },
          },
        }}
      />
    </div>
  );
};

export default RevenueChart;
