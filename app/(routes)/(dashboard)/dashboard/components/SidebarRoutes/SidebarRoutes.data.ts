import { Calendar, Car, Heart, Settings, ClipboardList, ListCheck, ListChecks } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Autos Disponibles",
        href: "/dashboard",
    },
    {
        icon: Calendar,
        label: "Mis Reservas",
        href: "/reserves",
    },
    {
        icon: Heart,
        label: "Favoritos",
        href: "/loved-cars",
    },

];

export const dataAdminSidebar = [
    {
        icon: ListChecks,
        label: "Gestion de Autos",
        href: "dashboard/admin/cars-manager",
    },
    {
        icon: ClipboardList,
        label: "Reservas Registradas",
        href: "dashboard/admin/reservations",
    },
];