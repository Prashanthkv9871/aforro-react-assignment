import { ResponsiveLine } from "@nivo/line";

type LineData = {
  id: string;
  data: { x: string; y: number }[];
};

const data: LineData[] = [
  {
    id: "Last Month",
    data: [
      { x: "Jan", y: 20 },
      { x: "Feb", y: 40 },
      { x: "Mar", y: 10 },
      { x: "Apr", y: 10 },
      { x: "May", y: 20 },
      { x: "Jun", y: 18 },
      { x: "Jul", y: 35 },
    ],
  },
  {
    id: "This Month",
    data: [
      { x: "Jan", y: 60 },
      { x: "Feb", y: 50 },
      { x: "Mar", y: 55 },
      { x: "Apr", y: 45 },
      { x: "May", y: 58 },
      { x: "Jun", y: 42 },
      { x: "Jul", y: 70 },
    ],
  },
];
const getTotal = (series: LineData) =>
  series.data.reduce((sum, item) => sum + item.y, 0);

const lastMonthTotal = getTotal(data[0]);
const thisMonthTotal = getTotal(data[1]);

const CustomerSatisfaction = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card h-94">
      <h3 className="font-semibold mb-2 text-[#05004E]">
        Customer Satisfaction
      </h3>

      <div className="h-[75%]">
        <ResponsiveLine
          data={data}
          margin={{ top: 5, right: 10, bottom: 10, left: 10 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: 0, max: 80 }}
          curve="monotoneX" // smooth curve like UI
          enablePoints={true}
          pointSize={6}
          pointBorderWidth={2}
          colors={({ id }) => (id === "Last Month" ? "#3B82F6" : "#10B981")}
          enableArea={true}
          areaOpacity={0.15}
          useMesh={true}
          gridYValues={[]}
          theme={{
            axis: {
              ticks: {
                text: {
                  fontSize: 12,
                  fill: "#9CA3AF",
                },
              },
            },
          }}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          tooltip={({ point }) => (
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
                  style={{ background: point.color }}
                />
                {point.seriesId}
              </div>
              <div className="mt-1 text-sm whitespace-nowrap">
                X - {point.data.xFormatted}, Y - {point.data.yFormatted}
              </div>
            </div>
          )}
        />
      </div>
      <div className="flex justify-center w-full gap-2 pt-3 border-t border-gray-200">
        <div className="text-center">
          <p className="flex items-center gap-2 text-xs text-gray-400">
            <img src="/assets/icons/CustomerSatisfactionIcon1.svg" alt="icon" />
            Last Month
          </p>
          <p className="text-base font-semibold text-[#222B45]">
            ${lastMonthTotal}
          </p>
        </div>

        <div className="h-6 w-0.5 bg-gray-300" />

        <div className="text-center">
          <p className="flex items-center gap-2 text-xs text-gray-400">
            <img src="/assets/icons/CustomerSatisfactionIcon.svg" alt="icon" />
            This Month
          </p>
          <p className="text-base font-semibold text-[#222B45]">
            ${thisMonthTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
