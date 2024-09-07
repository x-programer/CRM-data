'use client'

import { WavyBackground } from '@/components/ui/wavy-background'
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import React from 'react'

function page() {
  const placeholders = [
    "Email : patelshravana@gmail.com",
    "Github : https://github.com/x-programer",
    "Linkedin : https://www.linkedin.com/in/shravana-patel-029400274/",
    "Phone number: 9617****81",
    "Hey?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  }
    return (
      <div
        className='relative h-full overflow-hidden flex items-center justify-center'
      >
        <WavyBackground className=''>
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-10xl dark:text-black text-white">
            Email me anytime: patelshravana@gmail.com
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </WavyBackground>
      </div>
    )
  }

  export default page