import prisma from "database";

prisma.book.create({
    data: {
        title: 'Awesome Book',
        author: 'Awesome Author',
        publisher: 'Awesome Publisher',
        purchaseDate: new Date('2020-01-01'),
      },
})