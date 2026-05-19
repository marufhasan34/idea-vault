import { Button } from "@heroui/react";
import React from "react";
import ActiveNavLink from "./ActiveNavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#2D2D44] p-3">
      <nav className="text-white flex flex-col gap-5 lg:flex-row lg:gap-0 items-center justify-between container mx-auto">
        <div>
          <h3 className="font-bold text-[#6C63FF] text-2xl">
            Idea<span className="text-white">Vault</span>
          </h3>
        </div>
        <ul className="flex font-semibold items-center gap-5">
          <li>
            <ActiveNavLink href={"/"}>Home</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink href={"/ideas"}>Ideas</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink href={"/add-ideas"}>Add Ideas</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink href={"/my-interactions"}>
              My Interactions
            </ActiveNavLink>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href={"/login"}>
            <Button variant="outline" className="text-white">
              Login
            </Button>
          </Link>
          <Link href={'/register'}><Button variant="outline" className="text-white">
            Register
          </Button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
