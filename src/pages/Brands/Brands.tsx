import { type ColumnDef } from "@tanstack/react-table";

import { useBrand } from "@/api/features/hooks/useBrand";
import { BaseTable } from "@/components/ui/base-table";
import { Skeleton } from "@/components/ui/skeleton";
import { type IBrandResponse } from "@/shared/types/brands.type";

const columns: ColumnDef<IBrandResponse>[] = [
  {
    header: "#",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.index + 1}</span>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.description}</span>
    ),
  },
];

export default function Brands() {
  const { getAllBrands } = useBrand();
  const brands: IBrandResponse[] = getAllBrands?.data ?? [];

  if (getAllBrands.isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Brands</h1>
      </div>
      <BaseTable data={brands} columns={columns} />
    </div>
  );
}
