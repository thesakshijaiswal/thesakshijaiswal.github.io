import GlowLine from "@/components/GlowLine";
export default function AboutPage() {
  return (
    <div className="relative flex">
      <GlowLine orientation="vertical" position="0px" />
      <div className="ml-8">
        <h1 className="text-2xl font-bold">Who Am I?</h1>
        <div className="mt-4 text-gray-600 space-y-6 leading-relaxed text-sm md:text-base">
          <p>
            I&apos;m the developer who turns ideas into web experiences people
            enjoy using. My mission is to build applications that look great,
            load fast, and work for everyone.
          </p>
          <p>
            I&apos;m a 23-year-old CSE graduate, and since beginning my
            programming journey in 2020, my curiosity has pushed me to dive deep
            into full-stack development, with a strong focus on accessibility,
            performance, and SEO.
          </p>
          <p>
            At ansrsource, I worked as a frontend developer, contributing from
            day one and developing the company&apos;s portfolio website, which
            boosted sales by 70%.
          </p>
          <p>
            Beyond coding, I enjoy music, meeting like-minded people, and
            sharing ideas. Known as the “padhaku” among friends, I take pride in
            being a consistent academic topper and graduating in 2024. I&apos;m
            currently open to full-time roles and freelance opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
