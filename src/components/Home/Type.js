import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              // "고 : ",
              // "요 : ",
              // "한 : ",
              "고 : 고요하게 묵묵하게",
              "요 : 요령피우지 않고",
              "한 : 한번 시작하면<br/>해낼 때까지 파고드는",
              "고요한입니다."
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type