import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "./assets/github-icon.svg";

export function Nav() {
  return (
    <div className='nav'>
      <Link to="/" title="Documentation Page">
        Home
      </Link>
      <Link to={process.env.PUBLIC_URL + "/notfound"}>NotFound</Link>
      <Link to="https://github.com/kothing/react-typescrit-app-template">
        <span className="github-icon">
          <GithubIcon />
        </span>
      </Link>
    </div>
  );
}
