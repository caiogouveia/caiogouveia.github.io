import Footer from "@/app/components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const JetBrainMono = JetBrains_Mono({ subsets: ["latin"] });
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section
    style={{
      width: "50%",
      maxWidth: "1024px",
    }}>{children}</section>
}
