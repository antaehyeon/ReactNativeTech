import React from "react";
import { Router, Scene, Stack, Tabs, Overlay } from "react-native-router-flux";

import MainScreen from "../src/Main";
import Screen1_2 from "../src/Screen1_2";
import Screen1 from "../src/Screen1";
import Screen2 from "../src/Screen2";
import Splash from "../src/Splash";
import Loading from "../src/Loading";

export default () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="splash" component={Splash} hideNavBar></Scene>
        <Tabs key="tabbar">
          <Stack key="mainStack">
            <Scene key="mainScreen" component={MainScreen} title="Main Screen"></Scene>
            <Scene key="subScreen" component={Screen1_2} title="Sub Screen"></Scene>
          </Stack>
          <Scene key="screen1" component={Screen1} title="Screen1"></Scene>
          <Scene key="screen2" component={Screen2} title="Screen2"></Scene>
        </Tabs>

        <Scene key="loading" component={Loading}></Scene>
      </Stack>
    </Router>
  );
};
