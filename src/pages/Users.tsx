import { useMemo, useState } from "react";
import Layout from "../components/layout/Layout";
import useUsers from "../hooks/useUsers";
import type { IColumn } from "../types/table";
import {
  ChevronDownIcon,
  ChevronsDownUp,
  ChevronUpIcon,
  Search,
} from "lucide-react";

const columns: IColumn[] = [
  { header: "Name", field: "name", sortable: true },
  { header: "Email", field: "email", sortable: false },
  { header: "Company Name", field: "company.name", sortable: false },
  { header: "City", field: "address.city", sortable: false },
];

const Users = () => {
  const { users, loading, error } = useUsers();

  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cityOptions = useMemo(() => {
    if (!users?.length) return [];

    return [...new Set(users.map((user) => user.address.city))].sort((a, b) =>
      a.localeCompare(b),
    );
  }, [users]);

  const filteredAndSortedUsers = useMemo(() => {
    if (!users.length) return [];

    let updatedUsers = [...users];

    if (searchInput.trim()) {
      const search = searchInput.toLocaleLowerCase();

      updatedUsers = updatedUsers.filter(
        (user) =>
          user.name.toLocaleLowerCase().includes(search) ||
          user.email.toLocaleLowerCase().includes(search),
      );
    }

    if (selectedCity) {
      updatedUsers = updatedUsers.filter(
        (user) => user.address.city === selectedCity,
      );
    }

    if (sortOrder === "asc") {
      updatedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      updatedUsers.sort((a, b) => b.name.localeCompare(a.name));
    }

    return updatedUsers;
  }, [users, searchInput, selectedCity, sortOrder]);

  const handleSortByName = () => {
    setSortOrder((prev) => {
      if (prev === null) return "asc";
      if (prev === "asc") return "desc";
      return null;
    });
  };

  const resetFilters = () => {
    setSearchInput("");
    setSelectedCity("");
    setSortOrder(null);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-end gap-3 md:flex-row md:items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full md:w-72 pl-8 rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />

          <Search className="absolute top-2.5 left-2" size={20} />
        </div>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full md:w-56 rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        >
          <option value="">All Cities</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button
          onClick={() => resetFilters()}
          className="rounded cursor-pointer bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300"
        >
          Reset
        </button>
      </div>

      {error && (
        <p className="py-2 text-red-600 font-semibold text-xl">{error}</p>
      )}
      <table className="w-full mt-4">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.header}
                className="py-2 px-2 text-left text-base font-semibold"
              >
                <div className="flex gap-2 items-center">
                  {col.header}
                  {col.sortable && (
                    <button
                      onClick={() => handleSortByName()}
                      className="cursor-pointer mt-1"
                    >
                      {!sortOrder ? (
                        <ChevronsDownUp color="gray" size={18} />
                      ) : sortOrder === "asc" ? (
                        <ChevronDownIcon color="gray" size={20} />
                      ) : (
                        <ChevronUpIcon color="gray" size={20} />
                      )}
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            [...Array(8)].map((_, index) => (
              <tr key={index} className="even:bg-gray-100">
                {[...Array(4)].map((_, tdIndex) => (
                  <td key={tdIndex} className="px-4 py-4">
                    <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
                  </td>
                ))}
              </tr>
            ))
          ) : filteredAndSortedUsers?.length ? (
            filteredAndSortedUsers.map((user) => (
              <tr
                key={user.id}
                className="text-sm text-left py-4 px-3 text-[#444A6D] even:bg-gray-100"
              >
                <td className="p-2">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>{user.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-2 text-base">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
};

export default Users;
