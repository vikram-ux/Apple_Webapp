"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function SupportSearch() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[20rem] flex flex-col justify-center  items-center px-4">
      <h2 className="font-semibold mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
      Search for more topics
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
