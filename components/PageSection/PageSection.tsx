import React from "react";

interface PageSectionProps {
  children: React.ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({ children }) => {
  return <section>{children}</section>;
};
