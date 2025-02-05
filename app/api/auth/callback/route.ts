import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

export async function POST(request: Request) {
  try {
    if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
      console.error('Missing environment variables:', {
        hasClientId: !!CLIENT_ID,
        hasClientSecret: !!CLIENT_SECRET,
        hasRedirectUri: !!REDIRECT_URI
      });
      return NextResponse.json(
        { error: "Server configuration error - missing environment variables" },
        { status: 500 }
      );
    }

    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: "Authorization code is required" },
        { status: 400 }
      );
    }

    const tokenEndpoint = "https://accounts.spotify.com/api/token";
    const authHeader = Buffer.from(
      `${CLIENT_ID}:${CLIENT_SECRET}`
    ).toString("base64");

    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI!,
    });

    const tokenResponse = await fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader}`,
      },
      body: params,
    });

    const data = await tokenResponse.json();

    console.log('Token response:', {
      status: tokenResponse.status,
      statusText: tokenResponse.statusText,
      data: data,
      usedRedirectUri: REDIRECT_URI
    });

    if (!tokenResponse.ok) {
      return NextResponse.json(
        {
          error: "Failed to exchange authorization code",
          details: data,
          status: tokenResponse.status,
          statusText: tokenResponse.statusText
        },
        { status: tokenResponse.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}