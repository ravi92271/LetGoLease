export async function GET() {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=United+States"
  );
  const data = await response.json();

  return new Response(JSON.stringify(response), {})
}

//Should use NextResponse when folder is setup properly