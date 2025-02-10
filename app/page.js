"use client";

import ControlledCarousel from "@/components/mainpage/Carousel";
import TabBar from "@/app/ui/mainpage/Tabs";
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function Page() {
    return (
        <div>
            <Theme>
                <ControlledCarousel/>
                <div className="mt-8"></div>
                <TabBar/>
            </Theme>
        </div>
    );
}
