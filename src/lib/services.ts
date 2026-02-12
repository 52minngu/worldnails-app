export type Service = {
    service_id: string;
    service_name: string;
    category: string;
    base_price: number;
};

export const services: Service[] = [
    { service_id: "acrylic_full_set", service_name: "Acrylic Full Set", category: "Acrylic", base_price: 45 },
    { service_id: "acrylic_fill", service_name: "Acrylic Fill In", category: "Acrylic", base_price: 35 },

    { service_id: "gel_color_full_set", service_name: "Gel Color Full Set", category: "Gel Color", base_price: 60 },
    { service_id: "gel_color_fill", service_name: "Gel Color Fill In", category: "Gel Color", base_price: 50 },

    { service_id: "pink_white_full_set", service_name: "Pink & White Full Set", category: "Pink & White", base_price: 65 },
    { service_id: "pink_white_fill", service_name: "Pink & White Fill In", category: "Pink & White", base_price: 55 },

    { service_id: "dip_pink_white", service_name: "Dip Pink & White", category: "Dipping Powder", base_price: 60 },
    { service_id: "dip_color", service_name: "Dip Color", category: "Dipping Powder", base_price: 50 },
    { service_id: "dip_with_manicure", service_name: "Dip With Manicure Add-On", category: "Dipping Powder", base_price: 15 },

    { service_id: "manicure", service_name: "Manicure", category: "Regular", base_price: 25 },
    { service_id: "pedicure", service_name: "Pedicure", category: "Regular", base_price: 35 },
    { service_id: "deluxe_pedicure", service_name: "Deluxe Pedicure", category: "Regular", base_price: 50 },
    { service_id: "gel_polish", service_name: "Gel Polish", category: "Regular", base_price: 30 },
    { service_id: "manicure_gel", service_name: "Manicure With Gel", category: "Regular", base_price: 40 },
    { service_id: "pedicure_gel", service_name: "Pedicure With Gel", category: "Regular", base_price: 50 },

    { service_id: "kids_manicure", service_name: "Kids Manicure", category: "Kids", base_price: 20 },
    { service_id: "kids_pedicure", service_name: "Kids Pedicure", category: "Kids", base_price: 28 },

    { service_id: "wax_eyebrows", service_name: "Wax Eyebrows", category: "Waxing", base_price: 12 },
    { service_id: "wax_lip", service_name: "Wax Lip", category: "Waxing", base_price: 12 },
    { service_id: "wax_chin", service_name: "Wax Chin", category: "Waxing", base_price: 15 },
    { service_id: "wax_full_face", service_name: "Wax Full Face", category: "Waxing", base_price: 40 },
];