export default{
    name: 'category',
    title:'category',
    type:'document',
    fields: [
        {
            name:"name",
            type:'string',
            title:'Name',
            validation: (Rule)=> Rule.required(),
        },
        {
            name:"image",
            type:"image",
            title:'Image',
            validation: (Rule)=> Rule.required(),
        }
    ]
}