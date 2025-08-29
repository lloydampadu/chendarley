// components/Button.tsx
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

type ButtonProps = {
  link: string;
  label: string;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  link,
  label,
  showIcon = true,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={link}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className
      )}
      onClick={onClick} // Pass the onClick handler here
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-red-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
}