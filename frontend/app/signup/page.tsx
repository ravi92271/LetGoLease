"use client";
import Link from "next/link";

// Add logo at top left
export default function SignUpPage() {
  return (
    <main className="bg-babypowder">
      <section className="bg-white border border-yinmnblue/10 p-6 max-w-md mx-auto mt-35 rounded-lg shadow-lg">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold font-manrope">Sign up</h1>
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-rosequartz font-medium hover:underline cursor-pointer visited:text-rosequartz"
            >
              Log in
            </Link>
          </p>
        </header>
        <form className="mt-6 space-y-4">
          <div className="space-y-5">
            <div className="flex flex-row gap-2">
              <div>
                <label htmlFor="fname" className="block mb-2 font-medium">
                  First Name
                </label>
                <input
                  className="border px-3 py-2 w-full rounded-sm"
                  id="fname"
                  type="text"
                  placeholder="John"
                ></input>
              </div>
              <div>
                <label htmlFor="lname" className="block mb-2 font-medium">
                  Last Name
                </label>
                <input
                  className="border px-3 py-2 w-full rounded-sm"
                  id="lname"
                  type="text"
                  placeholder="Doe"
                ></input>
              </div>
            </div>
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
              Sign up
            </button>
            <p className="text-center py-2">
              By signing up, you agree to our{" "}
              <Link
                href="/tos"
                className="text-rosequartz font-medium hover:underline cursor-pointer visited:text-rosequartz mt-1.5"
              >
                Terms of Service 
              </Link>
              {" "}and{" "}
              <Link
                href="/privacypolicy"
                className="text-rosequartz font-medium hover:underline cursor-pointer visited:text-rosequartz mt-1.5"
              >
                Privacy Policy.
              </Link>
            </p>
          </div>
        </form>
        <footer></footer>
      </section>
    </main>
  );
}

// By logging in, you agree to our Terms of Service and Privacy Policy.
