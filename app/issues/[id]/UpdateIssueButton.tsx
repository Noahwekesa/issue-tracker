"use client";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";

const UpdateIssueButton = () => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" color="cyan">
            Update Status
            <CaretDownIcon width="12" height="12" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="soft" color="cyan" align="center">
          <DropdownMenu.Item shortcut="⌘ E">Open</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">In Progress</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Closed</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default UpdateIssueButton;
