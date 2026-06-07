"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState, useEffect } from "react";

type University = {
  name: string;
  domain: string[];
};

// Add logo at top left
export default function SignUpPage() {
  const router = useRouter();
  const [universities, setUniversity] = useState<University[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUniversities() {
      try {
        const response = await fetch("/api/universities");

        if (!response.ok) {
          throw new Error("Unable to load universities.");
        }

        const data = await response.json();
        setUniversity(data);
      } catch {
        setUniversity([]);
      }
    }
    fetchUniversities();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          university: school,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to create account. Check your information.");
      }

      const data = await response.json();
      localStorage.setItem("letgolease_token", data.accessToken);
      localStorage.setItem("letgolease_user", JSON.stringify(data.user));
      setMessage("Account created with mocked auth.");
      router.push("/apartments");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-mint-cream-50 min-h-screen flex items-center justify-center py-10">
      <section className="bg-white border border-platinum-200 p-6 max-w-md w-full mx-auto rounded-lg shadow-lg">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold font-manrope">Sign up</h1>
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-jungle-teal-600 font-medium hover:underline cursor-pointer visited:text-jungle-teal-600"
            >
              Log in
            </Link>
          </p>
        </header>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="John"
                  required
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
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Doe"
                  required
                ></input>
              </div>
            </div>
            <label htmlFor="school" className="block mb-2 font-medium">
              University
            </label>
            <input
              id="school"
              list="universities"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Select your university"
              className="border px-3 py-2 w-full rounded"
              required
            />
            <datalist id="universities">
              {universities.map((u) => (
                <option key={u.name} value={u.name} />
              ))}
            </datalist>
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
              minLength={8}
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
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
            <p className="text-center py-2">
              By signing up, you agree to our{" "}
              <Link
                href="/termsofservice"
                className="text-jungle-teal-600 font-medium hover:underline cursor-pointer visited:text-jungle-teal-600 mt-1.5"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacypolicy"
                className="text-jungle-teal-600 font-medium hover:underline cursor-pointer visited:text-jungle-teal-600 mt-1.5"
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

//Hipolabs Universities API
