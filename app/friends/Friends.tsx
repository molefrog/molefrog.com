"use client";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import Image from "next/image";
import clsx from "clsx";
import { ArrowTopRight, XMark } from "@/components/icons";
import { useClickAway } from "@uidotdev/usehooks";
import { useHotkeys } from "react-hotkeys-hook";

import ethanRubens from "@/public/friends/ethan-rubens.png";
import tikhonBelousko from "@/public/friends/tikhon-belousko.svg";
import katyaVakulenko from "@/public/friends/katya-vakulenko.jpg";
import annaLiubimova from "@/public/friends/anna-liubimova.jpg";
import sergeKazakov from "@/public/friends/serge-kazakov.png";

interface Profile {
  website: string;
  name: string;
  bio: string;
  avatar?: string;
}

const profiles: Profile[] = [
  {
    website: "kazaimazai.com",
    name: "Serge Kazakov",
    bio: "Serge is a software engineer, independent contractor, digital nomad (not exactly), investment enthusiast, and techie. Currently based in Lisbon.",
    avatar: sergeKazakov.src,
  },
  {
    website: "elu.sh",
    name: "Eleonora Drykina",
    bio: "A creative developer with a fashion background and 2025 DEVINE program graduate, working with WebGL, Three.js, full-stack frameworks",
    avatar: `https://www.google.com/s2/favicons?domain=elu.sh&sz=128`,
  },
  {
    website: "soaniel.xyz",
    name: "Anna Liubimova",
    bio: "An interior architect and researcher based in Copenhagen, Denmark, curating interior projects, research, small-scale objects, and reflective writings.",
    avatar: annaLiubimova.src,
  },
  {
    website: "tikhon.io",
    name: "Tikhon Belousko",
    bio: "Designer, engineer and former co-founder of resume.io. Based in London.",
    avatar: tikhonBelousko.src,
  },
  {
    website: "ethan-rubens.com",
    name: "Ethan Rubens",
    bio: "Anthropologist turned product designer. Examines culture to build empathetic tools, custom hardware, and immersive digital interactions.",
    avatar: ethanRubens.src,
  },
  {
    website: "sashayaguza.com",
    name: "Sasha Yaguza",
    bio: "A multidisciplinary visual designer and art director specializing in editorial projects, brand identities, web design, and UI/UX work",
    avatar: `https://www.google.com/s2/favicons?domain=sashayaguza.com&sz=128`,
  },
  {
    website: "geranin.xyz",
    name: "Andrey Geranin",
    bio: "Head of Product building, launching, and scaling digital products such as pdf.net, resume.co, and contracts.net",
    avatar: `https://www.google.com/s2/favicons?domain=geranin.xyz&sz=128`,
  },
  {
    website: "jeetiss.vercel.app",
    name: "Dima Ivakhnenko",
    bio: "Frontend tooling magician and maintainer of react-pdf. Experienced tree-shaker.",
    avatar: `https://avatars2.githubusercontent.com/u/6726016?s=460&v=4`,
  },
  {
    website: "esafev.com",
    name: "Vlad Esafev",
    bio: "Aspiring design engineer. Minimalist.",
    avatar: `https://github.com/esafev/esafev/raw/main/me.jpg`,
  },
  {
    website: "katyavakulenko.art",
    name: "Katya Vakulenko",
    bio: "Katya is an illustrator based in Tbilisi, Georgia. She takes joy in exploring ways to express conflicting emotions by bringing vibrant energy to her pieces and experimenting with visual techniques.",
    avatar: katyaVakulenko.src,
  },
  {
    website: "blvdmitry.me",
    name: "Dmitry Belyaev",
    bio: "Principal front-end engineer based in Amsterdam, working on the design system and web platform at Booking.com. Creator of Reshaped.so design system.",
    avatar: `https://www.google.com/s2/favicons?domain=blvdmitry.me&sz=128`,
  },
  {
    website: "kemal.earth",
    name: "Kemal",
    bio: "Kemal is an earth based design engineer who enjoys building things on (and for) the web.",
    avatar: `https://www.google.com/s2/favicons?domain=kemal.earth&sz=128`,
  },
];

interface PreviewModalProps {
  profile: Profile | null;
  onClose: () => void;
}

function PreviewModal({ profile, onClose }: PreviewModalProps) {
  const ref = useClickAway(() => {
    onClose();
  });

  // Add ESC key shortcut to close the modal
  useHotkeys("esc", () => onClose());

  if (!profile) return null;

  return (
    <motion.div
      className="fixed sm:absolute inset-0 bg-white/70 z-10 backdrop-blur-sm flex items-center sm:items-start justify-center sm:pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-96 bg-white shadow-lg rounded-xl z-20 m-2"
        layout
        layoutId={`item-${profile.website}`}
        transition={{
          type: "spring",
          duration: 0.4,
          bounce: 0.25,
        }}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <motion.div className="relative p-3" layout>
          <button
            className="absolute top-2.5 right-2.5 w-7 h-7 flex appearance-none rounded-full bg-ds-gray-100 border-none items-center justify-center cursor-pointer transition-colors p-0 hover:bg-ds-gray-200"
            onClick={onClose}
          >
            <XMark className="w-4 h-4" strokeWidth={2} />
          </button>
          <div className="text-ds-base font-medium mb-2 px-1.5 flex items-center gap-2.5">
            <div className="shrink-0 rounded-sm overflow-hidden flex items-center justify-center">
              <Image
                src={profile.avatar || ""}
                alt={`${profile.name} avatar`}
                width={18}
                height={18}
              />
            </div>
            {profile.name}
          </div>
          <div className="text-ds-sm text-ds-gray-600 mb-5 px-1.5">{profile.bio}</div>
          <a
            href={`https://${profile.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-1.5 bg-ds-gray-100 rounded-lg text-center no-underline text-ds-gray-800 font-ds-mono text-sm font-medium uppercase transition-colors hover:bg-ds-gray-200"
          >
            {profile.website}
            <ArrowTopRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Friends() {
  const [preview, setPreview] = useState<Profile | null>(null);
  const [friendProfiles, setFriendProfiles] = useState<Profile[]>(profiles);

  useEffect(() => {
    // Shuffle profiles on mount
    const shuffled = [...profiles].sort(() => Math.random() - 0.5);
    setFriendProfiles(shuffled);
  }, []);

  const handleItemClick = (item: Profile) => setPreview(item);
  const handleClosePreview = () => setPreview(null);

  return (
    <Container placement="inner">
      <section className="mb-12 md:mb-36 font-[family-name:var(--font-inter)]">
        <h1 className="text-2xl leading-10 md:text-3xl md:leading-12 font-medium font-serif tracking-tight text-center mb-2">
          Talented Humans
        </h1>
        <div className="text-md text-ds-gray-500 text-center max-w-xl mx-auto mb-8 md:mb-4 md:text-balance">
          If you liked my website, please take a look at what these folks are doing. They are good
          people.
        </div>

        <LayoutGroup>
          <div className="relative py-4 px-1 sm:py-8 sm:px-4">
            <div className="flex flex-wrap justify-center gap-2.5">
              {friendProfiles.map((item) => {
                const isActive = item.website === preview?.website;

                return (
                  <motion.div
                    key={item.website}
                    layout
                    className={clsx("select-none bg-ds-gray-100 rounded-lg w-full sm:w-auto", {
                      "opacity-0": isActive,
                    })}
                    onClick={() => handleItemClick(item)}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <motion.button
                      className="p-0 relative bg-white border border-ds-gray-200 rounded-lg cursor-pointer overflow-hidden transition-colors shadow-sm select-none text-left block w-full hover:bg-ds-gray-100"
                      layoutId={`item-${item.website}`}
                      layout
                      transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
                      type="button"
                      whileTap={{ y: 2 }}
                    >
                      <motion.div
                        className="flex items-center p-1.5"
                        layout
                        animate={{ opacity: isActive ? 0 : 1 }}
                        transition={{
                          opacity: { duration: 0.2, ease: "easeOut", delay: 0.1 },
                          layout: { duration: 0.3 },
                        }}
                      >
                        {/* Avatar */}
                        <div className="shrink-0 rounded overflow-hidden">
                          <Image
                            src={item.avatar || ""}
                            alt={`${item.name} avatar`}
                            width={44}
                            height={44}
                          />
                        </div>

                        <div className="ml-3.5 mr-3">
                          <div className="font-ds-mono font-medium text-xs leading-tight mt-1 uppercase whitespace-nowrap overflow-hidden text-ellipsis text-ds-gray-800">
                            {item.website}
                          </div>
                          <div className="text-ds-xs font-medium text-ds-gray-400">{item.name}</div>
                        </div>
                      </motion.div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {preview && <PreviewModal profile={preview} onClose={handleClosePreview} />}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </section>
    </Container>
  );
}
