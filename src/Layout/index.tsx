import React, { FC, CSSProperties, ReactNode, useMemo } from "react";
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";
import Footer from "./Footer";
import "./style.css";

export const WrapperClassName = "app-layout";

/**
 * Layout
 */
interface PropsType {
  className?: string;
  children?: ReactNode[];
  style?: CSSProperties;
}
interface LayoutPropsType extends FC<PropsType> {
  Header: typeof Header;
  Sider: typeof Sider;
  Content: typeof Content;
  Footer: typeof Footer;
}
const Layout: LayoutPropsType = ({ className, style, children }) => {
  const childHeader: any = useMemo(() => {
    return (
      Array.isArray(children) &&
      children.filter((item: any) => new item.type().name === "Header")[0]
    );
  }, [children]);

  const childFooter: any = useMemo(() => {
    return (
      Array.isArray(children) &&
      children.filter((item: any) => new item.type().name === "Footer")[0]
    );
  }, [children]);

  return (
    <div
      className={`${WrapperClassName}${childHeader ? " has-header" : ""}${
        childHeader && childHeader.props.fixed ? " fixed-header" : ""
      }${childHeader ? " has-footer" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {childHeader || childFooter ? (
        <>
          {childHeader}
          <main className={`${WrapperClassName}-main`}>
            {children?.filter(
              (item: any) =>
                new item.type().name !== "Header" &&
                new item.type().name !== "Footer"
            )}
          </main>
          {childFooter}
        </>
      ) : (
        children
      )}
    </div>
  );
};

Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
