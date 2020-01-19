export interface Competency {
    name: string,
    title: string,
    description: string,
    src: string
}

const regionalPlanning: Competency = {
    name: "Regional Planning ",
    title: "",
    description: "Planning goes beyond administrative boundaries. WDC has an expert team that understands the socio-economic, environmental and logistical linkages that make a settlement. With an integrated vision in mind, strategic plans are made in a cross-disciplinary approach that tackles socio-economic, ecological and other relevant challenges that work towards increased quality of life. ",
    src: 'assets/img/regional-planning.jpg',

}

const urbanDesign: Competency = {
    name: "Urban Design",
    title: 'Urban Commons that speak to the public.',
    description: "As cities get denser, and the value of space soars, innovative solutions are required to give the city back to its people. Our design team understands the complexities of urbanism, and design city and neighbourhood scale spaces accordingly. We design safe and interactive public space design with a focus on human-nature balance. ",
    src: 'assets/img/urban-design.jpg',
}

const ruralDevelopment: Competency = {

    name: "Rural development",
    title: "Balancing rurality and development.",
    description: "Breaking away from a compartmentalised outlook, we approach development contextually, to bring sustainable livelihood opportunity to rural areas, while preserving the environment and building a cohesive and empowered community. Redefining the meaning of “development” WDC shifts the focus towards increased quality of life and empowerment so as to dissuade unsustainable migration and increasing community ownership. With a future-centric, integrated and multi-disciplinary approach, we enable communities to direct their own growth. ",
    src: 'assets/img/rural-development.jpg',

}

const environmentalPlanning: Competency = {

    name: "Environmental Planning",
    title: "",
    description: "Environmental management ensures that existing forest systems, wildlife corridors, watershed and ecological patterns are balanced with the needs and wants of a human settlement. Generating a comprehensive plan for the whole region (or just a site), identifying the different types of eco-systems and the complexity of their inter-relationship and developing a toolkit for implementation. The plan shall identify lands for different types of plantations and ecosystems in line with the natural system that the region hosts. The toolkit shall enable local community and implementation partners to choose appropriate species and planting, irrigation and maintenance techniques for maximum benefit- both ecologically and agriculturally.",
    src: 'assets/img/environmental-planning.jpg',
}

const socialDevelopment: Competency = {

    name: "Social Development",
    title: "",
    description: "WDC works with a cross-disciplinary team and a multi-pronged approach to create a vision for community and break it down to achievable actions. Understanding that a society is built on individual aspirations, WDC works together with the community, to bring a holistic development of their lives and habitat.",
    src: 'assets/img/social-development.jpg',

}

export const competencies: Competency[] =
    [
        regionalPlanning,
        urbanDesign,
        ruralDevelopment,
        environmentalPlanning,
        socialDevelopment
    ]