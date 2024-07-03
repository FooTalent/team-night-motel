import React from 'react';
import { ChakraProvider, Box, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { Header } from "../header/Header";
import {Footer} from "../footer/Footer";

function Nosotros() {
  return (
    <>
    
    
      <Header />
      <Box p={4} className="custom-box">
        <VStack spacing={4} align="stretch">
          <Heading as="h1" fontsize="32px" textAlign="center">
            Sobre nosotros
          </Heading>
          <Box width="139.22px" height="4px" gap="4px" mx="auto">
          <Image src="/img/lines.png" alt="Lines" width="100%" height="100%" />
        </Box>
          <Text fontSize="14px" fontWeight="bold" fontFamily="heading">
            En Oceano Hotel, nos enorgullecemos de ofrecer una experiencia de lujo y confort en el corazón de la ciudad.
          </Text>
          <Text fontSize="14px" fontFamily="heading" >
            Nuestro compromiso con la excelencia se refleja en cada detalle, desde nuestras elegantes habitaciones y modernas instalaciones hasta el servicio personalizado que brindamos a cada huésped. Ya sea que viajes por negocios o placer, nuestro objetivo es hacer de tu estancia una experiencia memorable y placentera.
          </Text>
          <Heading as="h2" size="14px" textAlign="left" fontWeight="bold" fontFamily="heading">
            Valores
          </Heading>

          <Box display="flex" alignItems="center">
            <Image src="/img/Rectangle 25.png" alt="rectangle" width="2px" height="64px" marginRight="12px"/>
            <Text fontSize="12px" fontFamily="heading">
              Excelencia en el Servicio: Nos esforzamos por proporcionar un servicio impecable y atento, anticipándonos a las necesidades de nuestros huéspedes y superando sus expectativas en cada interacción.
            </Text>
          </Box>
        
        <Box display="flex" alignItems="center">
          <Image src="/img/Rectangle 25.png" alt="rectangle" width="2px" height="64px" marginRight="12px"/>
          <Text fontSize="12px" fontFamily="heading">
            Calidad y Confort: Nos dedicamos a mantener los más altos estándares de calidad en nuestras instalaciones y servicios, asegurando un ambiente cómodo y sofisticado para todos nuestros huéspedes.
          </Text>
        </Box>
       
        <Box display="flex" alignItems="center">
          <Image src="/img/Rectangle 25.png" alt="rectangle" width="3px" height="64px" marginRight="12px"/>
          <Text fontSize="12px" fontFamily="heading">
            Integridad y Transparencia: Operamos con los más altos niveles de integridad y transparencia, asegurando la confianza y satisfacción de nuestros huéspedes y socios.
          </Text>
        </Box>
        </VStack>
      </Box>
      
    <Footer/>
    </>
  );
}

export default Nosotros;


