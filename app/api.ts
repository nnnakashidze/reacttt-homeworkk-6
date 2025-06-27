import { LoginType } from "./schema";

export async function login(value: LoginType) {
  const res = await fetch(
    "https://683f55645b39a8039a546084.mockapi.io/exampleBacksideFilter",
    {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(value),
    }
  );
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
}
