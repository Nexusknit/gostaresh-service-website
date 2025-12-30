import type { CategoriesData, ParentCategory, ChildCategory } from "@/types/category";
import { fetchPublicContent } from "@/utils/publicContent";

let _data: CategoriesData | null = null;

export async function loadCategories(): Promise<CategoriesData> {
  if (_data) return _data;
  _data = await fetchPublicContent<CategoriesData>("categories");
  return _data;
}

export async function getParentCategories(): Promise<ParentCategory[]> {
  const d = await loadCategories();
  return d.parents.slice();
}

export async function getChildCategories(parentSlug: string): Promise<ChildCategory[]> {
  const d = await loadCategories();
  return d.children.filter((c) => c.parentSlug === parentSlug);
}

export async function findParentCategory(slug: string): Promise<ParentCategory | undefined> {
  const d = await loadCategories();
  return d.parents.find((p) => p.slug === slug);
}

export async function findChildCategory(
  parentSlug: string,
  slug: string
): Promise<ChildCategory | undefined> {
  const d = await loadCategories();
  return d.children.find((c) => c.parentSlug === parentSlug && c.slug === slug);
}
