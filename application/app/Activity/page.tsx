import { createClient } from "@/utils/supabase/server";

export default async function Activity() {
  const supabase = await createClient();

  const { data: Activity, error } = await supabase.from("Activity").select("*");

  if (error) {
    console.error("Error fetching activities:", error.message);
  }
  return <pre>{JSON.stringify(Activity, null, 2)}</pre>;
}
