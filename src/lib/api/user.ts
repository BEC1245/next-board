import { PrismaClient } from '@prisma/client'

// model Blog {
//     id        Int     @id @default(autoincrement())
//     title     String  @db.VarChar(255)
//     content   String
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
// }

interface createBlog {
    title: string,
    content: string,
}

const prisma = new PrismaClient()

export async function createBlog(blog: createBlog) {
    return await prisma.blog.create({
        data: blog
    }) 
}