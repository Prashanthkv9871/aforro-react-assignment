import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../data/mockGeoFeatures";

type MapDatum = {
  id: string;
  value: number;
};

const data: MapDatum[] = [
  { id: "USA", value: 1 },
  { id: "BRA", value: 2 },
  { id: "SAU", value: 3 },
  { id: "COD", value: 4 },
  { id: "CHN", value: 5 },
  { id: "IDN", value: 6 },
];

const GeographyChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card h-94">
      <h3 className="font-semibold mb-2 text-[#05004E]">
        Sales Mapping by Country
      </h3>

      <div className="h-[90%] w-full">
        <ResponsiveChoropleth
          data={data}
          features={geoFeatures.features}
          margin={{ top: 10, right: 20, bottom: 0, left: 20 }}
          domain={[1, 6]}
          unknownColor="#E9E9EC"
          label="properties.name"
          projectionScale={110}
          projectionTranslation={[0.5, 0.58]}
          projectionRotation={[0, 0, 0]}
          borderWidth={0}
          colors={[
            "#F4A300",
            "#FF5C73",
            "#10B7A6",
            "#5B8CFF",
            "#8B5CF6",
            "#12C98A",
          ]}
          legends={[]}
          tooltip={({ feature }) => (
            <>
              {feature?.label && (
                <div
                  className="bg-[#0f172a] py-3 px-4 rounded-md text-white text-sm"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    minWidth: "120px",
                  }}
                >
                  <div className="font-semibold text-white whitespace-nowrap">
                    {feature.label} → {feature.value}
                  </div>
                </div>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default GeographyChart;
