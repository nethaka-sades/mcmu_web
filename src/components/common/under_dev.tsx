import Image from "next/image";

export default function UnderDev() {
  return (
    <main>
      <div className="text-center w-full h-full fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/70 backdrop-blur-2xl">
        <div>
          <Image
            src="/MCMU_GOLD_LOGO.png"
            alt="Under Development"
            width={200}
            height={50}
            priority
            className="py-5"
          />
        </div>
        <h1 className="text-5xl font-bold">Under Development</h1>
        <p className="mt-4 text-lg">
          This section is currently under development. Please check back later.
        </p>
      </div>
    </main>
  );
}
