import { ComponentWrapper } from "@/components/component-wrapper";
import { TooltipButtons } from "@/components/tooltip-buttons";
import { ToastButton } from "@/components/toast-button";

export default function Test() {
  return (
    <section className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200 sm:dark:border-gray-300/10">
          Examples
        </h1>
        <div className="mx-auto mt-4 grid max-w-7xl flex-1 gap-4">
          <ComponentWrapper name="Tooltip" className="w-full">
            <TooltipButtons />
          </ComponentWrapper>
          <ComponentWrapper name="Tooltip" className="w-full">
            <ToastButton />
          </ComponentWrapper>
        </div>
      </div>
    </section>
  );
}
