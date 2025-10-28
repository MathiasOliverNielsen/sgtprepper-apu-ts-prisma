import { prisma } from '../prisma.js';
export const getRecords = async (req, res) => {
    try {
        const data = await prisma.category.findMany({
            select: {
                title: true,
                slug: true
            }
        });
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch categorys' });
    }
};
export const getRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await prisma.category.findUnique({
            where: { id: Number(id) }
        });
        if (!data)
            res.status(404).json({ error: 'Category not found' });
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch category' });
    }
};
