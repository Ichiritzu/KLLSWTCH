function obfuscateFingerprinting() {
  const script = document.createElement('script');
  script.textContent = `
    Object.defineProperty(navigator, 'language', { get: () => 'de-DE' });
    Object.defineProperty(screen, 'width', { get: () => 1920 });
    Object.defineProperty(screen, 'height', { get: () => 1080 });
    const originalToString = CanvasRenderingContext2D.prototype.toDataURL;
    CanvasRenderingContext2D.prototype.toDataURL = function() {
      return originalToString.call(this).replace('A', 'B');
    };
  `;
  document.documentElement.appendChild(script);
}
