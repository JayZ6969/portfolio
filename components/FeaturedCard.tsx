import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

const classes = {
  Container: 'flex items-center justify-center w-full bg-[#CEE968] z-10',
  FeaturedContainer: 'flex flex-col min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] w-screen min-[1921px]:px-[4.164vw] min-[1921px]:py-[2.915vw] xl:px-20 xl:py-14 lg:px-16 lg:py-10 md:px-12 md:py-8 sm:px-10 min-[430px]:px-8 px-8 py-10 md:gap-8 gap-6',
  FeaturedHeader: 'border-b-2 border-black md:py-6 sm:py-4 pb-3 w-full font-inter font-bold tracking-tight text-black min-[1921px]:text-[3.54vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[430px]:text-[2.5rem] text-[2rem] leading-none',
  CardsContainer: 'flex flex-wrap gap-6 w-full',
  CardHeaderContainer: 'flex items-center xl:gap-4 lg:gap-3 gap-2 w-full',
  dot: 'xl:w-4 xl:h-4 lg:h-3 lg:w-3 h-2 w-2 bg-black rounded-full',
  CardHeader: 'font-inter font-semibold text-black min-[1921px]:text-[1.249vw] min-[1440px]:text-[1.5rem] xl:text-[1.25rem] text-[1rem] leading-none',
  Card: 'flex flex-col gap-6 md:w-[calc(50%-1.5rem)] w-full',
  ImageContainer: 'relative w-full pb-[100%] rounded-xl cursor-pointer', 
  CardImage: 'absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl overflow-hidden',
  Image: 'w-[80%] rounded-lg h-auto shadow-lg',
  CardImageHeader: 'absolute flex overflow-hidden w-[100vw] justify-center min-[1921px]:h-[4.997vw] xl:h-[6rem] md:h-[3.75rem] sm:h-[2.25rem] h-[1.875rem] text-[#CEE968] font-inter text-center font-bold leading-none tracking-tight min-[1921px]:text-[4.997vw] xl:text-8xl md:text-6xl sm:text-4xl text-3xl z-20 top-1/2 -translate-y-1/2 rounded-md',
  CardImageHeaderTagline: 'font-inter flex items-center justify-center h-full',
};

interface Project {
  title: string;
  imageSrc: StaticImageData;
  alt: string;
  headerText: string;
  link: string;
  cardImageBgColor: string;
}

interface FeaturedProps {
  header: string;
  projects: Project[];
}

const FeaturedCard: FC<FeaturedProps> = ({ header, projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
  };

  const isMdUp = useMediaQuery('(min-width: 768px)');

  const handleMouseEnter = (index: number) => {
    if (isMdUp) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (isMdUp) {
      setHoveredIndex(null);
    }
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={classes.Container} id='projects'>
      <div className={classes.FeaturedContainer}>
        <h1 className={classes.FeaturedHeader}>{header}</h1>
        <div className={classes.CardsContainer}>
          {projects.map((project, index) => (
            <div key={index} className={classes.Card}>
              <div className={classes.CardHeaderContainer}>
                <div className={classes.dot}></div>
                <h1 className={classes.CardHeader}>{project.title}</h1>
              </div>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={classes.ImageContainer}
                onClick={() => handleCardClick(project.link)}
              >
                <h1 className={` ${classes.CardImageHeader} ${index % 2 === 0 ? '-translate-x-1/2 md:left-full left-1/2' : 'translate-x-1/2 md:right-full right-1/2'}`}>
                  {project.headerText.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ y: "100%" }}
                      animate={hoveredIndex === index ? { y: "0" } : { y: "100%" }}
                      transition={{ ease: [0.22, 1, 0.36, 1], delay: letterIndex * 0.025 }}
                      className={classes.CardImageHeaderTagline}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h1>
                <div className={classes.CardImage} style={{ backgroundColor: project.cardImageBgColor }}>
                  <Image className={classes.Image} src={project.imageSrc} alt={project.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
