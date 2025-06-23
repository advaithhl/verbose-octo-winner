import { Container, Title, Card, Text, Button } from "@mantine/core";
import { BackButton } from "../../back";

// Dummy data — replace with real backend logic
const assignedPatients = [
  { id: "p1", name: "John Doe" },
  { id: "p2", name: "Anna Müller" },
];

export default function PatientListPage() {
  return (
    <Container size="sm" py="xl">
      <BackButton prevLink="/doctor" />

      <Title order={2} mb="md">
        Assigned Patients
      </Title>

      {assignedPatients.map((patient) => (
        <Card key={patient.id} withBorder radius="md" p="md" mb="sm">
          <Text fw={500}>{patient.name}</Text>
          <Button
            mt="sm"
            size="xs"
            component="a"
            href={`/doctor/patients/${patient.id}`}
          >
            View Details
          </Button>
        </Card>
      ))}
    </Container>
  );
}
