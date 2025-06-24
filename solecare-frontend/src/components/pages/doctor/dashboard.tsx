import {
  Container,
  Title,
  Card,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";

export default function DoctorDashboard() {
  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">
        Doctor Dashboard
      </Title>

      <SimpleGrid cols={1} spacing="lg">
        <Card withBorder shadow="sm" radius="md" p="md">
          <Title order={4}>Assigned Patients</Title>
          <Text c="dimmed" size="sm" mt="xs">
            View and manage your assigned patients.
          </Text>
          <Button mt="md" component="a" href="/doctor/patients">
            View Patient List
          </Button>
        </Card>

        <Card withBorder shadow="sm" radius="md" p="md">
          <Title order={4}>Record New Findings</Title>
          <Text c="dimmed" size="sm" mt="xs">
            Add clinical observations for a patient.
          </Text>
          <Button mt="md" component="a" href="/doctor/findings-form">
            Go to Findings Form
          </Button>
        </Card>

        <Card withBorder shadow="sm" radius="md" p="md">
          <Title order={4}>Compare Findings Versions</Title>
          <Text c="dimmed" size="sm" mt="xs">
            Compare earlier and recent findings sheets for a patient.
          </Text>
          <Button mt="md" component="a" href="/doctor/findings-compare">
            Start Comparison
          </Button>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
