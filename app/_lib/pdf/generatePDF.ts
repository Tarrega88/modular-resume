"use server";

import { chromium } from "playwright";

export async function generatePDF(url: string) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    const pdf = await page.pdf({
        format: "A4",
        preferCSSPageSize: true,
        printBackground: true,
        // margin: { top: "20mm", bottom: "20mm" },
    });

    await browser.close();
    return pdf;
}