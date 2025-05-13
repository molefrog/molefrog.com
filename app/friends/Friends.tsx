"use client";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Grid";
import Image from "next/image";

interface Profile {
  website: string;
  name: string;
  bio: string;
  avatar?: string;
}

const profiles: Profile[] = [
  {
    website: "elu.sh",
    name: "Eleonora Drykina",
    bio: 'A creative developer with a fashion background and 2025 DEVINE program graduate, interested in WebGL, Three.js, full-stack frameworks, and finding creative solutions for "boring" problems.',
    avatar: `https://www.google.com/s2/favicons?domain=elu.sh&sz=128`,
  },
  {
    website: "soaniel.xyz",
    name: "Anna Liubimova",
    bio: "An interior architect and researcher based in Copenhagen, Denmark, curating interior projects, research, small-scale objects, and reflective writings.",
    avatar: `https://www.google.com/s2/favicons?domain=soaniel.xyz&sz=128`,
  },
  {
    website: "tikhon.io",
    name: "Tikhon Belousko",
    bio: "A designer and engineer in London specializing in product and full-stack design, with experience co-founding and building multiple startups.",
    avatar: `https://www.google.com/s2/favicons?domain=tikhon.io&sz=128`,
  },
  {
    website: "ethan-rubens.com",
    name: "Ethan Rubens",
    bio: "Designer, researcher, and creative technologist—self-described technical anthropologist and creative engineer with anthropology and studio art background, holding MA/MSc degrees in Innovation Design Engineering.",
    avatar: `https://www.google.com/s2/favicons?domain=ethan-rubens.com&sz=128`,
  },
  {
    website: "sashayaguza.com",
    name: "Sasha Yaguza",
    bio: "A multidisciplinary visual designer and art director specializing in editorial projects, brand identities, web design, and UI/UX work for hospitality, real estate, and publishing.",
    avatar: `https://www.google.com/s2/favicons?domain=sashayaguza.com&sz=128`,
  },
  {
    website: "geranin.xyz",
    name: "Andrey Geranin",
    bio: "Head of Product building, launching, and scaling digital products; recently led launches of pdf.net, resume.co, and contracts.net, with a background in product design and management.",
    avatar: `https://www.google.com/s2/favicons?domain=geranin.xyz&sz=128`,
  },
  {
    website: "jeetiss.vercel.app",
    name: "Dima Ivakhnenko",
    bio: "A personal page owner known as Dima Ivakhnenko, showcasing contact links and portfolio highlights.",
    avatar: `https://avatars2.githubusercontent.com/u/6726016?s=460&v=4`,
  },
  {
    website: "esafev.com",
    name: "Vlad Esafev",
    bio: 'Writer and blogger hosting essays such as "Burn Your Journals Out" and "Practicing the Art of Possession," with posts dating back to 2022 and updated as recently as May 2025.',
    avatar: `https://github.com/esafev/esafev/raw/main/me.jpg`,
  },
  {
    website: "katyavakulenko.art",
    name: "Katya Vakulenko",
    bio: 'Illustrator based in Moscow working independently on comics and exploring personal themes in her work, with a playful style described as "Art that feels like fizzy drinks."',
    avatar: `https://www.google.com/s2/favicons?domain=katyavakulenko.art&sz=128`,
  },
  {
    website: "blvdmitry.me",
    name: "Dmitry Belyaev",
    bio: "Principal front-end engineer based in Amsterdam, working on the design system and web platform at Booking.com; passionate about building user interfaces and dev tools that make complexity invisible through great developer and user experiences.",
    avatar: `https://www.google.com/s2/favicons?domain=blvdmitry.me&sz=128`,
  },
];

interface PreviewModalProps {
  profile: Profile | null;
  onClose: () => void;
}

function PreviewModal({ profile, onClose }: PreviewModalProps) {
  if (!profile) return null;

  return (
    <motion.div
      className="friends__overlay"
      onClick={onClose}
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
          duration: 0.5,
        }}
      >
        <button className="friends__close-button" onClick={onClose}>
          ×
        </button>
        <div className="friends__modal-name">{profile.name}</div>
        <div className="friends__modal-bio">{profile.bio}</div>
        <a
          href={`https://${profile.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="friends__website-button"
        >
          {profile.website}
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
            <motion.div
              layout
              className="friends__list"
              transition={{ layout: { duration: 0.8, ease: "easeInOut" } }}
            >
              {friendProfiles.map((item) => (
                <motion.div
                  key={item.website}
                  layout
                  layoutId={`item-${item.website}`}
                  className="friends__item"
                  onClick={() => handleItemClick(item)}
                  transition={{ duration: 0.5, type: "spring" }}
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
              ))}
            </motion.div>

            {preview && <PreviewModal profile={preview} onClose={handleClosePreview} />}
          </div>
        </LayoutGroup>
      </section>
    </Container>
  );
}
