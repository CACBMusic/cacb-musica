import { supabase } from "./supabase";

export async function uploadFile(file: File) {
  const fileExt = file.name.split(".").pop();

  const fileName = `${Date.now()}.${fileExt}`;

  const filePath = `uploads/${fileName}`;

  const { error } = await supabase.storage
    .from("media")
    .upload(filePath, file);

  if (error) {
    console.error(error);

    return null;
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("media")
    .getPublicUrl(filePath);

  return publicUrl;
}