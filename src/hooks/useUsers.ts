import axios from "axios";
import { useEffect, useState } from "react";
import type { IUser } from "../types/user";

const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const API_URL = "https://jsonplaceholder.typicode.com/users";

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get<IUser[]>(API_URL);
            setUsers(data);
        } catch (err: any) {
            setError(err?.message || "Failed to fetch users");
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, error }
}

export default useUsers;