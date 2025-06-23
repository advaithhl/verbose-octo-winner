// components/BackToDashboard.tsx
import { Button, Group } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";

export const BackButton = ({
  prevLink,
  buttonText = "Back",
}: {
  prevLink: string;
  buttonText?: string;
}) => {
  const navigate = useNavigate();

  return (
    <Group mb="md">
      <Button
        leftSection={<IconArrowLeft size={16} />}
        variant="subtle"
        onClick={() => navigate(prevLink)}
      >
        {buttonText}
      </Button>
    </Group>
  );
};
