const mockUrls = [
  "https://utfs.io/f/d6b6d80c-b433-4228-a6ce-94559a803d92-vb9smn.jpg",
  "https://utfs.io/f/11bf4f4a-7da4-4fa4-95d8-1102a8c16427-jvgc97.jpg",
];

export default function Page() {
  return (
    <main className="grid grid-cols-4 gap-4">
      {mockUrls.map((src, index) => (
        <img key={index} src={src} alt="Mock image" />
      ))}
    </main>
  );
}
