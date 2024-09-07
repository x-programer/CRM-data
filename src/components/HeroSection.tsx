import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (

    <div
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden 
      "
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center mt-9">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        > You can see CRM data </h1>
        <p
          className=" mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, suscipit voluptate! Laudantium expedita, voluptate quibusdam sint eum accusamus! Asperiores ut enim ea commodi
        </p>
        <div className="mt-6">
          <Link href={"#"}>
            <Button 
            className="bg-white dark:bg-black text-black dark:text-white border-netural-200 dark:border-slate-800"
            >
              Explore More !
            </Button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default HeroSection

