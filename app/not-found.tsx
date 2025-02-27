import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div>
        <h1>Page Not Found.</h1>
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
}
