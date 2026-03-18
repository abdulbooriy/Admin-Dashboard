import { type ColumnDef } from "@tanstack/react-table";

import { useEmployee } from "@/api/features/hooks/useEmployee";
import { BaseTable } from "@/components/ui/base-table";
import { Skeleton } from "@/components/ui/skeleton";
import { type IEmployeeResponse } from "@/shared/types/employees.types";

const columns: ColumnDef<IEmployeeResponse>[] = [
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.email}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ row }) => (
      <span className="font-medium">${row.original.salary}</span>
    ),
  },
];

export default function Employees() {
  const { getAllEmployees } = useEmployee();
  const employees: IEmployeeResponse[] = getAllEmployees?.data ?? [];

  if (getAllEmployees.isLoading) {
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
        <h1 className="text-2xl font-semibold">Employees</h1>
      </div>
      <BaseTable data={employees} columns={columns} />
    </div>
  );
}
