import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as Brand from "../services/brand";

export const useBrand = () => {
  const queryClient = useQueryClient();

  const getAllBrands = useQuery({
    queryKey: ["brands"],
    queryFn: Brand.getAllBrands,
  });

  const createBrands = useMutation({
    mutationFn: Brand.createBrands,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
  });

  const updateBrands = useMutation({
    mutationFn: Brand.updateBrands,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
  });

  const deleteBrands = useMutation({
    mutationFn: Brand.deleteBrands,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
  });

  return { getAllBrands, createBrands, updateBrands, deleteBrands };
};
