"use client";
import { nav } from "@/constant";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ show }: { show: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={`top-0 left-0 h-full ease-in-out duration-300 relative  ${
        show ? "w-[30vh] translate-x-0 p-5" : "-translate-x-full "
      }`}
    >
      <div className={show ? "" : "hidden"}>
        <div className="flex gap-2 items-center w-full ">
          {/*<Image src="/schedule-time.png" alt="icon" width={30} height={30} />*/}
          <h1 className="text-2xl font-extrabold text-[#e11d48] ">
            Time Planner
          </h1>
        </div>
        <div className="mt-16 space-y-6">
          {nav.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={clsx("flex  gap-5", {
                "font-extrabold": pathname === link.href,
              })}
            >
              <link.icon color="#e11d48" />
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
