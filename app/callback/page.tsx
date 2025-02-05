"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasAttemptedExchange = useRef(false);

  useEffect(() => {
    const handleCallback = async () => {
      if (hasAttemptedExchange.current) {
        return;
      }
      hasAttemptedExchange.current = true;

      const code = searchParams.get("code");
      const error = searchParams.get("error");

      if (error) {
        router.push(`/?error=${encodeURIComponent(error)}`);
        return;
      }

      if (!code) {
        router.push("/?error=no_code");
        return;
      }

      try {
        // Log environment variables presence
        console.log('Environment check:', {
          hasClientId: !!process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
          hasClientSecret: !!process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
          hasRedirectUri: !!process.env.NEXT_PUBLIC_REDIRECT_URI,
          redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI
        });

        const params = new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
        });

        const authHeader = Buffer.from(
          `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
        ).toString('base64');

        console.log('Making token request...');
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${authHeader}`,
          },
          body: params,
        });

        const data = await response.json();

        console.log('Token response:', {
          status: response.status,
          statusText: response.statusText,
          hasError: !!data.error,
          errorDescription: data.error_description,
          hasAccessToken: !!data.access_token,
        });

        if (!response.ok) {
          throw new Error(
            `Failed to exchange code: ${data.error_description || data.error || response.statusText}`
          );
        }

        if (!data.access_token) {
          throw new Error('No access token received from Spotify');
        }

        // Store tokens
        localStorage.setItem("spotify_access_token", data.access_token);
        if (data.refresh_token) {
          localStorage.setItem("spotify_refresh_token", data.refresh_token);
        }

        // Store expiration time
        const expiresIn = data.expires_in;
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        localStorage.setItem("token_expiration", expirationTime.toString());

        // Redirect to home page
        router.push("/");
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        router.push(`/?error=${encodeURIComponent(errorMessage)}`);
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1DB954] flex items-center justify-center">
      <div className="bg-[#181818] p-8 rounded-lg shadow-xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1DB954]"></div>
          <h2 className="text-xl font-semibold text-white">
            Authenticating with Spotify...
          </h2>
          <p className="text-[#b3b3b3]">
            Please wait while we complete the process
          </p>
        </div>
      </div>
    </div>
  );
}
