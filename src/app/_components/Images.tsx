import Image from "next/image";

import { getMyImages } from "@/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative w-full">
          <Image
            src={image.url}
            width={480}
            height={270}
            alt={image.name}
            className="w-full h-auto object-contain"
          />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
