import type { Users, NewUser, UpdateUser, DeleteUser } from "../types/users";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getAllUsers = async (): Promise<Users[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Foydalanuvchilarni olishda xatolik!");
  }

  return (await response.json()) as Users[];
};

export const postUser = async (user: NewUser): Promise<Users> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Foydalanuvchi qo'shishda xatolik!");
  }

  return (await response.json()) as Users;
};

export const updateUser = async (
  updateData: UpdateUser
): Promise<Users> => {
  const response = await fetch(`${API_URL}/${updateData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: updateData.name,
      email: updateData.email,
    }),
  });

  if (!response.ok) {
    throw new Error("Foydalanuvchini yangilashda xatolik!");
  }

  return (await response.json()) as Users;
};

export const deleteUser = async (
  user: DeleteUser
): Promise<void> => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Foydalanuvchini o'chirishda xatolik!");
  }
}