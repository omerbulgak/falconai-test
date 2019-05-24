import React, { useEffect, useState } from "react";
import CircularProgressDashboard from "./circularProgressDashboard";

export default function CircularDashboardContainer({data}) {
  const markup = data ? (
    <CircularProgressDashboard data={data} />
  ) : (
    <div>Loading...</div>
  );

  return markup;
}
