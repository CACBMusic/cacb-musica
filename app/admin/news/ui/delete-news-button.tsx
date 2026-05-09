"use client";

type Props = {
  id: string;
};

export default function DeleteNewsButton({
  id,
}: Props) {
  async function handleDelete() {
    const confirmed = confirm(
      "Delete this news post?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        "/api/admin/news/delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );

      if (response.ok) {
        location.reload();
      }
    } catch (error) {
      console.error(error);

      alert("Error deleting post");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-full border border-red-500 px-5 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
    >
      Delete
    </button>
  );
}