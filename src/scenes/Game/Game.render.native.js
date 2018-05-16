import React from "react";
import { View, Text } from "react-native";
import ButtonsButton from "@cajacko/lib/src/components/Buttons/Button";
import { Redirect, withRouter } from "react-router-native";

const ScenesGame = ({ start, inProgress, location }) => (
  <View>
    <ButtonsButton action={start}>
      <Text>Stop</Text>
    </ButtonsButton>
  </View>
);

export default withRouter(ScenesGame);
