"use client";

import { useEffect, useState } from "react";

type Props = {
  /** offer duration in seconds, default 8h 25m 32s to match design */
  initialSeconds?: number;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function CountdownTimer({ initialSeconds = 8 * 3600 + 25 * 60 + 32 }: Props) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
 
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const units = [
    { value: hours, label: "ঘন্টা" },
    { value: minutes, label: "মিনিট" },
    { value: secs, label: "সেকেন্ড" },
  ];

  return (
    <div className="flex items-center gap-2">
      {units.map((u, i) => (
        <div key={i} className="bg-gray-900 text-white rounded-md px-3 py-1.5 text-center min-w-[48px]">
          <div className="text-base font-bold leading-none">{pad(u.value)}</div>
          <div className="text-[10px] text-gray-300 mt-0.5">{u.label}</div>
        </div>
      ))}
    </div>
  );
}
