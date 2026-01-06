"use client";
export default function Contact() {
  return (
    <section className="px-10 py-20 bg-secondary text-white">
      <h3 className="text-3xl font-bold text-center">Contact Us</h3>

      <form className="max-w-xl mx-auto mt-10 grid gap-4">
        <input className="p-3 rounded text-black" placeholder="Name" />
        <input className="p-3 rounded text-black" placeholder="Email" />
        <textarea
          className="p-3 rounded text-black"
          placeholder="Message"
        ></textarea>

        <button className="bg-primary py-3 rounded">
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}
