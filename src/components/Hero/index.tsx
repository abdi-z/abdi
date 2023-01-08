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
import { SiGithub, SiTwitter, SiLinkedin, SiMaildotru, SiAdobeacrobatreader } from "react-icons/si";

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
        A Software Engineer, studying Computer Science
      </Heading>
      <Text lineHeight={1.75} as="h2">
        Hey, my name is Abdul Rehman (/abdi/) I am in my fourth year{" "}
        <s>studying</s> surviving at the Comsats University, Islamabad in
        Pakistan. I have over 7 months of total work experience, with major
        contributions in enterprise and startup teams.
      </Text>
      <Text lineHeight={1.75} as="h2">
        For Fall 2022, I'm currently working in the domain of IB-AR (Image
        Based-Artistic Rendering) to implement a custom Neural Style Transfer as
        part of my Research & Development project at my university.
      </Text>
      <Text textStyle="sectionHeading">Experience</Text>
      <Text lineHeight={1.75} as="h2">
        I've had the pleasure to work at{" "}
        <strong>
          <a href="https://www.techlogix.com/" target="_none">
            Techlogix
          </a>
        </strong>
        , where I primarily worked on the backend services of the product Campus
        On Cloud (CoC) of their subsidiary, Almusnet. Moreover, I got to work at{" "}
        <strong>
          <a href="https://www.nexusberry.com/" target="_none">
            NexusBerry
          </a>
        </strong>
        , where I got to contribute to diverse client projects including ERPs,
        CRMs.
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
        <NextLink href={LINKEDIN_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiLinkedin />}>
            LinkedIn
          </Button>
        </NextLink>
        <NextLink href={LINKEDIN_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiMaildotru />}>
            Email
          </Button>
        </NextLink>
        <NextLink href={LINKEDIN_PROFILE} passHref={true}>
          <Button size="sm" as="a" leftIcon={<SiAdobeacrobatreader />}>
            Resume
          </Button>
        </NextLink>
      </HStack>
    </VStack>
  );
};
