import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonLoader() {
  return (
    <>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton count={3} />
      </SkeletonTheme>
    </>
  );
}
