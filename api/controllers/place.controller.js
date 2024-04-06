import Place from "../models/place.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const addPlace = async (req, res, next) => {
  const { placeName, address, price, placeImage } = req.body;

  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to add a place."));
  }
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    // if (!user.isPartner || !user.isAdmin || user.Partner !== "Guide") {
    //   return next(errorHandler(403, "You are not a guide."));
    // }
    const place = await Place.findOneAndUpdate(
      { placeName: placeName },
      {
        $set: {
          price: price,
        },
      },
      { new: true }
    );

    if (!place) {
      const newPlace = new Place({
        userId: req.params.UserId,
        placeName: placeName,
        address: address,
        price: price,
        placeImage: placeImage,
      });
      await newPlace.save();
      res.status(201).json(newPlace);
    }
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    next(error);
  }
};

export const getPlace = async (req, res, next) => {
  try {
    const startIndex = req.query.startIndex || 0;
    const limit = req.query.limit;
    const places = await Place.find({ address: req.params.address })
      .skip(startIndex)
      .limit(limit);
    res.status(200).json(places);
  } catch (error) {
    return next(error);
  }
};

export const getAllPlaces = async (req, res, next) => {
  if (!req.user.isAdmin || req.params.userId !== req.user.id) {
    return next(errorHandler(403, "You are not allowed to get all places."));
  }
  try {
    if (req.user.isAdmin) {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 5;

      const places = await Place.find({}).skip(startIndex).limit(limit);

      res.status(200).json(places);
    } else if (req.user.isPartner || req.user.Partner === "Guide") {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 5;

      const places = await Place.find({ userId: req.params.userId })
        .sort({ star: -1 })
        .skip(startIndex)
        .limit(limit);

      res.status(200).json(places);
    }
  } catch (error) {
    return next(error);
  }
};

export const updatePlace = async (req, res, next) => {
  const { placeName, address, price, placeImage } = req.body;

  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update places."));
  }
  try {
    const getPlace = await Place.findByIdAndUpdate(
      req.params.placeId,
      {
        $set: {
          placeName,
          address,
          price,
          placeImage,
        },
      },
      { new: true }
    );

    await getPlace.save();
    res.status(200).json(getPlace);
  } catch (error) {
    return next(error);
  }
};

export const deletePlace = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update places."));
  }
  try {
    const getPlace = await Place.findByIdAndDelete(req.params.placeId);

    await getPlace.save();
    res.status(200).json(getPlace);
  } catch (error) {
    return next(error);
  }
};
