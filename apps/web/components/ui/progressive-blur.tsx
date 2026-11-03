import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

interface ProgressiveBlurProps {
  direction?: "top" | "bottom";
  className?: string;
}

export function ProgressiveBlur({
  direction = "top",
  className,
}: ProgressiveBlurProps) {
  const isTop = direction === "top";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-x-0 z-30 select-none overflow-hidden",
        isTop ? "top-0 h-24 sm:h-28" : "bottom-0 h-28 sm:h-36",
        className
      )}
    >
      {/* Layer 1: Subtle initial blur roll-off */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[1px]",
          isTop
            ? "[mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]"
            : "[mask-image:linear-gradient(to_top,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_100%)]"
        )}
      />

      {/* Layer 2: Mid-range blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[2px]",
          isTop
            ? "[mask-image:linear-gradient(to_bottom,black_0%,black_15%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_15%,transparent_75%)]"
            : "[mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_75%)]"
        )}
      />

      {/* Layer 3: Deeper blur toward the viewport edge */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[4px]",
          isTop
            ? "[mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_50%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_50%)]"
            : "[mask-image:linear-gradient(to_top,black_0%,black_10%,transparent_50%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_10%,transparent_50%)]"
        )}
      />

      {/* Layer 4: Deepest blur at the outermost boundary */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[8px]",
          isTop
            ? "[mask-image:linear-gradient(to_bottom,black_0%,transparent_35%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_35%)]"
            : "[mask-image:linear-gradient(to_top,black_0%,transparent_35%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_35%)]"
        )}
      />
    </div>
  );
}
