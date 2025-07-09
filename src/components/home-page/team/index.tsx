import React from "react";
import Leadership from "./leadership";
import ManagementTeam from "./management";
import useSectionInView from "@/src/hooks/useSectionInView";

const Team = () => {
  const { ref } = useSectionInView("#team");

  return (
    <section id="team" ref={ref}>
      <Leadership />
      <ManagementTeam />
    </section>
  );
};

export default Team;
