import { useEffect, useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Stack,
  List,
  Card,
  Text,
  Alert,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { BackButton } from "../../back";

const shoemakerDatabase: Record<string, string[]> = {
  "12345": ["Smith", "Müller"],
  "67890": ["Meier", "Koch"],
};

export default function AssignShoemakerPage() {
  const [plz, setPlz] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [currentShoemaker, setCurrentShoemaker] = useState<string | null>(null);

  // TODO: change this to something better.
  useEffect(() => {
    const stored = localStorage.getItem("assignedShoemaker");
    if (stored) setCurrentShoemaker(stored);
  }, []);

  useEffect(() => {
    if (plz && shoemakerDatabase[plz]) {
      setResults(shoemakerDatabase[plz]);
    } else {
      setResults([]);
    }
  }, [plz]);

  // TODO: change this to something better.
  const handleAssign = (shoemaker: string) => {
    localStorage.setItem("assignedShoemaker", shoemaker);
    setCurrentShoemaker(shoemaker);
  };

  return (
    <Container size="sm" py="xl">
      <BackButton prevLink="/patient" />
      <Title order={2} mb="md">
        Assign Shoemaker
      </Title>

      <Stack>
        <TextInput
          label="Search shoemakers using your PLZ code below"
          value={plz}
          onChange={(e) => setPlz(e.currentTarget.value)}
          placeholder="e.g., 12345"
        />
      </Stack>

      {currentShoemaker && (
        <Alert
          icon={<IconInfoCircle size={16} />}
          title="Current Shoemaker"
          color="blue"
          mt="lg"
        >
          You are currently assigned to <b>{currentShoemaker}</b>.
        </Alert>
      )}

      {results.length > 0 && (
        <List mt="xl" spacing="sm">
          {results.map((doc) => (
            <Card withBorder radius="md" p="md" key={doc} mb="sm">
              <Text>{doc}</Text>
              <Button
                mt="sm"
                variant="light"
                onClick={() => handleAssign(doc)}
                disabled={doc === currentShoemaker}
              >
                {doc === currentShoemaker
                  ? "Selected"
                  : "Select this shoemaker"}
              </Button>
            </Card>
          ))}
        </List>
      )}

      {plz && results.length === 0 && (
        <Text mt="xl" c="red">
          No shoemakers found for PLZ {plz}
        </Text>
      )}
    </Container>
  );
}
