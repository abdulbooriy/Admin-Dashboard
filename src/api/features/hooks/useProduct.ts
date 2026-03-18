import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as Product from "../services/product";

export const useProduct = () => {
  const queryClient = useQueryClient();

  const getAllProducts = useQuery({
    queryKey: ["products"],
    queryFn: Product.getAllProducts,
  });

  const createProducts = useMutation({
    mutationFn: Product.createProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const updateProducts = useMutation({
    mutationFn: Product.updateProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const deleteProducts = useMutation({
    mutationFn: Product.deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { getAllProducts, createProducts, updateProducts, deleteProducts };
};
