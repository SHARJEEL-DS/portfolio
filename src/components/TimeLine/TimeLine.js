import React, { useEffect, useRef, useState } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        
I'm a  software engineer specializing in machine and deep learning technologies, driven by a passion for creating innovative solutions that push the boundaries of artificial intelligence. With a solid foundation in computer science and mathematics, I bring extensive expertise in developing and deploying cutting-edge algorithms and models to tackle complex real-world problems.
      </SectionText>
      <SectionText>
      My journey in machine learning began with a curiosity to understand how machines can learn and adapt from data, leading me to dive deep into neural networks, reinforcement learning, and natural language processing. Through hands-on experience and continuous learning, I've honed my skills in designing scalable and efficient systems that leverage the power of data to drive intelligent decision-making.
      </SectionText>
      <SectionText>
      I thrive in dynamic environments where collaboration and innovation are paramount, and I'm always eager to explore new technologies and methodologies to stay at the forefront of the field. Whether it's designing robust recommendation systems, optimizing neural network architectures, or deploying models in production environments, I'm committed to delivering solutions that make a meaningful impact.
      </SectionText>
      
    </Section>
  );
};

export default Timeline;
