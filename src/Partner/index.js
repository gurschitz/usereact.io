import * as React from "react";
import * as classNames from "classnames";
import Link from "../Link";

export default function Partner({ className, ...props }) {
  return (
    <div
      {...props}
      className={classNames(
        "flex items-center justify-center flex-wrap",
        className
      )}
    >
      <Link
        href="https://devtreff.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/devtreff-logo.svg"
          alt="devtreff.io"
          width="100"
          className="m2"
        />
      </Link>
      <Link
        href="http://quartier-a.at"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/quartier-a-logo.png"
          alt="Quartier A"
          width="150"
          className="m2"
        />
      </Link>
      <Link
        href="https://chatbird.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/chatbird-logo-white.png"
          alt="Chatbird"
          width="200"
          className="m2"
        />
      </Link>
      <Link
        href="https://lemmings.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/lemmings_logo.png" alt="Lemmings.io" width="150" />
      </Link>
      <Link
        href="https://bierkanter.at"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/bierkanter.png"
          alt="Bierkanter"
          width="180"
          className="m2"
        />
      </Link>
    </div>
  );
}
