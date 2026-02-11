import { ComingSoon } from "@/components/ComingSoon";
import { useTranslations } from "next-intl";

export default function AcademyPage() {
  const t = useTranslations('AcademyPage');
  return (
    <ComingSoon
      title={t('title')}
      badge={t('badge')}
    />
  );
}