import sql from "better-sqlite3";
const dp = sql("meals.db");
export async function getMeals(): Promise<
  { id: string; name: string; description: string; price: number }[]
> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return dp.prepare("SELECT * FROM meals").all() as {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
}
