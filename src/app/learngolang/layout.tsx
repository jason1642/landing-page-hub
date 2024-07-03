
import Header from "@/components/learngolang/Header";

interface IprojectDirectoryLayoutProps {
    children: React.ReactNode;
}
const ChallengesLayout: React.FunctionComponent<IprojectDirectoryLayoutProps> = ({children}) => {
  return ( 
    <>
    <Header/>
  
    <section 
    style={{
      backgroundColor: "#111827"

    }}
    >
        

        {children}
    </section>  
    </> 
  );
};

export default ChallengesLayout;