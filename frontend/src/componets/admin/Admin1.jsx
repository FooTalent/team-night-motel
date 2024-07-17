import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  VStack,
  Text,
  Img,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";

import { FooterAdmin } from "../footer/FooterAdmin";

import { HabitacionCard } from "./HabitacionCard";
import { HabitacionContext } from "../../context/HabitacionContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import Header from "./Header";
import { FaPlusCircle } from "react-icons/fa";

export const Admin1 = () => {
  const { rooms, imgRooms } = useContext(HabitacionContext);
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  const isMobile = useBreakpointValue({ base: true, sm: false, md: false });
  // console.log(rooms);
  // console.log(imgRooms);

  return (
    <>
      {/* Contenido Principal */}
      <Header imgUrl={imgUrl} />
      <Box bg="primary.500" p={4} mb={4}>
        {/* Título de Habitaciones */}
        <Heading
          as="h2"
          size="lg"
          mb={4}
          color="var(--secondary-500, #FFDE9D)"
          fontSize="28px"
        >
          Habitaciones
        </Heading>

        {/* División para las 2 imágenes */}
        <VStack spacing={4} mb={4} flexDirection={"row"} justify={"center"}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica.png" alt="Imagen 1" />
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica1.png" alt="Imagen 2" />
          </Box>
          <Box bg={'status.positive'} w={'150px'}textAlign={'center'}borderRadius={'25px'} p={2}>
          <Link to={`/admin/nueva/`}>
            <Text color={"primary.500"}fontWeight={700}>Nuevo</Text>
            <Icon as={FaPlusCircle} w={6} h={6} color={"primary.500"} />
          </Link>
        </Box>
        </VStack>
       
        <Center
          bg="varios.200"
          flexDirection={["column", "column", "row"]}
          display={"flex"}
          flexWrap={"wrap"}
        >
          
          {/* División con imágenes y botones de editar */}
          {rooms.map((hab) => {
            const imagenObj = imgRooms.find(
              (img) => img.room_type_id === hab.id
            );
            const imagUrl = imagenObj ? imagenObj.image : "";
            return <HabitacionCard key={hab.id} hab={hab} imagen={imagUrl} />;
          })}
        </Center>
      </Box>

      {isMobile ? (
        <Box position={"fixed"} bottom="0">
          <FooterAdmin />
        </Box>
      ) : (
        <Footer />
      )}
    </>
  );
};