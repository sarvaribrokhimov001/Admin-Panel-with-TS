import { useState } from "react";
import type { UpdateUser } from "../types/users";
import { updateUser } from "../services/userServices";

export const useUpdateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateUserFunction = async (action: UpdateUser) => {
    try {
      setLoading(true);
      setError(null);
      const data = await updateUser(action);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Foydalanuvchini yangilashda xatolik!";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, updateUserFunction }
}