import React from "react";
import { useTranslation } from "react-i18next";
import { translations } from "../../i18n";

export function Logo() {
  const { t } = useTranslation();
  return (
    <div className="logo">
      <span className="title">{t(translations.headerTranslation.title())}</span>
      <span className="slogan">
        {t(translations.headerTranslation.slogan())}
      </span>
    </div>
  );
}
