// app/api/pdf/route.ts
import { NextResponse } from "next/server";
import { generatePDF } from "@/app/_lib/pdf/generatePDF";

export const runtime = "nodejs";           // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic";    // optional: avoid caching

export async function GET() {
    try {
        const url = "http://localhost:3000"; // test URL
        const pdfBuffer = await generatePDF(url); // Node Buffer

        // Convert Buffer -> Uint8Array (acceptable BodyInit)
        const pdfBytes = new Uint8Array(pdfBuffer);

        return new NextResponse(pdfBytes, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=resume.pdf",
                "Cache-Control": "no-store",
            },
        });
    } catch (err) {
        console.error("Error generating PDF:", err);
        return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
    }
}
