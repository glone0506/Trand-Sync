"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PostList from "../postList";
import SkeletonLoader from "./Skeleton";
import OpenAI from "@/app/ui/mainpage/openai/OpenAI";
import { Suspense } from "react";

export default function TabBar() {
  return (
    <Tabs
      defaultActiveKey="1"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title="Home">
        <Suspense fallback={<SkeletonLoader />}>
          <PostList albumId={1} />
        </Suspense>
      </Tab>
      <Tab eventKey="2" title="Profile"></Tab>
      <Tab eventKey="3-tab" title="Loooonger Tab">
        {/** AI 페이지 =*/}
        <OpenAI />
      </Tab>
      <Tab eventKey="4" title="Contact"></Tab>
    </Tabs>
  );
}
