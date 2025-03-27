import { Image } from "@/components/ui";
import { SEO } from "../components/global";
import NotFoundImg from "../components/ui/SVG/notfound.svg";

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-[#8C52FF] text-[40px]">
        <Image src={NotFoundImg} className=" h-64 w-64"></Image>
        Our Develoment team is working on this feature
        <h2 className="text-sm">Do the calms💜</h2>
      </div>
    </>
  );
}
