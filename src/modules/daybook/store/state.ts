import type { State } from './../interfaces/interfaces.ts';


export default (): State => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Ex consequat consequat do dolore elit sunt tempor ipsum excepteur mollit et mollit eiusmod sint. Laboris laboris reprehenderit commodo dolor elit ad velit est. Velit fugiat proident veniam exercitation ullamco sint consequat tempor eiusmod ipsum aute ea officia minim. Consequat consectetur enim Lorem ea officia reprehenderit consectetur in sit. Commodo ea velit nisi magna commodo officia ad cupidatat ea et enim. In elit esse laboris officia reprehenderit cupidatat laborum voluptate eu laborum nisi ad magna aliqua.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Aliqua eu ad velit ea do est aliquip. Veniam mollit voluptate esse do Lorem ipsum deserunt. Nulla in labore eu ipsum incididunt qui officia proident adipisicing consequat. In est quis enim tempor amet fugiat ipsum fugiat qui.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1300,
            date: new Date().toDateString(),
            text: 'Pariatur dolore eiusmod excepteur laborum irure do est ea anim aliquip id proident fugiat. Enim deserunt Lorem enim cupidatat excepteur deserunt nostrud amet qui cillum culpa aliquip. Ut mollit labore minim non nisi cillum eu ex incididunt ullamco. Non do deserunt minim aute cupidatat fugiat et. Nostrud cupidatat do labore deserunt nulla ad dolor esse incididunt nisi id amet amet eu. Duis dolore commodo eu et fugiat laboris deserunt nisi culpa quis duis consequat sit laborum.',
            picture: null,
        },
    ],

});