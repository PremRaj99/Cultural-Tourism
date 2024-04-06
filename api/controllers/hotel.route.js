import Hotel from "../models/hotel.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const addHotel = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to add Hotel."));
  }
  try {
    const user = await User.findOne({ _id: req.params.userId });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    if (!user.isPartner || user.Partner !== "Hotel Owner") {
      return next(errorHandler(403, "You are not a Hotel owner."));
    }

    const { HotelName, address, price, noOfRoom, HotelImage } = req.body;

    if (
      !HotelName ||
      !address ||
      !price ||
      !noOfRoom ||
      HotelName === "" ||
      address === ""
    ) {
      return next(errorHandler(404, "all fields are required!"));
    }

    const newHotel = new Hotel({
      HotelName,
      address,
      price,
      HotelImage,
      noOfRoom,
      user: req.params.userId,
    });
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    return next(error);
  }
};

export const getAllHotels = async (req, res, next) => {
  if (!res.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to get all Hotels."));
  }

  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 5;

    const hotels = await Hotel.find({}).skip(startIndex).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    return next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 5;

    const hotels = await Hotel.find({ address: res.params.address })
      .skip(startIndex)
      .limit(limit)
      .sort({ star: -1 });

    res.status(200).json(hotels);
  } catch (error) {
    return next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update Cab."));
  }
  try {
    const newHotels = await Hotel.findById(req.params.hotelId);

    const {
      HotelName,
      address,
      price,
      HotelImage,
      noOfRoom,
      noOfRoomBooked,
      star,
    } = req.body;

    if (HotelName || address || price || HotelImage || noOfRoom) {
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
      const updated = await Hotel.findByIdAndUpdate(
        req.params.hotelId,
        {
          $set: {
            HotelName,
            address,
            price,
            HotelImage,
            noOfRoom
          },
        },
        { new: true }
      );

      if (updated) {
        res.status(200).json(updated);
      }
    } else if (noOfRoomBooked !== null) {
      const updated = await Hotel.findByIdAndUpdate(
        req.params.hotelId,
        {
          $set: {
            $inc: { noOfRoomBooked: -noOfRoomBooked },
          },
        },
        { new: true }
      );
      if (updated) {
        res.status(200).json(updated);
      }
    }
  } catch (error) {
    return next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    if (!req.user.isAdmin || req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not allowed to delete this hotel."));
    }

    await Hotel.findByIdAndDelete(req.params.hotelId);
    res.status(200).json({ message: "Hotel has been deleted successfully." });
  } catch (error) {
    return next(error);
  }
};
