import { useState } from "react";
import type { NewUser } from "../types/users";
import { postUser } from "../services/userServices";

export const usePostUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addUser = async (user: NewUser) => {
    try {
      setLoading(true);
      setError(null);
      const data = await postUser(user);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Foydalanuvchi qo'shishda xatolik!";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { addUser, loading, error }
}