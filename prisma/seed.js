import {PrismaClient} from "@prisma/client"

const prisma=new PrismaClient()

const creatorID="6fd3b501-1c49-4119-8ff1-e816af25add4"

const movies=[

]

const main = async()=>{
    console.log("seeding movies..")
    for (const movie of movies){
        await prisma.movie.create({
            data:movie,
        })
        console.log(`created movie: ${movie.title}`)
    
    }
  console.log("done")
}

main().catch((err)=>{
    console.log(err);
    process.exit(1)
}).finally(async()=> {
    await prisma.$disconnect()
})