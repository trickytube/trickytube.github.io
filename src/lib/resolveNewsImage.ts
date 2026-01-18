//image helper function
const images = import.meta.glob<{default: ImageMetadata;}>('/src/assets/news/*.{jpeg,jpg,png,gif}');

export async function resolveNewsImage(filename: string) {
  const path = `/src/assets/news/${filename}`
  const img = images[path];

  if (!img) {
    throw new Error(
      `Image "${path}" not found in /src/assets/news`
    );
  }
  const mod = await img();
  return mod.default;
}
