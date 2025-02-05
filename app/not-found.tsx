import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music } from "lucide-react";
import Header from "@/components/Header";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1DB954]">
            <Header />
            <div className="flex items-center justify-center p-4 h-[calc(100vh-64px)]">
                <Card className="w-full max-w-md bg-[#181818] border-none shadow-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold text-[#1DB954] flex items-center justify-center">
                            <Music className="w-8 h-8 mr-2" />
                            404 - Track Not Found
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-6">
                        <div className="space-y-2">
                            <p className="text-white text-lg">
                                This track seems to be missing from our playlist
                            </p>
                            <p className="text-sm text-[#b3b3b3]">
                                The page you&apos;re looking for might have been moved, deleted, or
                                never existed. Let&apos;s get you back to the main tracklist.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Button
                                asChild
                                className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white"
                            >
                                <Link href="/">Return to Homepage</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}