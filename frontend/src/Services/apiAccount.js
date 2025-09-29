import axios from "axios";
export async function CreateAccount(data, signUp) {
  // const url = signUp ? 'http://localhost:4000/api/auth/signup' : 'http://localhost:4000/api/auth/login';
  const url = signUp
    ? "https://kpi-system-n6rb.onrender.com/api/auth/signup"
    : "https://kpi-system-n6rb.onrender.com/api/auth/login";

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error", error?.message);
    throw error;
  }
}
