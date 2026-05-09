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

    const name = formData.get("name") as string;

    const tagline = formData.get("tagline") as string;

    const bioEs = formData.get("bioEs") as string;
    const bioEn = formData.get("bioEn") as string;

    const spotify = formData.get("spotify") as string;
    const apple = formData.get("apple") as string;
    const bandcamp = formData.get("bandcamp") as string;

    const instagram = formData.get("instagram") as string;
    const twitter = formData.get("twitter") as string;

    const avatarUrl = formData.get("avatarUrl") as string;

    const slug = slugify(name);

    const { error } = await supabase
      .from("artists")
      .insert({
        slug,

        name,

        tagline,

        bio_es: bioEs,
        bio_en: bioEn,

        spotify,
        apple,
        bandcamp,

        instagram,
        twitter,

        avatar_url: avatarUrl,
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