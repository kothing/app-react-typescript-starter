import React from "react";
import { Radio } from "../Radio";
import { useTranslation } from "react-i18next";
import { translations, LanguageKey } from "../../i18n";
import "./style.css";

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value as LanguageKey;
    i18n.changeLanguage(language);
  };

  return (
    <div className="lang-change">
      <span className="label">
        {t(translations.i18nFeature.selectLanguage())}
      </span>
      <span className="radio-group">
        <Radio
          id="en"
          label="English"
          name="language"
          onChange={handleLanguageChange}
          value="en"
          isSelected={i18n.language === "en"}
        />
        <Radio
          id="zh"
          label="Chinese"
          name="language"
          onChange={handleLanguageChange}
          value="zh_CN"
          isSelected={i18n.language === "zh_CN"}
        />
      </span>
    </div>
  );
}
