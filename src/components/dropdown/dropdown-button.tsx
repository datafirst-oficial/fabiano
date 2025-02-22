interface DropdownButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function DropdownButton({
  title,
  isActive,
  onClick,
}: DropdownButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sm:w-[524px] w-full relative cursor-pointer p-4 pr-12 text-left font-medium rounded-3xl linear-3 ${isActive ? "rounded-b-none" : ""
        } flex gap-2 items-start`}
      type="button"
      aria-expanded={isActive}
      aria-controls="dropdown-content"
    >
      <span className="max-w-sm font-semibold text-white ps-2 pe-12 py-1 rounded-full">
        {title}
      </span>
      <svg className="absolute right-4" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.7921 17.722C35.7921 27.3955 27.9502 35.2374 18.2767 35.2374C8.60316 35.2374 0.76123 27.3955 0.76123 17.722C0.76123 8.04847 8.60316 0.206543 18.2767 0.206543C27.9502 0.206543 35.7921 8.04847 35.7921 17.722Z" fill="white" />
        <path d="M16.9695 11.7092H20.1066V23.7347H16.9695V11.7092Z" fill="url(#paint0_linear_282_5170)" />
        <path d="M24.2894 15.892V19.0291H12.2639V15.892H24.2894Z" fill="url(#paint1_linear_282_5170)" />
        <defs>
          <linearGradient id="paint0_linear_282_5170" x1="7.67322" y1="-3.11479" x2="41.3622" y2="14.0323" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F15A29" />
            <stop offset="1" stop-color="#FF7F01" />
          </linearGradient>
          <linearGradient id="paint1_linear_282_5170" x1="7.67322" y1="-3.11479" x2="41.3622" y2="14.0323" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F15A29" />
            <stop offset="1" stop-color="#FF7F01" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
