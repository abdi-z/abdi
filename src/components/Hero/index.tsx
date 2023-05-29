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
        A Senior Software Engineer, with fascination for web dev and machine learning.
      </Heading>
      <Text textStyle="sectionHeading">Background</Text>
      <Text lineHeight={1.75} as="h2">
        Hey, my name is Abdul Rehman (/abdi/) I am a cs{" "}
        <s>graduate</s> survivor of the Comsats University, Islamabad in
        Pakistan. 
      </Text>


      <Text lineHeight={1.75} as="h2">
        Soon after my graduation, I began my professional journey at Systems, Ltd in September 2019. During my time there, which spanned a year, I had the opportunity to grow and learn extensively about .NET Core and its ecosystem. Systems, Ltd is a service-based company, and I primarily focused on developing robust banking applications.
      </Text>
      
      <Text lineHeight={1.75} as="h2">
      In August 2020, I joined Techlogix, where I worked on an exciting project called Campus On Cloud. This platform was designed to efficiently manage individuals within educational institutions. As part of the development team, I contributed to building and enhancing the student management system, helping institutions streamline their operations and improve overall efficiency. 
      </Text>
      
      <Text lineHeight={1.75} as="h2">
      Currently, I am employed as a Senior Software Engineer at Devsinc, starting from November 2021 until the present. At Devsinc, I have been fortunate to work on diverse client projects, each presenting unique challenges and opportunities. One notable project involves my role as a senior React and .NET engineer, where I am responsible for managing migrations, overseeing low-level code management, and designing high-level cloud architecture. This role has allowed me to demonstrate my leadership abilities and showcase my expertise in both front-end and back-end development.
      </Text>
      <Text textStyle="sectionHeading">Expertise</Text>
      <Text lineHeight={1.75} as="h2">
      In terms of my technical skills, I possess a wide range of expertise. On the backend, I am proficient in .NET Framework, .NET Core, NodeJS, Express, as well as various cloud platforms such as AWS, Azure, and GCP. Additionally, I have experience with tools and technologies like Entity Framework, Apache Kafka, and RabbitMQ. On the frontend side, I have a strong command over React, Redux, Angular, and UI libraries such as Material and Chakra UI. I am also well-versed in Webpack, Babel, Gatsby, NPM, React Router, and Jest for efficient development and testing. Moreover, I have practical knowledge of APIs (REST, GraphQL), AWS and Azure services, Agile methodologies like Scrum and Kanban, test-driven development (TDD), continuous integration and deployment (CI/CD), project management tools like JIRA, and containerization using Docker and Kubernetes. Git has been my go-to version control system throughout my career.
      </Text>
      <Text textStyle="sectionHeading">Final Year Project</Text>
      <Text lineHeight={1.75} as="h2">
      During my bachelor's program, I undertook a fascinating thesis project focused on Neural Style Transfer (NST) techniques. My team and I proposed an alternative approach to implementing a custom stylization extractor for NST, demonstrating our innovative thinking and problem-solving abilities.
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
