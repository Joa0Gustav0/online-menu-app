import { Suspense } from "react";
import Content from "./content";
import { secondaryFont } from "../ui/fonts";

function Page() {
  return (
    <Suspense
      fallback={
        <main className="relative flex justify-center items-center w-full min-h-screen m-auto px-[20px] smlst:px-[36px] pt-[110px] pb-[36px] bg-[#f5f5f5] overflow-hidden transition-all duration-[.25s]">
          <h1 className={`${secondaryFont.className} text-[16px] ssm:text-[20px] text-center`}>Aguarde... <br />As comidinhas irão aparecer! <br />🍔🍕🍟🍨</h1>
        </main>
      }
    >
      <Content />
    </Suspense>
  );
}

export default Page;
