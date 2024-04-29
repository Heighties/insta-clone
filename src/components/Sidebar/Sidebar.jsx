import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
    // Définition des éléments de la barre latérale
    const SideBarItems = [
        {
            icon: <AiFillHome size={25}/>, // Icône de la page d'accueil
            text: "Home", // Texte associé à la page d'accueil
            link: "/", // Lien vers la page d'accueil
        },
        {
            icon: <SearchLogo size={25}/>, // Icône de la recherche
            text: "Search", // Texte associé à la recherche
        },
        {
            icon: <NotificationsLogo size={25}/>, // Icône des notifications
            text: "Notifications", // Texte associé aux notifications
        },
        {
            icon: <CreatePostLogo size={25}/>, // Icône de création de publication
            text: "Create", // Texte associé à la création de publication
        },
        {
            icon: <Avatar size={"sm"} name="Heighties" src="profilepic.png"/>, // Icône du profil de l'utilisateur
            text: "Profile", // Texte associé au profil de l'utilisateur
            link: "/heighties", // Lien vers le profil de l'utilisateur
        },
    ];

    return (
        <Box 
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{base:2, md:4}}
        >
            <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
                {/* Logo Instagram sur les écrans larges */}
                <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor={"pointer"}>
                    <InstagramLogo />
                </Link>
                {/* Logo Instagram sur les écrans étroits */}
                <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}} cursor={"pointer"} borderRadius={6} 
                    _hover={{
                        bg:"whiteAlpha.200",
                    }}
                    w={10}>
                    <InstagramMobileLogo />
                </Link>
                {/* Navigation des éléments de la barre latérale */}
                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {SideBarItems.map((item, index) => (
                        <Tooltip
                            key={index}
                            hasArrow
                            label={item.text}
                            placement="right"
                            ml={1}
                            openDelay={500}
                            display={{base:"block", md:"none"}}
                        >
                            <Link 
                                display={"flex"} 
                                to={item.link || null}  // Lien vers la page associée à l'élément de la barre latérale
                                as={RouterLink} 
                                alignItems={"center"} 
                                gap={4} 
                                _hover={{bg:"whiteAlpha.400"}}
                                borderRadius={6}
                                p={2}
                                w={{base:10, md:"full"}}
                                justifyContent={{base:"center", md:"flex-start"}}
                            >
                                {item.icon}
                                <Box display={{base:"none", md:"block"}}>
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
                {/* Bouton de déconnexion */}
                <Tooltip
                    hasArrow
                    label={"Logout"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base:"block", md:"none"}}
                >
                    <Link 
                        display={"flex"} 
                        to={"/auth"}  
                        as={RouterLink} 
                        alignItems={"center"} 
                        gap={4} 
                        _hover={{bg:"whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base:10, md:"full"}}
                        justifyContent={{base:"center", md:"flex-start"}}
                        mt={"auto"} // Marge supérieure automatique pour aligner en bas
                    >
                        <BiLogOut size={25} /> {/* Icône de déconnexion */}
                        <Box display={{base:"none", md:"block"}}>
                            Logout
                        </Box>
                    </Link>
                </Tooltip>
            </Flex>
        </Box>
    );
}

export default Sidebar;
