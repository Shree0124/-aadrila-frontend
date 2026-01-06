"use client";
export default function About() {
  return (
    <section className="px-10 py-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center">About Us</h3>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Our Vision</h4>
          <p className="text-sm text-gray-600">
            Empower businesses with AI-driven automation solutions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold mb-2">Our Mission</h4>
          <p className="text-sm text-gray-600">
            Simplify workflows and enhance decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
