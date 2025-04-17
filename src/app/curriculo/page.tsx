import React from "react";
import { Intro } from "@/app/components/intro";
import Cv from "@/app/components/cv";

export default function Index() {
  return (
    <main className="md:justify-self-center lg:max-w-[1024px] lg:p-10 p-5">
      <div className="mb-10">
        <Intro />
      </div>
      <Cv />
    </main>
  );
}
