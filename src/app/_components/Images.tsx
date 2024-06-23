import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

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
