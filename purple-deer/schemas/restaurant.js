export default{
    name:'resturant',
    title:"document",
    type:"resturant",
    fields:[
        {
            name:'name',
            type:'string',
            title:'restaurant name',
            validation: (Rule) => Rule.required(),
            
        }
        {
            name:'short_description',
            type:'string',
            title:'short_description',
            validation: (Rule) => Rule.required(),
            
        },
        {
            name:'image',
            type:'image',
            title:'image',
            
        },
        {
            name:'lat',
            type:'number',
            title:'Lattitude of resturant',
            
        },
        {
            name:'long',
            type:'number',
            title:'Lattitude of the resturant',
            
        },
        {
            name:'address',
            type:'number',
            title:'resturant address',
            validation: (Rule) => Rule.required(),
            
        },
    ]
}