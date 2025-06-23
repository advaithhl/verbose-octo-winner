import { useParams } from "react-router";
import { Container, Title, Text, Card, Button, Stack } from "@mantine/core";
import { BackButton } from "../../back";

// Dummy data for demo
const patientProfiles: Record<string, { name: string }> = {
  p1: { name: "John Doe" },
  p2: { name: "Anna Müller" },
};

export default function PatientDetailPage() {
  const { patientId } = useParams<{ patientId: string }>();
  console.log(patientId);
  const patient = patientProfiles[patientId ?? ""];

  if (!patient) {
    return (
      <Container size="sm" py="xl">
        <BackButton prevLink="/doctor" />
        <Title order={2}>Patient not found</Title>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <BackButton prevLink="/doctor/patients" />

      <Title order={2} mb="md">
        {patient.name}
      </Title>

      <Stack gap="md">
        <Card withBorder radius="md" p="md">
          <Title order={5}>Submitted Questionnaires</Title>
          <Text c="dimmed" size="sm">
            List of questionnaire submissions here.
          </Text>
          <Button mt="sm" size="xs" variant="light">
            View Submissions
          </Button>
        </Card>

        <Card withBorder radius="md" p="md">
          <Title order={5}>Past Findings</Title>
          <Text c="dimmed" size="sm">
            Historical clinical observations.
          </Text>
          <Button mt="sm" size="xs" variant="light">
            View Findings
          </Button>
        </Card>
      </Stack>
    </Container>
  );
}
