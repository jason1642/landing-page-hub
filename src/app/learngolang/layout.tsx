"use client"
import Header from "@/components/learngolang/Header";

interface IprojectDirectoryLayoutProps {
    children: React.ReactNode;
}
const ChallengesLayout: React.FunctionComponent<IprojectDirectoryLayoutProps> = ({children}) => {
  return (
    <section>
        <Header/>

        {children}
    </section>
  );
};

export default ChallengesLayout;