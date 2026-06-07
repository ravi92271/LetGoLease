from fastapi import APIRouter
from pydantic import BaseModel, Field


router = APIRouter(prefix="/api/auth", tags=["auth"])


class SignupRequest(BaseModel):
    firstName: str = Field(min_length=1)
    lastName: str = Field(min_length=1)
    university: str = Field(min_length=1)
    email: str = Field(min_length=1)
    password: str = Field(min_length=8)


class LoginRequest(BaseModel):
    email: str = Field(min_length=1)
    password: str = Field(min_length=1)


@router.post("/signup")
def signup(payload: SignupRequest):
    return {
        "user": {
            "id": "mock-user-1",
            "firstName": payload.firstName,
            "lastName": payload.lastName,
            "university": payload.university,
            "email": payload.email,
        },
        "accessToken": "mock-access-token",
    }


@router.post("/login")
def login(payload: LoginRequest):
    return {
        "user": {
            "id": "mock-user-1",
            "firstName": "Mock",
            "lastName": "User",
            "university": "Mock University",
            "email": payload.email,
        },
        "accessToken": "mock-access-token",
    }


@router.get("/me")
def me():
    return {
        "id": "mock-user-1",
        "firstName": "Mock",
        "lastName": "User",
        "university": "Mock University",
        "email": "student@example.edu",
    }


@router.post("/logout")
def logout():
    return {"success": True}
