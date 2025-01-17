"use client";

import Button from "./components/Button";

export default function Home() {
  const handleClick = () => {
    console.log('world');
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl ">Hello</h1>
      <Button label="Appuyez ici" onClick={handleClick} />
    </div>
  );
}
