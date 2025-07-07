import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "@/src/context/section-context";

const useSectionInView = (sectionId?: string) => {
  const { setActiveSection } = useSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.2,
    skip: !sectionId,
  });

  useEffect(() => {
    if (inView && sectionId) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId, setActiveSection]);

  return { ref };
};

export default useSectionInView;
