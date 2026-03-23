const features = [
  {
    title: "Modular Architecture",
    desc: "Flexible components across multiple chains."
  },
  {
    title: "High Performance",
    desc: "Low latency and high throughput systems."
  },
  {
    title: "Security First",
    desc: "Advanced cryptography and consensus."
  },
  {
    title: "Decentralized",
    desc: "No single point of failure."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 grid md:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div key={i} className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-400">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
