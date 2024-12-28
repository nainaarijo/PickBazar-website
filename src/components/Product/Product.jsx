import React, { useState } from 'react'
import AppleImg from "../../assests/nims_apple_fruit.webp";
import BlueberriesImg from "../../assests/Fruits-And-Nuts-Full-Meal-Bottle-Front.webp";
import DatesImg from "../../assests/Fruits-And-Nuts-Full-Meal-Packet.webp";
import GreenBeansImg from "../../assests/khong_guan_orange_cream.webp";
import MangoesImg from "../../assests/Jammie_Dodgers.webp";
import PearsImg from "../../assests/Ready-Salted-Crisps.webp";
import RedCherriesImg from "../../assests/Hill_Biscuits_Mini_Pack_Mix_.webp";
import StrawberryImg from "../../assests/Fruits-And-Nuts-Full-Meal-Packet.webp";
import BabySpinachImg from "../../assests/Ready-Salted-Crisps.webp";
import BrusselsSproutsImg from "../../assests/Roysters_6pk.webp";
import CornImg from "../../assests/allegro_bbq_sauce.webp";
import CucumberImg from "../../assests/artiach_filipino.webp";
import GreenbeansImg from "../../assests/asain_zing_chili.webp";
import GreenLimesImg from "../../assests/asain_zing_chili.webp";
import MiniPeppersImg from "../../assests/badia_pinenuts.webp";
import PeeledCarrotsImg from "../../assests/bak_kuh_teh.webp";
import VeggiePlatterImg from "../../assests/bambino_macaroni.webp";
import YellowLimesImg from "../../assests/bambino_premium_pasta.webp";
import SignatureSalmonImg from "../../assests/batchelors_pasta_sauce.webp";
import CodfilletImg from "../../assests/belmont_custard_cream.webp";
import SwordfishImg from "../../assests/borges-pasta.webp";
import HalibutImg from "../../assests/cacao_cashew.webp";
import TilapiaFilletImg from "../../assests/cadbury-dairy-milk-reclose.webp";
import BeefImg from "../../assests/cadbury_dairy_milk_crispello.webp";
import SlicedturkeybreastImg from "../../assests/cadbury_zip.webp";
import ChickenthighImg from "../../assests/chings_mixvegsoup.webp";
import ChickenbrestImg from "../../assests/cintan_chicken.webp";
import StickImg from "../../assests/cloetta.webp";
import BelmontcustardcreamImg from "../../assests/cloetta.webp";
import CrawforddigestivesImg from "../../assests/cloetta_sprinkle.webp";
import CrawfordshortieImg from "../../assests/cottage_bbq.webp";
import HillBiscuitsImg from "../../assests/crawford_digestives.webp";
import JammieDodgersImg from "../../assests/crawford_shortie.webp";
import JulischeeseImg from "../../assests/crisps-puzzle.webp";
import KhongguanImg from "../../assests/crunch_hot_chili_sauce.webp";
import KhongguanpremiumImg from "../../assests/dashi_chicken_corn.webp";
import LotusbiscoffImg from "../../assests/doritos.webp";
import ArtiachfiliImg from "../../assests/felix_chili_sauce.webp";
import Grain_freeImg from "../../assests/fisher_peanut.webp";
import HillsscienceImg from "../../assests/heinz_chili_sauce.webp";
import InstinctImg from "../../assests/hersheys_kisses.webp";
import NaturalImg from "../../assests/indomie_special_chicken.webp";
import PrescriptionImg from "../../assests/ivory_cashewnut.webp";
import Pro_dietImg from "../../assests/jaybee_whole_cashewnut.webp";
import Purina_proImg from "../../assests/julis_cheese_crackers.webp";
import Dog_food_blackImg from "../../assests/kame_stir_fry.webp";
import Dog_food_black_hawkImg from "../../assests/khong_guan_orange_cream.webp";
import DogfoodblackhawkImg from "../../assests/khong_guan_premium_marie.webp";
import Air_freshner_acana_ozmoImg from "../../assests/kirkland_mixed_nuts.webp";
import Air_freshner_air_wick_essentialImg from "../../assests/knorr_pastaria.webp";
import Air_freshner_ambipurImg from "../../assests/knorr_thai_vegetable.webp";
import Air_freshner_febreze_air_boraImg from "../../assests/koka_curry.webp";
import Air_freshner_febreze_air_effectsImg from "../../assests/kosmos_bbq.webp";
import Air_freshner_febreze_air_hawaiianImg from "../../assests/lays-kettle-cooked.webp";
import Air_freshner_sc_johnson_gladeImg from "../../assests/lays-sour-cream.webp";
import Air_freshner_sc_johnson_glade_cleanImg from "../../assests/lays_baked.webp";
import Cleaning_supply_astonishImg from "../../assests/lays_sea_salted.webp";
import Cleaning_supply_bonaImg from "../../assests/lotus_biscoff.webp";
import Cleaning_supply_everImg from "../../assests/m&m_funsize.webp";
import Cleaning_supply_glitz_steelImg from "../../assests/maggi_bbq.webp";
import { Drawer, Box } from '@mui/material';
import {Button, Typography, List, ListItemButton, ListItemText, Card, ListItemIcon, CardContent, Grid, CardMedia, Modal, IconButton, AccordionSummary, AccordionDetails, Accordion, } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { useDispatch } from 'react-redux'
// import {Addtocart } from '../../components/slice/Add-Cart/Contact';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TemporaryDrawer from '../../components/SideDrawer';;




const dummydata = [
    {
        id: 1,
        name: "Apples",
        Image: AppleImg,
        Price: 1.60,
        category: "Fruit",
    },
    {
        id: 2,
        name: "Blueberries",
        Image: BlueberriesImg,
        Price: 3.00,
        category: "Fruit",
    },
    // {
    //     id: 3,
    //     name: "Clementines",
    //     Image: ClementinesImg,
    //     Price: 2.50,
    //     category: "Fruit",
    // },
    {
        id: 4,
        name: "Dates",
        Image: DatesImg,
        Price: 8.00,
        category: "Fruit",
    },
    {
        id: 5,
        name: "GreenBeans",
        Image: GreenBeansImg,
        Price: 1.20,
        category: "Fruit",
    },
    {
        id: 6,
        name: "Mangoes",
        Image: MangoesImg,
        Price: 2.50,
        category: "Fruit",
    },
    {
        id: 7,
        name: "Pears",
        Image: PearsImg,
        Price: 3.50,
        category: "Fruit",
    },
    {
        id: 8,
        name: "RedCherries",
        Image: RedCherriesImg,
        Price: 1.80,
        category: "Fruit",
    },
    {
        id: 9,
        name: "Strawberry",
        Image: StrawberryImg,
        Price: 8.00,
        category: "Fruit",
    },
    {
        id: 10,
        name: "BabySpinach",
        Image: BabySpinachImg,
        Price: 0.60,
        category: "Fruit",
    },
    {
        id: 11,
        name: "BrusselsSprouts",
        Image: BrusselsSproutsImg,
        Price: 0.60,
        category: "Fruit",
    },
    {
        id: 12,
        name: "Corn",
        Image: CornImg,
        Price: 4.00,
        category: "Fruit",
    },
    {
        id: 13,
        name: "Cucumber",
        Image: CucumberImg,
        Price: 4.00,
        category: "Fruit",
    },
    {
        id: 14,
        name: "Greenbeans",
        Image: GreenbeansImg,
        Price: 4.00,
    },
    {
        id: 15,
        name: "GreenLimes",
        Image: GreenLimesImg,
        Price: 1.50,
        category: "Fruit",
    },
    {
        id: 16,
        name: "MiniPeppers",
        Image: MiniPeppersImg,
        Price: 5.00,
        category: "Fruit",
    },
    {
        id: 17,
        name: "PeeledCarrots",
        Image: PeeledCarrotsImg,
        Price: 2.20,
        category: "Fruit",
    },
    {
        id: 18,
        name: "VeggiePlatter",
        Image: VeggiePlatterImg,
        Price: 3.20,
        category: "Fruit",
    },
    {
        id: 19,
        name: "YellowLimes",
        Image: YellowLimesImg,
        Price: 1.20,
        category: "Fruit",
    },
    {
        id: 20,
        name: "SignatureSalmon",
        Image: SignatureSalmonImg,
        Price: 4.95,
        category: "Meat",
    },
    {
        id: 21,
        name: "Codfillet",
        Image: CodfilletImg,
        Price: 7.50,
        category: "Meat",
    },
    {
        id: 22,
        name: "Swordfish",
        Image: SwordfishImg,
        Price: 7.50,
        category: "Meat",
    },
    {
        id: 23,
        name: "Halibut",
        Image: HalibutImg,
        Price: 12.00,
        category: "Meat",
    },
    {
        id: 24,
        name: "TilapiaFillet",
        Image: TilapiaFilletImg,
        Price: 7.89,
        category: "Meat",
    },
    {
        id: 25,
        name: "Beef",
        Image: BeefImg,
        Price: 6.00,
        category: "Meat",
    },
    {
        id: 26,
        name: "Slicedturkeybreast",
        Image: SlicedturkeybreastImg,
        Price: 7.50,
        category: "Meat",
    },
    {
        id: 27,
        name: "Chickenthigh",
        Image: ChickenthighImg,
        Price: 7.89,
        category: "Meat",
    },
    {
        id: 28,
        name: "Chickenbrest",
        Image: ChickenbrestImg,
        Price: 9.00,
        category: "Meat",
    },
    {
        id: 29,
        name: "StickImg",
        Image: StickImg,
        Price: 12.00,
        category: "Meat",
    },
    {
        id: 30,
        name: "Belmontcustardcream",
        Image: BelmontcustardcreamImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 31,
        name: "Crawforddigestives",
        Image: CrawforddigestivesImg,
        Price: 6.50,
        category: "Snacks",
    },
    {
        id: 32,
        name: "Crawfordshortie",
        Image: CrawfordshortieImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 33,
        name: "HillBiscuits",
        Image: HillBiscuitsImg,
        Price: 7.50,
        category: "Snacks",
    },
    {
        id: 34,
        name: "JammieDodgers",
        Image: JammieDodgersImg,
        Price: 7.00,
        category: "Snacks",
    },
    {
        id: 35,
        name: "Julischeese",
        Image: JulischeeseImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 36,
        name: "Khongguan",
        Image: KhongguanImg,
        Price: 5.00,
        category: "Snacks",
    },
    {
        id: 37,
        name: "Khongguanpremium",
        Image: KhongguanpremiumImg,
        Price: 6.00,
        category: "Snacks",
    },
    {
        id: 38,
        name: "Lotusbiscoff",
        Image: LotusbiscoffImg,
        Price: 7.50,
        category: "Snacks",
    },
    {
        id: 39,
        name: "Artiachfili",
        Image: ArtiachfiliImg,
        Price: 4.00,
        category: "Snacks",
    },
    {
        id: 40,
        name: "Grain_free",
        Image: Grain_freeImg,
        Price: 25.59,
        category: "Pet Care",
    },
    {
        id: 41,
        name: "HillsscienceImg",
        Image: HillsscienceImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 42,
        name: "Instinct",
        Image: InstinctImg,
        Price: 18.00,
        category: "Pet Care",
    },
    {
        id: 43,
        name: "Natural",
        Image: NaturalImg,
        Price: 14.00,
        category: "Pet Care",
    },
    {
        id: 44,
        name: "Prescription",
        Image: PrescriptionImg,
        Price: 16.00,
        category: "Pet Care",
    },
    {
        id: 45,
        name: "Pro_diet",
        Image: Pro_dietImg,
        Price: 18.00,
        category: "Pet Care",
    },
    {
        id: 46,
        name: "Purina_pro",
        Image: Purina_proImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 47,
        name: "Dog_food_black",
        Image: Dog_food_blackImg,
        Price: 24.00,
        category: "Pet Care",
    },
    {
        id: 48,
        name: "Dog_food_black_hawk",
        Image: Dog_food_black_hawkImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 49,
        name: "Dogfoodblackhawk",
        Image: DogfoodblackhawkImg,
        Price: 25.00,
        category: "Pet Care",
    },
    {
        id: 50,
        name: "Air_freshner_acana_ozmo",
        Image: Air_freshner_acana_ozmoImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 51,
        name: "DogfoodblackAir_freshner_air_wick_essential",
        Image: Air_freshner_air_wick_essentialImg,
        Price: 20.00,
        category: "Home & Cleaning",
    },
    {
        id: 52,
        name: "Air_freshner_ambipur",
        Image: Air_freshner_ambipurImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 53,
        name: "Air_freshner_febreze_air_bora",
        Image: Air_freshner_febreze_air_boraImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 54,
        name: "Air_freshner_febreze_air_effects",
        Image: Air_freshner_febreze_air_effectsImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 55,
        name: "Air_freshner_febreze_air_hawaiian",
        Image: Air_freshner_febreze_air_hawaiianImg,
        Price: 18.00,
        category: "Home & Cleaning",
    },
    {
        id: 56,
        name: "Air_freshner_sc_johnson_glade",
        Image: Air_freshner_sc_johnson_gladeImg,
        Price: 18.00,
        category: "Home & Cleaning",
    },
    {
        id: 57,
        name: "Air_freshner_sc_johnson_glade_clean",
        Image: Air_freshner_sc_johnson_glade_cleanImg,
        Price: 18.00,
        category: "Home & Cleaning",
    },
    {
        id: 58,
        name: "Cleaning_supply_astonish",
        Image: Cleaning_supply_astonishImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 59,
        name: "Cleaning_supply_bonaImg",
        Image: Cleaning_supply_bonaImg,
        Price: 15.00,
        category: "Home & Cleaning",
    },
    {
        id: 60,
        name: "Cleaning_supply_ever",
        Image: Cleaning_supply_everImg,
        Price: 10.00,
        category: "Home & Cleaning",
    },
    {
        id: 61,
        name: "Cleaning_supply_glitz_steel",
        Image: Cleaning_supply_glitz_steelImg,
        Price: 10.00,
        category: "Home & Cleaning",
    }
]

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const dispatch = useDispatch();



    const [show, setShow] = React.useState(false);

    const toggleDrawere = (newOpen) => () => {
        setShow(newOpen);
    };


    
    const categories = [
        { name: 'Fruits & Vegetables', icon: <LocalFloristIcon />, key: 'Fruit' },
        { name: 'Meat', icon: <LunchDiningIcon />, key: 'Meat' },
        { name: 'Snacks', icon: <ShoppingBasketIcon />, key: 'Snacks' },
        { name: 'Pet Care', icon: <PetsIcon />, key: 'Pet Care' },
        { name: 'Home & Cleaning', icon: <HomeIcon />, key: 'Home & Cleaning' },
    ];

    const handleCategorySelect = (key) => {
        setSelectedCategory(key);
    };
   
    const toggleDrawer = (open) => {
        console.log(`Drawer state: ${open}`);
        setIsDrawerOpen(open);
    };

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        // dispatch(Addtocart(product));
        alert(`${product.name} added to cart!`);
    };

    const filteredProducts = selectedCategory
        ? dummydata.filter((product) => product.category === selectedCategory)
        : dummydata;

   
    const truncateName = (name) => {
        return name.length > 10 ? name.slice(0, 10) + '...' : name;
    };

    return (
        <Box display="flex" gap={2} sx={{
            marginTop: "5px",
        }}>
     
            <Box>
                <List>
                    {categories.map((category) => (
                        <Accordion key={category.key} disableGutters elevation={0} square>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${category.key}-content`}
                                id={`${category.key}-header`}
                            >
                                <ListItemIcon>{category.icon}</ListItemIcon>
                                <ListItemText primary={category.name} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <List disablePadding>
                                    <ListItemButton onClick={() => handleCategorySelect(category.key)}>
                                        <ListItemText primary={`${category.name}`} />
                                    </ListItemButton>

                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </List>
            </Box>

            {/* Product Grid */}
            <Grid container spacing={2}>
                {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}> {/* 4 cards in a row */}
                        <Card sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: 'none' }}>
                            {/* Product Image */}
                            <CardMedia
                                component="img"
                                height="180"
                                image={product.Image}
                                alt={product.name}
                                sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', objectFit: 'contain' }}
                                onClick={() => handleCardClick(product)} // Opens the modal on image click
                            />

                            {/* Discount Badge */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '8px',
                                    backgroundColor: '#FFD700',
                                    color: 'white',
                                    borderRadius: '4px',
                                    padding: '2px 8px',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {product.discount ? `${product.discount}% OFF` : ''}
                            </Box>

                            {/* Card Content */}
                            <CardContent sx={{ padding: '16px' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '4px' }}>
                                    {product.weight}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    {truncateName(product.name)}
                                </Typography>

                                {/* Price Section */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                                    {product.oldPrice && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textDecoration: 'line-through',
                                                color: '#9e9e9e',
                                            }}
                                        >
                                            ${product.oldPrice.toFixed(2)}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '18px',
                                            color: '#4caf50',
                                        }}
                                    >
                                        ${product.Price.toFixed(2)}
                                    </Typography>
                                </Box>
                            </CardContent>

                            {/* Action Buttons */}
                            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#4caf50',
                                        color: 'white',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#43a047',
                                        },
                                        marginLeft: "auto", // Aligns the button to the right
                                    }}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    🛒 Cart
                                </Button>
                            </Box>

                        </Card>

                    </Grid>
                ))}
            </Grid>

            {/* Modal for Product Details */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                    }}
                >
                    {selectedProduct && (
                        <>
                            {/* Product Image */}
                            <CardMedia
                                component="img"
                                image={selectedProduct.Image}
                                alt={selectedProduct.name}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    objectFit: "contain",
                                    borderRadius: 2,
                                }}
                            />

                            {/* Product Details */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {selectedProduct.name}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {selectedProduct.description ||
                                        "Discover the perfect addition to your daily needs with our premium-quality product."}
                                </Typography>

                                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", color: "primary.main", mr: 1 }}
                                    >
                                        ${selectedProduct.Price.toFixed(2)}
                                    </Typography>
                                    {selectedProduct.originalPrice && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textDecoration: "line-through",
                                                color: "text.secondary",
                                            }}
                                        >
                                            ${selectedProduct.originalPrice.toFixed(2)}
                                        </Typography>
                                    )}
                                </Box>

                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    {selectedProduct.quantity} pieces available
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                  
                                    {/* <IconButton onClick={() => (dispatch(faviratecard(selectedProduct)))} color="error" >
                                        <FavoriteIcon />
                                       
                                    </IconButton> */}

                                    <Button
                                        variant="contained"
                                        startIcon={<AddShoppingCartIcon />}
                                        onClick={() => handleAddToCart(selectedProduct)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>

            {/* Drawer */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 250,
                        p: 2,
                    }}
                    role="presentation"
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Favorite Items
                    </Typography>
                  
                    <Typography variant="body2">You can add favourite item here!</Typography>
                </Box>
            </Drawer>

         
            <TemporaryDrawer show={show} toggleDrawere={toggleDrawere} />
        </Box>
    );
};

export default Products;




