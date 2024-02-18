import {
  Button,
  chakra,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  SiGithub,
  SiTwitter,
  SiLinkedin,
  SiMaildotru,
  SiAdobeacrobatreader,
} from "react-icons/si";

import avatarUrl from "../../../public/avatar.png";
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "../../constants";

const AvatarImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "layout",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

export const Hero = () => {
  return (
    <VStack spacing={4} alignItems="flex-start">
      <AvatarImage
        src={avatarUrl}
        alt="Memoji of me"
        priority
        quality={100}
        height={81}
        width={64}
        placeholder="blur"
      />
      <Heading size="lg" as="h1">
        A Software Engineer, with fascination for web dev and computer vision.
      </Heading>
      <Text textStyle="sectionHeading">Background</Text>
      <Text lineHeight={1.75} as="h2">
        Hey, my name is Abdul Rehman (/abdi/) I am a cs{" "}
        <s>graduate</s> survivor of Comsats University, Islamabad in
        Pakistan. 
      </Text>

      <Text lineHeight={1.75} as="h2">
        Since, the start of 2023, I have been working at {" "}
        <strong>
          <a href="https://devsinc.com/" target="_none">
            Devsinc
          </a>
        </strong>
        , as an Associate Software Engineer. Since my time here, I have contributed to the development and scaling of two projects including an e-learning platform as well as a data exchange platform.
        </Text>

      <Text lineHeight={1.75} as="h2">
        In the summer of 2022, I got the opportunity to intern at {" "}
        <strong>
          <a href="https://www.techlogix.com/" target="_none">
            Techlogix
          </a>
        </strong>
        , where I primarily worked on the backend services of the product Campus
        On Cloud (CoC) of their subsidiary, Almusnet.
        </Text>

      <Text textStyle="sectionHeading">Final Year Project</Text>
      <Text lineHeight={1.75} as="h2">
      During my bachelor's program, I undertook a fascinating thesis project focused on Neural Style Transfer (NST) technique. My team and I proposed an alternative implementation for style extraction for NST algorithm. Our alternative implementation of NST proved to produce more "painting" like output images. 
      <strong>
      <a href="https://gitfront.io/r/abdi/DA3f9YQ6Qtcf/IB-AR-Neural-Style-Transfers/" target="_none">
        Read More.
      </a>
      </strong>
      </Text>

      <Text lineHeight={1.75} as="h2">
        Whether if it's a hackathon, party or a job offer, I'm always looking
        for new opportunities. Want to connect? Reach out below!
      </Text>

      <HStack spacing={4}>
        <NextLink href={GITHUB_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiGithub />}>
            GitHub
          </Button>
        </NextLink>
        {/* <NextLink href={LINKEDIN_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiLinkedin />}>
            LinkedIn
          </Button>
        </NextLink> */}
        {/* <NextLink href={""} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiMaildotru />}>
            <a href="mailto:yestisabdi@gmail.com?subject = A cool opportunity&body = Yo, abdi">
              Email
            </a>
          </Button>
        </NextLink> */}
        <NextLink href={"/updated-resume.pdf"} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiAdobeacrobatreader />}>
            Resume
          </Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
