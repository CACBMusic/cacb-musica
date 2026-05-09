import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const titleEs = formData.get("titleEs") as string;
    const titleEn = formData.get("titleEn") as string;

    const excerptEs = formData.get("excerptEs") as string;
    const excerptEn = formData.get("excerptEn") as string;

    const contentEs = formData.get("contentEs") as string;
    const contentEn = formData.get("contentEn") as string;

    const category = formData.get("category") as string;

    const coverUrl = formData.get("coverUrl") as string;

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

      cover_url: coverUrl,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          error: "Database error",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}