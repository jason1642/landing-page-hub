import SubHeader from "@/components/applelandingpage/SubHeader";
import Banner from "@/components/applelandingpage/header/Banner";
import Header from "@/components/applelandingpage/header/Header";



interface IprojectDirectoryLayoutProps {
    children: React.ReactNode;
}
const AppleCloneLayout: React.FunctionComponent<IprojectDirectoryLayoutProps> = ({children}) => {
  return ( 
    <>
    <Header />
    <SubHeader/>
    <Banner />
    <section 
    style={{
      backgroundColor: "#ffffff"

    }}
    >
        

        {children}
    </section>  
    </> 
  );
};

export default AppleCloneLayout;