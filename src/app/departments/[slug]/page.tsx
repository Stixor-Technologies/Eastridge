import {
  getDepartmentByDocumentId,
  getDepartmentsForSidebar,
} from "@/src/api/departmentApi";
import DepartmentDetails from "@/src/components/department/dept-details";
import { notFound } from "next/navigation";

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const slug = (await params)?.slug;
  const [deptResult, sidebar] = await Promise.all([
    getDepartmentByDocumentId(slug),
    getDepartmentsForSidebar(),
  ]);

  if ("error" in deptResult || !deptResult.data) {
    notFound();
  }

  if ("error" in sidebar || !sidebar.data) {
    notFound();
  }
  return (
    <DepartmentDetails
      dept={deptResult.data}
      sidebarData={sidebar.data}
      slug={slug}
    />
  );
}
