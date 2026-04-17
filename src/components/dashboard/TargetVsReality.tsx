import { ResponsiveBar } from "@nivo/bar";
import { ShoppingBag, Trophy } from "lucide-react";

type SalesData = {
  month: string;
  reality: number;
  target: number;
};

const data: SalesData[] = [
  { month: "Jan", reality: 42, target: 55 },
  { month: "Feb", reality: 36, target: 50 },
  { month: "Mar", reality: 30, target: 62 },
  { month: "Apr", reality: 42, target: 50 },
  { month: "May", reality: 52, target: 70 },
  { month: "June", reality: 52, target: 70 },
  { month: "July", reality: 52, target: 70 },
];

const TargetVsReality = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card h-94">
      <h3 className="font-semibold mb-2 text-[#05004E]">Target vs Reality</h3>

      <div className="h-[60%]">
        <ResponsiveBar
          data={data}
          keys={["reality", "target"]}
          indexBy="month"
          groupMode="grouped"
          margin={{ top: 10, right: 5, bottom: 30, left: 5 }}
          padding={0.42}
          innerPadding={4}
          borderRadius={4}
          enableGridY={false}
          enableGridX={false}
          axisTop={null}
          axisRight={null}
          axisLeft={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 12,
            tickRotation: 0,
          }}
          enableLabel={false}
          colors={({ id }) => (id === "reality" ? "#57C3A5" : "#F5C400")}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#8A94A6",
                  fontSize: 12,
                },
              },
              domain: {
                line: {
                  stroke: "transparent",
                },
              },
            },
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
          tooltip={({ id, value, color, indexValue }) => (
            <div
              className="bg-[#0f172a] py-3 px-4 rounded-md text-white text-sm"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                minWidth: "120px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: color,
                    display: "inline-block",
                  }}
                />
                <span className="whitespace-nowrap">
                  {id === "reality" ? "Reality Sales" : "Target Sales"}
                </span>
              </div>
              <div>
                {String(indexValue)}: <strong>{value}</strong>
              </div>
            </div>
          )}
        />
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DDF5EC]">
              <ShoppingBag size={16} className="text-[#57C3A5]" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1F2A44]">
                Reality Sales
              </p>
              <p className="text-[12px] text-[#98A2B3]">Global</p>
            </div>
          </div>
          <p className="text-[28px] font-semibold leading-none text-[#57C3A5]">
            8.823
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1CC]">
              <Trophy size={16} className="text-[#F5C400]" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1F2A44]">
                Target Sales
              </p>
              <p className="text-[12px] text-[#98A2B3]">Commercial</p>
            </div>
          </div>
          <p className="text-[28px] font-semibold leading-none text-[#F5A400]">
            12.122
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetVsReality;
