import { supabase } from "./supabase";

export async function getArtists() {
  const { data, error } = await supabase
    .from("artists")
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

export async function getArtistById(id: string) {
  const { data, error } = await supabase
    .from("artists")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);

    return null;
  }

  return data;
}

export async function getArtistBySlug(slug: string) {
  const { data, error } = await supabase
    .from("artists")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);

    return null;
  }

  return data;
}