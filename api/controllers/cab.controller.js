import Cab from "../models/cab.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const addCab = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to add Cab."));
  }
  try {
    const user = await User.findOne({ _id: req.params.userId });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    if (!user.isPartner || user.Partner !== "Cab Owner") {
      return next(errorHandler(403, "You are not a cab owner."));
    }

    const { cabName, address, price, cabImage } = req.body;

    if (!cabName || !address || !price || cabName === "" || address === "") {
      return next(
        errorHandler(404, "cabName, address and price are required!")
      );
    }

    const newCab = new Cab({
      cabName,
      address,
      price,
      cabImage,
      user: req.params.userId,
    });
    const savedCab = await newCab.save();
    res.status(200).json(savedCab);
  } catch (error) {
    return next(error);
  }
};

export const getAllCabs = async (req, res, next) => {
  if (!res.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to get all cabs."));
  }

  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 5;

    const cabs = await Cab.find({}).skip(startIndex).limit(limit);
    res.status(200).json(cabs);
  } catch (error) {
    return next(error);
  }
};

export const getCab = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 5;

    const cabs = await Cab.find({ address: res.params.address })
      .skip(startIndex)
      .limit(limit)
      .sort({ star: -1 });

    res.status(200).json(cabs);
  } catch (error) {
    return next(error);
  }
};

export const updateCab = async (req, res, next) => {
  if (req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update Cab."));
  }
  try {
    const newCabs = await Cab.findById(req.params.cabId);

    const { cabName, address, price, cabImage, isAvailable, noOfTrip, star } =
      req.body;

    if (cabName || address || price || cabImage) {
      const user = await User.findById(user.params.userId);
      if (!user) {
        return next(errorHandler(404, "User not found"));
      }
      if (!user.isPartner || user.Partner === "Cab Owner") {
        return next(
          errorHandler(
            403,
            "You are not a cab owner so you are not allowed to change important creadentials."
          )
        );
      }
      const updated = await Cab.findByIdAndUpdate(
        req.params.cabId,
        {
          $set: {
            cabName,
            address,
            price,
            cabImage,
          },
        },
        { new: true }
      );

      if(updated) {
        res.status(200).json(updated);
      }
    } else if (isAvailable !== null) {
      const updated = await Cab.findByIdAndUpdate(
        req.params.cabId,
        {
          $set: {
            isAvailable,
          },
        },
        { new: true }
      );
      if(updated) {
        res.status(200).json(updated);
      }
    }
  } catch (error) {
    return next(error);
  }
};

export const deleteCab = async (req, res, next) => {
  try {
    if(!req.user.isAdmin || req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not allowed to delete this cab."));
    }

    await Cab.findByIdAndDelete(req.params.cabId);
    res.status(200).json({ message: "Cab has been deleted successfully." });
  } catch (error) {
    return next(error)
  }
}