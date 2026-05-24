"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  function handleSessionToggle() {
    setIsSessionStarted(!isSessionStarted);
  }

  useEffect(() => {
    if (!isSessionStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 60;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isSessionStarted]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h1 className="text-4xl font-bold">EyeBreak</h1>

        <p className="mt-3 text-white/60">
          Protect your eyes during screen time
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 p-6">
          <p className="text-sm text-white/50">
            Next break in
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            {timeLeft}s
          </h2>
        </div>

        <button
          onClick={handleSessionToggle}
          className="mt-6 w-full rounded-2xl bg-white px-4 py-4 text-lg font-semibold text-black transition active:scale-95"
        >
          {isSessionStarted ? "Stop session" : "Start session"}
        </button>
      </div>
    </main>
  );
}