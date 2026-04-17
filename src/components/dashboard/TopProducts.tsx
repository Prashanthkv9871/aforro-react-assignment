import type { Product } from "../../types/dashboard";
import type { IColumn } from "../../types/table";

const columns: IColumn[] = [
  { header: "#", field: "id" },
  { header: "Name", field: "name" },
  { header: "Progress", field: "progress" },
  { header: "Sales", field: "sales" },
];

const products: Product[] = [
  {
    id: "01",
    name: "Home Decor Range",
    progress: 70,
    sales: "15k",
    primaryColor: "#0095FF",
    secondaryColor: "#CDE7FF",
  },
  {
    id: "02",
    name: "Disney Bag 18'",
    progress: 80,
    sales: "29k",
    primaryColor: "#00E096",
    secondaryColor: "#8CFAC7",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    progress: 50,
    sales: "18k",
    primaryColor: "#884DFF",
    secondaryColor: "#C5A8FF",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    progress: 90,
    sales: "25k",
    primaryColor: "#FF8F0D",
    secondaryColor: "#FFD5A4",
  },
];

const TopProducts = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card h-94">
      <h3 className="font-semibold mb-2 text-[#05004E]">Top Products</h3>

      <table className="w-full">
        <thead>
          <tr className="  border-b border-[#EDF2F6]">
            {columns.map((col) => (
              <th
                key={col.header}
                className="text-sm text-left font-normal py-5 px-3 text-[#96A5B8]"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-[#EDF2F6]">
              {columns.map((col) => (
                <td
                  key={col.field}
                  className="text-sm text-left py-5 px-3 text-[#444A6D]"
                >
                  {col.field === "sales" ? (
                    <span
                      style={{
                        color: product.primaryColor,
                        border: `1px solid ${product.primaryColor}`,
                      }}
                      className="rounded text-sm px-2 py-1"
                    >
                      {product[col.field]}
                    </span>
                  ) : col.field === "progress" ? (
                    <div
                      className="h-1 rounded min-w-28"
                      style={{ backgroundColor: product.secondaryColor }}
                    >
                      <div
                        className="h-1 rounded"
                        style={{
                          width: `${product[col.field]}%`,
                          backgroundColor: product.primaryColor,
                        }}
                      />
                    </div>
                  ) : (
                    product[col.field]
                  )}{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
