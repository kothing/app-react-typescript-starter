import React from "react";
import { Button, Ripple } from "../../Components/_components";

const ButtonPage = () => {
  return (
    <div className="demoBox">
      <h3>按钮</h3>
      <Button type="default">
        <Ripple
          overHidden
          centerMode={false}
          rippleColor="#f44336"
          size="default"
        />
        Button
      </Button>
    </div>
  );
};

export default ButtonPage;
