import { FC } from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <div>BaseLayout</div>;
};

export default BaseLayout;
