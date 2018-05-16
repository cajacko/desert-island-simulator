import React from "react";
import { View, Text } from "react-native";
import ButtonsButton from "@cajacko/lib/src/components/Buttons/Button";
import { Redirect, withRouter } from "react-router-native";

const ScenesStart = ({ start, inProgress, location }) => (
  <View style={{ marginTop: 50 }}>
    <ButtonsButton action={start}>
      <Text>Start</Text>
    </ButtonsButton>
  </View>
);

export default withRouter(ScenesStart);
