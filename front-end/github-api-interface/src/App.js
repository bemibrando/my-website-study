import React from "react";
import Layout from "./components/layout/layout-index";
import Profile from "./components/profile/profile-index";
import BemiTab from "./components/bemi-tabs/tab-content";
import { ResetCSS } from "./global/resetCSS";

const App = () => {
  return (
    <main>
        <ResetCSS />
      <Layout>
        <Profile />
        <BemiTab />
      </Layout>
    </main>
  );
}

export default App;
