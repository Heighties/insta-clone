import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
  // Déclaration de l'état pour gérer le mode de connexion (connexion ou inscription)
  const [isLogin, setIsLogin] = useState(true);

  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();

  // Déclaration de l'état pour les champs de formulaire (email, mot de passe, confirmation de mot de passe)
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Fonction pour gérer l'authentification (connexion ou inscription)
  const handleAuth = () => {
    // Vérification si tous les champs sont remplis
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    // Redirection vers la page d'accueil
    navigate("/");
  };

  return (
    <>
      {/* Formulaire d'authentification */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          {/* Logo Instagram */}
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          {/* Champ de saisie pour l'email */}
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          {/* Champ de saisie pour le mot de passe */}
          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {/* Champ de saisie pour la confirmation de mot de passe (visible seulement lors de l'inscription) */}
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              fontSize={14}
              type="password"
            />
          ) : null}
          {/* Bouton pour la connexion ou l'inscription */}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          {/* Séparateur "OR" */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* Connexion avec Google */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx={2} color={"blue.200"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* Lien pour changer entre connexion et inscription */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.200"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
