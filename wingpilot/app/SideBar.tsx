import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

let Options: string[] = ["Home", "Table", "About", "Contact"];

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(80vh-2rem)] w-half max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          WingPilot
        </Typography>
      </div>
      <List>
        {Options.map((option) => (
          <Link href={option} key={option}>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              {option}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
// Unit feature implementation - 20251103_0006
// Unit feature implementation - 20251104_0008
// Unit feature implementation - 20251105_0012
// Unit feature implementation - 20251116_0036
// Unit feature implementation - 20251117_0039
// Unit feature implementation - 20251119_0044
// Unit feature implementation - 20251120_0045
// Unit feature implementation - 20251123_0053
// Unit feature implementation - 20251126_0058
// Unit feature implementation - 20251201_0071
// Unit feature implementation - 20251201_0072
// Unit feature implementation - 20251202_0075
// Unit feature implementation - 20251204_0079
// Unit feature implementation - 20251205_0081
// Unit feature implementation - 20251207_0087
// Unit feature implementation - 20251208_0090
// Unit feature implementation - 20251106_0013
// Unit feature implementation - 20251108_0018
// Unit feature implementation - 20251109_0021
// Unit feature implementation - 20251110_0022
// Unit feature implementation - 20251110_0024
// Unit feature implementation - 20251113_0032
// Unit feature implementation - 20251115_0035
// Unit feature implementation - 20251120_0049
// Unit feature implementation - 20251122_0054
// Unit feature implementation - 20251122_0055
// Unit feature implementation - 20251130_0073
// Unit feature implementation - 20251201_0076
// Unit feature implementation - 20251204_0084
// Unit feature implementation - 20251208_0004
// Unit feature implementation - 20251209_0008
// Unit feature implementation - 20251105_0012
// Unit feature implementation - 20251112_0031
// Unit feature implementation - 20251113_0032
// Unit feature implementation - 20251115_0038
// Unit feature implementation - 20251117_0043
// Unit feature implementation - 20251124_0061
// Unit feature implementation - 20251125_0063
// Unit feature implementation - 20251126_0066
// Unit feature implementation - 20251127_0068
// Unit feature implementation - 20251128_0070
// Unit feature implementation - 20251130_0078
// Unit feature implementation - 20251202_0083
// Unit feature implementation - 20251204_0087
// Unit feature implementation - 20251210_0103
