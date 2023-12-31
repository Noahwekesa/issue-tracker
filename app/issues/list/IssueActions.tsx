import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Button className="shadow-stone-950">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};
export default IssueActions;
