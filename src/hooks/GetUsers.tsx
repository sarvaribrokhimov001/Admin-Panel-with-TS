import { useEffect, useState } from "react";
import type { Users } from "../types/users";
import { getAllUsers } from "../services/userServices";

export const useGetUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAll = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllUsers();
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Noma'lum xatolik yuz berdi!");
        }
      } finally {
        setLoading(false);
      }
    }
    void getAll();
  }, []);

  return { users, setUsers, loading, error }
}