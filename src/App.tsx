import React, { useContext } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { AppContext } from "./ContextProvider";
import { ThemeEnum } from "./Constant";
import AppLayout from "./Layout";
import Home from "./Pages/Home";
import Components from "./Pages/Components";
import NotFound from "./Pages/NotFound";
import { NavBar } from "./Components/NavBar";
import { LanguageSwitch } from "./Components/LanguageSwitch";
import "./App.css";

const { Header, Sider, Content, Footer } = AppLayout;

const menus = [
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: NotFound,
  },
];

function App() {
  const { theme } = useContext(AppContext);
  return (
    <BrowserRouter>
      <div className={`App ${ThemeEnum[theme]}`}>
        <AppLayout>
          <Header>
            <header className="app-header">
              <NavBar />
            </header>
          </Header>
          <Sider>
            <ul className="app-menu">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              {menus.map((item) => (
                <li key={item.name}>
                  <NavLink
                    {...(item.path === "/" ? { exact: true } : "")}
                    to={item.path}
                    activeClassName="active"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Sider>
          <Content>
            <main className="app-main">
              <Switch>
                <Route exact path="/" component={Home} />
                {menus.map((item) => (
                  <Route
                    key={item.name}
                    path={item.path}
                    component={item.component}
                  />
                ))}
                <Route component={NotFound} />
                <Redirect to="/" />
              </Switch>
            </main>
          </Content>
          <Footer>
            <LanguageSwitch />
          </Footer>
        </AppLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
