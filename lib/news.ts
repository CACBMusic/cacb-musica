import { supabase } from "./supabase";

export async function getNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);

    return [];
  }

  return data;
}

export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);

    return null;
  }

  return data;
}