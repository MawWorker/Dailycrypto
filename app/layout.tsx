import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { ScrollToTopProvider } from "@/components/layout/scroll-to-top-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DailyCrypto - Philippines' Leading Cryptocurrency News",
  description: "Stay updated with the latest cryptocurrency news, market analysis, and educational content tailored for Filipino crypto enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ScrollToTopProvider enabled={true} threshold={300} showProgress={false}>
          {children}
        </ScrollToTopProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}