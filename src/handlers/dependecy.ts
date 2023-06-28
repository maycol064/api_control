import prisma from '../db';

export const createDependency = async (req, res) => {
  try {
    const created = await prisma.dependecy.create({
      data: {
        name: req.body.name,
        sector: req.body.sector,
      },
    });

    return res.status(201).json({ data: created });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getDependency = async (req, res) => {
  try {
    const dep = await prisma.dependecy.findUnique({
      where: {
        name: req.body.name,
      },
      include: {
        work: true,
        users: true,
      },
    });

    return res.status(200).json({ data: dep });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getDependencies = async (req, res) => {
  try {
    const dep = await prisma.dependecy.findMany({});
    return res.status(200).json({ data: dep });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateDependency = async (req, res) => {
  try {
    const updated = await prisma.dependecy.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body
      },
    });
    return res.status(202).json({ data: updated });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteDependency = async (req, res) => {
  try {
    const deleted = await prisma.dependecy.delete({
      where: {
        id: req.body.id,
      },
    });

    return res.status(202).json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
