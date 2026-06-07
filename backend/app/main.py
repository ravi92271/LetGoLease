from fastapi import FastAPI

app = FastAPI(
    title="LetGoLease",
    version="0.1.0"
)

@app.get("/")
def root():
    return {"message" : "Hello World"}