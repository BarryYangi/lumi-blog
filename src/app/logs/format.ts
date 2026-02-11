export function formatLogMeta(index: number, publishedAt: string) {
  const date = new Date(`${publishedAt}T00:00:00`);
  const dateText = Number.isNaN(date.valueOf())
    ? publishedAt
    : date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
  return `Log Entry #${index} // ${dateText}`;
}
