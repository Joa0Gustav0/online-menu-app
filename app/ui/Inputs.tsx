import Image from "next/image";
import infoIcon from "@/public/media/icons/info-icon.png";

function Inputs({props}: {props: {
  title: string;
  placeholder: string;
  infos: Array<string>;
}}) {
  return (
    <label className="flex flex-col gap-[5px] px w-full">
      <div className="flex items-center gap-[10px] text-[1.25em] font-semibold">
        {props.title}
        <Image src={infoIcon} alt={"Ícone representativo de informações"} className="w-[15px]" />
      </div>
      <input type="text" id={"input-for-" + props.title.toLowerCase()} placeholder={props.placeholder} className="px-[10px] py-[10px] bg-[#f1f1f1] rounded-[2.5px]" />
    </label>
  );
}

export default Inputs;