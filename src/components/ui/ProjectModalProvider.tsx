"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import type { Project } from "@/data/types";
import { ProjectModal } from "./ProjectModal";

const ProjectModalContext = createContext<((project: Project) => void) | null>(
  null,
);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const close = useCallback(() => setSelectedProject(null), []);

  return (
    <ProjectModalContext.Provider value={setSelectedProject}>
      {children}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={close} />
        )}
      </AnimatePresence>
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const open = useContext(ProjectModalContext);
  if (!open)
    throw new Error("useProjectModal must be used within ProjectModalProvider");
  return open;
}
