import { notFound } from "next/navigation";
import prisma from "@/prisma/client";
import React from "react";
import { Grid, Box, Flex } from "@radix-ui/themes";
import delay from "delay";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import UpdateIssueButton from "./UpdateIssueButton";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  await delay(2000);
  return (
    <Grid columns={{ initial: "1", sm: "2" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />

          <UpdateIssueButton />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
