"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PostList from "../postList";

function TabBar() {
  return (
    <Tabs
      defaultActiveKey="1"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title="Home">
        <PostList albumId={1} />
      </Tab>
      <Tab eventKey="2" title="Profile"></Tab>
      <Tab eventKey="3-tab" title="Loooonger Tab"></Tab>
      <Tab eventKey="4" title="Contact"></Tab>
    </Tabs>
  );
}

export default TabBar;
