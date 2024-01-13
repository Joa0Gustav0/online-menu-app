"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Redirect() {
  const { push } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("@burg3r_Is_bought") === null) {
      push("/");
    }
    onbeforeunload = () => {
      localStorage.removeItem("@burg3r_Is_bought");
    };
  })

  return null;
}

export default Redirect;