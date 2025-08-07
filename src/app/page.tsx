import TopBar from '@/components/TopBar';
import Header from "@/components/Header";
import Banner from '@/components/Banner';
import How from '@/components/How';
import Why from '@/components/Why';
import Came from '@/components/Came';
import Sister from '@/components/Sister';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div>
     <TopBar />
     <Header />
     <Banner />
     <How/>
     <Why/>
     <Came/>
     <Sister/>
     <Footer />
    </div>
  );
}
