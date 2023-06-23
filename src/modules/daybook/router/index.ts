

export default  {
    name: 'daybook',
    component: () => import('../layouts/DaybookLayout.vue'),
    children: [
        {
            path: '',
            name:'no-entry',
            component: () => import('./../views/NoEntrySelected.vue'),
        }, 
        {
            path: ':id',
            name: 'entry',
            component: () => import('./../views/EntryView.vue')
        }
    ]
}
// buenas, como estas? te escribia por que veo que ya paso el tiempo suficiente para sanar las cosas que sucedieron, creo que podemos volver a ser amigos, dejar la enemistad atras, ya no hay sentimientos de por medio que puedan volvernos a sentir mal no me gusta tener enemistad con nadie, creo que ya podemos arreglar diferencias y tratar de ser amigos, pues si sumerced quiere.