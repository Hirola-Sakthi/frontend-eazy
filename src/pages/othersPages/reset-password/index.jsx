import Resetpass1 from "@/components/otherPages/Resetpass1";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Reset Password || Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Eazy - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function ResetPasswordPage() {
  return (
    <>
      {/* <MetaComponent meta={metadata} /> */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <Resetpass1 />
        </div>
      </div>
    </>
  );
}
