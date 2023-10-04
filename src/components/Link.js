import React from "react";

const Link = (props) => {
  const { link } = props;
  return (
    <div className="mb-2">
      <span>
        <span className="fw-semibold">Link:</span> ({link.url})
      </span>
      <br />
      <span>
        <span className="fw-semibold">Description:</span> {link.description}
      </span>
    </div>
  );
};

export default Link;
