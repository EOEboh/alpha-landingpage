/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import clients from 'assets/images/clients.png';

// Animate on scroll library
import AOS from 'aos';


const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, [])
  return (
    <section id="clients" sx={styles.section} data-aos="zoom-in-down">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Company who also worked us"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
        />
        <Flex as="figure" sx={styles.illustration}>
          <Image src={clients} alt="clients" />
        </Flex>
      </Container>
    </section>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [3, null, null, 0],
  },
};
