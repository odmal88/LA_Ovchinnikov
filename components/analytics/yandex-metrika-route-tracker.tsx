"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    ym?: (counterId: number, methodName: string, ...params: unknown[]) => void;
  }
}

type YandexMetrikaRouteTrackerProps = {
  counterId: number;
};

export function YandexMetrikaRouteTracker({
  counterId,
}: YandexMetrikaRouteTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRenderRef = useRef(true);
  const previousUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !pathname) {
      return;
    }

    const queryString = searchParams?.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    const referer = previousUrlRef.current ?? document.referrer;

    // The initial pageview is sent by the Yandex.Metrika init snippet.
    // This tracker sends pageviews only for client-side Next.js navigation.
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      previousUrlRef.current = url;
      return;
    }

    if (typeof window.ym === "function") {
      window.ym(counterId, "hit", url, {
        title: document.title,
        referer,
      });
      previousUrlRef.current = url;
    }
  }, [counterId, pathname, searchParams]);

  return null;
}
