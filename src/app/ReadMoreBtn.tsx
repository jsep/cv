"use client";

import React, { ReactNode, useState } from "react";

export function ReadMoreBtn({ textToDisplay }: { textToDisplay: ReactNode }) {
  const [readMore, setReadMore] = useState(false);

  const label = readMore ? "Less..." : "More...";

  function toggleReadMore(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setReadMore((value) => !value);
  }

  return (
    <>
      {readMore && textToDisplay}
      <a href={"#"} onClick={toggleReadMore} className="text-blue-600 print:hidden">
        {" "}
        {label}
      </a>
    </>
  );
}
