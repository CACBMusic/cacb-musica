import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = body.id;

    if (!id) {
      return NextResponse.json(
        {
          error: "Missing ID",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("news")
      .delete()
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