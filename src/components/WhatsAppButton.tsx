"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const WhatsAppButton = () => {
  const t = useTranslations('WhatsAppButton');
  const phoneNumber = "213541710168";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 flex items-center justify-center w-14 h-14 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-full shadow-lg hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 transition-all duration-300 group"
      aria-label={t('ariaLabel')}
    >
      {/* Pulse Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-700 opacity-20 animate-ping group-hover:hidden"></span>

      {/* Icon relative to stay on top */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-9.67-.272-.099-.47-.149-.669-.149-.198 0-.42.001-.643.001-.223 0-.585.085-.891.42-.306.336-1.167 1.141-1.167 2.783 0 1.643 1.196 3.227 1.362 3.449.168.223 2.355 3.596 5.707 5.039 2.723 1.173 3.276.94 3.843.882.568-.057 1.832-.749 2.091-1.472.26-.723.26-1.341.182-1.472z" />
      </svg>
    </Link>
  );
};
