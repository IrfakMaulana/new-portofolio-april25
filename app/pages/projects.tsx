"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { PiGitForkBold } from "react-icons/pi";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";

const GITHUB_USERNAME = "IrfakMaulana";

const ThreeDCard = () => {
  const [repoStats, setRepoStats] = useState<{
    [key: string]: { stars: number; forks: number };
  }>({});

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const repoData = await Promise.all(
          dummyData.filter((item) => item.repo).map(async (item) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${item.repo}`
            );
            const data = await response.json();
            return {
              repo: item.repo,
              stars: data.stargazers_count,
              forks: data.forks_count
            };
          })
        );

        const stats = repoData.reduce(
          (acc: { [key: string]: { stars: number; forks: number } }, curr) => {
            acc[curr.repo] = { stars: curr.stars, forks: curr.forks };
            return acc;
          },
          {}
        );

        setRepoStats(stats);
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      }
    };

    fetchRepoStats();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20" id="projects">
      <p className="text-sm font-medium tracking-[.18em] uppercase text-indigo-200">Portfolio</p><h2 className="mt-3 text-3xl md:text-4xl font-bold text-left pb-10 text-white">Proyek Pilihan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dummyData.map((item, index) => (
          <div key={index}>
            <CardContainer className="inter-var font-medium">
              <CardBody className="bg-white/[.03] relative group/card border-white/10 w-auto h-[390px] rounded-2xl p-5 border flex flex-col justify-between transition-colors hover:border-indigo-300/40">
                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-100 dark:text-white"
                >
                  {item.title}
                </CardItem>

                {/* Description with Clamp */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm mt-2 line-clamp-3 hover:line-clamp-none transition-all duration-300"
                >
                  {item.description}
                </CardItem>

                {/* Image with Fixed Height */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height={1000}
                    width={1000}
                    className="h-40 w-full object-cover rounded-xl transition duration-500 group-hover/card:scale-[1.02]"
                    alt={`Tampilan proyek ${item.title}`}
                  />
                </CardItem>

                {/* Stats and Button */}
                <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                  {item.projectType !== "work-project" && (
                    <div className="flex gap-4">
                      {repoStats[item.repo]?.stars !== 0 && (
                        <span className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-base" />
                          {repoStats[item.repo]?.stars || 0}
                        </span>
                      )}

                      {repoStats[item.repo]?.forks !== 0 && (
                        <span className="flex items-center gap-1">
                          <PiGitForkBold className="text-gray-300 text-base" />
                          {repoStats[item.repo]?.forks || 0}
                        </span>
                      )}
                    </div>
                  )}

                  {item.projectType === "work-project" && !item.repo ? (
                    <span className="text-xs text-zinc-500">Proyek internal</span>
                  ) : <Link href={item.link} target="_blank">
                    <ButtonsCard>
                      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          View Project →
                        </span>
                      </button>
                    </ButtonsCard>
                  </Link>}
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeDCard;

const dummyData = [
  {
    title: "Platform E-commerce Sumber Wangi",
    description: "Platform e-commerce perusahaan yang dikembangkan hingga tahap deployment.",
    image: "/assets/project/project-5.PNG",
    link: "https://sumberwangi.id",
    repo: "",
    projectType: ""
  },
  {
    title: "Sumberwangi HR App",
    description: "Aplikasi HR internal dengan fitur pemantauan lokasi kendaraan secara real-time.",
    image: "/assets/project/project-6.PNG",
    link: "",
    repo: "",
    projectType: "work-project"
  },
  {
    title: "coffee shop website (landing page)",
    description:
      "simple landing page (UKM website) selling coffee online, using a WhatsApp ordering system",
    image: "/assets/project/project-1.png",
    link: "https://github.com/IrfakMaulana/kedai-website",
    repo: "",
    projectType: "work-project"
  },
  {
    title: "E-commerce website",
    description:
      "online shopping website, using laravel + react inertia, integrated with payment gateway",
    image: "/assets/project/project-2.png",
    link: "https://github.com/IrfakMaulana/simple-ecommerce-react-inertia",
    repo: "",
    projectType: "work-project"
  },
  {
    title: "Anime Metadata Website",
    description:
      "list showing metadata, anime list (trailers, episodes, on-going anime, trending), integrated by API from jikan.moe",
    image: "/assets/project/project-3.png",
    link: "https://github.com/IrfakMaulana/larafak-anime",
    repo: "",
    projectType: "work-project"
  },
  {
    title: "Game top-up website",
    description:
      "This platform provides top-up services for many popular games, both for mobile and PC games",
    image: "/assets/project/project-4.png",
    link: "https://github.com/IrfakMaulana/topup",
    repo: "",
    projectType: "work-project"
  }
];
