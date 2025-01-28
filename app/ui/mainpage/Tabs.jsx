"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PostList from "@/components/mainpage/PostList";
import Community from "@/app/ui/mainpage/Community";
import OpenAI from "@/app/ui/mainpage/openai/OpenAI";
import SkeletonLoader from "@/components/mainpage/Skeleton";
import {Suspense} from "react";

function TabBar() {
  return (
    <Tabs
      defaultActiveKey="1"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title="새소식">
        <Suspense fallback={<SkeletonLoader />}>
          <PostList  />
        </Suspense>
      </Tab>
      <Tab eventKey="2" title="커뮤니티">
       <Community/>
      </Tab>
      <Tab eventKey="3-tab" title="싱크 AI">
      {/** AI 페이지 =*/}
      <OpenAI />
      </Tab>
      {/*<Tab eventKey="4" title="Contact"></Tab>*/}
    </Tabs>
  );
}

export default TabBar;
