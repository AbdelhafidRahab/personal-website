import { ComingSoon } from "@/components/ComingSoon";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  return <ComingSoon title={t("title")} badge={t("badge")} />;
}
