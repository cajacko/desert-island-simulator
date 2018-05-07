import React from "react";
import ButtonsText from "@cajacko/lib/src/components/Buttons/Text";
import { Redirect, withRouter } from "react-router-dom";

const ScenesGame = ({ stop, inProgress, location }) =>
  !inProgress ? (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location }
      }}
    />
  ) : (
    <div>
      <ButtonsText action={stop} text="Stop" />
    </div>
  );

export default withRouter(ScenesGame);
