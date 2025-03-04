import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function GitHubIcon() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a href="https://github.com/egarrisxn/xostarter" className="group">
          <div className="border-foreground/80 rounded-full border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={72}
              height={72}
              viewBox="0 0 72 72"
              className="size-7 transition-colors ease-in group-hover:fill-[#17c8e0da]"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M27.114 62.986s9.17 2.923 17.927-.041"
              ></path>
              <circle cx={35.9} cy={35.898} r={27.226} fill="#fff"></circle>
              <path
                fill="#17c9e0"
                className="transition-colors ease-in group-hover:fill-[#17c8e0da]"
                d="M29.044 61.611c0-.927-.035-3.98-.035-7.764c0-2.646.874-4.373 1.863-5.252c-6.227-.722-12.779-3.154-12.779-14.035c0-3.098 1.096-5.632 2.887-7.615c-.286-.72-1.254-3.606.278-7.514c0 0 2.355-.764 7.717 2.908a26.45 26.45 0 0 1 14.053 0c5.356-3.672 7.711-2.908 7.711-2.908c1.532 3.908.57 6.795.278 7.514c1.796 1.983 2.881 4.514 2.881 7.615c0 10.905-6.559 13.307-12.816 14.008c1.013.882 1.909 2.611 1.909 5.263c0 3.792-.035 6.85-.035 7.78c0 .762.505 1.641 1.93 1.369c11.146-3.758 19.177-14.396 19.177-26.932c0-15.678-12.567-28.388-28.067-28.388S7.936 20.367 7.936 36.048c0 12.541 8.04 23.182 19.202 26.934c1.395.262 1.906-.614 1.906-1.37"
              ></path>
              <g
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M29.044 61.611c0-.927-.035-3.98-.035-7.764c0-2.646.874-4.373 1.863-5.252c-6.227-.722-12.779-3.154-12.779-14.035c0-3.098 1.096-5.632 2.887-7.615c-.286-.72-1.254-3.606.278-7.514c0 0 2.355-.764 7.717 2.908a26.45 26.45 0 0 1 14.053 0c5.356-3.672 7.711-2.908 7.711-2.908c1.532 3.908.57 6.795.278 7.514c1.796 1.983 2.881 4.514 2.881 7.615c0 10.905-6.559 13.307-12.816 14.008c1.013.882 1.909 2.611 1.909 5.263c0 3.792-.035 6.85-.035 7.78c0 .762.505 1.641 1.93 1.369c11.146-3.758 19.177-14.396 19.177-26.932c0-15.678-12.567-28.388-28.067-28.388S7.936 20.367 7.936 36.048c0 12.541 8.04 23.182 19.202 26.934c1.395.262 1.906-.614 1.906-1.37"></path>
                <path d="M16.29 48.09c2.568.78 3.58 1.635 4.789 3.661c1.205 2.026 2.62 4.287 7.933 2.999"></path>
              </g>
            </svg>
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>GitHub</p>
      </TooltipContent>
    </Tooltip>
  );
}
