import { useProduct } from "@/api/features/hooks/useProduct";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { type IProductResponse } from "@/shared/types/products.types";

function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-44 w-full rounded-none" />
      <CardContent className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Skeleton className="h-5 w-16" />
      </CardFooter>
    </Card>
  );
}

export default function Products() {
  const { getAllProducts } = useProduct();
  const products: IProductResponse[] = getAllProducts.data ?? [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>

      {getAllProducts.isError && (
        <p className="text-sm text-destructive">
          Ma'lumotlarni yuklashda xatolik yuz berdi
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {getAllProducts.isLoading ?
          Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-44 w-full object-cover"
              />
              <CardContent className="p-4 space-y-1">
                <CardTitle className="font-semibold truncate">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-4 pb-4">
                <span className="font-bold">${product.price}</span>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  );
}
