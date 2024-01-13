import { Suspense } from "react";
import Content from "./content";

function Page() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Content />
    </Suspense>
  );
}

export default Page;
