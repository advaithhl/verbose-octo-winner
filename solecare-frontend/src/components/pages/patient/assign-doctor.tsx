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

const doctorDatabase: Record<string, string[]> = {
  "12345": ["Dr. Smith", "Dr. Müller"],
  "67890": ["Dr. Meier", "Dr. Koch"],
};

export default function AssignDoctorPage() {
  const [plz, setPlz] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [currentDoctor, setCurrentDoctor] = useState<string | null>(null);

  // TODO: change this to something better.
  useEffect(() => {
    const stored = localStorage.getItem("assignedDoctor");
    if (stored) setCurrentDoctor(stored);
  }, []);

  useEffect(() => {
    if (plz && doctorDatabase[plz]) {
      setResults(doctorDatabase[plz]);
    } else {
      setResults([]);
    }
  }, [plz]);

  // TODO: change this to something better.
  const handleAssign = (doctor: string) => {
    localStorage.setItem("assignedDoctor", doctor);
    setCurrentDoctor(doctor);
  };

  return (
    <Container size="sm" py="xl">
      <BackButton prevLink="/patient" />
      <Title order={2} mb="md">
        Assign Doctor
      </Title>

      <Stack>
        <TextInput
          label="Search doctors using your PLZ code below"
          value={plz}
          onChange={(e) => setPlz(e.currentTarget.value)}
          placeholder="e.g., 12345"
        />
      </Stack>

      {currentDoctor && (
        <Alert
          icon={<IconInfoCircle size={16} />}
          title="Current Doctor"
          color="blue"
          mt="lg"
        >
          You are currently assigned to <b>{currentDoctor}</b>.
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
                disabled={doc === currentDoctor}
              >
                {doc === currentDoctor ? "Selected" : "Select this doctor"}
              </Button>
            </Card>
          ))}
        </List>
      )}

      {plz && results.length === 0 && (
        <Text mt="xl" c="red">
          No doctors found for PLZ {plz}
        </Text>
      )}
    </Container>
  );
}
