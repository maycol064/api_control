import prisma from '../db';

export const getFronts = async (req, res) => {
  try {
    const works = await prisma.user.findMany({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
      },
    });
    const cleanWorks = works.map((x) => `${x.id}`);
    const fronts = [];
    for (const workId of cleanWorks) {
      const front = await prisma.frontProject.findMany({
        where: {
          id: workId,
        },
      });
      fronts.push(front);
    }
    res.json({ data: fronts });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getOneFront = async (req, res) => {
  try {
    const front = await prisma.frontProject.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: front });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createFront = async (req, res) => {
  try {
    const created = await prisma.frontProject.create({
      data: {
        name: req.body.name,
        contract: req.body.contract,
        minutas: req.body.minutas,
      },
    });

    res.json({ data: created });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteFront = async (req, res) => {
  try {
    const deleted = await prisma.frontProject.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: deleted });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateFront = async (req, res) => {
  try {
    const updated = await prisma.frontProject.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        contract: req.body.contract,
        minutas: req.body.minutas,
      },
    });

    res.json({ data: updated });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const estimToFront = async (req, res) => {
  try {
    const added = await prisma.estimations.create({
      data: {
        ...req.body,
      },
    });

    res.json({ data: added });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
