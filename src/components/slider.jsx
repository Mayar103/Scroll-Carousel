import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/Card.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    image:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-01.png",
    title: "Digital Experience",
    description:
      "We craft digital experiences that resonate and inspire through innovative design and technology.",
  },
  {
    image:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-02.png",
    title: "Creative Solutions",
    description:
      "Our creative solutions blend artistry with functionality to deliver memorable brand experiences.",
  },
  {
    image:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-03.png",
    title: "Brand Innovation",
    description:
      "We push boundaries and explore new possibilities to help brands stand out in the digital landscape.",
  },
  {
    image:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-04.png",
    title: "Future Forward",
    description:
      "Embracing emerging technologies to create forward-thinking solutions for tomorrow's challenges.",
  },
  {
    image:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-05.png",
    title: "Outburst of Screens",
    description:
      "An eruption of digital panels, wires, and fragments tears through the desert silence in a spectacular explosion.",
  },
  {
    image:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-06.png",
    title: "Twister of Sheets",
    description:
      "A whirlwind of tangled wires and flying sheets twists through a barren yard, captured mid-motion.",
  },
];

export default function ScrollSyncedCarousel() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.to(sectionRef.current, {
      translateX: "-66.666%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.scrollSectionContainer}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          {cards.map((card, i) => (
            <div className={styles.scrollSection} key={i}>
              <div className={styles.card}>
                <div className={styles.cardImageContainer}>
                  <img
                    className={styles.cardImage}
                    src={card.image}
                    alt={card.title}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardHeader}>{card.title}</h2>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
