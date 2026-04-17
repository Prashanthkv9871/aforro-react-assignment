import { ResponsiveBar } from "@nivo/bar";

type ChartItem = {
  label: string;
  volume: number;
  service: number;
};

const data: ChartItem[] = [
  { label: "Jan", volume: 32, service: 24 },
  { label: "Feb", volume: 36, service: 34 },
  { label: "Mar", volume: 14, service: 42 },
  { label: "Apr", volume: 16, service: 34 },
  { label: "May", volume: 14, service: 24 },
  { label: "June", volume: 24, service: 16 },
];

const getVolumeTotal = (series: ChartItem[]) =>
  series.reduce((sum, item) => sum + item.volume, 0);

const getServiceTotal = (series: ChartItem[]) =>
  series.reduce((sum, item) => sum + item.volume, 0);

const VolumeVsServiceLevel = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card h-94">
      <h3 className="font-semibold mb-2 text-[#05004E]">
        Volume vs Service Level
      </h3>

      <div className="h-[75%]">
        <ResponsiveBar
          data={data}
          keys={["volume", "service"]}
          indexBy="label"
          groupMode="stacked"
          margin={{ top: 8, right: 5, bottom: 10, left: 5 }}
          padding={0.72}
          innerPadding={0}
          borderRadius={2}
          enableGridY={false}
          enableGridX={false}
          isInteractive={true}
          axisTop={null}
          axisRight={null}
          axisLeft={null}
          axisBottom={null}
          enableLabel={false}
          colors={({ id }) => (id === "volume" ? "#19D38A" : "#1E88E5")}
          theme={{
            tooltip: {
              container: {
                background: "#ffffff",
                color: "#1f2937",
                fontSize: 12,
                borderRadius: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              },
            },
          }}
          tooltip={({ id, value, indexValue, color }) => (
            <div
              className="bg-[#0f172a] py-3 px-4 rounded-md text-white text-sm"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                minWidth: "120px",
              }}
            >
              <div className="whitespace-nowrap opacity-70 text-xs capitalize">
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: color,
                    display: "inline-block",
                  }}
                />{" "}
                {String(id)}
              </div>
              <div className="mt-1">
                {String(indexValue)} → <b>{value}</b>
              </div>
            </div>
          )}
        />
      </div>

      <div className="flex justify-center w-full gap-2 pt-3 border-t border-gray-200">
        <div className="text-center">
          <p className="flex items-center gap-2 text-xs text-gray-400">
            <span className="h-3 w-3 rounded-full bg-[#1E88E5]" />
            <span>Volume</span>
          </p>
          <p className="text-base font-semibold text-[#222B45]">
            {getVolumeTotal(data)}
          </p>
        </div>

        <div className="h-6 w-0.5 bg-gray-300" />

        <div className="text-center">
          <p className="flex items-center gap-2 text-xs text-gray-400">
            <span className="h-3 w-3 rounded-full bg-[#19D38A]" />
            <span>Services</span>
          </p>
          <p className="text-base font-semibold text-[#222B45]">
            {getServiceTotal(data)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolumeVsServiceLevel;
