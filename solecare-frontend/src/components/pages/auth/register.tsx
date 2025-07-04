import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Center,
  Stack,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { ROLES } from "../../../constants";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../services/AuthService";
import { useNavigate } from "react-router";
import type { RegisterInfo } from "../../../interfaces/auth";

export default function RegisterPage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: ROLES.PATIENT || ROLES.DOCTOR || ROLES.SHOEMAKER,
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords do not match",
      role: (value) =>
        Object.values(ROLES).includes(value) ? null : "Invalid role",
    },
  });

  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: authService.register.bind(authService),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      console.log("Registration error:", error);
    },
  });

  const handleSubmit = (values: RegisterInfo) => {
    registerMutation.mutate(values);
  };

  return (
    <Container size={420} my={40}>
      <Center>
        <Title fw={900}>Create an account</Title>
      </Center>

      <Center>
        <Text c="dimmed" size="sm" mt={5}>
          Already have an account?{" "}
          <Anchor size="sm" href="/login">
            Login
          </Anchor>
        </Text>
      </Center>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              {...form.getInputProps("name")}
              required
            />

            <TextInput
              label="Email"
              placeholder="you@example.com"
              {...form.getInputProps("email")}
              required
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
              required
            />

            <PasswordInput
              label="Confirm password"
              placeholder="Re-enter password"
              {...form.getInputProps("confirmPassword")}
              required
            />

            <Select
              label="Are you a patient, doctor, or a shoemaker?"
              placeholder="Pick value"
              data={Object.values(ROLES)}
              {...form.getInputProps("role")}
              required
            />
          </Stack>

          <Button fullWidth mt="xl" type="submit">
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
