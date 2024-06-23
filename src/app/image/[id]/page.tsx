import { getImage } from "@/server/queries";
import Image from "next/image";

type PageProps = {
  params: { id: string };
};

export default async function Page(props: PageProps) {
  const { id } = props.params;

  const idAsNumber = Number(id);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid id");

  const image = await getImage(idAsNumber);

  return <div><Image src={image.url} width={384} height={240} alt="Image" /></div>;
};
