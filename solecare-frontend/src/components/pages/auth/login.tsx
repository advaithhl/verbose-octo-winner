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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { authService } from "../../../services/AuthService";
import type { LoginInfo } from "../../../interfaces/auth";
import type { User } from "../../../types/users";
import { useMutation } from "@tanstack/react-query";
import { ROLES } from "../../../constants";

export default function LoginPage() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login.bind(authService),
    onSuccess: (user: User) => {
      // Not storing user info in local storage for now
      // TODO: Uncomment the next line to enable local storage
      // setUserInfoToLocalStorage(user);
      switch (user.role) {
        case ROLES.PATIENT:
          navigate("/patient");
          break;
        case ROLES.DOCTOR:
          navigate("/doctor");
          break;
        case ROLES.SHOEMAKER:
          navigate("/shoemaker");
          break;
      }
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });

  const handleSubmit = (values: LoginInfo) => {
    loginMutation.mutate(values);
  };

  return (
    <Container size={420} my={40}>
      <Center>
        <Title fw={900}>Welcome back!</Title>
      </Center>

      <Center>
        <Text c="dimmed" size="sm">
          Do not have an account yet?{" "}
          <Anchor size="sm" href="/register">
            Create account
          </Anchor>
        </Text>
      </Center>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@example.com"
            {...form.getInputProps("email")}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps("password")}
            required
          />

          <Button fullWidth mt="xl" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
