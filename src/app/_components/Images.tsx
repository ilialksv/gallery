import Image from "next/image";

import { getMyImages } from "@/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <Link key={image.id} href={`/image/${image.id}`}>
          <Image
            src={image.url}
            width={480}
            height={270}
            alt={image.name}
            className="w-full h-auto object-contain"
          />
          <p>{image.name}</p>
        </Link>
      ))}
    </div>
  );
}
