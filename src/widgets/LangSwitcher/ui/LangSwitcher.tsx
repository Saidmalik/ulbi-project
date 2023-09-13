import { classNames } from "shared/lib/helpers/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const langChangeHandler = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={langChangeHandler}
    >
      {t("Language")}
    </Button>
  );
};
