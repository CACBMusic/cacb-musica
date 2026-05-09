import { supabase } from "./supabase";

export async function getAdminNews() {
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

export async function deleteNews(id: string) {
  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);

    return false;
  }

  return true;
}

export async function getNewsById(id: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);

    return null;
  }

  return data;
}