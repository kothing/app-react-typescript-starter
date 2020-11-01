import React, { FC, createContext, useState, useCallback } from "react";
import { ThemeEnum } from "./Constant";

type ThemeType = ThemeEnum.light | ThemeEnum.dark;

interface StorePropsType {
  theme: ThemeType;
  toggleTheme: () => void;
  appStore: any;
  appDispatch: (store: any) => void;
}

export const AppContext = createContext<StorePropsType>({} as StorePropsType);

export const AppProvider: FC = ({ children }) => {
  const [appStore, setAppStore] = useState<any>({});
  const [theme, setTheme] = useState<ThemeType>(ThemeEnum.light);
  const appDispatch = useCallback(
    (store: any) => {
      setAppStore({
        ...appStore,
        ...store,
      });
    },
    [appStore]
  );
  const toggleTheme = useCallback(() => {
    setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
  }, [theme]);
  return (
    <AppContext.Provider value={{ appStore, appDispatch, theme, toggleTheme }}>
      {children}
      <div className={`toggle-theme`} onClick={toggleTheme}>
        <div className={`switcher ${theme}`}>
          <span className="pick"></span>
          <span className={`${ThemeEnum.light}-side`}>Light</span>
          <span className={`${ThemeEnum.dark}-side`}>Dark</span>
        </div>
      </div>
    </AppContext.Provider>
  );
};
