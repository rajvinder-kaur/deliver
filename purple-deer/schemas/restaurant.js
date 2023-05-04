export default{
    name:'restaurant',
    title:"resturant",
    type:"document",
    fields:[
        {
            name:'name',
            type:'string',
            title:'restaurant name',
            validation: (Rule)=> Rule.required(),
            
        },
        {
            name:'short_description',
            type:'string',
            title:'short_description',
            validation: (Rule) => Rule.max(200),
            
        },
        {
            name:'image',
            type:'image',
            title:'image ',
            
        },{
            name: 'lat',
            type:'number',
            title:"lattitude"
        },{
            name: 'long',
            type:'number',
            title:"longitude"
        },
        {
            name:'address',
            type:'string',
            title:'resturant address',
            validation: (Rule) => Rule.required(),
            
        },
        {
            name:'rating',
            type:'number',
            title:'Ratings',
            validation: (Rule) => Rule.required()
            .min(1)
            .max(5)
            .error("please enter value between 1 to 5"),
            
        },
    ]
}