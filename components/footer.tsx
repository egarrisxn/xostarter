import ThemeToggle from "./theme-toggle";
import GitHubIcon from "./github-icon";

export default function Footer() {
  return (
    <footer className="border-foreground/5 w-full border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-6 pt-8 pb-6 text-center md:flex-row md:justify-between md:p-6">
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground text-sm sm:text-base">
          &copy; {new Date().getFullYear()} XO Starter by{" "}
          <a
            href="https://egxo.dev"
            className="font-medium text-[#17c9e0] underline-offset-2 hover:text-[#17c8e0da] hover:underline"
          >
            egxo.dev
          </a>
        </p>
        <div className="hidden sm:block">
          <GitHubIcon />
        </div>
      </div>
    </footer>
  );
}
