import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  SimpleGrid,
  Button,
  Alert,
  Group,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export default function PatientDashboard() {
  const [assignedDoctor, setAssignedDoctor] = useState<string | null>(null);
  const [assignedShoemaker, setAssignedShoemaker] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const storedDoctor = localStorage.getItem("assignedDoctor");
    const storedShoemaker = localStorage.getItem("assignedShoemaker");
    if (storedDoctor) setAssignedDoctor(storedDoctor);
    if (storedShoemaker) setAssignedShoemaker(storedShoemaker);
  }, []);

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">
        Patient Dashboard
      </Title>

      {assignedDoctor ? (
        <Card withBorder mb="lg" shadow="sm" radius="md" p="md">
          <Title order={5}>Your Assigned Doctor</Title>
          <Group justify="space-between" align="center" mt="xs">
            <Text>{assignedDoctor}</Text>
            <Button
              size="xs"
              variant="light"
              component="a"
              href="/patient/doctor"
            >
              Change Doctor
            </Button>
          </Group>
        </Card>
      ) : (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="No doctor assigned"
          color="yellow"
          mb="lg"
        >
          You haven't selected a doctor yet.{" "}
          <Button
            variant="light"
            size="xs"
            component="a"
            href="/patient/doctor"
            ml="sm"
          >
            Assign now
          </Button>
        </Alert>
      )}

      {assignedShoemaker ? (
        <Card withBorder mb="lg" shadow="sm" radius="md" p="md">
          <Title order={5}>Your Assigned Shoemaker</Title>
          <Group justify="space-between" align="center" mt="xs">
            <Text>{assignedShoemaker}</Text>
            <Button
              size="xs"
              variant="light"
              component="a"
              href="/patient/shoemaker"
            >
              Change Shoemaker
            </Button>
          </Group>
        </Card>
      ) : (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="No shoemaker assigned"
          color="yellow"
          mb="lg"
        >
          You haven't selected a shoemaker yet.{" "}
          <Button
            variant="light"
            size="xs"
            component="a"
            href="/patient/shoemaker"
            ml="sm"
          >
            Assign now
          </Button>
        </Alert>
      )}

      <SimpleGrid cols={1} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Preliminary Questionnaire</Title>
          <Text c="dimmed" size="sm" mt="xs">
            Submit your initial assessment including walking ability,
            conditions, and expectations.
          </Text>
          <Button mt="md" component="a" href="/patient/questionnaire1">
            Fill Preliminary Questionnaire
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>Progress Assessment</Title>
          <Text c="dimmed" size="sm" mt="xs">
            Track the effects of orthopedic shoes and your health progress.
          </Text>
          <Button mt="md" component="a" href="/patient/questionnaire2">
            Fill Progress Questionnaire
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={4}>View Submitted Questionnaires</Title>
          <Text c="dimmed" size="sm" mt="xs">
            Browse all your previously submitted questionnaires.
          </Text>
          <Button mt="md" component="a" href="/questionnaire/submitted">
            View Questionnaires
          </Button>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
