import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="container my-40 flex items-center justify-between">
      <div>
        <div className="mb-7 flex flex-col gap-2">
          <h2 className="text-7xl font-bold tracking-wide">I'm Auzan</h2>
          <p className="text-2xl tracking-wide">fullstack web developer</p>
        </div>
        <button>Hire me</button>
      </div>
      <div>
        <Image src="/me.png" alt="me" width={500} height={500} />
      </div>
    </section>
  );
}

export default Hero;