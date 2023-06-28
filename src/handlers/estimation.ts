import { Request } from 'express-validator/src/base';
import prisma from '../db';

export const createEstimation = async (req, res) => {
  try {
    const estimation = await prisma.estimations.create({
      data: {
        ...req.body,
      },
    });
    return res.json({ estimation });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteEstim = async (req: Request, res) => {
  try {
    const deleted = await prisma.estimations.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ status: true, data: deleted });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getEstims = async (req: Request, res) => {
  try {
    const estimations = await prisma.estimations.findMany({
      where: {
        frontProjectId: req.params.id,
      },
    });
    return res.json({ estimations });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getOneEstim = async (req, res) => {
  try {
    const estimation = await prisma.estimations.findUnique({
      where: {
        frontProjectId: req.params.id,
      },
    });
    return res.json({ estimation });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
