import Image from "next/image";
import Avatar from "@/assets/Sakshi_Ghibli.png";
import GlowLine from "@/components/GlowLine";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import LogoBox from "@/components/LogoBox";
import {
  MdOutlineCloudDownload,
  MdOutlineOfflineBolt,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { HiArrowRight } from "react-icons/hi";
export default function AboutPage() {
  return (
    <div className="relative flex">
      <GlowLine orientation="vertical" position="0px" />
      <div className="ml-8">
        <div className="flex mb-10 items-center gap-4">
          <LogoBox className="overflow-hidden place-content-baseline">
            <Image src={Avatar} alt="Profile picture" width={80} height={80} />
          </LogoBox>
          <h1 className="text-2xl font-bold">Who Am I?</h1>
        </div>
        <div className="mt-5 flex gap-2 flex-wrap items-center">
          <Tag
            icon={
              <MdOutlineOfflineBolt
                size={17}
                className="dark:text-emerald-300 text-emerald-500"
              />
            }
            label="Available for work"
            className="dark:border-emerald-900 dark:hover:bg-emerald-500/10"
          />
          <Tag
            icon={
              <MdOutlineCalendarToday
                size={14}
                className="dark:text-pink-300 text-pink-500/70"
              />
            }
            label="2+ Year of Experience"
            className="dark:border-pink-300/40 dark:hover:bg-pink-300/10"
          />
          <Tag
            icon={
              <GrLocation
                size={15}
                className="dark:text-orange-300 text-orange-400"
              />
            }
            label="Maharashtra, India"
            className="dark:border-orange-300/40 dark:hover:bg-orange-400/10"
          />
        </div>

        <div className="mt-4 text-gray-600 dark:text-gray-500 space-y-6 leading-relaxed text-sm md:text-base">
          <p>
            I&apos;m the developer who turns ideas into web experiences people
            enjoy using. My mission is to build applications that look great,
            load fast, and work for everyone.
          </p>
          <p>
            I&apos;m a 23-year-old CSE grad, and since beginning my programming
            journey in 2020, my curiosity has pushed me to dive deep into
            full-stack development, with a strong focus on accessibility,
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

        <div className="flex gap-3 mt-7 flex-wrap">
          <Button
            text="Get my Resume"
            icon={<MdOutlineCloudDownload size={18} />}
            href="/Sakshi_Jaiswal_Frontend_Developer.pdf"
            title="Get my Resume"
          />
          <Button
            text="Hire Me"
            icon={<HiArrowRight size={16} />}
            href="/tabs/contact"
            title="Work with me"
          />
        </div>
      </div>
    </div>
  );
}
