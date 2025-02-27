"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <section>
          <div>
            <h1>There seems to be a problem.</h1>
            <button onClick={() => reset()}>Try Again</button>
          </div>
        </section>
      </body>
    </html>
  );
}
