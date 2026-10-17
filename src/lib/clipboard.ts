/**
 * Copy text to the clipboard with a fallback for non-secure contexts.
 *
 * The async Clipboard API (`navigator.clipboard`) is only available in
 * secure contexts (HTTPS or localhost). When the app is served over
 * plain HTTP (e.g. from a LAN/home server), we fall back to the legacy
 * synchronous `document.execCommand('copy')` path.
 *
 * Returns true when the copy succeeded.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied or clipboard busy — fall through to the legacy path.
    }
  }

  // Legacy synchronous fallback (deprecated, but widely supported).
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}
