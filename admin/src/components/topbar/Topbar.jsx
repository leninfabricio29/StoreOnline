import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MARKE</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://pps.whatsapp.net/v/t61.24694-24/287107145_1070382777232476_4809733407995804264_n.jpg?ccb=11-4&oh=01_AVycfMlFzdrOn5w1068S1g_F19iHBjJRPCb9DK0G-jFRsg&oe=62E1D0D5" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
