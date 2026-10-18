export interface Carts {
    id: number;
    userId: number;
}

export type NewCart = Omit<Carts, "id">;
export type DeleteCart = Pick<Carts, "id">;
export type UpdateCart = Partial<Omit<Carts, "id">> & { id: number }