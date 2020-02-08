
export interface Project {
    id: string;
    src: string;
    name: string;
    slides: string[];
}

const PROJECTS_PHOTO_FOLDER = 'assets/img/projects';

const MADHUKAR: Project = {
    id: '1',
    src: `${PROJECTS_PHOTO_FOLDER}/madhukar/cover`,
    name: 'MADHUKAR RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/madhukar/cover`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/1`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/T1`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/3`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/4`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/5`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/T2`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/6`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/T3`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/7`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/9`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/10`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/11`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/12`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/13`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/14`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/15`,
    ]
}

const SUVEER: Project = {
    id: '2',
    src: `${PROJECTS_PHOTO_FOLDER}/suveer/cover`,
    name: 'HEGDE RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/suveer/cover`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/T1`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/2`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/3`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/4`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/T2`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/5`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/T3`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/6`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/7`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/8`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/9`,
    ]
}

const KRISHNA: Project = {
    id: '3',
    src: `${PROJECTS_PHOTO_FOLDER}/krishna/cover`,
    name: 'VAASTHU RESIDENCE',
    slides: [
        //`${PROJECTS_PHOTO_FOLDER}/krishna/1`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/2`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/3`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/T1`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/4`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/T2`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/5`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/T3`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/6`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/7`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/9`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/10`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/11`,
    ]
}

const ALEX: Project = {
    id: '4',
    src: `${PROJECTS_PHOTO_FOLDER}/alex/cover`,
    name: 'HEXAGON HOME',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/alex/cover`,
        `${PROJECTS_PHOTO_FOLDER}/alex/T1`,
        `${PROJECTS_PHOTO_FOLDER}/alex/1`,
        `${PROJECTS_PHOTO_FOLDER}/alex/T2`,
    ]
}

const GEETHA: Project = {
    id: '5',
    src: `${PROJECTS_PHOTO_FOLDER}/geetha/cover`,
    name: 'VERNACULAR RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/geetha/cover`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/T1`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/2`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/T2`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/3`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/4`,
    ]
}

const NARESH: Project = {
    id: '6',
    src: `${PROJECTS_PHOTO_FOLDER}/naresh/cover`,
    name: 'HOME FOR THE CHOWTAS',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/naresh/cover`,
        `${PROJECTS_PHOTO_FOLDER}/naresh/T1`,
        `${PROJECTS_PHOTO_FOLDER}/naresh/T2`,
    ]
}

const OFFICE: Project = {
    id: '7',
    src: `${PROJECTS_PHOTO_FOLDER}/office/cover`,
    name: 'WDC OFFICE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/office/cover`,
        `${PROJECTS_PHOTO_FOLDER}/office/T1`,
        `${PROJECTS_PHOTO_FOLDER}/office/2`,
        `${PROJECTS_PHOTO_FOLDER}/office/3`,
        `${PROJECTS_PHOTO_FOLDER}/office/T2`,
    ]
}

const TROPICAL: Project = {
    id: '8',
    src: `${PROJECTS_PHOTO_FOLDER}/tropical/cover`,
    name: 'TROPICAL INTERIORS',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/tropical/cover`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/T1`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/1`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/9`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/T2`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/3`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/4`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/6`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/7`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/8`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/2`,

    ]
}


export const PROJECTS: Project[] = [MADHUKAR, SUVEER, KRISHNA, TROPICAL, GEETHA, OFFICE, NARESH, ALEX];