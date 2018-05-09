import React from "react";
import ButtonsText from "@cajacko/lib/src/components/Buttons/Text";
import { Redirect, withRouter } from "react-router-dom";

const ScenesStart = ({ start, inProgress, location }) =>
  inProgress ? (
    <Redirect
      to={{
        pathname: "/game",
        state: { from: location }
      }}
    />
  ) : (
    <div>
      <ButtonsText action={start} text="Start" />
    </div>
  );

export default withRouter(ScenesStart);
