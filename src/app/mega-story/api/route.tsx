import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {

    const url = new URL(request.url);

    const current = url.searchParams.get('current');
    const pageSize = url.searchParams.get('pagesize');

    const res = await fetch(`${process.env.BACKEND_URL}blogs?filters[category][$eq]=mega-story&populate=image&pagination[page]=${current}&pagination[pageSize]=${pageSize}&sort=id:DESC`,
        { next: { revalidate: 7200 } }
    );

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await res.json();

    return NextResponse.json(data);
}