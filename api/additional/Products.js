const products = [
    {
        "__id": "CP-10-101",
        "name": "Cono La Peque",
        "description": "250gr de papas nativas + cremas a elección",
        "category": "Conos Personales",
        "price": 6
    },
    {
        "_id": "CP-10-102",
        "name": "Cono La Justa",
        "description": "300gr de papas nativas + cremas a elección",
        "category": "Conos Personales",
        "price": 8
    },
    {
        "_id": "CP-10-103",
        "name": "Cono La Rebosante",
        "description": "350gr de papas nativas + cremas a elección",
        "category": "Conos Personales",
        "price": 9
    },
    {
        "_id": "SN-20-101",
        "name": "Salchi Wanka",
        "description": "Salchicha + chorizo parrillero + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 16.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Wanka BBQ",
        "description": "Tiras de pollo + salsa BBQ + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 18.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Mollejitas",
        "description": "Mollejitas salteadas + mote + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 18.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Mixto",
        "description": "Alitas BBQ + tiras de pollo + salsa BBQ + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 20.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas Pachamanqueras",
        "description": "Alitas de pollo + salsa pachamanquera + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 20.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas BBQ",
        "description": "Alitas de pollo + salsa BBQ + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a eleección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas Acevichadas",
        "description": "Alitas de pollo + salsa acevichada + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas Búfalo",
        "description": "Alitas de pollo + salsa búfalo + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas Broaster",
        "description": "Alitas broaster + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas en Salsa Teriyaki",
        "description": "Alitas de pollo + salsa teriyaki + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas Hot",
        "description": "Alitas picantes + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas Mango Habanero",
        "description": "Alitas de pollo + salsa de mango habanero + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 22.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Alitas a la maracuyá",
        "description": "Alitas de pollo + salsa de maracuyá + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 23.9
    },
    {
        "_id": "SN-20-101",
        "name": "Snack Chaufa BBQ",
        "description": "Chaufa + tiras de pollo + salsa BBQ + papas nativas + chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Snacks",
        "price": 23.9
    },
    {
        "_id": "BX-30-101",
        "name": "Box Parrillero ",
        "description": "Carne de hamburguesa artesanal + pollo a la plancha + chorizo parrillero + salsa BBQ + papas nativas",
        "category": "Boxes",
        "price": 23.9
    },
    {
        "_id": "BX-30-102",
        "name": "Box Parrillero a lo Pobre",
        "description": "Carne de hamburguesa artesanal + pollo a la plancha + chorizo parrillero + plátano frito + huevo frito + papas nativas + salsa bbq",
        "category": "Boxes",
        "price": 25.9
    },
    {
        "_id": "BX-30-104",
        "name": "Box Anticuchero",
        "description": "Jugosos anticuchos de corazón + mote + papas nativas + cremas a elección",
        "category": "Boxes",
        "price": 22.9
    },
    {
        "_id": "BX-30-105",
        "name": "Box Anticuchero Mixto",
        "description": "Jugosos anticuchos de corazón + anticuchos de pollo + mote + papas nativas + cremas a elección.",
        "category": "Boxes",
        "price": 24.9
    },
    {
        "_id": "CB-40-101",
        "name": "Combo Indiv_idual",
        "description": "3 alitas de pollo (1 tipo de sabor) + papas nativas + 1 refresco de chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Combos",
        "price": 13.9
    },
    {
        "_id": "CB-40-102",
        "name": "Combo Dúo",
        "description": "6 alitas de pollo (2 tipos de sabores) + papas nativas + 2 refrescos de chicha morada, maracuyá o emoliente de 16 oz + cremas a elección",
        "category": "Combos",
        "price": 25.9
    },
    {
        "_id": "CB-40-103",
        "name": "Combo Familiar",
        "description": "15 alitas de pollo (3 tipos de sabores) + papas nativas + 4 refrescos de chicha o maracuyá de 16 oz + cremas a elección",
        "category": "Combos",
        "price": 59.9
    },
    {
        "_id": "CB-40-104",
        "name": "Combo Super Wanka",
        "description": "24 alitas de pollo (4 tipos de sabores) + papas nativas + 4 refrescos de chicha o maracuyá de 16 oz + cremas a elección",
        "category": "Combos",
        "price": 82.9
    },
    {
        "_id": "BG-50-101",
        "name": "Burger La Clásica",
        "description": "Hamburguesa de carne artesanal + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 13.9
    },
    {
        "_id": "BG-50-102",
        "name": "Burger La Cheese",
        "description": "Hamburguesa de carne artesanal + queso + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 14.9
    },
    {
        "_id": "BG-50-106",
        "name": "Burger La Parrillera",
        "description": "Hamburguesa de carne artesanal + chorizo + ají de casa+ papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 15.9
    },
    {
        "_id": "BG-50-103",
        "name": "Burger A lo Pobre",
        "description": "Hamburguesa de carne artesanal + plátano + huevo + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 16.9
    },
    {
        "_id": "BG-50-104",
        "name": "Burger La Royal",
        "description": "Hamburguesa de carne artesanal + huevo + queso + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 16.9
    },
    {
        "_id": "BG-50-105",
        "name": "Burger La Hawaiana",
        "description": "Hamburguesa de carne artesanal + piña + queso + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 16.9
    },
    {
        "_id": "BG-50-107",
        "name": "Burger La Bacon Cheese",
        "description": "Hamburguesa de carne artesanal + queso + tocino + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 16.9
    },
    {
        "_id": "BG-50-108",
        "name": "Burger Wanka BBQ",
        "description": "Hamburguesa de carne artesanal + tiras de pollo + salsas BBQ + papas nativas + tomate + lechuga",
        "category": "Hamburguesas",
        "price": 19.9
    },
    {
        "_id": "BG-50-108",
        "name": "Burger Super Wanka",
        "description": "Doble capa de Hamburguesa de carne artesanal + cebolla caramilizada + salsa secreta de la casa + tomate + lechuga.",
        "category": "Hamburguesas",
        "price": 23.9
    },




    {
        "_id": "BC-90-102",
        "name": "Infusión de Aniz",
        "category": "Bebidas ",
        "price": 2.5
    },
    {
        "_id": "BC-90-103",
        "name": "Infusión de Manzanilla",
        "category": "Bebidas ",
        "price": 2.5
    },
    {
        "_id": "BC-90-104",
        "name": "Infusión de Hierba Luisa",
        "category": "Bebidas ",
        "price": 2.5
    },
    {
        "_id": "BC-90-101",
        "name": "Emoliente",
        "category": "Bebidas ",
        "price": 3
    },
    {
        "_id": "BC-90-105",
        "name": "Café pasado",
        "category": "Bebidas ",
        "price": 3
    },
    {
        "_id": "BF-80-107",
        "name": "Agua",
        "category": "Bebidas ",
        "price": 2.5
    },
    {
        "_id": "BF-80-101",
        "name": "Chicha morada",
        "description": "16 oz",
        "category": "Bebidas ",
        "price": 3
    },
    {
        "_id": "BF-80-102",
        "name": "Maracuya ",
        "description": "16 oz",
        "category": "Bebidas ",
        "price": 3
    },
    {
        "_id": "BF-80-102",
        "name": "Guarana ",
        "description": "450ml",
        "category": "Bebidas ",
        "price": 3
    },
    {
        "_id": "BF-80-105",
        "name": "Sprite",
        "description": "500ml",
        "category": "Bebidas ",
        "price": 4
    },
    {
        "_id": "BF-80-106",
        "name": "Fanta",
        "description": "500ml",
        "category": "Bebidas ",
        "price": 4
    },
    {
        "_id": "BF-80-103",
        "name": "Inca Kola",
        "description": "600ml",
        "category": "Bebidas ",
        "price": 5
    },
    {
        "_id": "BF-80-104",
        "name": "Coca Cola",
        "description": "600ml",
        "category": "Bebidas ",
        "price": 5
    },
    {
        "_id": "BF-80-104",
        "name": "Inca Kola ",
        "description": "1L",
        "category": "Bebidas",
        "price": 9
    },
    {
        "_id": "BF-80-104",
        "name": "Coca Kola ",
        "description": "1L",
        "category": "Bebidas",
        "price": 9
    },
    {
        "_id": "BF-80-104",
        "name": "Inca Kola ",
        "description": "1.5L",
        "category": "Bebidas",
        "price": 12
    },
    {
        "_id": "BF-80-104",
        "name": "Coca Kola ",
        "description": "1.5L",
        "category": "Bebidas",
        "price": 12
    },
    {
        "_id": "BF-80-104",
        "name": "Inca Kola ",
        "description": "3L",
        "category": "Bebidas",
        "price": 17
    },
    {
        "_id": "BF-80-104",
        "name": "Coca Cola ",
        "description": "3L",
        "category": "Bebidas",
        "price": 17
    }
]

   module.exports = products;