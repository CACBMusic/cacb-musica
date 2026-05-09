import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const id = formData.get("id") as string;

    const titleEs = formData.get("titleEs") as string;
    const titleEn = formData.get("titleEn") as string;

    const excerptEs = formData.get("excerptEs") as string;
    const excerptEn = formData.get("excerptEn") as string;

    const contentEs = formData.get("contentEs") as string;
    const contentEn = formData.get("contentEn") as string;

    const category = formData.get("category") as string;

    const coverUrl = formData.get("coverUrl") as string;

    const { error } = await supabase
      .from("news")
      .update({
        title_es: titleEs,
        title_en: titleEn,

        excerpt_es: excerptEs,
        excerpt_en: excerptEn,

        content_es: contentEs,
        content_en: contentEn,

        category,

        cover_url: coverUrl,
      })
      .eq("id", id);

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