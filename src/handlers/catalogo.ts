import prisma from '../db';

export const createCatalogo = async (req, res) => {
  try {
    const created = await prisma.catalogo.create({
      data: {
        name: req.body.name,
        descrip: req.body.name,
        front: {
          connect: {
            id: req.body.frontId,
          },
        },
      },
    });

    return res.json({ data: created });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getOneCatalogo = async (req, res) => {
  try {
    const catalogo = await prisma.catalogo.findUnique({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ data: catalogo });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getCatalogos = async (req, res) => {
  try {
    const catalogos = await prisma.catalogo.findMany();

    return res.json({ data: catalogos });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteCatalogo = async (req, res) => {
  try {
    const deleted = await prisma.catalogo.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
