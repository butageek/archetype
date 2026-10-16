import { toBlob, toPng } from 'html-to-image';

/**
 * Captures a screenshot of an HTMLElement and copies it directly to the system clipboard
 * as a PNG image. If clipboard write is blocked by browser permissions, it falls back
 * gracefully to downloading the image directly to the user's computer.
 */
export async function copyMockupScreenshotToClipboard(
  element: HTMLElement,
  filename = 'archetype-mockup.png'
): Promise<{ success: boolean; method: 'clipboard' | 'download' }> {
  try {
    const blob = await toBlob(element, {
      pixelRatio: 2,
      cacheBust: true,
      skipAutoScale: true,
    });

    if (!blob) {
      throw new Error('Blob generation resulted in null');
    }

    // Try modern Clipboard API with image/png
    if (
      typeof ClipboardItem !== 'undefined' &&
      navigator.clipboard &&
      typeof navigator.clipboard.write === 'function'
    ) {
      try {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        return { success: true, method: 'clipboard' };
      } catch (clipErr) {
        console.warn('Navigator clipboard image write failed, falling back to download:', clipErr);
      }
    }

    // Fallback: download PNG directly
    const dataUrl = await toPng(element, { pixelRatio: 2 });
    downloadDataUrl(dataUrl, filename);
    return { success: true, method: 'download' };
  } catch (err) {
    console.error('Failed to copy screenshot to clipboard:', err);
    try {
      // Last-ditch download attempt
      const dataUrl = await toPng(element, { pixelRatio: 2 });
      downloadDataUrl(dataUrl, filename);
      return { success: true, method: 'download' };
    } catch (fallbackErr) {
      console.error('Fallback download also failed:', fallbackErr);
      return { success: false, method: 'download' };
    }
  }
}

/**
 * Directly downloads the captured mockup element as a high-resolution PNG file.
 */
export async function downloadMockupAsPng(
  element: HTMLElement,
  filename = 'archetype-mockup.png'
): Promise<boolean> {
  try {
    const dataUrl = await toPng(element, {
      pixelRatio: 2,
      cacheBust: true,
      skipAutoScale: true,
    });
    downloadDataUrl(dataUrl, filename);
    return true;
  } catch (err) {
    console.error('Failed to download PNG:', err);
    return false;
  }
}

function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
