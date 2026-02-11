import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
interface ComingSoonProps {
  title: string;
  badge?: string;
}

export const ComingSoon = ({ title, badge }: ComingSoonProps) => {
  const t = useTranslations('ComingSoon');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black px-6 pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-125 bg-linear-to-b from-neutral-900/50 to-transparent pointer-events-none" />

      <div className="z-10 text-center max-w-2xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-indigo-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          {badge || t('badge_default')}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          {title}
        </h1>
      </div>
    </main>
  );
};