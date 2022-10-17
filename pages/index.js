
import dynamic from "next/dynamic";



export default function Home() {
  const TermsComponent = dynamic(() => import("../components/TermsAndConditions"));
  return (
    <>
      
   <TermsComponent/>
   
    </>
  )
}
