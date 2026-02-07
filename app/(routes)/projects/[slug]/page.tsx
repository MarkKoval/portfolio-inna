export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return <main className="container-p py-24"><h1 className="text-5xl">Project: {params.slug}</h1></main>;
}
