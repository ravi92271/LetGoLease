"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

// Add logo at top left

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Unable to log in. Check your email and password.");
      }

      const data = await response.json();
      localStorage.setItem("letgolease_token", data.accessToken);
      localStorage.setItem("letgolease_user", JSON.stringify(data.user));
      setMessage("Logged in with mocked auth.");
      router.push("/apartments");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to log in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-mint-cream-50 min-h-screen flex items-center justify-center py-10">
      <section className="bg-white border border-platinum-200 p-6 max-w-md w-full mx-auto rounded-lg shadow-lg">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold font-manrope">Welcome back</h1>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-jungle-teal-600 font-medium hover:underline cursor-pointer visited:text-jungle-teal-600"
            >
              Create an account
            </Link>
          </p>
        </header>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <label htmlFor="email" className="block mb-2 font-medium">
              University Email Address
            </label>
            <input
              className="border px-3 py-2 w-full rounded-sm"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@yourschool.edu"
              required
            />
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              className="border px-3 py-2 w-full rounded-sm"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="•••••••••••••"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-jungle-teal-600">{message}</p>}
          <div className="flex flex-col items-center">
            <button
              className="bg-jungle-teal-500 text-mint-cream-50 mt-3 px-3 py-2 w-full rounded-sm disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
            <Link
              href="/resetpassword"
              className="text-jungle-teal-600 font-medium hover:underline cursor-pointer visited:text-jungle-teal-600 mt-1.5 text-center"
            >
              Forgot password?
            </Link>
          </div>
        </form>
        <footer></footer>
      </section>
    </main>
  );
}

// ADD PROPS
