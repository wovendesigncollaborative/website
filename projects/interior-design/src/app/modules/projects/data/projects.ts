
export interface Project {
    id: string;
    src: string;
    name: string;
    slides: string[];
}

const PROJECTS_PHOTO_FOLDER = 'assets/img/projects';

const MADHUKAR: Project = {
    id: '1',
    src: `${PROJECTS_PHOTO_FOLDER}/madhukar/main.png`,
    name: 'Madhukar',
    slides: [
        `${PROJECTS_PHOTO_FOLDER}/madhukar/1.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/3.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/4.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/5.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/6.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/7.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/9.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/10.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/11.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/12.png`,
        `${PROJECTS_PHOTO_FOLDER}/madhukar/13A.png`,
    ]
}

const SUVEER: Project = {
    id: '2',
    src: `${PROJECTS_PHOTO_FOLDER}/suveer/main.png`,
    name: 'Suveer',
    slides: [`${PROJECTS_PHOTO_FOLDER}/suveer/1.png`,
    //`${PROJECTS_PHOTO_FOLDER}/suveer/1.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/2.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/3.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/4.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/5.png`,
    //`${PROJECTS_PHOTO_FOLDER}/suveer/6.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/7.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/8.png`,
    `${PROJECTS_PHOTO_FOLDER}/suveer/9.png`,
    ]
}

export const PROJECTS: Project[] = [MADHUKAR, SUVEER]