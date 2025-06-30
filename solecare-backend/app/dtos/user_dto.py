from dataclasses import dataclass

@dataclass
class RegisterDTO:
    name: str
    email: str
    password: str
    confirmPassword: str
    role: str

@dataclass
class LoginDTO:
    email: str
    password: str
