export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: null
}

export type NewProduct = Omit<Products, "id">;
export type DeleteProduct = Pick<Products, "id">;
export type UpdateProduct = Partial<Omit<Products, "id">> & { id: number }