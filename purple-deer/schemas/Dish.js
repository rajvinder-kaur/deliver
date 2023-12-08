export default{
    name: 'dish',
    title:'Dish',
    type:'document',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name',
            validation:(Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'short_description',
            validation: (Rule) => Rule.max(200),

        },
        {
         name:'price',
         type:'number',
         title:'Price',
         validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: (Rule) => Rule.required(),

        },
    ]
}