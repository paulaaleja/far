import { Colors } from "../constants/colors"
import accesorios from '../assets/images/accesorios.jpg'
import fragancias from '../assets/images/fragancias.jpg'
import makeup from '../assets/images/makeup.jpg'
import medicamentos from '../assets/images/medicamentos.jpg'
import perfumeria from '../assets/images/perfumeria.png'
import ventalibre from '../assets/images/ventalibre.jpg'

export const Categories = [
    {
        id: '1',
        title: 'Medicamentos',
        color: Colors.primary,
        image: medicamentos
    },

    {
        id: '2',
        title: 'Medicamentos Venta Libre',
        color: Colors.primary,
        image: ventalibre
    },

    {
        id: '3',
        title: 'Perfumeria',
        color: Colors.primary,
        image: perfumeria
    },

    {
        id: '4',
        title: 'Fragancias',
        color: Colors.primary,
        image: fragancias
    },

    {
        id: '5',
        title: 'Make Up',
        color: Colors.primary,
        image: makeup
    },

    {
        id: '6',
        title: 'Accesorios',
        color: Colors.primary,
        image: accesorios
    },
]