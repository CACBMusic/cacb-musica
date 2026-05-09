"use server";

import { supabase } from "@/lib/supabase";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function createNews(formData: FormData) {
  const titleEs = formData.get("titleEs") as string;
  const titleEn = formData.get("titleEn") as string;

  const excerptEs = formData.get("excerptEs") as string;
  const excerptEn = formData.get("excerptEn") as string;

  const contentEs = formData.get("contentEs") as string;
  const contentEn = formData.get("contentEn") as string;

  const category = formData.get("category") as string;

  if (!titleEs || !titleEn) {
    return {
      success: false,
      message: "Missing required fields",
    };
  }

  const slug = slugify(titleEn);

  const { error } = await supabase.from("news").insert({
    slug,

    title_es: titleEs,
    title_en: titleEn,

    excerpt_es: excerptEs,
    excerpt_en: excerptEn,

    content_es: contentEs,
    content_en: contentEn,

    category,
  });

  if (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create news",
    };
  }

  return {
    success: true,
    message: "News created successfully",
  };
}