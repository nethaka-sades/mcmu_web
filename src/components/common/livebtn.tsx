import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Link from "next/link";

interface LiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const LiveButton = React.forwardRef<
  HTMLButtonElement,
  LiveButtonProps
>(({  className, ...props }, ref) => {
  var is_live = process.env.NEXT_PUBLIC_IS_LIVE;
  return (
  <div>
    {is_live === "true" ? (
      <Link href={"/fm"}>
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-sm border bg-background p-2 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        LIVE
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
        <span>NOW</span>
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-destructive transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-destructive"></div>
    </button>
    </Link>
    ):(
      <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden border bg-background p-2 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        LIVE
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
        <span>OFFLINE</span>
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-muted-foreground transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-muted-foreground"></div>
    </button>
    )
}
    </div>
  );
});

LiveButton.displayName = "LiveButton";

export { LiveButton };
