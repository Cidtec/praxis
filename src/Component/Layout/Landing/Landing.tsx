import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Example1", href: "#" },
  { name: "Example2", href: "#" },
  { name: "Example3", href: "#" },
  { name: "Example4", href: "#" },
];

function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}

export default function Landing() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-50 body-border pb-2">
        <div className="container flex items-center justify-between h-[64px] px-4">
          <Link className="flex items-center space-x-2 text-xl font-medium" to="#">
            <FlagIcon className="h-6 w-6" />
            Clinical Lab
          </Link>
          <nav className="hidden space-x-4 text-sm lg:flex">
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              to="#"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              to="#"
            >
              Services
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              to="#"
            >
              About
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              to="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link className="text-gray-500 transition-colors hover:underline dark:hover:text-gray-50" to="#">
              Sign in
            </Link>
            <Link className="text-gray-500 transition-colors hover:underline dark:hover:text-gray-50" to="#">
              Sign up
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 lg:py-24 xl:py-32">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Clinical Analysis Laboratory
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Providing accurate and timely analysis for medical professionals and patients.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 lg:py-24 xl:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partnerships</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Collaborating with industry leaders to enhance our services.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="140"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 py-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Delivering quality results with precision and care.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-1">
              <h3 className="text-2xl font-bold">5M+</h3>
              <p className="text-gray-500 text-sm font-medium dark:text-gray-400">Tests Conducted</p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="text-gray-500 text-sm font-medium dark:text-gray-400">Accuracy Rate</p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-500 text-sm font-medium dark:text-gray-400">Support Available</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
