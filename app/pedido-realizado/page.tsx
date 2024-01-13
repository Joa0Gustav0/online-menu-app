import Content from "./content";
import Redirect from "./redirect";

function Page() {
  return (
    <main
      className={
        "w-full bg-[#f5f5f5]"
      }
    >
      <div className="w-full max-w-[1115px] flex flex-col smlg:flex-row items-center justify-center smlg:justify-evenly min-h-screen px-[20px] smlst:px-[36px] pt-[180px] pb-[85px] m-auto">
        <Content  />
      </div>
      <Redirect />
    </main>
  );
}

export default Page;
