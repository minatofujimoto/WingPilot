import React, { PropsWithChildren } from "react";
import { DefaultSidebar } from "../SideBar";
import { Footer } from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex gap-4 my-4">
        <DefaultSidebar />
        {children}
      </div>
      <div className="m-20">
        <Footer />
      </div>
    </>
  );
};
export default Layout;
// Unit feature implementation - 20251102_0005
// Unit feature implementation - 20251105_0011
// Unit feature implementation - 20251107_0016
// Unit feature implementation - 20251115_0033
// Unit feature implementation - 20251121_0048
// Unit feature implementation - 20251122_0050
// Unit feature implementation - 20251125_0057
// Unit feature implementation - 20251128_0064
// Unit feature implementation - 20251207_0086
// Unit feature implementation - 20251209_0091
// Unit feature implementation - 20251210_0094
// Unit feature implementation - 20251101_0001
// Unit feature implementation - 20251103_0006
// Unit feature implementation - 20251116_0038
// Unit feature implementation - 20251117_0043
// Unit feature implementation - 20251119_0047
// Unit feature implementation - 20251120_0048
// Unit feature implementation - 20251126_0064
// Unit feature implementation - 20251202_0078
// Unit feature implementation - 20251109_0024
// Unit feature implementation - 20251113_0033
// Unit feature implementation - 20251113_0034
// Unit feature implementation - 20251114_0035
// Unit feature implementation - 20251114_0036
// Unit feature implementation - 20251116_0041
// Unit feature implementation - 20251118_0045
// Unit feature implementation - 20251126_0065
// Unit feature implementation - 20251127_0067
