
export interface Project {
    id: string;
    src: string;
    name: string;
    slides: string[];
}

const PROJECTS_PHOTO_FOLDER = 'assets/img/projects';

const MADHUKAR: Project = {
    id: '1',
    src: `${PROJECTS_PHOTO_FOLDER}/madhukar/cover.jpg`,
    name: 'MADHUKAR RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/madhukar/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/4.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/5.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/T2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/6.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/T3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/7.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/9.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/10.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/11.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/12.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/13.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/14.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/15.jpg`,
    ]
}

const SUVEER: Project = {
    id: '2',
    src: `${PROJECTS_PHOTO_FOLDER}/suveer/cover.jpg`,
    name: 'HEGDE RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/suveer/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/4.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/T2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/5.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/T3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/6.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/7.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/8.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/suveer/9.jpg`,
    ]
}

const KRISHNA: Project = {
    id: '3',
    src: `${PROJECTS_PHOTO_FOLDER}/krishna/cover.jpg`,
    name: 'VAASTHU RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/krishna/1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/T1a.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/4.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/T2a.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/5.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/T3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/6.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/7.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/9.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/10.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/krishna/11.jpg`,
    ]
}

const ALEX: Project = {
    id: '4',
    src: `${PROJECTS_PHOTO_FOLDER}/alex/cover.jpg`,
    name: 'HEXAGON HOME',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/alex/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/alex/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/alex/1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/alex/T2.jpg`,
    ]
}

const GEETHA: Project = {
    id: '5',
    src: `${PROJECTS_PHOTO_FOLDER}/geetha/cover.jpg`,
    name: 'VERNACULAR RESIDENCE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/geetha/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/T2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/geetha/4.jpg`,
    ]
}

const NARESH: Project = {
    id: '6',
    src: `${PROJECTS_PHOTO_FOLDER}/naresh/cover.jpg`,
    name: 'HOME FOR THE CHOWTAS',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/naresh/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/naresh/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/naresh/T2.jpg`,
    ]
}

const OFFICE: Project = {
    id: '7',
    src: `${PROJECTS_PHOTO_FOLDER}/office/cover.jpg`,
    name: 'WDC OFFICE',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/office/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/office/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/office/2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/office/3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/office/T2.jpg`,
    ]
}

const TROPICAL: Project = {
    id: '8',
    src: `${PROJECTS_PHOTO_FOLDER}/tropical/cover.jpg`,
    name: 'TROPICAL INTERIORS',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/tropical/cover.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/T1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/1.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/9.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/T2.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/3.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/4.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/6.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/7.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/8.jpg`,
        `${PROJECTS_PHOTO_FOLDER}/tropical/2.jpg`,

    ]
}


export const PROJECTS: Project[] = [MADHUKAR, SUVEER, KRISHNA, TROPICAL, GEETHA, OFFICE, NARESH, ALEX];