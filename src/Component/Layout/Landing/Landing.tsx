import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";

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
  );
}

export default function Landing() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleRedirect = (url:string) => {
    navigate("/"+url);
  };

  return (
    <div className="!font-[Poppins]">
      <header className="flex items-center justify-between px-32 py-4 fixed top-0 w-screen left-0">
        <p>+591 7503123</p>
        <ul className="flex gap-12">
          <li>Home</li>
          <li>Products</li>
          <li>Facility</li>
          <li>About</li>
        </ul>
        <Link to="/login" className="border border-white px-12 py-2 rounded-md text-white">
          Login
        </Link>
      </header>
      <main className="flex-col">
        <section className="h-screen flex">
          <div className="w-[80%] h-full flex items-center justify-center flex-col">
            <div className="w-[50%] flex flex-col gap-7">
              <strong className="text-[#20c4ae]">Praxis</strong>
              <h2 className="text-[64px] font-bold tracking-wide">
                Check Your Renal Health Today
              </h2>
              <p className="leading-8 text-black/70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                maiores laboriosam aliquam eius labore illo in amet a doloribus
                mollitia ad debitis obcaecati blanditiis cupiditate, officiis
                quaerat eligendi beatae minus.
              </p>
              <div className="flex gap-2">
                <button className="border border-[#20c4ae] bg-[#20c4ae] px-12 py-2 rounded-md text-white">
                  Get started
                </button>
                <button className="text-[#20c4ae] px-12 py-2 rounded-md">
                  An appointment
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#20c4ae] w-[20%] h-full rounded-bl-xl"></div>
        </section>
        <section className="flex py-20 px-40 flex-wrap gap-32 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  );
}
