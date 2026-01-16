import MetaComponent from "@/components/common/MetaComponent";
import Mainpage from "./mainpage";
const metadata = {
  title:
    "The Eazy – All-in-One Business Management Software",
  description:
    "Run your entire business on one cloud platform. HCM, CRM, finance, payroll, projects, and more—simplified.",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Mainpage />
    </>
  );
}
