import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentSupabaseClient({ cookies });

  const { data: countries } = await supabase.from("favorites").select();

  return (
    <ul className="my-auto">
      {countries?.map((favorites) => (
        <li key={favorites.id}>{favorites.name}</li>
      ))}
    </ul>
  );
}