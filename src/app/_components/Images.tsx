import { getMyImages } from "@/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.url} alt={image.name} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
