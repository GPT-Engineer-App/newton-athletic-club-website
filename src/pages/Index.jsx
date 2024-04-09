import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaFutbol, FaRunning, FaSwimmer, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Newton Mexican American Athletic Club
          </Heading>
          <Text fontSize="xl">Promoting athletics and community for Mexican Americans in Newton</Text>
        </Container>
      </Box>

      {/* About section */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg">The Newton Mexican American Athletic Club is dedicated to providing opportunities for Mexican American youth to participate in sports and develop their athletic abilities. We offer programs in soccer, track and field, and swimming.</Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNvY2NlciUyMHRlYW18ZW58MHx8fHwxNzEyNjc4NTMyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Youth soccer team" borderRadius="md" />
        </SimpleGrid>
      </Container>

      {/* Programs section */}
      <Container maxW="container.lg" py={20}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Our Programs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign="center">
            <Icon as={FaFutbol} w={12} h={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              Soccer
            </Heading>
            <Text>Our soccer program offers training and competitive opportunities for boys and girls ages 6-18.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaRunning} w={12} h={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              Track &amp; Field
            </Heading>
            <Text>We provide coaching in sprints, distance running, jumps and throws for athletes of all levels.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaSwimmer} w={12} h={12} color="blue.500" mb={4} />
            <Heading as="h3" size="lg" mb={4}>
              Swimming
            </Heading>
            <Text>Our swim team welcomes swimmers ages 8 and up to train and compete year-round.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* CTA section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Join the Club!
          </Heading>
          <Text fontSize="lg" mb={8}>
            Become a part of our athletic community. Contact us to learn more.
          </Text>
          <Link href="#" bg="blue.500" color="white" px={8} py={3} borderRadius="md" fontWeight="bold" _hover={{ bg: "blue.600" }}>
            Contact Us
          </Link>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10}>
        <Container maxW="container.lg">
          <Stack direction="row" spacing={6} justify="center" mb={6}>
            <Link href="#">
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
          </Stack>
          <Text textAlign="center">&copy; {new Date().getFullYear()} Newton Mexican American Athletic Club</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
