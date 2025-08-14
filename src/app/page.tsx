import Hero from "@/sections/Hero";
import BaseLayout from "@/sections/BaseLayout";

export default function Home() {
  return (
    <>
      <Hero />
      <BaseLayout>
        <div className="">
          <h1 className="text-2xl font-bold">Who Am I?</h1>
          <div className="mt-4 text-gray-600">
            <p>
              I&apos;m the developer who turns ideas into web experiences people
              enjoy using. My mission is to build applications that look great,
              load fast, and work for everyone.
            </p>
            <p>
              A 23-year-old CSE graduate from Maharashtra, India. Since starting
              my programming journey in 2020, my curiosity has driven me to
              master full stack development, focusing on accessibility,
              performance, and SEO.
            </p>
            <p>
              At ansrsource, I worked as a frontend developer, contributing from
              day one and designing the company&apos;s portfolio website, which
              increased sales by 70%.
            </p>
            <p>
              Beyond coding, I enjoy music, meeting like-minded people, and
              sharing ideas. Known as the “padhaku” among friends, I take pride
              in being a consistent academic topper and graduating in 2024.
              I&apos;m currently open to full-time roles and freelance
              opportunities.
            </p>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
