"use client";
import Link from "next/link";

// Add logo at top left

export default function LoginPage() {
  return (
    <main className="bg-mint-cream-50 min-h-screen flex items-center justify-center py-10">
      <section className="bg-white border border-platinum-200 p-6 max-w-md w-full mx-auto rounded-lg shadow-lg">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold font-manrope">Welcome back</h1>
          <p>
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-jungle-teal-600 font-medium hover:underline cursor-pointer visited:text-jungle-teal-600"
            >
              Create an account
            </Link>
          </p>
        </header>
        <form className="mt-6 space-y-4">
          <div className="space-y-5">
            <label htmlFor="email" className="block mb-2 font-medium">
              University Email Address
            </label>
            <input
              className="border px-3 py-2 w-full rounded-sm"
              id="email"
              type="email"
              placeholder="example@yourschool.edu"
            />
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              className="border px-3 py-2 w-full rounded-sm"
              id="password"
              type="password"
              placeholder="•••••••••••••"
            />
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-jungle-teal-500 text-mint-cream-50 mt-3 px-3 py-2 w-full rounded-sm">
              Log in
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