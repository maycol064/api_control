import prisma from '../db';

export const createContractor = async (req, res) => {
  try {
    const created = await prisma.contratist.create({
      data: {
        company: req.body.company,
        sector: req.body.sector,
      },
    });
    return res.status(201).json({ data: created });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteContractor = async (req, res) => {
  try {
    const deleted = await prisma.contratist.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.status(202).json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getOneContractor = async (req, res) => {
  try {
    const contractor = await prisma.contratist.findUnique({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({ data: contractor });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getContractors = async (req, res) => {
  try {
    const contractors = await prisma.contratist.findMany({});
    return res.status(200).json({ data: contractors });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
