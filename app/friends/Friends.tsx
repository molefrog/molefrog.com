"use client";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Grid";
import Image from "next/image";
import clsx from "clsx";
import { ArrowTopRight } from "@/components/icons";
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
      className="friends__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="friends__modal"
        layout
        layoutId={`item-${profile.website}`}
        transition={{
          type: "spring",
          duration: 0.35,
          bounce: 0.3,
        }}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <button className="friends__close-button" onClick={onClose}>
          ×
        </button>
        <div className="friends__modal-name">
          <div className="friends__modal-avatar">
            <Image
              src={profile.avatar || ""}
              alt={`${profile.name} avatar`}
              width={18}
              height={18}
            />
          </div>
          {profile.name}
        </div>
        <div className="friends__modal-bio">{profile.bio}</div>
        <a
          href={`https://${profile.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="friends__website-button"
        >
          {profile.website}
          <ArrowTopRight className="friends__button-icon" />
        </a>
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
      <section className="friends">
        <h1 className="friends__header">Talented Humans</h1>
        <div className="friends__intro">
          If you liked my website, please take a look at what these folks are doing. They are good
          people.
        </div>

        <LayoutGroup>
          <div className="friends__container">
            <div className="friends__list">
              {friendProfiles.map((item) => {
                const isActive = item.website === preview?.website;

                return (
                  <motion.div
                    key={item.website}
                    layout
                    className={clsx("friends__item", {
                      "friends__item--active": isActive,
                    })}
                    onClick={() => handleItemClick(item)}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <motion.button
                      className="friends__item-inner"
                      layoutId={`item-${item.website}`}
                      layout
                      transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
                      type="button"
                      whileTap={{ y: 2 }}
                    >
                      <motion.div
                        className="friends__item-content"
                        animate={{ opacity: isActive ? 0 : 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Avatar */}
                        <div className="friends__avatar">
                          <Image
                            src={item.avatar || ""}
                            alt={`${item.name} avatar`}
                            width={44}
                            height={44}
                          />
                        </div>

                        <div className="friends__info">
                          <div className="friends__website">{item.website}</div>
                          <div className="friends__name">{item.name}</div>
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
