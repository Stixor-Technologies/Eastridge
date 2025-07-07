import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "@/src/context/section-context";

const useSectionInView = (sectionId?: string) => {
  const { setActiveSection } = useSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
    skip: !sectionId,
  });

  useEffect(() => {
    if (inView && sectionId) {
      setActiveSection(sectionId);
    } else {
      setActiveSection("");
    }
  }, [inView, sectionId]);

  return { ref };
};

export default useSectionInView;
