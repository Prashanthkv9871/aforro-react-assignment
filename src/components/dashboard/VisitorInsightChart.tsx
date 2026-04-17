import { ResponsiveLine } from "@nivo/line";

const VisitorInsightData = [
  {
    id: "Loyal Customers",
    color: "#A700FF",
    data: [
      { x: "Jan", y: 320 },
      { x: "Feb", y: 300 },
      { x: "Mar", y: 300 },
      { x: "Apr", y: 200 },
      { x: "May", y: 240 },
      { x: "June", y: 300 },
      { x: "July", y: 250 },
      { x: "Aug", y: 250 },
      { x: "Sep", y: 230 },
      { x: "Oct", y: 190 },
      { x: "Nov", y: 180 },
      { x: "Dec", y: 160 },
    ],
  },
  {
    id: "New Customers",
    color: "#EF4444",
    data: [
      { x: "Jan", y: 300 },
      { x: "Feb", y: 360 },
      { x: "Mar", y: 300 },
      { x: "Apr", y: 250 },
      { x: "May", y: 240 },
      { x: "June", y: 260 },
      { x: "July", y: 250 },
      { x: "Aug", y: 300 },
      { x: "Sep", y: 230 },
      { x: "Oct", y: 300 },
      { x: "Nov", y: 200 },
      { x: "Dec", y: 180 },
    ],
  },
  {
    id: "Unique Customers",
    color: "#3CD856",
    data: [
      { x: "Jan", y: 200 },
      { x: "Feb", y: 360 },
      { x: "Mar", y: 180 },
      { x: "Apr", y: 50 },
      { x: "May", y: 240 },
      { x: "June", y: 160 },
      { x: "July", y: 160 },
      { x: "Aug", y: 160 },
      { x: "Sep", y: 160 },
      { x: "Oct", y: 160 },
      { x: "Nov", y: 160 },
      { x: "Dec", y: 160 },
    ],
  },
];

export const VisitorInsightChart = () => (
  <div className="bg-white p-4 rounded-xl shadow-card h-80 lg:h-auto">
    <h3 className="font-semibold mb-2 text-[#05004E]">Visitor Insights</h3>

    <div style={{ height: "100%", width: "100%" }} className="pb-6">
      <ResponsiveLine
        data={VisitorInsightData}
        margin={{ top: 10, right: 20, bottom: 50, left: 30 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 400,
          stacked: false,
        }}
        curve="monotoneX"
        enableGridX={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 30,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          legendOffset: 10,
          legendPosition: "middle",
        }}
        colors={(d) => d.color}
        lineWidth={2.5}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
        theme={{
          grid: {
            line: {
              stroke: "rgba(148,163,184,0.12)",
              strokeWidth: 1,
            },
          },
          axis: {
            ticks: {
              text: {
                fill: "#94a3b8",
                fontSize: 11,
              },
            },
            legend: {
              text: {
                fill: "#64748b",
                fontSize: 12,
              },
            },
            domain: {
              line: {
                stroke: "rgba(255,255,255,0.08)",
              },
            },
          },
        }}
        tooltip={({ point }) => (
          <div
            className="bg-[#0f172a] py-3 px-4 rounded-md text-white text-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              minWidth: "120px",
            }}
          >
            <div className="whitespace-nowrap opacity-70 text-xs">
              Line: {point.seriesId}
            </div>
            <div className="mt-1">
              {point.data.xFormatted} → <b>{point.data.yFormatted}</b>
            </div>
          </div>
        )}
        legends={[
          {
            anchor: "bottom-left",
            direction: "row",
            translateX: -20,
            translateY: 45,
            itemWidth: 115,
            itemHeight: 18,
            itemOpacity: 0.8,
            symbolSize: 10,
            symbolSpacing: 4,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  </div>
);
