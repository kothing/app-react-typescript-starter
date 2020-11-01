import React from "react";

import Audio from "./Audio";
import Button from "./Button";
import Captcha from "./Captcha";
import Dialog from "./Dialog";

interface PropsType {}

const Components: React.FC<PropsType> = () => (
  <div className="demoBox">
    <Audio />
    <Button />
    <Captcha />
    <Dialog />
  </div>
);

export default Components;
