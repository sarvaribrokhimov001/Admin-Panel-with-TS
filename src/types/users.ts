export interface Users {
    id: number;
    username: string;
    email: string;
    password: string
}

export type NewUser = Omit<Users, "id">;
export type DeleteUser = Pick<Users, "id">;
export type UpdateUser = Partial<Omit<Users, "id">> & { id: number }