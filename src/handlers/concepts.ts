import prisma from '../db';

export const createConcept = async (req, res) => {
  try {
    const created = await prisma.concept.create({
      data: {
        name: req.body.name,
        ref: req.body.ref,
        cant: req.body.cant,
        price: req.body.price,
        total: req.body.cant * req.body.price,
        Catalogo: {
          connect: {
            id: req.body.catId,
          },
        },
      },
    });

    return res.json({ data: created });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getConcept = async (req, res) => {
  try {
    const concept = await prisma.concept.findUnique({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ data: concept });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateConcept = async (req, res) => {
  try {
    const updated = await prisma.concept.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        ref: req.body.ref,
        cant: req.body.cant,
        price: req.body.price,
        total: req.body.cant * req.body.price,
      },
    });

    return res.json({ data: updated });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteConcept = async (req, res) => {
  try {
    const deleted = await prisma.concept.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
