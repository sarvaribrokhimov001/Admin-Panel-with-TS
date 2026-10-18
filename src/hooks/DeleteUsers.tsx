import { useState } from "react";
import type { DeleteUser } from "../types/users";
import { deleteUser } from "../services/userServices";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUserFunction = async (user: DeleteUser) => {
    try {
      setLoading(true);
      setError(null);
      await deleteUser(user);
      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Foydalanuvchini o'chirishda xatolik!";
      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, deleteUserFunction }
}