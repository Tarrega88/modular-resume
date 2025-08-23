"use server";

import { chromium } from "playwright";

export async function generatePDF(url: string) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    const pdf = await page.pdf({
        format: "Letter",
        printBackground: true,
        // margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
        // preferCSSPageSize: true, // for CSS @page { size: Letter }
    });

    await browser.close();
    return pdf;
}