"use client";
import Link from "next/link";

// Add logo at top left

export default function LoginPage() {
  return (
    <main className="bg-babypowder"> 
      <section className="bg-white border border-yinmnblue/10 p-6 max-w-md mx-auto mt-40 rounded-lg shadow-lg">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold font-manrope">Welcome back</h1>
          <p>
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-rosequartz font-medium hover:underline cursor-pointer visited:text-rosequartz"
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
            <button className="bg-junglegreen text-babypowder mt-3 px-3 py-2 w-full rounded-sm">
              Log in
            </button>
            <Link
              href="/resetpassword"
              className="text-rosequartz font-medium hover:underline cursor-pointer visited:text-rosequartz mt-1.5 text-center"
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