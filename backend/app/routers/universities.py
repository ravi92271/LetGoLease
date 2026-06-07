import json
from urllib.error import URLError
from urllib.request import urlopen

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel


router = APIRouter(prefix="/api", tags=["universities"])

HIPOLABS_US_UNIVERSITIES_URL = (
    "http://universities.hipolabs.com/search?country=United+States"
)


class University(BaseModel):
    name: str
    domain: list[str]


@router.get("/universities", response_model=list[University])
def get_universities():
    try:
        with urlopen(HIPOLABS_US_UNIVERSITIES_URL, timeout=10) as response:
            universities = json.loads(response.read().decode("utf-8"))
    except (OSError, URLError, json.JSONDecodeError) as exc:
        raise HTTPException(
            status_code=502,
            detail="Unable to fetch universities",
        ) from exc

    return [
        {
            "name": university.get("name", ""),
            "domain": university.get("domains", []),
        }
        for university in universities
        if university.get("name")
    ]
