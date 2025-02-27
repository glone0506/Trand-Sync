"use client";

import React from "react";
import "../../css/skeletonloader.css";

function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
